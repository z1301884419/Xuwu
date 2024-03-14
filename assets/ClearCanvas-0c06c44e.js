import{d as r,r as l,n as u,c as f,k as d,l as _,a as t,o as a,m as v}from"./index-a2eccc6b.js";import{C as x}from"./CodeArea-3f31aad3.js";const y=t("h2",{id:"clear-canvas-title"}," 檫除和清空canvas ",-1),m=t("div",null,"清除某块区域：clearRect(x,y,width,height)",-1),p=t("div",null,"清除整个区域：重新设置画布的宽高，就会清空画布",-1),w=t("br",null,null,-1),g=t("h4",{id:"clear-canvas-clearrect"}," clearRect(x,y,width,height) ",-1),C=t("div",null,"x,y：从坐标为(x,y)处开始檫除",-1),R=t("div",null,"width,height：要檫除的宽度和高度",-1),S=["textContent"],k=t("div",null,"效果如下",-1),b=t("br",null,null,-1),B=t("br",null,null,-1),T=t("h4",{id:"clear-canvas-restwh"}," 重置画布宽高 ",-1),D=["textContent"],q=t("div",null,"效果如下",-1),V=r({__name:"ClearCanvas",setup(A){const o=l(),s=l();u(()=>{const c=o._value;c.width=400,c.height=200,c.style.boxShadow="0 0 1px 1px";const e=c.getContext("2d");e.fillStyle="#009900",e.fillRect(10,10,100,100),e.fillStyle="#005500",e.fillRect(50,50,100,100),e.clearRect(70,70,20,30);const n=s._value;n.width=400,n.height=200,n.style.boxShadow="0 0 1px 1px";const h=n.getContext("2d");h.fillStyle="#009900",h.fillRect(0,0,400,200),n.width=200,n.height=200});const i=l({html1:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.fillRect(10, 10, 100, 100);
context.fillStyle = '#005500';
context.fillRect(50,50,100,100)
//
context.clearRect(70,70,20,30)
`,html2:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.fillRect(0, 0, 400, 200);
//
canvas.width = 200;
canvas.height = 200;
`});return(c,e)=>(a(),f("div",null,[y,m,p,w,g,C,R,(a(),d(x,{key:new Date().getTime()+"html1"},{default:_(()=>[t("div",{textContent:v(i.value.html1)},null,8,S)]),_:1})),k,t("canvas",{ref_key:"canvasRef1",ref:o},null,512),b,B,T,(a(),d(x,{key:new Date().getTime()+"html2"},{default:_(()=>[t("div",{textContent:v(i.value.html2)},null,8,D)]),_:1})),q,t("canvas",{ref_key:"canvasRef2",ref:s},null,512)]))}});export{V as default};
