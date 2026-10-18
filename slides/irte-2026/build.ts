import fs from 'node:fs/promises';
import path from 'node:path';
import { minitype, p, image, url, pt, fill, rgb, type Group, type Flow } from '@minitype/minitype';

type Slide = {id:string;title:string;displayTitle?:string;zh:string;subtitle?:string;layout:string;image?:string;images?:string[];illustration?:string;illustrationCredit?:string;credit?:string;side?:string;lines?:string[];duration:number;notes:string;sources:string[];label?:string;pronunciation?:{zh:string;pinyin:string;ja:string}[];englishTransition?:string};
const slides:Slide[]=JSON.parse(await fs.readFile('slides.json','utf8'));
const dimensions:Record<string,number[]>=JSON.parse(await fs.readFile('asset-dimensions.json','utf8'));
const W=338.6667,H=190.5;
const colors={ink:rgb(20,30,40),muted:rgb(86,101,111),accent:rgb(0,109,115)};

function text(s:string,x:number,y:number,w:number,size:number,opt:{bold?:boolean,zh?:boolean,color?:keyof typeof colors,align?:'left'|'center'|'right';href?:string}={}):Flow {
  return {type:'flow',position:'page',inlineOffset:x,blockOffset:y,inlineSize:w,blocks:[p(opt.href?[[url(opt.href,s)]]:s,{font:opt.zh?'NotoSansCJKsc-Regular':opt.bold?'NotoSans-Bold':'NotoSans-Regular',size:pt(size),lineHeight:pt(size*1.17),firstIndent:0,indent:0,hyphenation:false,align:opt.align||'left',effects:[fill(colors[opt.color||'ink'])]})]};
}
function picture(name:string,x:number,y:number,w:number,h:number):Flow {
  const [iw,ih]=dimensions[name];
  const k=Math.min(w/iw,h/ih),pw=iw*k,ph=ih*k;
  return {type:'flow',position:'page',inlineOffset:x+(w-pw)/2,blockOffset:y+(h-ph)/2,inlineSize:pw,blocks:[image(path.join('assets',name),{width:pw,height:ph})]};
}
function header(s:Slide):Flow[]{return [text(s.title,18,17,302,42,{bold:true}),text(s.zh,18,41,302,23,{zh:true,color:'accent'})];}
function illustrated(s:Slide):Flow[]{
  if(s.layout==='goal') return [
    text(s.lines![0],18,24,302,28,{bold:true}),
    text(s.title,18,70,144,58,{bold:true,color:'accent'}),
    text(s.zh,19,105,142,23,{zh:true}),
    picture(s.illustration!,163,65,157,96),
    text(s.lines![1],19,154,300,20,{color:'muted'})
  ];
  if(s.layout==='join') return [
    text(s.title,18,20,302,49,{bold:true}),
    text(s.zh,19,49,300,27,{zh:true,color:'accent'}),
    ...s.lines!.map((line,n)=>text(line,19,85+n*33,112,25,{bold:true})),
    picture(s.illustration!,139,65,181,105),
    text('github.com/stack-chan',19,161,280,21,{color:'accent'})
  ];
  if(!['statement','words','rules','future'].includes(s.layout)) throw Error(`Unsupported illustrated layout: ${s.id} (${s.layout})`);
  const flows=[...header(s),
    ...(s.lines||[]).map((line,n)=>text(line,19,81+n*34,113,s.id==='discord'&&n===0?40:26,{bold:s.layout==='words'||s.layout==='rules'||n===0,color:s.id==='discord'&&n===0?'accent':'ink'})),
    picture(s.illustration!,134,60,186,110)
  ];
  if(s.layout==='future') flows.push(text(s.label||'A direction to explore',19,159,113,15,{color:'accent'}));
  return flows;
}
function page(s:Slide,i:number):Group{
  let b:Flow[]=[];
  if(s.illustration){
    b=illustrated(s);
  }else if(s.layout==='cover'){
    b=[text(s.displayTitle||s.title,18,25,180,58,{bold:true}),text(s.zh,20,80,166,28,{zh:true,color:'accent'}),text(s.subtitle!,20,110,175,24),picture(s.image!,198,47,122,100),text('Shinya Ishikawa',20,153,180,20,{bold:true}),text('Creator of Stack-chan  ·  RTE 2026',20,166,230,15,{color:'muted'})];
  }else if(s.layout==='intro'){
    b=[picture(s.image!,18,10,302,158)];
  }else if(s.layout==='wide'){
    b=[text(s.displayTitle||s.title,18,32,132,42,{bold:true}),text(s.zh,18,85,125,23,{zh:true,color:'accent'}),picture(s.image!,151,22,169,145)];
  }else if(s.layout==='origins'){
    b=[...header(s),text('2018',18,66,136,25,{bold:true,color:'accent'}),text('2021',181,66,139,25,{bold:true,color:'accent'}),picture(s.images![0],18,85,136,81),picture(s.images![1],181,85,139,81)];
  }else if(s.layout==='photo'){
    b=[...header(s),text(s.side||'',18,88,118,26),picture(s.image!,144,61,176,105)];
  }else if(s.layout==='birth'){
    b=[text('The birth of\nStack-chan',18,25,118,42,{bold:true}),text(s.zh,18,73,118,23,{zh:true,color:'accent'}),text(s.side||'',18,99,118,20,{bold:true}),text('A battery inside.\nA robot on my palm.',18,116,118,21),text('Original post on X',18,154,120,17,{color:'accent',href:'https://x.com/meganetaaan/status/1410631124045291521'}),picture(s.image!,142,21,178,147)];
  }else if(s.layout==='portrait'){
    b=[text(s.title,18,30,190,44,{bold:true}),text(s.zh,18,59,185,23,{zh:true,color:'accent'}),text(s.side||'',18,104,180,27),picture(s.image!,212,23,108,145)];
  }else if(s.layout==='statement'){
    b=[...header(s),...(s.lines||[]).map((line,n)=>text(line,19,82+n*27,300,n===0&&s.id==='discord'?46:29,{bold:n===0&&s.id==='discord',color:n===0&&s.id==='discord'?'accent':'ink'}))];
  }else if(s.layout==='words'){
    b=[...header(s),...(s.lines||[]).map((line,n)=>text(line,19,80+n*(s.lines!.length===3?29:39),300,s.lines!.length===3?39:37,{bold:true}))];
  }else if(s.layout==='rules'){
    b=[...header(s),text(s.lines![0],19,86,300,29,{bold:true}),text(s.lines![1],19,125,300,29,{bold:true})];
  }else if(s.layout==='card'){
    b=[...header(s),text(s.side||'Open to everyone',18,89,112,25),text('stack-chan.github.io/card',18,119,112,17,{color:'accent'}),picture(s.image!,143,63,177,106)];
  }else if(s.layout==='goal'){
    b=[text(s.lines![0],18,24,302,28,{bold:true}),text(s.title,18,64,302,76,{bold:true,color:'accent'}),text(s.zh,19,105,300,28,{zh:true}),text(s.lines![1],19,154,300,20,{color:'muted'})];
  }else if(s.layout==='future'){
    b=[...header(s),text(s.lines![0],19,87,300,33,{bold:true}),text(s.lines![1],19,119,300,28),text(s.label||'A direction to explore',19,159,300,18,{color:'accent'})];
  }else if(s.layout==='join'){
    b=[text(s.title,18,20,302,49,{bold:true}),text(s.zh,19,49,300,27,{zh:true,color:'accent'}),text(s.lines![0],19,88,300,29,{bold:true}),text(s.lines![1],19,121,300,29,{bold:true}),text('github.com/stack-chan',19,161,280,21,{color:'accent'})];
  }
  const credit=[s.credit,s.illustrationCredit].filter(Boolean).join(' · ');
  if(credit&&s.layout!=='cover') b.push(text(credit,18,177,280,10,{color:'muted'}));
  b.push(text(String(i+1).padStart(2,'0'),309,177,12,10,{color:'muted',align:'right'}));
  return {body:b};
}

