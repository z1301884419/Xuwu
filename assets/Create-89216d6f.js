import{d as c,c as d,k as n,l as a,a as t,o as e,m as o}from"./index-a2eccc6b.js";import{C as s}from"./CodeArea-3f31aad3.js";const i=t("h2",{id:"draw-create-title"}," 创建canvas ",-1),l=t("div",null,"在html中创建一个canvas标签：canvas标签是双闭合标签，当浏览器支持canvas属性时 不会显示标签内的内容，浏览器不支持时，显示标签内的内容 ",-1),_=t("div",{textContent:`<div>
  <canvas>浏览器不支持canvas</canvas>
<div>`},null,-1),v=t("div",null,"canvas标签可以设置width、height属性+全局属性；如设置如下属性",-1),h=t("div",{textContent:`<div>
  <canvas calss="mycanvas" width="200" height="200"></canvas>
<div>`},null,-1),r=["textContent"],u=t("h4",{id:"draw-create-get2d"}," 获取canvas“2d”上下文 ",-1),m=["textContent"],x=t("h4",{id:"draw-create-ctxType"}," getContext的值可以是： ",-1),g=t("div",null,"2d: 绘制2d图像",-1),C=t("div",null,"webgl: 绘制3d的上下文",-1),w=t("div",null,"webgl2: 绘制3d的上下文",-1),p=t("br",null,null,-1),b=c({__name:"Create",setup(f){return(k,y)=>(e(),d("div",null,[i,l,(e(),n(s,{key:new Date().getTime()+"htmlText"},{default:a(()=>[_]),_:1})),v,(e(),n(s,{key:new Date().getTime()+"htmlText2"},{default:a(()=>[h]),_:1})),(e(),n(s,{key:new Date().getTime()+"css"},{default:a(()=>[t("div",{textContent:o(`.mycanvas{
  background-color: #000000;
}`)},null,8,r)]),_:1})),u,(e(),n(s,{key:new Date().getTime()+"js"},{default:a(()=>[t("div",{textContent:o(`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");`)},null,8,m)]),_:1})),x,g,C,w,p]))}});export{b as default};
