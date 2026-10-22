import {chromium} from 'playwright';
import {PNG} from 'pngjs';
import {readFile,writeFile,access} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const deck=JSON.parse(await readFile(path.join(root,'source/deck.json'),'utf8'));
let executablePath;
for(const p of [process.env.CHROME_PATH,'C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','/usr/bin/chromium','/usr/bin/google-chrome'].filter(Boolean))try{await access(p);executablePath=p;break;}catch{}
const browser=await chromium.launch({executablePath,headless:true,args:['--no-proxy-server','--disable-background-networking','--disable-component-update','--disable-sync']});
const context=await browser.newContext({viewport:{width:1600,height:900},deviceScaleFactor:1});
const external=[];const page=await context.newPage();
await context.route('**/*',route=>{const u=new URL(route.request().url());if(!['file:','data:','about:'].includes(u.protocol)){external.push(u.origin);return route.abort();}return route.continue();});
const animations=[];
try{
  await page.goto(pathToFileURL(path.join(process.env.DECK_DIR||path.join(root,'dist'),'index.html')).href);
  await page.waitForFunction(()=>window.Reveal?.isReady());await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('.slides>section').count(),27);
  for(const s of deck.slides){
    await page.evaluate(i=>Reveal.slide(i),s.index-1);
    await page.waitForFunction(()=>[...document.querySelectorAll('.present img')].every(i=>i.complete&&i.naturalWidth>0));
    assert.equal(await page.locator('.present aside.notes').isVisible(),false);
    for(const g of s.animations){
      const image=page.locator(`.present img.animation[src="${g.src}"]`);
      const a=PNG.sync.read(await image.screenshot());await page.waitForTimeout(460);
      const b=PNG.sync.read(await image.screenshot());let changed=0;
      for(let i=0;i<a.data.length;i+=4)if(a.data[i]!==b.data[i]||a.data[i+1]!==b.data[i+1]||a.data[i+2]!==b.data[i+2])changed++;
      assert.ok(changed>20);animations.push({id:g.id,changedPixels:changed});
    }
  }
  await page.evaluate(()=>Reveal.slide(0));await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>Reveal.getIndices().h===1);
  await page.screenshot({path:path.join(root,'verification/file-direct.png')});
  let speakerNotes=false,notesRequirement='';
  try{
    const promise=context.waitForEvent('page',{timeout:5000});await page.keyboard.press('s');const notes=await promise;
    await notes.waitForSelector('.speaker-text',{timeout:6000});
    assert.equal(await notes.locator('.speaker-text').textContent(),deck.slides[1].notesRuns.map(r=>r.text).join(''));
    speakerNotes=true;await notes.close();
  }catch{notesRequirement='Use a local HTTP server for speaker notes; file protocol did not complete the notes handshake in Chrome.';}
  assert.deepEqual(external,[]);
  const report={revision:deck.revision,fileProtocolSlideshow:true,physicalSlides:27,allImagesLoaded:true,keyboardNavigation:true,animatedGifs:animations,speakerNotes,notesRequirement,externalRequests:external};
  await writeFile(path.join(root,'verification/file-report.json'),JSON.stringify(report,null,2));
  console.log(JSON.stringify(report));
}finally{await context.close();await browser.close();}
