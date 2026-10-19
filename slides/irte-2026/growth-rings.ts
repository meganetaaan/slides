import { image, type Flow } from '@minitype/minitype';

export const sections = [
  { title: 'A Personal Project', zh: '个人创作' },
  { title: 'Other Makers', zh: '创客的参与' },
  { title: 'More Ways to Create', zh: '更多创作方式' },
  { title: 'New Ways In', zh: '新的参与入口' },
  { title: 'What Comes Next', zh: '接下来的制作与参与' },
] as const;

export const ringArtwork = [
  'growth-rings/1-personal.png',
  'growth-rings/2-makers.png',
  'growth-rings/3-expression.png',
  'growth-rings/4-entrances.png',
  'growth-rings/5-future.png',
] as const;

// Only place the reference-based artwork. Do not draw substitutes for its
// characters, tools, clothes, rings, yellow arcs or footsteps.
export function growthRings(stage:number,cx:number,cy:number,scale=1):Flow[]{
  if(!Number.isInteger(stage)||stage<1||stage>5) throw Error(`Invalid growth-ring stage: ${stage}`);
  const size=126*scale;
  return [{type:'flow',position:'page',inlineOffset:cx-size/2,
    blockOffset:cy-size/2,inlineSize:size,
    blocks:[image(`assets/${ringArtwork[stage-1]}`,{width:size,height:size})]}];
}
