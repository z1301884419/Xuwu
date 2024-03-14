import{d as S,r as a,n as R,c as g,k as v,l as r,a as t,o as s,m as _}from"./index-a2eccc6b.js";import{C as f}from"./CodeArea-3f31aad3.js";const k=t("h2",{id:"canvas-morph-title"}," 变形 ",-1),w=t("div",null,"可以对canvas图像进行一些变形操作，如：位移，旋转，缩放；只对设置后画的图形生效",-1),C=t("h4",{id:"canvas-morph-translate"}," 平移：translate(x, y) ",-1),b=t("div",null,"x,y：在x,y轴移动的量(可以理解将将原来(x,y)的点重新作为坐标原点(0,0))",-1),T=["textContent"],P=t("div",null,"效果如下",-1),D=t("br",null,null,-1),M=t("br",null,null,-1),q=t("h4",{id:"canvas-morph-rotate"}," 旋转：rotate(弧度) ",-1),B=t("div",null,"以坐标原点(0,0)为旋转点，逆时针开始旋转",-1),I=["textContent"],A=t("div",null,"效果如下",-1),X=t("br",null,null,-1),Y=t("br",null,null,-1),E=t("h4",{id:"canvas-morph-scale"}," 缩放：scale(scaleX, scaleY) ",-1),N=t("div",null,"scaleX: x轴的坐标缩放的倍数",-1),V=t("div",null,"scaleY: y轴的坐标缩放的倍数",-1),j=["textContent"],z=t("div",null,"效果如下",-1),F=t("br",null,null,-1),G=t("br",null,null,-1),H=t("h4",{id:"canvas-morph-mix"}," 混合使用 ",-1),J=["textContent"],K=t("div",null,"效果如下",-1),U=S({__name:"CanvasMorph",setup(L){const u=a(),y=a(),m=a(),p=a();R(()=>{const o=u._value;o.width=400,o.height=200,o.style.boxShadow="0 0 1px 1px";const n=o.getContext("2d");n.fillStyle="#009900",n.fillRect(0,0,100,100),n.translate(50,50),n.fillStyle="#660088",n.fillRect(0,0,100,100),n.font="normal 400 20px Arial",n.fillText("此时原来(50,50)为坐标原点(0,0)",0,120);const x=y._value;x.width=400,x.height=200,x.style.boxShadow="0 0 1px 1px";const e=x.getContext("2d");e.fillStyle="#009900",e.fillRect(50,50,100,100),e.moveTo(0,0),e.lineTo(100,100),e.strokeStyle="#000000",e.stroke(),e.rotate(Math.PI/180*25),e.fillStyle="#660088",e.fillRect(50,50,100,100),e.moveTo(0,0),e.lineTo(100,100),e.strokeStyle="#000000",e.stroke();const h=m._value;h.width=400,h.height=200,h.style.boxShadow="0 0 1px 1px";const c=h.getContext("2d");c.fillStyle="#009900",c.fillRect(0,0,50,50),c.scale(2,2),c.fillStyle="#660088",c.fillRect(50,50,50,50);const d=p._value;d.width=400,d.height=200,d.style.boxShadow="0 0 1px 1px";const l=d.getContext("2d");l.fillStyle="#009900",l.fillRect(50,50,100,100),l.translate(100,100),l.rotate(Math.PI/180*45),l.translate(-100,-100),l.scale(1.5,1.5),l.fillStyle="#660088",l.fillRect(50/1.5,50/1.5,100/1.5,100/1.5)});const i=a({html1:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.fillRect(0, 0, 100, 100);
context.translate(50,50);
context.fillStyle = "#660088";
context.fillRect(0, 0, 100, 100);
context.font = "normal 400 20px Arial"
context.fillText('此时原来(50,50)为坐标原点(0,0)',0,120)
`,html2:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.fillRect(50, 50, 100, 100);
context.beginPath();
context.moveTo(0,0)
context.lineTo(100,100);
context.strokeStyle = '#000000';
context.stroke();
context.rotate((Math.PI / 180) * 25);
context.fillStyle = "#660088";
context.fillRect(50, 50, 100, 100);
context.beginPath();
context.moveTo(0,0)
context.lineTo(100,100);
context.strokeStyle = '#000000';
context.stroke();
`,html3:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.fillRect(0, 0, 50, 50);
context.scale(2,2);
context.fillStyle = "#660088";
context.fillRect(50, 50, 50, 50); // 相当于原来的context.fillRect(100, 100, 100, 100)
`,html4:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.fillRect(50, 50, 100, 100);
context.translate(100, 100);
context.rotate((Math.PI / 180) * 45);
context.translate(-100, -100);
context.scale(1.5,1.5);
context.fillStyle = "#660088";
context.fillRect(50/1.5, 50/1.5, 100/1.5, 100/1.5);`});return(o,n)=>(s(),g("div",null,[k,w,C,b,(s(),v(f,{key:new Date().getTime()+"html1"},{default:r(()=>[t("div",{textContent:_(i.value.html1)},null,8,T)]),_:1})),P,t("canvas",{ref_key:"canvasRef1",ref:u},null,512),D,M,q,B,(s(),v(f,{key:new Date().getTime()+"html2"},{default:r(()=>[t("div",{textContent:_(i.value.html2)},null,8,I)]),_:1})),A,t("canvas",{ref_key:"canvasRef2",ref:y},null,512),X,Y,E,N,V,(s(),v(f,{key:new Date().getTime()+"html3"},{default:r(()=>[t("div",{textContent:_(i.value.html3)},null,8,j)]),_:1})),z,t("canvas",{ref_key:"canvasRef3",ref:m},null,512),F,G,H,(s(),v(f,{key:new Date().getTime()+"html4"},{default:r(()=>[t("div",{textContent:_(i.value.html4)},null,8,J)]),_:1})),K,t("canvas",{ref_key:"canvasRef4",ref:p},null,512)]))}});export{U as default};
