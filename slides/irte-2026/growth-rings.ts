import { ellipse, rect, fill, stroke, rgb, type Flow, type Effect } from '@minitype/minitype';

export const sections = [
  { title: 'A Personal Project', zh: '个人创作' },
  { title: 'Other Makers', zh: '创客的参与' },
  { title: 'More Ways to Create', zh: '更多创作方式' },
  { title: 'New Ways In', zh: '新的参与入口' },
  { title: 'What Comes Next', zh: '接下来的制作与参与' },
] as const;

// These fixed radii describe overlapping ways to take part, not population,
// elapsed time, maturity, or a causal sequence. The personal-making core stays.
export const ringRadii = [19, 27, 35, 43, 51] as const;
const ink = rgb(20, 30, 40), past = rgb(174, 180, 183);
const yellow = rgb(240, 180, 0), white = rgb(255, 255, 255);

function shape(x:number,y:number,w:number,h:number,round:boolean,effects:Effect[]):Flow {
  return {type:'flow',position:'page',inlineOffset:x,blockOffset:y,inlineSize:w,
    blocks:[round ? ellipse(w,h,{background:effects}) : rect(w,h,{background:effects,borderRadius:0.7})]};
}

export function growthRings(stage:number,cx:number,cy:number,scale=1):Flow[]{
  if(!Number.isInteger(stage)||stage<1||stage>5) throw Error(`Invalid growth-ring stage: ${stage}`);
  const out:Flow[]=[];
  for(let i=0;i<stage;i++){
    const r=ringRadii[i]*scale, current=i===stage-1;
    const color=i===0 ? yellow : current ? ink : past;
    if(i===4){
      // Only the future circumference is dotted, including in the small marker.
      const dot=Math.max(0.18,0.55*scale);
      for(let k=0;k<72;k++){
        const a=k*2*Math.PI/72;
        out.push(shape(cx+r*Math.cos(a)-dot,cy+r*Math.sin(a)-dot,2*dot,2*dot,true,[fill(ink)]));
      }
    }else{
      const width=Math.max(0.14,(current?1.05:0.65)*scale);
      out.push(shape(cx-r,cy-r,2*r,2*r,true,[stroke(color,width)]));
    }
  }
  // A yellow current-position accent; past circles remain visible underneath.
  const r=ringRadii[stage-1]*scale, dot=Math.max(0.45,1.7*scale);
  const a=-Math.PI/4;
  out.push(shape(cx+r*Math.cos(a)-dot,cy+r*Math.sin(a)-dot,2*dot,2*dot,true,[fill(yellow)]));

  // An editable vector robot keeps personal making at the center at every stage.
  const s=scale, line=Math.max(0.14,0.65*s);
  out.push(shape(cx-8*s,cy-10*s,16*s,14*s,false,[stroke(ink,line),fill(white)]));
  out.push(shape(cx-6*s,cy-8*s,12*s,9*s,false,[stroke(ink,line)]));
  out.push(shape(cx-10*s,cy-7*s,2*s,7*s,false,[stroke(ink,line)]));
  out.push(shape(cx+8*s,cy-7*s,2*s,7*s,false,[stroke(ink,line)]));
  out.push(shape(cx-4*s,cy+4*s,8*s,3*s,false,[stroke(ink,line),fill(white)]));
  for(const x of [-2.4,2.4]) out.push(shape(cx+(x-0.65)*s,cy-5.7*s,1.3*s,1.3*s,true,[fill(ink)]));
  out.push(shape(cx-1.8*s,cy-2.2*s,3.6*s,0.7*s,false,[fill(ink)]));
  return out;
}
