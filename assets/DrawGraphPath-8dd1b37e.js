import{d as p,r as s,n as g,c as k,k as d,l as x,a as t,X as y,o as c,m as h}from"./index-a2eccc6b.js";import{C as v}from"./CodeArea-3f31aad3.js";const m=t("h2",{id:"draw-graphpath-title"}," 画笔与路径 ",-1),b=t("div",null,"使用路径作画可以画出多种类型的图形",-1),S=t("h4",{id:"draw-graphpath-begin"},"路径的开启与闭合",-1),P=t("div",null,"开启：context.beginPath()",-1),C=t("div",null,"闭合：context.closePath();与开启点闭合",-1),R=["textContent"],w=t("h4",{id:"draw-graphpath-linepen"},"画笔位置及连线",-1),W=t("div",null,"moveTo(x,y)： 将画笔移到坐标位置",-1),X=t("div",null,"lineTo(x,y)： 画的线条，画的是画笔位置到该点位置，并将将画笔移到坐标位置",-1),D=t("div",null,"stroke(): 以描边形式连接笔的路径，不使用closePath()时，将绘制画笔的路径",-1),Y=t("div",null,"fill(): 以填充形式连接笔的路径，使用填充时closePath()常不用写",-1),q=t("div",null,"setLineDash([solidL,dashL])：solidL:实线部分长度,dashL: 虚线部分长度 ",-1),L=t("div",null,"lineDashoffset = number : 设置虚线起始偏移量 ",-1),J=["textContent"],A=t("div",null,"效果如下：",-1),B=t("h4",{id:"draw-graphpath-linecap"},"线帽（lineCap）：线条两端的样式",-1),I=t("div",null,"butt(矩形)",-1),M=t("div",null,"round(额外的圆型)",-1),z=t("div",null,"square(额外的矩形)",-1),j=["textContent"],N=t("div",null,"效果如下：",-1),V=t("h4",{id:"draw-graphpath-linejoin"},"线条连接（linejoin）：线条拐角样式",-1),E=t("div",null,"miter: 尖角",-1),G=t("div",null,"bevel: 平角",-1),F=t("div",null,"round: 圆角",-1),H=["textContent"],K=t("div",null,"效果如下：",-1),O=y('<h4 id="draw-graphpath-arc">绘制圆弧： arc(x,y,radius,startAngle,endAngle,anticlockwise)</h4><div>x: 圆弧中心x坐标</div><div>y: 圆弧中心y坐标</div><div>radius: 圆弧半径</div><div>startAngle: 弧起始的弧度角</div><div>endAngle: 弧结束的弧度角</div><div>anticlockwise: 绘制方向是否为逆时针(默认false为顺时针)</div><h4>绘制圆弧： arcTo(cp1X,cp1Y,cp2X,cp2Y,r),绘制的弧线由两条切线确定，一条切线为起点与控制点1的连线，另一条为控制点1与控制点2的连线</h4><div>cp1X: 控制点1的x坐标</div><div>cp1Y: 控制点1的y坐标</div><div>cp2X: 控制点2的x坐标</div><div>cp2Y: 控制点2的y坐标</div><div>r: 圆弧半径</div>',13),Q=["textContent"],U=t("div",null,"效果如下：",-1),Z=y('<h4 id="draw-graphpath-curve">绘制二次贝塞尔曲线：quadraticCurveTo(cp1X,cp1Y,toX,toY)</h4><div>cp1X: 控制点1的x坐标</div><div>cp1Y: 控制点1的y坐标</div><div>toX: 最终落笔点x坐标</div><div>toY: 最终落笔点y坐标</div><h4>绘制三次贝塞尔曲线：bezierCurveTo(cp1X,cp1Y,cp2X,cp2Y,toX,toY)</h4><div>cp1X: 控制点1的x坐标</div><div>cp1Y: 控制点1的y坐标</div><div>cp2X: 控制点2的x坐标</div><div>cp2Y: 控制点2的y坐标</div><div>toX: 最终落笔点x坐标</div><div>toY: 最终落笔点y坐标</div>',12),$=["textContent"],tt=t("div",null,"效果如下：",-1),lt=p({__name:"DrawGraphPath",setup(et){const r=s(),u=s(),_=s(),T=s(),f=s();g(()=>{const e=r._value.getContext("2d");r._value.style.boxShadow="0 0 1px 1px",e.moveTo(10,10),e.beginPath(),e.lineTo(50,10),e.lineTo(60,50),e.lineTo(100,50),e.closePath(),e.lineWidth=5,e.strokeStyle="#000000",e.stroke(),e.beginPath(),e.moveTo(10,80),e.lineTo(150,80),e.lineWidth=4,e.strokeStyle="#000000",e.stroke(),e.beginPath(),e.moveTo(200,10),e.lineTo(240,10),e.lineTo(240,50),e.lineTo(200,50),e.fillStyle="#000000",e.fill(),e.beginPath(),e.lineWidth=1,e.setLineDash([6,2]),e.lineDashoffset=0,e.moveTo(280,10),e.lineTo(350,10),e.lineTo(350,70),e.lineTo(280,70),e.closePath(),e.stroke();const n=u._value.getContext("2d");u._value.style.boxShadow="0 0 1px 1px",n.lineWidth=5,n.lineCap="butt",n.beginPath(),n.moveTo(50,10),n.lineTo(150,10),n.strokeStyle="#000000",n.stroke(),n.lineCap="round",n.beginPath(),n.moveTo(50,40),n.lineTo(150,40),n.strokeStyle="#000000",n.stroke(),n.lineCap="square",n.beginPath(),n.moveTo(50,70),n.lineTo(150,70),n.strokeStyle="#000000",n.stroke(),n.strokeStyle="#009900",n.lineWidth=1,n.strokeRect(50,0,100,100);const o=_._value.getContext("2d");_._value.style.boxShadow="0 0 1px 1px",o.lineWidth=15,o.lineJoin="miter",o.beginPath(),o.moveTo(10,10),o.lineTo(50,60),o.lineTo(90,10),o.strokeStyle="#000000",o.stroke(),o.lineJoin="bevel",o.beginPath(),o.moveTo(120,10),o.lineTo(160,60),o.lineTo(200,10),o.strokeStyle="#000000",o.stroke(),o.lineJoin="round",o.beginPath(),o.moveTo(220,10),o.lineTo(260,60),o.lineTo(300,10),o.strokeStyle="#000000",o.stroke(),o.strokeStyle="#009900",o.lineWidth=1,o.strokeRect(0,60,400,1);const i=T._value.getContext("2d");T._value.style.boxShadow="0 0 1px 1px",i.lineWidth=5,i.fillStyle="red",i.beginPath(),i.arc(50,50,30,0,Math.PI),i.stroke(),i.fillRect(50,50,5,5),i.beginPath(),i.arc(150,50,30,0,Math.PI,!0),i.stroke(),i.fillRect(150,50,5,5),i.beginPath(),i.moveTo(250,50),i.arcTo(300,50,300,0,50),i.stroke(),i.fillRect(250,50,5,5),i.fillRect(300,50,5,5),i.fillRect(300,0,5,5);const l=f._value.getContext("2d");f._value.style.boxShadow="0 0 1px 1px",l.lineWidth=3,l.beginPath(),l.moveTo(20,50),l.quadraticCurveTo(50,0,100,50),l.stroke(),l.fillStyle="blue",l.fillRect(17,47,6,6),l.fillStyle="red",l.fillRect(50,0,6,6),l.fillStyle="blue",l.fillRect(97,47,6,6),l.beginPath(),l.moveTo(180,50),l.bezierCurveTo(210,0,240,100,270,50),l.stroke(),l.fillStyle="blue",l.fillRect(177,47,6,6),l.fillStyle="red",l.fillRect(207,0,6,6),l.fillStyle="red",l.fillRect(237,94,6,6),l.fillStyle="blue",l.fillRect(267,47,6,6)});const a=s({html1:`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
context.beginPath();
.....路径的绘制
context.closePath();
`,html2:`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
//
context.moveTo(10,10);
context.beginPath();
context.lineTo(50,10);
context.lineTo(60,50);
context.lineTo(100,50);
context.closePath();
context.lineWidth = 5;
context.strokeStyle = '#000000';
context.stroke();
//
context.beginPath();
context.moveTo(10, 80);
context.lineTo(150, 80);
context.lineWidth = 4;
context.strokeStyle = '#000000';
context.stroke();
//
context.beginPath();
context.moveTo(200,10);
context.lineTo(240,10);
context.lineTo(240,50);
context.lineTo(200,50);
context.fillStyle = '#000000';
context.fill(); 
//
context.beginPath();
context.lineWidth = 1;
context.setLineDash([6,2]);
context.lineDashoffset = 0;
context.moveTo(280, 10);
context.lineTo(350, 10);
context.lineTo(350, 70);
context.lineTo(280, 70);
context.closePath();
context.stroke();
`,html3:`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
//
context.lineCap = 'butt';
context.beginPath();
context.moveTo(50,10);
context.lineTo(150,10);
context.strokeStyle = '#000000';
context.stroke();
//
context.lineCap = 'round';
context.beginPath();
context.moveTo(50,40);
context.lineTo(150,40);
context.strokeStyle = '#000000';
context.stroke();
//
context.lineCap = 'square';
context.beginPath();
context.moveTo(50,70);
context.lineTo(150,70);
context.strokeStyle = '#000000';
context.stroke();
//
context.strokeStyle = '#009900';
context.lineWidth = 1;
context.strokeRect(50,0,100,100)
`,html4:`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
context.lineWidth = 15;
//
context.lineJoin = 'miter';
context.beginPath();
context.moveTo(10, 10);
context.lineTo(50, 60);
context.lineTo(90, 10);
context.strokeStyle = '#000000';
context.stroke();
//
context.lineJoin = 'bevel';
context.beginPath();
context.moveTo(120, 10);
context.lineTo(160, 60);
context.lineTo(200, 10);
context.strokeStyle = '#000000';
context.stroke();
//
context.lineJoin = 'round';
context.beginPath();
context.moveTo(220, 10);
context.lineTo(260, 60);
context.lineTo(300, 10);
context.strokeStyle = '#000000';
context.stroke();
//
context.strokeStyle = '#009900';
context.lineWidth = 1;
context.strokeRect(0,60,400,1)
`,html5:`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
context.lineWidth = 5;
//
context.beginPath();
context.arc(50,50,30,0,Math.PI)
context.stroke();
context.fillRect(50,50,5,5)
//
context.beginPath();
context.arc(150,50,30,0,Math.PI,true)
context.stroke();
context.fillRect(150,50,5,5);
// arcTo
context.beginPath();
context.moveTo(250,50)
context.arcTo(300,50,300,0,50)
context.stroke();
context.fillRect(250,50,5,5);
context.fillRect(300,50,5,5);
context.fillRect(300,0,5,5);
`,html6:`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
context.lineWidth = 5;
// 二次曲线
context.beginPath();
context.moveTo(20,50)
context.quadraticCurveTo(50,0,100,50)
context.stroke();
// 起点
context.fillStyle = 'blue';
context.fillRect(17,47,6,6)
// 控制点
context.fillStyle = 'red';
context.fillRect(50,0,6,6)
//  终点
context.fillStyle = 'blue';
context.fillRect(97,47,6,6)
// 三次曲线
context.beginPath();
context.moveTo(180,50)
context.bezierCurveTo(210,0,240,100,270,50)
context.stroke();
//  起点
context.fillStyle = 'blue';
context.fillRect(177,47,6,6)
//  控制点1
context.fillStyle = 'red';
context.fillRect(207,0,6,6)
//  控制点2
context.fillStyle = 'red';
context.fillRect(237,94,6,6)
//  终点
context.fillStyle = 'blue';
context.fillRect(267,47,6,6)
`});return(e,n)=>(c(),k("div",null,[m,b,S,P,C,(c(),d(v,{key:new Date().getTime()+"html1"},{default:x(()=>[t("div",{textContent:h(a.value.html1)},null,8,R)]),_:1})),w,W,X,D,Y,q,L,(c(),d(v,{key:new Date().getTime()+"html2"},{default:x(()=>[t("div",{textContent:h(a.value.html2)},null,8,J)]),_:1})),A,t("canvas",{ref_key:"canvasRef1",ref:r,width:"400",height:"100"},null,512),B,I,M,z,(c(),d(v,{key:new Date().getTime()+"html3"},{default:x(()=>[t("div",{textContent:h(a.value.html3)},null,8,j)]),_:1})),N,t("canvas",{ref_key:"canvasRef2",ref:u,width:"400",height:"100"},null,512),V,E,G,F,(c(),d(v,{key:new Date().getTime()+"html4"},{default:x(()=>[t("div",{textContent:h(a.value.html4)},null,8,H)]),_:1})),K,t("canvas",{ref_key:"canvasRef3",ref:_,width:"400",height:"100"},null,512),O,(c(),d(v,{key:new Date().getTime()+"html5"},{default:x(()=>[t("div",{textContent:h(a.value.html5)},null,8,Q)]),_:1})),U,t("canvas",{ref_key:"canvasRef4",ref:T,width:"400",height:"100"},null,512),Z,(c(),d(v,{key:new Date().getTime()+"html6"},{default:x(()=>[t("div",{textContent:h(a.value.html6)},null,8,$)]),_:1})),tt,t("canvas",{ref_key:"canvasRef5",ref:f,width:"400",height:"100"},null,512)]))}});export{lt as default};
