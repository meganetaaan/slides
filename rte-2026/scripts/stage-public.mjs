import {readFile,writeFile,mkdir,rm,cp,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const repository=path.resolve(root,'..');
const dist=path.join(root,'dist');
const output=path.join(repository,'.pages-rte');
const deck=JSON.parse(await readFile(path.join(root,'source/deck.json'),'utf8'));
assert.equal(deck.physicalSlides,27);
assert.equal(deck.slides.flatMap(s=>s.animations).length,6);
assert.ok(!deck.slides.some(s=>s.id==='p16'));
assert.deepEqual(JSON.parse(await readFile(path.join(dist,'deck.json'),'utf8')),deck);
const html=await readFile(path.join(dist,'index.html'),'utf8');
assert.equal((html.match(/<section\s/g)||[]).length,27);
assert.equal((html.match(/class="animation"/g)||[]).length,6);
assert.ok(html.includes(`name="source-revision" content="${deck.revision}"`));
assert.ok(!html.includes('<section id="p16"'));
const forbidden=/googleusercontent|oaiusercontent|slides-images-rt|docs\.google\.com\/presentation|[A-Z]:[\\/]Users[\\/]|(?:sk-proj-|ghp_|gho_)[A-Za-z0-9_]{20}/i;
assert.ok(!forbidden.test(html),'Private source reference in public HTML');
for(const s of deck.slides){
  for(const asset of [{src:s.background,sha256:s.backgroundSha256},...s.animations]){
    assert.ok(asset.src.startsWith('assets/')&&!asset.src.split('/').includes('..'));
    assert.equal(createHash('sha256').update(await readFile(path.join(dist,asset.src))).digest('hex'),asset.sha256);
  }
}
// This dedicated generated folder is the only deletion target.
assert.equal(path.dirname(output),repository);
assert.equal(path.basename(output),'.pages-rte');
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
for(const name of ['index.html','deck.css','deck.js','README.md','CREDITS.md','LICENSE','.nojekyll'])await cp(path.join(dist,name),path.join(output,name));
for(const dir of ['assets','fonts','vendor'])await cp(path.join(dist,dir),path.join(output,dir),{recursive:true});
const files=[];
async function inspect(dir,prefix=''){
  for(const entry of await readdir(dir,{withFileTypes:true})){
    const relative=prefix+entry.name,target=path.join(dir,entry.name);
    if(entry.isDirectory())await inspect(target,relative+'/');
    else{
      assert.ok(!relative.startsWith('evidence/')&&!relative.endsWith('.json'));
      if(/\.(?:html|css|js|md|txt)$/.test(relative))assert.ok(!forbidden.test(await readFile(target,'utf8')),relative);
      files.push(relative);
    }
  }
}
await inspect(output);
console.log(JSON.stringify({revision:deck.revision,slides:27,animatedGifs:6,publicFiles:files.length,diagnosticFilesPublished:false,privateSourceReferences:false}));
