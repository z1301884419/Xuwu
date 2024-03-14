import{d as b,r as o,n as L,c as R,k as r,l as g,a as e,X as k,p as E,b as D,o as i,m as h,_ as X}from"./index-a2eccc6b.js";import{C as _}from"./CodeArea-3f31aad3.js";const u=""+new URL("../static/picture1.webp",import.meta.url).href,a=v=>(E("data-v-4357e0d6"),v=v(),D(),v),T=k('<h2 id="draw-img-title" data-v-4357e0d6>绘制图片</h2><div data-v-4357e0d6>绘制原图：drawImage(image,drawX,drawY)</div><div data-v-4357e0d6>绘制缩放图：drawImage(image,drawX,drawY,drawW,drawH)</div><div data-v-4357e0d6>绘制裁剪图：drawImage(image,sliceX,sliceY,sliceW,sliceH,drawX,drawY,drawW,drawH)</div><br data-v-4357e0d6><div data-v-4357e0d6>image：image对象或canvas对象</div><div data-v-4357e0d6>drawX：开始画图的x坐标</div><div data-v-4357e0d6>drawY：开始画图的y坐标</div><div data-v-4357e0d6>drawW：画的图片的宽度</div><div data-v-4357e0d6>drawH：画的图片的高度</div><div data-v-4357e0d6>sliceX：从源图片上x处开始裁剪</div><div data-v-4357e0d6>sliceY：从源图片上y处开始裁剪</div><div data-v-4357e0d6>sliceW：裁剪的宽度</div><div data-v-4357e0d6>sliceH：裁剪的高度</div><h4 id="draw-img-img" data-v-4357e0d6>绘制image对象图片: 创建image对象，并监听image图片的onload事件</h4><br data-v-4357e0d6><div data-v-4357e0d6>绘制原图</div>',17),U=["textContent"],Y=a(()=>e("div",null,"绘制原图效果如下：",-1)),H=a(()=>e("br",null,null,-1)),W=a(()=>e("div",null,"绘制缩放图",-1)),q=["textContent"],B=a(()=>e("div",null,"绘制缩放图效果如下：",-1)),N=a(()=>e("br",null,null,-1)),V=a(()=>e("div",null,"绘制裁剪图",-1)),A=["textContent"],j=a(()=>e("div",null,"绘制裁剪图效果如下：",-1)),z=a(()=>e("h4",{id:"draw-img-canvas"},"绘制canvas对象图片",-1)),F=a(()=>e("br",null,null,-1)),G=["textContent"],J=a(()=>e("div",null,"效果如下：",-1)),K=b({__name:"DrawImg",setup(v){const n=o(),d=o(),s=o(),c=o();L(()=>{const p=n._value.getContext("2d");n._value.width=600,n._value.height=400,n._value.style.boxShadow="0 0 1px 1px";const t=new Image;t.src=u,t.addEventListener("load",()=>{p.drawImage(t,0,0)});const f=d._value.getContext("2d");d._value.width=500,d._value.height=300,d._value.style.boxShadow="0 0 1px 1px";const I=new Image;I.src=u,I.addEventListener("load",()=>{f.drawImage(t,0,0,500,300)});const y=s._value.getContext("2d");s._value.width=400,s._value.height=400,s._value.style.boxShadow="0 0 1px 1px";const w=new Image;w.src=u,w.addEventListener("load",()=>{y.drawImage(t,800,0,w.width-800,600,0,0,400,400)});const C=c._value.getContext("2d");c._value.width=400,c._value.height=400,c._value.style.boxShadow="0 0 1px 1px";const m=document.createElement("canvas"),S=m.getContext("2d");m.width=500,m.height=300;const x=new Image;x.src=u,x.addEventListener("load",()=>{S.drawImage(x,0,0,500,300),C.drawImage(m,200,0,300,300,0,0,400,400)})});const l=o({html1:`const canvas = document.querySelector("canvas");
canvas.width = 600;
canvas.height = 400;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
const image = new Image();
image.src = picture1URL;
image.addEventListener('load',()=>{
  context.drawImage(image,0,0);
})`,html2:`const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 300;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
const image = new Image();
image.src = picture1URL;
image.addEventListener('load',()=>{
  context.drawImage(image,0,0,500,300);
})`,html3:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
const image = new Image();
image.src = picture1URL;
image.addEventListener('load',()=>{
  context.drawImage(image,800,0,image3.width - 800,600,0,0,400,400);
})`,html4:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
//
const canvasImg = document.createElement('canvas');
const contextImg = canvasImg.getContext("2d");
canvasImg.width = 500;
canvasImg.height = 300;
const image = new Image();
image.src = picture1URL;
image.addEventListener('load',()=>{
  contextImg.drawImage(image,0,0,500,300);
  context.drawImage(canvasImg,200,0,300,300,0,0,400,400)
})`});return(p,t)=>(i(),R("div",null,[T,(i(),r(_,{key:new Date().getTime()+"html1"},{default:g(()=>[e("div",{textContent:h(l.value.html1)},null,8,U)]),_:1})),Y,e("canvas",{ref_key:"canvasRef1",ref:n},null,512),H,W,(i(),r(_,{key:new Date().getTime()+"html2"},{default:g(()=>[e("div",{textContent:h(l.value.html2)},null,8,q)]),_:1})),B,e("canvas",{ref_key:"canvasRef2",ref:d},null,512),N,V,(i(),r(_,{key:new Date().getTime()+"html3"},{default:g(()=>[e("div",{textContent:h(l.value.html3)},null,8,A)]),_:1})),j,e("canvas",{ref_key:"canvasRef3",ref:s},null,512),z,F,(i(),r(_,{key:new Date().getTime()+"html4"},{default:g(()=>[e("div",{textContent:h(l.value.html4)},null,8,G)]),_:1})),J,e("canvas",{ref_key:"canvasRef4",ref:c},null,512)]))}});const P=X(K,[["__scopeId","data-v-4357e0d6"]]);export{P as default};
