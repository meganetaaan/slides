const fs = require('node:fs');
const path = require('node:path');
const PDFDocument = require('pdfkit');

const root = __dirname;
const plain = fs.readFileSync(path.join(root, 'output/RTE2026-Growing-Together-Rings-Speaker-Script.txt'), 'utf8');
const markdown = fs.readFileSync(path.join(root, 'output/Speaker-Script-Emphasis.md'), 'utf8');
if (markdown.replaceAll('**', '') !== plain) throw Error('Emphasized script changed the original text');
const output = path.join(root, 'output/RTE2026-Speaker-Script-Emphasis.pdf');
const doc = new PDFDocument({size:'A4',margin:48,bufferPages:true,info:{
  Title:'iRTE 2026 — Speaker script with sentence stress',
  Author:'Shinya Ishikawa',
  Subject:'Original 22-slide script with selective bold sentence stress'
}});
doc.registerFont('regular',path.join(root,'fonts/NotoSans-Regular.ttf'));
doc.registerFont('bold',path.join(root,'fonts/NotoSans-Bold.ttf'));
doc.registerFont('cjk',path.join(root,'fonts/NotoSansCJKsc-Regular.otf'));
doc.pipe(fs.createWriteStream(output));
const ink='#141e28',muted='#56656f',accent='#006d73',red='#b31f19';
const hasCjk=s=>/[\u3000-\u9fff\uf900-\ufaff]/u.test(s);

function textLine(line,{size=11,color=ink,bold=false}={}){
  doc.font(hasCjk(line)?'cjk':bold?'bold':'regular').fontSize(size).fillColor(color)
    .text(line,{lineGap:3,paragraphGap:3});
}
function spokenEnglish(line){
  const pieces=line.split('**');
  if(pieces.length%2!==1)throw Error('Unbalanced emphasis markup');
  let plain='',offset=0;
  const styles=pieces.map((text,index)=>{
    const part={start:offset,end:offset+text.length,bold:index%2===1};
    offset=part.end;plain+=text;return part;
  });
  const fragments=(start,end)=>styles.flatMap(s=>{
    const a=Math.max(start,s.start),b=Math.min(end,s.end);
    return a<b?[{text:plain.slice(a,b),bold:s.bold}]:[];
  });
  const width=parts=>parts.reduce((n,p)=>n+doc.font(p.bold?'bold':'regular').fontSize(16).widthOfString(p.text),0);
  const left=48,right=doc.page.width-48,lineHeight=26.5;
  let x=left,y=doc.y,pending=[];
  function nextLine(){
    x=left;y+=lineHeight;
    if(y+lineHeight>doc.page.height-48){doc.addPage();y=48;}
  }
  function draw(parts){
    for(const p of parts){
      doc.font(p.bold?'bold':'regular').fontSize(16).fillColor(ink)
        .text(p.text,x,y,{lineBreak:false});
      x+=doc.widthOfString(p.text);
    }
  }
  // Wrap complete words, including their punctuation, before drawing runs.
  // This prevents a period from being stranded after a bold final word.
  for(const token of plain.matchAll(/\s+|\S+/g)){
    const parts=fragments(token.index,token.index+token[0].length);
    if(/^\s+$/.test(token[0])){pending=parts;continue;}
    if(x>left&&x+width(pending)+width(parts)>right)nextLine();
    if(x>left)draw(pending);
    draw(parts);pending=[];
  }
  doc.x=left;doc.y=y+lineHeight+5;
}

const matcher=/^(?:SECTION [1-5]  [^\n]+\n\n)?\d{2}  [^\n]+\n/gm;
const matches=[...markdown.matchAll(matcher)];
if(matches.length!==22)throw Error('Expected all 22 script sections');
for(const line of markdown.slice(0,matches[0].index).split('\n')){
  if(!line){doc.moveDown(.3);continue;}
  textLine(line,{size:line==='GROWING TOGETHER'?23:line==='REHEARSAL GUIDE'?14:11,
    color:line==='REHEARSAL GUIDE'?accent:muted,bold:line==='GROWING TOGETHER'||line==='REHEARSAL GUIDE'});
}
for(let i=0;i<matches.length;i++){
  doc.addPage();
  let mode='reference';
  const chunk=markdown.slice(matches[i].index,matches[i+1]?.index??markdown.length);
  for(const line of chunk.split('\n')){
    if(!line){doc.moveDown(.35);continue;}
    if(line.startsWith('[READ ALOUD — ENGLISH'))mode='english';
    else if(line==='[READ ALOUD — CHINESE]')mode='chinese';
    else if(line.startsWith('[STAGE DIRECTION'))mode='stage';
    else if(line==='[END OF SPOKEN TEXT]'||line.startsWith('[REFERENCE ONLY'))mode='reference';
    if(/^\d{2}  /.test(line))textLine(line,{size:20,bold:true});
    else if(line.startsWith('SECTION '))textLine(line,{size:11,color:accent,bold:true});
    else if(line.startsWith('[STAGE DIRECTION'))textLine(line,{size:10,color:muted,bold:true});
    else if(line.startsWith('[READ ALOUD'))textLine(line,{size:10,color:accent,bold:true});
    else if(line==='[END OF SPOKEN TEXT]')textLine(line,{size:10,color:red,bold:true});
    else if(mode==='english')spokenEnglish(line);
    else if(mode==='chinese')textLine(line,{size:16});
    else textLine(line,{size:line.startsWith('Target ')?10:10.5,color:muted});
  }
}
const pages=doc.bufferedPageRange().count;
doc.end();
console.log(JSON.stringify({output,pages,originalScriptTextPreserved:true}));
