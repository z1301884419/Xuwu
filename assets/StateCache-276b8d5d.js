import{d as x,r as c,n as _,c as a,k as v,l as S,a as e,G as y,H as u,p as k,b as p,o as n,m as r,_ as R}from"./index-a2eccc6b.js";import{C as m}from"./CodeArea-3f31aad3.js";const l=s=>(k("data-v-7cd0147f"),s=s(),p(),s),C=l(()=>e("h2",{id:"canvas-statecache-title"},"状态的保存与取出 ",-1)),g=l(()=>e("div",null,"如果在同一个canvas里需要重复画不同的样式的图形时，使用状态的保存与取出会有效减少你的代码",-1)),w=l(()=>e("h4",null,"context.save(): 将当前的样式保存（进栈）",-1)),W=l(()=>e("h4",null,"context.restore(): 取出栈里面的第一个状态",-1)),b=["textContent"],B=l(()=>e("div",null,"效果如下",-1)),I=l(()=>e("br",null,null,-1)),A=l(()=>e("br",null,null,-1)),O=l(()=>e("h4",{id:"canvas-statecache-savestyle"},"可以进行保存的值有: ",-1)),T=x({__name:"StateCache",setup(s){const i=c(),d=c(["fillStyle","stokeStyle","lineWidth","lineJoin","lineCap","font","textAlign","textBaseline","direction ","miterLimit","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","globalAlpha","globalCompositionOperation","translate","rotate"]);_(()=>{const o=i._value;o.width=400,o.height=100,o.style.boxShadow="0 0 1px 1px";const t=o.getContext("2d");t.fillStyle="#660099",t.strokeStyle="#0055ff",t.lineWidth=5,t.save(),t.fillRect(10,10,50,50),t.strokeRect(10,10,50,50),t.fillStyle="#ff22ff",t.strokeStyle="#ffff00",t.lineWidth=10,t.save(),t.fillRect(80,10,50,50),t.strokeRect(80,10,50,50),t.fillStyle="#990000",t.fillRect(150,10,50,50),t.strokeRect(150,10,50,50),t.save(),t.restore(),t.restore(),t.fillRect(220,10,50,50),t.strokeRect(220,10,50,50),t.restore(),t.fillRect(290,10,50,50),t.strokeRect(290,10,50,50)});const h=c({html1:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.fillStyle = '#660099';
context.strokeStyle = '#0055ff';
context.lineWidth = 5;
context.save();

// 此时fillStyle = '#660099';strokeStyle = '#0055ff';lineWidth = 5;
context.fillRect(10, 10, 50, 50);
context.strokeRect(10, 10, 50, 50);
//
context.fillStyle = '#ff22ff';
context.strokeStyle = '#ffff00';
context.lineWidth = 10;
context.save();

//此时fillStyle = '#ff22ff';strokeStyle = '#ffff00';lineWidth = 10;
context.fillRect(80, 10, 50, 50);
context.strokeRect(80, 10, 50, 50);
//
context.fillStyle = '#990000';
context.fillRect(150, 10, 50, 50);
context.strokeRect(150, 10, 50, 50);
context.save()
//
context.restore();
//此时fillStyle = '#990000';strokeStyle = '#ffff00';lineWidth = 10;
context.restore();
//此时fillStyle = '#ff22ff';strokeStyle = '#ffff00';lineWidth = 10;
context.fillRect(220, 10, 50, 50);
context.strokeRect(220, 10, 50, 50);
//
context.restore();
// 此时fillStyle = '#660099';strokeStyle = '#0055ff';lineWidth = 5;
context.fillRect(290, 10, 50, 50);
context.strokeRect(290, 10, 50, 50);
`});return(o,t)=>(n(),a("div",null,[C,g,w,W,(n(),v(m,{key:new Date().getTime()+"html1"},{default:S(()=>[e("div",{textContent:r(h.value.html1)},null,8,b)]),_:1})),B,e("canvas",{ref_key:"canvasRef1",ref:i},null,512),I,A,O,e("ul",null,[(n(!0),a(y,null,u(d.value,f=>(n(),a("li",{key:f},r(f),1))),128))])]))}});const q=R(T,[["__scopeId","data-v-7cd0147f"]]);export{q as default};
