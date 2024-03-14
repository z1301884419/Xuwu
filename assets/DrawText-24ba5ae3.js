import{d as T,r as a,n as y,c as w,k as c,l as s,a as t,o as l,m as x}from"./index-a2eccc6b.js";import{C as d}from"./CodeArea-3f31aad3.js";const k=t("h2",{id:"draw-text-title"}," 绘制文字 ",-1),b=t("div",null,"镂空文字：strokeText(text, x, y, maxWidth)",-1),C=t("div",null,"实体文字：fillText(text, x, y, maxWidth)",-1),S=t("div",null,"text：要绘制的文字",-1),B=t("div",null,"x：开始绘制的位置x坐标",-1),V=t("div",null,"y：开始绘制的位置y坐标",-1),A=t("div",null,"maxWidth：绘制内容的最大宽度",-1),R=["textContent"],D=t("div",null,"效果如下：",-1),q=t("h4",{id:"draw-text-font"}," 文字字体 ",-1),P=t("div",null,"font = [font style][font weight][font size][font face]",-1),W=t("div",null,"可设置的属性值与css一致： 如",-1),M=t("div",null,"font style: normal | italic | oblique | inherit",-1),z=t("div",null,"....",-1),E=t("div",null,"font face: Verdana | Arial | Serif | Cursive | Fantasy | ...",-1),F=["textContent"],N=t("div",null,"效果如下：",-1),j=t("h4",{id:"draw-text-color"}," 文字颜色 ",-1),G=t("div",null,'strokeStyle = "color"',-1),H=t("div",null,'fillStyle = "color"',-1),I=["textContent"],J=t("div",null,"效果如下：",-1),K=t("h4",{id:"draw-text-measure"}," 测量文字宽度：measureText(text) ",-1),L=t("div",null,"测量的文字的宽度以当前设置的字体大小计算",-1),O=["textContent"],Q=t("h4",{id:"draw-text-baseline"}," 文字基线：textBaseline = top | hanging | middle | alphabetic | ideographic | bottom ",-1),U=t("div",null,"top: 以文本中最高的字体的顶部为准",-1),X=t("div",null,"hanging: 与top类似",-1),Y=t("div",null,"middle: 以文本的中间为准",-1),Z=t("div",null,"alphabetic: 以文本中最高的字体的底部为准",-1),$=t("div",null,"ideographic: 与bottom类似",-1),tt=t("div",null,"bottom: 以文本中最低的字体的底部为准",-1),et=["textContent"],nt=t("div",null,"效果如下：",-1),ot=t("h4",{id:"draw-text-align"}," 文字对齐方式：textAlign = start | left | center | end | right",-1),lt=t("div",null,"start: 文字的起始位置在x处",-1),it=t("div",null,"left: 与start类似",-1),at=t("div",null,"center: 文字的中间在x处",-1),ct=t("div",null,"end: 文字的结束位置在x处",-1),st=t("div",null,"right: 与end类似",-1),xt=["textContent"],dt=t("div",null,"效果如下：",-1),ht=t("h4",{id:"draw-text-direction"},"文字绘制方向（与textAlingn效果类似） direction = ltr | rtl | inherrit",-1),rt=t("div",null,"ltr: 从x处向右绘制",-1),_t=t("div",null,"rtl: 从x处向左绘制",-1),vt=t("div",null,"inherrit: 从x处向右绘制",-1),ft=["textContent"],ut=t("div",null,"效果如下：",-1),Tt=T({__name:"DrawText",setup(gt){const v=a(),f=a(),u=a(),g=a(),p=a(),m=a();y(()=>{const _=v._value.getContext("2d");v._value.style.boxShadow="0 0 1px 1px",_.font="30px Verdana",_.strokeText("最美不是下雨天",20,50),_.fillText("最美不是下雨天",20,120,100);const r=f._value.getContext("2d");f._value.style.boxShadow="0 0 1px 1px",r.font="italic bold 30px Verdana",r.strokeText("是曾与你躲过雨的屋檐",20,50),r.font="normal 400 30px Serif",r.fillText("是曾与你躲过雨的屋檐",20,120);const h=u._value.getContext("2d");u._value.style.boxShadow="0 0 1px 1px",h.font="30px Verdana",h.strokeStyle="#000000",h.strokeText("黑色毛衣",20,50),h.font="30px Verdana",h.fillStyle="pink",h.fillText("粉色海洋",20,120);const e=g._value.getContext("2d");g._value.style.boxShadow="0 0 1px 1px",e.font="16px Verdana",e.textBaseline="top",e.fillText("top",0,75),e.textBaseline="hanging",e.fillText("hanging",40,75),e.textBaseline="middle",e.fillText("middle",120,75),e.textBaseline="alphabetic",e.fillText("alphabetic",200,75),e.textBaseline="ideographic",e.fillText("ideographic",300,75),e.textBaseline="bottom",e.fillText("bottom-glyph",400,75),e.stokeStyle="#000000",e.beginPath(),e.moveTo(0,75),e.lineTo(500,75),e.stroke();const n=p._value.getContext("2d");p._value.style.boxShadow="0 0 1px 1px",n.font="16px Verdana",n.beginPath(),n.moveTo(200,0),n.lineTo(200,200),n.stroke(),n.textAlign="start",n.fillText("start",200,20),n.textAlign="left",n.fillText("left",200,50),n.textAlign="center",n.fillText("center",200,80),n.textAlign="end",n.fillText("end",200,120),n.textAlign="right",n.fillText("right",200,150);const o=m._value.getContext("2d");m._value.style.boxShadow="0 0 1px 1px",o.font="16px Verdana",o.beginPath(),o.moveTo(200,0),o.lineTo(200,100),o.stroke(),o.direction="ltr",o.fillText("窗前明月光",200,20),o.direction="rtl",o.fillText("窗前明月光",200,50),o.direction="inherit",o.fillText("窗前明月光",200,80)});const i=a({html1:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "30px Verdana";
context.strokeText('最美不是下雨天',20,50)
context.fillText('最美不是下雨天',20,120,100)
`,html2:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "italic bold 30px Verdana";
context.strokeText('是曾与你躲过雨的屋檐',20,50)
context.font = "normal 400 30px Serif";
context.fillText('是曾与你躲过雨的屋檐',20,120)
`,html3:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "30px Verdana";
context.strokeStyle = '#000000'
context.strokeText('黑色毛衣',20,50)
context.font = "30px Verdana";
context.fillStyle = 'pink'
context.fillText('粉色海洋',20,120)
`,html4:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
const textMetrics = context.measureText("你猜我有多宽");
const width = textMetrics.width;
console.log('width',width);
`,html5:`const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "16px Verdana";
context.fillStyle = "#000000";

context.textBaseline = "top";
context.fillText("top", 0, 75);

context.textBaseline = "hanging";
context.fillText("hanging", 40, 75);

context.textBaseline = "middle";
context.fillText("middle", 120, 75);

context.textBaseline = "alphabetic";
context.fillText("alphabetic", 200, 75);

context.textBaseline = "ideographic";
context.fillText("ideographic", 300, 75);

context.textBaseline = "bottom";
context.fillText("bottom-glyph", 400, 75);

context.lineWidth  = 1;
context.beginPath();
context.moveTo(  0, 75);
context.lineTo(500, 75);
context.stroke();
`,html6:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "16px Verdana";

context.beginPath();
context.moveTo(200,0);
context.lineTo(200,200);
context.stroke();

context.textAlign = "start";
context.fillText("start",200,20);

context.textAlign = "left";
context.fillText("left",200,50);

context.textAlign = "center";
context.fillText("center",200,80);

context.textAlign = "end";
context.fillText("end",200,120)

context.textAlign = "right";
context.fillText("right",200,150)
`,html7:`const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "16px Verdana";

context.beginPath();
context.moveTo(200,0);
context.lineTo(200,100);
context.stroke();

context6.direction = "ltr";
context6.fillText("窗前明月光",200,20);

context6.direction = "rtl";
context6.fillText("窗前明月光",200,50);

context6.direction = "inherit";
context6.fillText("窗前明月光",200,80);

`});return(_,r)=>(l(),w("div",null,[k,b,C,S,B,V,A,(l(),c(d,{key:new Date().getTime()+"html1"},{default:s(()=>[t("div",{textContent:x(i.value.html1)},null,8,R)]),_:1})),D,t("canvas",{ref_key:"canvasRef1",ref:v,width:"400",height:"200"},null,512),q,P,W,M,z,E,(l(),c(d,{key:new Date().getTime()+"html2"},{default:s(()=>[t("div",{textContent:x(i.value.html2)},null,8,F)]),_:1})),N,t("canvas",{ref_key:"canvasRef2",ref:f,width:"400",height:"200"},null,512),j,G,H,(l(),c(d,{key:new Date().getTime()+"html3"},{default:s(()=>[t("div",{textContent:x(i.value.html3)},null,8,I)]),_:1})),J,t("canvas",{ref_key:"canvasRef3",ref:u,width:"400",height:"200"},null,512),K,L,(l(),c(d,{key:new Date().getTime()+"html4"},{default:s(()=>[t("div",{textContent:x(i.value.html4)},null,8,O)]),_:1})),Q,U,X,Y,Z,$,tt,(l(),c(d,{key:new Date().getTime()+"html5"},{default:s(()=>[t("div",{textContent:x(i.value.html5)},null,8,et)]),_:1})),nt,t("canvas",{ref_key:"canvasRef4",ref:g,width:"500",height:"200"},null,512),ot,lt,it,at,ct,st,(l(),c(d,{key:new Date().getTime()+"html6"},{default:s(()=>[t("div",{textContent:x(i.value.html6)},null,8,xt)]),_:1})),dt,t("canvas",{ref_key:"canvasRef5",ref:p,width:"400",height:"200"},null,512),ht,rt,_t,vt,(l(),c(d,{key:new Date().getTime()+"html7"},{default:s(()=>[t("div",{textContent:x(i.value.html7)},null,8,ft)]),_:1})),ut,t("canvas",{ref_key:"canvasRef6",ref:m,width:"400",height:"100"},null,512)]))}});export{Tt as default};
