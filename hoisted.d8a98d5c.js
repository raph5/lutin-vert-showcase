import"./chunks/FundingPopup.astro_astro_type_script_index_0_lang.eaba3fe3.js";let c=window.innerWidth>900;const r={0:{x:-40,y:-200},1:{x:-10,y:-330},2:{x:35,y:-400},3:{x:70,y:-230},4:{x:20,y:-100},5:{x:-30,y:-220},6:{x:40,y:-250},7:{x:50,y:-80},8:{x:10,y:-400}},s={},i=document.querySelectorAll(".chantier__boxes .el"),l=document.querySelector("#idle-path path"),y=document.querySelector(".section.chantier"),f=l.getTotalLength();i.forEach((t,e)=>{if(t.getAttribute("transform")?.substring(0,6)=="matrix"){s[e]=t.getAttribute("transform");const[o,a]=s[e].match(/\d+.\d+ \d+.\d+\)/)[0].slice(0,-1).split(" ").map(n=>parseFloat(n));r[e]={x:o+r[e].x,y:a+r[e].y}}});function u(t,e,o){t.getAttribute("transform")?.substring(0,6)=="matrix"?t.setAttribute("transform",t.getAttribute("transform").replace(/\d+.\d+ \d+.\d+\)/,`${e} ${o})`)):t.style.transform=`translate(${e}px, ${o}px)`}function m(){c&&requestAnimationFrame(()=>{const t=(Date.now()-g+.1)%5e4/5e4;i.forEach((e,o)=>{const a=(t+.1*o)%1,n=l.getPointAtLength(a*f);u(e,r[o].x+n.x*.9-10,r[o].y+n.y*.9-10)}),m()})}const g=Date.now();m();document.querySelector("body").onscroll=()=>{y.getBoundingClientRect().bottom<window.innerHeight&&(c=!1,i.forEach((t,e)=>{t.style.transition="transform 800ms",s[e]?t.setAttribute("transform",s[e]):t.style.transform=""}))};
