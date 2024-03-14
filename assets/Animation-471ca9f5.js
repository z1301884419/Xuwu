var S=Object.defineProperty;var b=(i,a,t)=>a in i?S(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var s=(i,a,t)=>(b(i,typeof a!="symbol"?a+"":a,t),t);import{d as F,r as c,n as q,c as R,k as C,l as k,a as e,v as A,p as M,b as X,o as d,m as Y,_ as D}from"./index-a2eccc6b.js";import{C as B}from"./CodeArea-3f31aad3.js";const o=i=>(M("data-v-01699f2a"),i=i(),X(),i),I=o(()=>e("h2",{id:"canvas-animation-title"},"canvas动画",-1)),T=o(()=>e("div",null,"实现原理：以渲染帧为时间单位，清空画布，再画出该帧时图像的样式",-1)),N=o(()=>e("div",null,"请求渲染帧：requestAnimationFrame(callback)",-1)),V=o(()=>e("br",null,null,-1)),E=["textContent"],j=o(()=>e("br",null,null,-1)),z=F({__name:"Animation",setup(i){const a=c(),t=c({});function m(){t.value.stop()}function p(){t.value.begin()}function x(){t.value.reset()}q(()=>{const n=a._value;n.width=400,n.height=200,n.style.boxShadow="0 0 1px 1px";const r=n.getContext("2d");r.fillStyle="#009900";class w{constructor(l,h,f,g,y,v,u){s(this,"x");s(this,"y");s(this,"startX");s(this,"startY");s(this,"w");s(this,"h");s(this,"speed");s(this,"canvas");s(this,"context");s(this,"stopFlag",!1);s(this,"timer");this.x=l,this.y=h,this.startX=l,this.startY=h,this.y=h,this.w=f,this.h=g,this.speed=y,this.canvas=v,this.context=v.getContext("2d"),u&&(this.moveRoute=u)}moveRoute(){this.x+=this.speed,(this.x+this.w>=this.canvas.width||this.x<=0)&&(this.speed=-this.speed,this.x+=this.speed)}move(){this.timer&&cancelAnimationFrame(this.timer),this.moveRoute(),!(this.x<0||this.y<0||this.x>this.canvas.width||this.y>this.canvas.height||this.stopFlag)&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.draw(),this.timer=requestAnimationFrame(()=>this.move()))}stop(){this.stopFlag=!0}begin(){this.stopFlag=!1,this.move()}reset(){this.x=this.startX,this.y=this.startY,this.begin()}draw(){this.context.fillRect(this.x,this.y,this.w,this.h)}}t.value=new w(0,50,25,25,1.5,n),t.value.draw(),t.value.move()});const _=c({html1:`class DrawSquare {
  x; y; startX; startY; w; h; speed; canvas; context;
  private stopFlag = false;
  private animationFrame;
  constructor(x, y, w, h, speed, canvas, moveRoute) {
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    moveRoute && (this.moveRoute = moveRoute);
  }
  moveRoute() {
    this.x += this.speed;
      if(this.x+this.w >= this.canvas.width || this.x <= 0){
        this.speed = -this.speed;
        this.x += this.speed;
      }
  }
  move() {
    this.animationFrame &&  cancelAnimationFrame(this.animationFrame)
    this.moveRoute()
    if (this.x >= this.canvas.width || this.y >= this.canvas.height || this.stopFlag) return;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.draw()
    this.animationFrame = requestAnimationFrame(() => this.move())
  }
  stop() {
    this.stopFlag = true
  }
  begin() {
    this.stopFlag = false
    this.move()
  }
  reset() {
    this.x = this.startX
    this.y = this.startY
    this.begin();
  }
  draw() {
    this.context.fillRect(this.x, this.y, this.w, this.h)
  }
}
//
const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = '#009900';
//
const Square = new DrawSquare(0, 50, 25, 25, 1.5, canvas)
Square.draw()
Square.move()
//
function stopMove() {
Square.stop()
}
function beginMove() {
  Square.begin()
}
function resetMove() {
  Square.reset()
}

`});return(n,r)=>(d(),R("div",null,[I,T,N,V,(d(),C(B,{key:new Date().getTime()+"html1"},{default:k(()=>[e("div",{textContent:Y(_.value.html1)},null,8,E)]),_:1})),e("div",null,[A(" 效果如下： "),e("button",{class:"stopMove",onClick:m},"停止动画"),e("button",{class:"beginMove",onClick:p},"开始动画"),e("button",{class:"resetMove",onClick:x},"重置动画")]),j,e("canvas",{ref_key:"canvasRef1",ref:a},null,512)]))}});const L=D(z,[["__scopeId","data-v-01699f2a"]]);export{L as default};