await fs.mkdir('output',{recursive:true});await fs.mkdir('build',{recursive:true});
try { await fs.access('fonts/SourceHanSerifJP-Regular.otf'); } catch { await fs.copyFile('node_modules/@minitype/minitype/fonts/SourceHanSerifJP-Regular.otf','fonts/SourceHanSerifJP-Regular.otf'); }
const doc=minitype(slides.map(page),{size:{width:W,height:H},padding:0,writingMode:'horizontal',block:{paragraph:{font:'NotoSans-Regular',size:pt(24),firstIndent:0,hyphenation:false}},gaps:[]},{fontDir:'fonts',disableDefaultTransformers:true,outline:false,metadata:{title:'Growing Together: Stack-chan and Its Open-Source Community',author:'Shinya Ishikawa',subject:'RTE 2026 · Illustrated edition · English / 简体中文'}});
await doc.save('output/RTE2026-Growing-Together-Illustrated.pdf');
await fs.writeFile('build/layout.json',JSON.stringify(await doc.getLayout(),null,2));
await fs.writeFile('build/diagnostics.json',JSON.stringify(await doc.getDiagnostics(),null,2));
const count=await doc.getPageCount();if(count!==slides.length) throw Error(`Expected ${slides.length} pages; got ${count}`);

let seconds=0;
const time=(s:number)=>`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
const englishWordCount=slides.filter(s=>s.id!=='selfintro'&&s.id!=='cover').reduce((n,s)=>n+s.notes.split(/\s+/).length,0)+(slides.find(s=>s.id==='selfintro')?.englishTransition?.split(/\s+/).length||0);
let script='GROWING TOGETHER\nStack-chan and Its Open-Source Community\nShinya Ishikawa\nRTE 2026 · Revised edition · October 11, 2026\n\nREHEARSAL GUIDE\n22 slides. Planning budget: 19:20 plus 0:40 margin, including a 0:45 Chinese self-introduction. Approximately '+englishWordCount+' English spoken words, plus the Chinese introduction. These are planning times, not measured delivery times. Rehearse aloud and adjust pauses. The PDF is static and requires no simulator, network, or live demonstration. Short Chinese headings support the audience. Only the self-introduction is spoken in Chinese; the main talk is in English.\n\n';
slides.forEach((s,i)=>{
 const start=seconds;seconds+=s.duration;
 script+=`${String(i+1).padStart(2,'0')}  ${s.title}\n${s.zh}\nTarget ${time(start)}–${time(seconds)}\n\n`;
 if(s.pronunciation){
  script+='中国語の自己紹介（約45秒の練習枠）\n各行は「中国語 → 声調付きピンイン → 日本語訳」の順です。本番で読むのは中国語だけです。\n\n名前は名刺どおり Shinya Ishikawa と表記しています。名刺に漢字の氏名はないため、漢字名や中国語読みは補っていません。名前は普段の日本語の発音で、Stack-chan は「スタックチャン」と読んでください。角括弧の部分はピンインではありません。\n\n';
  s.pronunciation.forEach((line,j)=>{script+=`${j+1}. ${line.zh}\n${line.pinyin}\n${line.ja}\n\n`;});
  script+='発音メモ（読み上げない）\nピンインの母音の上の記号は声調です。第1声 ā は高く平ら、第2声 á は上がる、第3声 ǎ は低く沈む、第4声 à は短く下がります。記号のない de は軽く短く発音します。カタカナでは音と声調を十分に表せないので、ピンインを基本に練習してください。句点でひと呼吸置き、名前と Stack-chan はいつもの発音で大丈夫です。\n\nEnglish transition (spoken after the Chinese introduction)\n'+s.englishTransition+'\n\n';
 }else script+=s.notes+'\n\n';
 script+=`Sources and image credits (not spoken)\n${s.credit?s.credit+'\n':''}${s.sources.join('\n')}\n\n`;
});
await fs.writeFile('output/RTE2026-Growing-Together-Illustrated-Speaker-Script.txt',script);
console.log(`Created ${count} pages. Planned duration ${time(seconds)}. English words ${englishWordCount}. Script written.`);
