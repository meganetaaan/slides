import { readFile, writeFile, mkdir, cp, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { zipSync } from 'fflate';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.join(root,'source'), dist=path.join(root,'dist');
const deck=JSON.parse(await readFile(path.join(source,'deck.json'),'utf8'));
if(deck.slides.length!==28 || deck.revision!=='YOwu0o0AOliVxA') throw Error('Unexpected source deck');
await rm(dist,{recursive:true,force:true}); await mkdir(dist,{recursive:true});
await cp(path.join(source,'assets'),path.join(dist,'assets'),{recursive:true});
await mkdir(path.join(dist,'vendor'),{recursive:true});
for(const name of ['reveal.js','reveal.css','reset.css']) await cp(path.join(root,'node_modules/reveal.js/dist',name),path.join(dist,'vendor',name));
await cp(path.join(root,'node_modules/reveal.js/plugin/notes/notes.js'),path.join(dist,'vendor/notes.js'));
await cp(path.join(root,'node_modules/reveal.js/LICENSE'),path.join(dist,'vendor/reveal-LICENSE'));
let fonts='';
await mkdir(path.join(dist,'fonts/files'),{recursive:true});
for(const [pkg,weights] of [['noto-sans',[400,700]],['noto-sans-sc',[400,700]]]) {
  for(const weight of weights){
    const css=await readFile(path.join(root,`node_modules/@fontsource/${pkg}/${pkg==='noto-sans'?'latin-':''}${weight}.css`),'utf8');
    fonts+=css.replace(/, url\([^)]*\.woff\) format\('woff'\)/g,'');
    for(const m of fonts.matchAll(/url\(\.\/files\/([^)]*)\)/g)) {
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
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><title>${escape(deck.title)}</title><link rel="icon" href="data:,"><link rel="stylesheet" href="vendor/reset.css"><link rel="stylesheet" href="vendor/reveal.css"><link rel="stylesheet" href="fonts/fonts.css"><link rel="stylesheet" href="deck.css"></head><body><div class="reveal"><div class="slides">${slides}</div></div><script src="vendor/reveal.js"></script><script src="vendor/notes.js"></script><script src="deck.js"></script></body></html>`;
await writeFile(path.join(dist,'index.html'),html);
await cp(path.join(source,'deck.css'),path.join(dist,'deck.css'));
await cp(path.join(source,'deck.js'),path.join(dist,'deck.js'));
await cp(path.join(source,'deck.json'),path.join(dist,'deck.json'));
for(const name of ['README.md','CREDITS.md'])await cp(path.join(root,name),path.join(dist,name));
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
await writeFile(path.join(root,'rte-2026-offline.zip'),zipSync(files,{level:6}));
console.log(`Built ${deck.slides.length} slides, ${deck.slides.flatMap(s=>s.animations).length} animated GIFs and ZIP.`);
