/* All rendering assets and speaker tooling are served from this directory. */
const originalOpen=window.open.bind(window);
window.open=function(...args){
  const popup=originalOpen(...args);
  if(popup && args[1]==='reveal.js - Notes'){
    const fontURL=new URL('fonts/fonts.css',location.href).href;
    const timer=setInterval(()=>{
      if(popup.closed){clearInterval(timer);return;}
      if(popup.document.querySelector('#speaker-controls')){
        const link=popup.document.createElement('link');link.rel='stylesheet';link.href=fontURL;
        const style=popup.document.createElement('style');
        style.textContent="body,#speaker-controls{font-family:'Noto Sans','Noto Sans SC',sans-serif}.speaker-text{line-height:1.55}strong{font-weight:700}";
        popup.document.head.append(link,style);clearInterval(timer);
      }
    },100);
  }
  return popup;
};
Reveal.initialize({width:1600,height:900,margin:0,minScale:0.05,maxScale:2,hash:true,history:true,controls:false,controlsTutorial:false,progress:false,slideNumber:false,center:false,transition:'none',backgroundTransition:'none',disableLayout:false,scrollActivationWidth:null,touch:true,keyboard:true,overview:true,showNotes:false,help:true,plugins:[RevealNotes]});
