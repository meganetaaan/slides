import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { parseGIF, decompressFrames } from 'gifuct-js';
import { readFile,writeFile,mkdir,access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { createServer } from './serve.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'verification');await mkdir(out,{recursive:true});
const deck=JSON.parse(await readFile(path.join(root,'source/deck.json'),'utf8'));
const binaries=[process.env.CHROME_PATH,'C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','/usr/bin/chromium','/usr/bin/chromium-browser','/usr/bin/google-chrome'].filter(Boolean);
let executablePath;for(const p of binaries){try{await access(p);executablePath=p;break;}catch{}}
if(!executablePath)throw Error('Set CHROME_PATH to an installed Chromium browser.');
const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const url=`http://127.0.0.1:${server.address().port}/`;
const browser=await chromium.launch({executablePath,headless:true,args:['--no-proxy-server','--disable-background-networking','--disable-component-update','--disable-sync']});
const context=await browser.newContext({viewport:{width:1600,height:900},deviceScaleFactor:1,hasTouch:true});
const external=[],failures=[],errors=[];
await context.route('**/*',route=>{
  const u=new URL(route.request().url());
  if(u.hostname!=='127.0.0.1'){external.push(u.origin);return route.abort();}
  return route.continue();
});
context.on('page',p=>{p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)failures.push({path:new URL(r.url()).pathname,status:r.status()});});});
const page=await context.newPage();
const animations=[],slides=[];
const png=buf=>PNG.sync.read(buf);
function difference(a,b){let count=0;for(let i=0;i<a.data.length;i+=4)if(a.data[i]!==b.data[i]||a.data[i+1]!==b.data[i+1]||a.data[i+2]!==b.data[i+2])count++;return count;}
try{
  await page.goto(url);await page.waitForFunction(()=>window.Reveal?.isReady());await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('.slides>section').count(),28);
  await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>Reveal.getIndices().h===1);
  await page.keyboard.press('Space');await page.waitForFunction(()=>Reveal.getIndices().h===2);
  const sheet=new PNG({width:1600,height:7*225});
  for(const s of deck.slides){
    await page.evaluate(i=>Reveal.slide(i),s.index-1);
    await page.waitForFunction(()=>[...document.querySelectorAll('.present img')].every(i=>i.complete&&i.naturalWidth>0));
    assert.equal(await page.locator('.slides>section.present').getAttribute('id'),s.id);
    assert.equal(await page.locator('.present aside.notes').isVisible(),false);
    for(const g of s.animations){
      const buffer=await readFile(path.join(root,'dist',g.src));
      assert.equal(createHash('sha256').update(buffer).digest('hex'),g.sha256);
      const parsed=parseGIF(buffer);const frames=decompressFrames(parsed,true);
      const hashes=new Set(frames.map(f=>createHash('sha256').update(f.patch).digest('hex')));
      assert.ok(frames.length>1&&hashes.size>1,'GIF must contain different frames');
      const image=page.locator(`.present img.animation[src="${g.src}"]`);
      const box=await image.boundingBox();
      assert.ok(Math.abs(box.x-g.x*1600)<0.15&&Math.abs(box.y-g.y*900)<0.15);
      assert.ok(Math.abs(box.width-g.width*1600)<0.15&&Math.abs(box.height-g.height*900)<0.15);
      const a=png(await image.screenshot());await page.waitForTimeout(460);const b=png(await image.screenshot());
      const changedPixels=difference(a,b);assert.ok(changedPixels>20,'GIF must visibly animate in browser');
      animations.push({slide:s.index,id:g.id,frames:frames.length,distinctPatches:hashes.size,durationMs:frames.reduce((n,f)=>n+f.delay,0),changedPixels});
    }
    const shot=await page.screenshot({path:path.join(out,`slide-${String(s.index).padStart(2,'0')}.png`)});
    const rendered=png(shot),reference=png(await readFile(path.join(root,'dist',s.background)));
    let compared=0,different=0;
    for(let y=0;y<900;y++)for(let x=0;x<1600;x++){
      if(s.animations.some(g=>x>=g.x*1600-2&&x<=(g.x+g.width)*1600+2&&y>=g.y*900-2&&y<=(g.y+g.height)*900+2))continue;
      compared++;const p=(y*1600+x)*4;
      if(Math.max(...[0,1,2].map(c=>Math.abs(rendered.data[p+c]-reference.data[p+c])))>2)different++;
    }
    if(different/compared>=0.001)console.log(await page.evaluate(()=>['html','body','.reveal','.slides','.present','.present .slide-art'].map(q=>{const e=document.querySelector(q),r=e.getBoundingClientRect(),s=getComputedStyle(e);return {q,rect:{x:r.x,y:r.y,w:r.width,h:r.height},transform:s.transform,padding:s.padding,margin:s.margin,top:s.top,height:s.height};})));
    assert.ok(different/compared<0.001,`Artwork mismatch on ${s.id}: ${different/compared}`);
    for(let y=0;y<225;y++)for(let x=0;x<400;x++){
      const a=((Math.floor((s.index-1)/4)*225+y)*1600+((s.index-1)%4)*400+x)*4;
      const b=((y*4)*1600+x*4)*4; rendered.data.copy(sheet.data,a,b,b+4);
    }
    slides.push({index:s.index,id:s.id,artworkComparedPixels:compared,artworkDifferentPixels:different});
  }
  await writeFile(path.join(out,'contact-sheet.png'),PNG.sync.write(sheet));
  await page.evaluate(()=>Reveal.slide(22));
  const popupPromise=context.waitForEvent('page');await page.keyboard.press('s');const notes=await popupPromise;
  await notes.waitForSelector('.speaker-text');
  assert.match(await notes.locator('.speaker-text').innerText(),/READ ALOUD/);
  assert.ok(await notes.locator('.speaker-text strong').count()>0);
  await page.evaluate(()=>Reveal.slide(24));
  await notes.waitForFunction(()=>document.querySelector('.speaker-text')?.textContent.includes('A shared shape'));
  assert.match(await notes.locator('.speaker-text').innerText(),/8 seconds/);
  await notes.waitForFunction(()=>[...document.querySelectorAll('iframe')].every(f=>f.contentWindow?.Reveal?.isReady()&&[...f.contentDocument.querySelectorAll('.present img')].every(i=>i.complete&&i.naturalWidth>0)));
  await notes.evaluate(()=>document.fonts.ready);
  await notes.screenshot({path:path.join(out,'speaker-notes.png')});
  await notes.close();
  await page.setViewportSize({width:390,height:844});await page.evaluate(()=>Reveal.layout());
  const bounds=await page.locator('.present .slide-art').boundingBox();
  assert.ok(bounds.x>=-1&&bounds.y>=-1&&bounds.x+bounds.width<=391&&bounds.y+bounds.height<=845);
  await page.screenshot({path:path.join(out,'mobile-390.png')});
  const session=await context.newCDPSession(page);
  await session.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:320,y:420}]});
  await session.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:100,y:420}]});
  await session.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await page.waitForFunction(()=>Reveal.getIndices().h===25);
  await page.evaluate(()=>Reveal.slide(0));
  await page.reload();await page.waitForFunction(()=>window.Reveal?.isReady());
  assert.ok(await page.locator('.present .slide-art').evaluate(i=>i.complete&&i.naturalWidth===1600));
  assert.deepEqual(external,[],'No external requests are allowed');assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
  await writeFile(path.join(out,'report.json'),JSON.stringify({passed:true,revision:deck.revision,physicalSlides:28,offlineTest:'All non-loopback HTTP requests blocked at browser routing; new context and local HTTP reload succeeded.',externalRequests:external,httpFailures:failures,pageErrors:errors,keyboardNavigation:true,touchNavigation:true,notesPopup:true,notesBold:true,notesStageCues:true,mobileViewport:{width:390,height:844},slides,animations},null,2));
  console.log(`PASS: 28 slides, ${animations.length} animated GIFs, speaker notes, mobile layout, external network blocked.`);
}finally{await context.close();await browser.close();await new Promise(resolve=>server.close(resolve));}
