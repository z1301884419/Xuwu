import{d as l,r as a,n as d,c as h,k as i,l as f,a as t,o as n,m as _}from"./index-a2eccc6b.js";import{C as r}from"./CodeArea-3f31aad3.js";const x=t("h2",{id:"canvas-shadow-title"},"阴影 ",-1),u=t("div",null,"阴影的设置要在绘制之前",-1),v=t("h4",null,"canvas阴影由以下4个属性控制：",-1),w=t("div",null,"shadowOffsetX：阴影离源图象在x轴上的距离",-1),m=t("div",null,"shadowOffsetY：阴影离源图象在y轴上的距离",-1),p=t("div",null,"shadowBlur：设置阴影的模糊度",-1),C=t("div",null,"shadowColor：设置阴影的颜色",-1),y=["textContent"],k=t("div",null,"效果如下",-1),O=l({__name:"Shadow",setup(B){const s=a();d(()=>{const o=s._value;o.width=400,o.height=200,o.style.boxShadow="0 0 1px 1px";const e=o.getContext("2d");e.shadowOffsetX=10,e.shadowOffsetY=10,e.shadowBlur=10,e.shadowColor="#000000",e.fillStyle="#88ff99",e.fillRect(10,10,100,100)});const c=a({html1:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 阴影的设置要在绘制之前
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.shadowColor = "#000000";
//
context.fillStyle = "#88ff99";
context.fillRect(10, 10, 100, 100);
`});return(o,e)=>(n(),h("div",null,[x,u,v,w,m,p,C,(n(),i(r,{key:new Date().getTime()+"html1"},{default:f(()=>[t("div",{textContent:_(c.value.html1)},null,8,y)]),_:1})),k,t("canvas",{ref_key:"canvasRef1",ref:s},null,512)]))}});export{O as default};
