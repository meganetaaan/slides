export type EmphasisSpan = {startIndex:number;endIndex:number;text:string};

// Use exact, unambiguous substrings. Indices are UTF-16, as used by Slides.
export function emphasisSpans(text:string,phrases:string[]):EmphasisSpan[]{
  const spans=phrases.map(phrase=>{
    const startIndex=text.indexOf(phrase);
    if(startIndex<0||text.indexOf(phrase,startIndex+1)>=0) throw Error(`Emphasis must match exactly once: ${phrase}`);
    return {startIndex,endIndex:startIndex+phrase.length,text:phrase};
  }).sort((a,b)=>a.startIndex-b.startIndex);
  for(let i=1;i<spans.length;i++) if(spans[i].startIndex<spans[i-1].endIndex) throw Error('Overlapping speech emphasis');
  return spans;
}

export function emphasizeMarkdown(text:string,spans:EmphasisSpan[]):string{
  let result=text;
  for(const span of [...spans].reverse()) result=result.slice(0,span.startIndex)+'**'+result.slice(span.startIndex,span.endIndex)+'**'+result.slice(span.endIndex);
  return result;
}
