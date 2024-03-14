import{d as i,r as c,n as u,c as v,k as h,l as p,a as t,m as _,p as x,b as f,o as d,_ as m}from"./index-a2eccc6b.js";import{C as y}from"./CodeArea-3f31aad3.js";const a=s=>(x("data-v-9c362477"),s=s(),f(),s),g=a(()=>t("h2",{id:"canvas-todataurl-title"},"canvas toDataURL ",-1)),b=a(()=>t("div",null,"将canvas绘制的图像转换成base64格式的url字符串（canvas自身的样式不会被转换）",-1)),S=["textContent"],k=a(()=>t("div",null,"效果如下",-1)),C={class:"url-text"},D=a(()=>t("br",null,null,-1)),w=a(()=>t("br",null,null,-1)),R=a(()=>t("div",null,"img使用src引用：红色边框为img标签的属性",-1)),U=a(()=>t("br",null,null,-1)),T=["src"],B=i({__name:"ToDataUrl",setup(s){const l=c(),o=c();u(()=>{const e=l._value;e.width=150,e.height=150,e.style.boxShadow="0 0 1px 1px",e.style.background="#000000";const n=e.getContext("2d");n.fillStyle="#88ff99",n.fillRect(25,25,100,100),o.value=e.toDataURL()});const r=c({html1:`const canvas = document.querySelector("canvas");
canvas.width = 150;
canvas.height = 150;
canvas.style.boxShadow = '0 0 1px 1px';
canvas.style.background = '#000000';
const context = canvas.getContext("2d");
//
context.fillStyle = "#88ff99";
context.fillRect(25, 25, 100, 100);
document.querySelector("img").src = canvas.toDataURL();
`});return(e,n)=>(d(),v("div",null,[g,b,(d(),h(y,{key:new Date().getTime()+"html1"},{default:p(()=>[t("div",{textContent:_(r.value.html1)},null,8,S)]),_:1})),k,t("canvas",{ref_key:"canvasRef1",ref:l},null,512),t("span",C,_(o.value),1),D,w,R,U,t("img",{style:{border:"1px solid red"},src:o.value,alt:""},null,8,T)]))}});const q=m(B,[["__scopeId","data-v-9c362477"]]);export{q as default};
