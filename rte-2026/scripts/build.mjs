import { readFile, writeFile, mkdir, cp, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { zipSync } from 'fflate';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.join(root,'source'), dist=path.join(root,'dist');
const deck=JSON.parse(await readFile(path.join(source,'deck.json'),'utf8'));
if(!deck.revision || deck.slides.length!==deck.physicalSlides) throw Error('Slide count or source revision missing');
const ids=deck.slides.map(s=>s.id);
if(new Set(ids).size!==ids.length || deck.slides.some((s,i)=>s.index!==i+1 || s.skipped)) throw Error('Invalid active slide order');
if((deck.skippedSlideIds||[]).some(id=>ids.includes(id))) throw Error('Skipped source slide was reintroduced');
await rm(dist,{recursive:true,force:true}); await mkdir(dist,{recursive:true});
const assetFiles=new Set(deck.slides.flatMap(s=>[s.background,...s.animations.map(a=>a.src)]));
for(const relative of assetFiles){
  if(!relative.startsWith('assets/')||relative.split('/').includes('..'))throw Error('Invalid local asset path');
  await mkdir(path.dirname(path.join(dist,relative)),{recursive:true});
  await cp(path.join(source,relative),path.join(dist,relative));
}
await mkdir(path.join(dist,'vendor'),{recursive:true});
for(const name of ['reveal.js','reveal.css','reset.css']) await cp(path.join(root,'node_modules/reveal.js/dist',name),path.join(dist,'vendor',name));
await cp(path.join(root,'node_modules/reveal.js/plugin/notes/notes.js'),path.join(dist,'vendor/notes.js'));
await cp(path.join(root,'node_modules/reveal.js/LICENSE'),path.join(dist,'vendor/reveal-LICENSE'));
let fonts='';
const usedCodePoints=new Set(Array.from(deck.slides.flatMap(s=>[s.title,...s.notesRuns.map(r=>r.text)]).join('\n'),c=>c.codePointAt(0)));
for(let c=32;c<127;c++)usedCodePoints.add(c);
for(let c=0x2000;c<0x2070;c++)usedCodePoints.add(c);
function neededFontBlock(block){
  const ranges=block.match(/unicode-range:\s*([^;]+)/i)?.[1];
  if(!ranges)return true;
  return ranges.split(',').some(range=>{
    const m=range.trim().match(/^U\+([0-9a-f?]+)(?:-([0-9a-f]+))?$/i);
    if(!m)throw Error('Unsupported font Unicode range');
    const lo=parseInt(m[1].replace(/\?/g,'0'),16),hi=parseInt(m[2]||m[1].replace(/\?/g,'f'),16);
    return [...usedCodePoints].some(c=>c>=lo&&c<=hi);
  });
}
await mkdir(path.join(dist,'fonts/files'),{recursive:true});
for(const [pkg,weights] of [['noto-sans',[400,700]],['noto-sans-sc',[400,700]]]) {
  for(const weight of weights){
    const css=await readFile(path.join(root,`node_modules/@fontsource/${pkg}/${pkg==='noto-sans'?'latin-':''}${weight}.css`),'utf8');
    const selected=[...css.matchAll(/@font-face\s*\{[^}]+\}/g)].map(m=>m[0]).filter(neededFontBlock).join('\n').replace(/, url\([^)]*\.woff\) format\('woff'\)/g,'');
    fonts+=selected+'\n';
    for(const m of selected.matchAll(/url\(\.\/files\/([^)]*)\)/g)) {
      const p=path.join(root,`node_modules/@fontsource/${pkg}/files`,m[1]);
      if(m[1].startsWith(pkg+'-')) await cp(p,path.join(dist,'fonts/files',m[1]));
    }
  }
  await cp(path.join(root,`node_modules/@fontsource/${pkg}/LICENSE`),path.join(dist,`fonts/${pkg}-LICENSE`));
}
await writeFile(path.join(dist,'fonts/fonts.css'),fonts);
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slides=deck.slides.map(s=>`<section id="${s.id}" aria-label="${escape(s.title)}"><img class="slide-art" src="${s.background}" alt="${escape(s.title)}" width="1600" height="900">${s.animations.map(g=>`<img class="animation" src="${g.src}" alt="${escape(g.id)}" style="left:${g.x*100}%;top:${g.y*100}%;width:${g.width*100}%;height:${g.height*100}%">`).join('')}<aside class="notes">${s.notesHtml}</aside></section>`).join('\n');
const html=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><meta name="source-revision" content="${escape(deck.revision)}"><title>${escape(deck.title)}</title><link rel="icon" href="data:,"><link rel="stylesheet" href="vendor/reset.css"><link rel="stylesheet" href="vendor/reveal.css"><link rel="stylesheet" href="fonts/fonts.css"><link rel="stylesheet" href="deck.css"></head><body><div class="reveal"><div class="slides">${slides}</div></div><script src="vendor/reveal.js"></script><script src="vendor/notes.js"></script><script src="deck.js"></script></body></html>`;
await writeFile(path.join(dist,'index.html'),html);
await cp(path.join(source,'deck.css'),path.join(dist,'deck.css'));
await cp(path.join(source,'deck.js'),path.join(dist,'deck.js'));
await cp(path.join(source,'deck.json'),path.join(dist,'deck.json'));
await cp(path.join(root,'CREDITS.md'),path.join(dist,'CREDITS.md'));
await cp(path.join(root,'LAUNCH.md'),path.join(dist,'README.md'));
await cp(path.join(root,'evidence'),path.join(dist,'evidence'),{recursive:true});
await cp(path.join(root,'../LICENSE'),path.join(dist,'LICENSE'));
await writeFile(path.join(dist,'.nojekyll'),'');
const files={};
async function collect(dir,prefix=''){
  for(const e of await readdir(dir,{withFileTypes:true})){
    const name=prefix+e.name;
    if(e.isDirectory())await collect(path.join(dir,e.name),name+'/');
    else files[name]=new Uint8Array(await readFile(path.join(dir,e.name)));
  }
}
await collect(dist);
for(const name of Object.keys(files))if(name.startsWith('evidence/')||name==='deck.json')delete files[name];
await writeFile(path.join(root,'rte-2026-offline.zip'),zipSync(files,{level:6}));
console.log(`Built ${deck.slides.length} slides, ${deck.slides.flatMap(s=>s.animations).length} animated GIFs and ZIP.`);
