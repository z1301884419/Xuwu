var V=Object.defineProperty;var Y=(d,r,n)=>r in d?V(d,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[r]=n;var e=(d,r,n)=>(Y(d,typeof r!="symbol"?r+"":r,n),n);import{d as X,r as x,h as $,n as U,c as b,a as o,v as q,G as D,H as z,p as W,b as J,o as w,m as C,k as L,l as P,_ as K}from"./index-a2eccc6b.js";import{C as I}from"./CodeArea-3f31aad3.js";class E{constructor(r,n){e(this,"img");e(this,"row");e(this,"col");this.row=r,this.col=n}}class H{constructor(r,n,h,c){e(this,"snakeArr",[]);e(this,"rowLength");e(this,"colLength");e(this,"headRow");e(this,"headCol");e(this,"length",1);e(this,"direction","");e(this,"die",!1);this.headRow=r,this.headCol=n,this.rowLength=h,this.colLength=c,this.snakeArr.push([r,n])}setSnake(){if(this.headRow<0||this.headRow>=this.rowLength||this.headCol<0||this.headCol>=this.colLength){this.die=!0;return}this.snakeArr.forEach(r=>{const[n,h]=r;if(n==this.headRow&&h==this.headCol){this.die=!0;return}}),this.snakeArr.unshift([this.headRow,this.headCol]),this.snakeArr.length>this.length&&this.snakeArr.pop()}move(){switch(this.direction){case"up":this.headRow--;break;case"down":this.headRow++;break;case"left":this.headCol--;break;case"right":this.headCol++;break;default:return}}}class O{constructor(r){e(this,"row");e(this,"col");e(this,"squareSize");e(this,"canvas");e(this,"score");e(this,"ctx");e(this,"keyDirection","");e(this,"DirectionMap",new Map([["up",1],["down",-1],["left",2],["right",-2]]));e(this,"squareArr",[]);e(this,"snake",new H(0,0,0,0));e(this,"snakeFood",new E(0,0));e(this,"timer",0);e(this,"speed",700);e(this,"grade",0);const{row:n,col:h,squareSize:c,canvas:p,score:u}=r;this.row=n,this.col=h,this.squareSize=c,this.canvas=p,this.ctx=this.canvas.getContext("2d"),this.score=u||1,this.init()}init(){this.speed=700,this.grade=0,this.keyDirection="",this.canvas.width=this.col*this.squareSize,this.canvas.height=this.row*this.squareSize;let r=this.row/2|0,n=this.col/2|0;this.snake=new H(r,n,this.row,this.col);let h=Math.random()*this.row|0,c=Math.random()*this.col|0;h==r&&c==n&&(h++,c++),this.snakeFood=new E(h,c),this.squareArr=[];for(let p=0;p<this.row;p++){this.squareArr.push([]);for(let u=0;u<this.col;u++)this.squareArr[p].push(0)}this.draw(),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="normal 200 30px Serif",this.ctx.fillText("按任意方向键开始游戏",this.canvas.width/2,this.canvas.height/2),this.interval()}interval(){clearInterval(this.timer),this.timer=setInterval(()=>{this.snake.die?this.gameover():this.keyDirection&&this.move()},this.speed)}gameover(){clearInterval(this.timer),window.removeEventListener("keydown",window),alert(`游戏结束，得分：${this.grade}`),this.init()}draw(){var h;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let r,n;this.ctx.fillStyle="blue";for(let c of(h=this.snake)==null?void 0:h.snakeArr){const[p,u]=c;r=u*this.squareSize,n=p*this.squareSize,this.ctx.fillRect(r,n,this.squareSize,this.squareSize)}this.ctx.fillStyle="red",r=this.snakeFood.col*this.squareSize,n=this.snakeFood.row*this.squareSize,this.ctx.fillRect(r,n,this.squareSize,this.squareSize)}setSpeed(){this.snake.length>this.squareArr.length*.7?this.speed=300:this.snake.length>this.squareArr.length*.5?this.speed=400:this.snake.length>this.squareArr.length*.3?this.speed=500:this.snake.length>this.squareArr.length*.1&&(this.speed=600),this.interval()}move(){let r=this.DirectionMap.get(this.snake.direction)||0,n=this.DirectionMap.get(this.keyDirection)||0;if(this.snake.length>1&&r==-n?this.snake.move():(this.snake.direction=this.keyDirection,this.snake.move()),this.snake.headRow==this.snakeFood.row&&this.snake.headCol==this.snakeFood.col){this.snake.length++,this.grade+=this.score,this.snake.setSnake(),this.setSpeed(),this.snake.snakeArr.forEach(g=>{const[y,S]=g;this.squareArr[y][S]=1});let h=[];this.squareArr.forEach((g,y)=>{g.forEach((S,R)=>{S==0&&h.push([y,R])})});let c=Math.random()*h.length|0;const[p,u]=h[c];this.snakeFood.row=p,this.snakeFood.col=u}else this.snake.setSnake();this.draw()}}const Q=`/** 蛇食物的类
* @param {number} row canvas行数
* @param {number} col canvas列数
*/
class SnakeFood {
 img: any;
 row: number;
 col: number;
 constructor(row: number, col: number) {
   this.row = row;
   this.col = col;
 }
}`,Z=`/** 生成蛇对象类
* @param {number} headRow 蛇头在canvas中的行位置
* @param {number} headCol 蛇头在canvas中的列位置
* @param {number} rowLength canvas行数
* @param {number} colLength canvas列数
*/
class Snake {
 snakeArr: any[][] = [];
 rowLength: number;
 colLength: number;
 headRow: number;
 headCol: number;
 length = 1;
 direction: string = '';
 die: boolean = false;
 constructor(headRow: number, headCol: number, rowLength: number, colLength: number) {
   this.headRow = headRow;
   this.headCol = headCol;
   this.rowLength = rowLength;
   this.colLength = colLength;
   this.snakeArr.push([headRow, headCol])
 }
 setSnake() {
   // 超出边界
   if (this.headRow < 0 || this.headRow >= this.rowLength
     || this.headCol < 0 || this.headCol >= this.colLength) {
     this.die = true;
     return;
   }
   // 碰到自己
   this.snakeArr.forEach((item) => {
     const [row, col] = item;
     if (row == this.headRow && col == this.headCol) {
       this.die = true;
       return;
     }
   })
   // 设置蛇头位置
   this.snakeArr.unshift([this.headRow, this.headCol]);
   if (this.snakeArr.length > this.length) {
     // 删掉最后一个方块
     this.snakeArr.pop();
   }
 }
 move() {
   switch (this.direction) {
     case "up": this.headRow--; break;
     case "down": this.headRow++; break;
     case "left": this.headCol--; break;
     case "right": this.headCol++; break;
     default: return;
   }
 }
}`,tt=`/** 贪吃蛇游戏类
* @param { object } option 配置对象
* @param { number } option.row 游戏行数
* @param { number } option.col 游戏列数
* @param { number } option.squareSize 游戏中每个方块的尺寸
* @param { HTMLCanvasElement } option.canvas 挂载的canvas结点
* @param { number } option.score 迟到食物的分值
*/
class GreedySnakeCanvas {
 row: number;
 col: number;
 squareSize: number;
 canvas: HTMLCanvasElement | null;
 score: number;
 ctx: any;
 keyDirection: string = '';
 private DirectionMap = new Map([
   ['up', 1],
   ['down', -1],
   ['left', 2],
   ['right', -2],
 ])
 private squareArr: number[][] = []
 private snake: Snake = new Snake(0, 0, 0, 0);
 private snakeFood: SnakeFood = new SnakeFood(0, 0);
 private timer: number = 0;
 private speed: number = 700;
 private grade: number = 0;
 constructor(option: { row: number, col: number, squareSize: number, canvas: HTMLCanvasElement, score?: number }) {
   const { row, col, squareSize, canvas, score } = option;
   this.row = row;
   this.col = col;
   this.squareSize = squareSize;
   this.canvas = canvas;
   this.ctx = this.canvas.getContext('2d');
   this.score = score || 1;
   this.init();
 }
 init() {
   this.speed = 700;
   this.grade = 0;
   this.keyDirection = '';
   this.canvas.width = this.col * this.squareSize;
   this.canvas.height = this.row * this.squareSize;
   // 实例化蛇
   let headRow = this.row / 2 | 0;
   let headCol = this.col / 2 | 0;
   this.snake = new Snake(headRow, headCol, this.row, this.col);
   // 实例化食物
   let foodRow = (Math.random() * this.row) | 0;
   let foodCol = (Math.random() * this.col) | 0;
   if (foodRow == headRow && foodCol == headCol) {
     foodRow++;
     foodCol++;
   }
   this.snakeFood = new SnakeFood(foodRow, foodCol);
   // 填充所有方块
   this.squareArr = [];
   for (let i = 0; i < this.row; i++) {
     this.squareArr.push([])
     for (let j = 0; j < this.col; j++) {
       this.squareArr[i].push(0)
     }
   }
   this.draw();
   this.ctx.textAlign = 'center';
   this.ctx.textBaseline = 'middle';
   this.ctx.font = "normal 200 30px Serif";
   this.ctx.fillText('按任意方向键开始游戏', this.canvas.width / 2, this.canvas.height / 2);
   this.interval();
 }
 interval() {
   clearInterval(this.timer)
   this.timer = setInterval(() => {
     if (!this.snake.die) {
       this.keyDirection && this.move()
     } else {
       this.gameover()
     }
   }, this.speed);
 }
 gameover() {
   clearInterval(this.timer);
   alert(\`游戏结束，得分：\${this.grade}\`);
   this.init();
 }
 draw() {
   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   let x;
   let y;
   // 画蛇
   this.ctx.fillStyle = 'blue';
   for (let snakeSquare of this.snake?.snakeArr) {
     const [row, col] = snakeSquare;
     x = col * this.squareSize;
     y = row * this.squareSize;
     this.ctx.fillRect(x, y, this.squareSize, this.squareSize)
   }
   // 画食物
   this.ctx.fillStyle = 'red';
   x = this.snakeFood.col * this.squareSize;
   y = this.snakeFood.row * this.squareSize;
   this.ctx.fillRect(x, y, this.squareSize, this.squareSize);
 }
 private setSpeed() {
   if (this.snake.length > this.squareArr.length * 0.7) { this.speed = 300; }
   else if (this.snake.length > this.squareArr.length * 0.5) { this.speed = 400; }
   else if (this.snake.length > this.squareArr.length * 0.3) { this.speed = 500; }
   else if (this.snake.length > this.squareArr.length * 0.1) { this.speed = 600; }
   this.interval()
 }
 move() {
   // 方向判定
   let snakeDirectionMapValue = this.DirectionMap.get(this.snake.direction) || 0;
   let keyDirectionMapValue = this.DirectionMap.get(this.keyDirection) || 0;
   if (this.snake.length > 1 && snakeDirectionMapValue == -keyDirectionMapValue) {
     this.snake.move();
   }
   else {
     this.snake.direction = this.keyDirection;
     this.snake.move();
   }
   // 吃到食物
   if (this.snake.headRow == this.snakeFood.row && this.snake.headCol == this.snakeFood.col) {
     this.snake.length++;
     this.grade += this.score;
     this.snake.setSnake();
     // 设置速度
     this.setSpeed();
     // 记录蛇占用的方块
     this.snake.snakeArr.forEach((item) => {
       const [row, col] = item;
       this.squareArr[row][col] = 1;
     })
     /** 空闲可用的方块 */
     let zeroSquare: any[] = []
     this.squareArr.forEach((rowItem, rowIndex) => {
       rowItem.forEach((colItem, colIndex) => {
         if (colItem == 0) {
           zeroSquare.push([rowIndex, colIndex])
         }
       })
     })
     // 改变食物位置
     let zeroSquareIndex = Math.random() * zeroSquare.length | 0
     const [foodRow, foodCol] = zeroSquare[zeroSquareIndex];
     this.snakeFood.row = foodRow;
     this.snakeFood.col = foodCol;
   } else {
     this.snake.setSnake();
   }
   this.draw();
 }
}`,m=d=>(W("data-v-bf23d8f4"),d=d(),J(),d),et=m(()=>o("h2",{id:"canvas-caselist-title"}," 案列效果 ",-1)),it=m(()=>o("br",null,null,-1)),st=m(()=>o("br",null,null,-1)),at=m(()=>o("br",null,null,-1)),rt=m(()=>o("h4",{id:"canvas-caselist-greedy_snake"},"贪吃蛇小游戏",-1)),nt=m(()=>o("br",null,null,-1)),ot=m(()=>o("h4",{id:"canvas-caselist-utilfunc"},"案例工具函数",-1)),ht=["id"],ct=["textContent"],lt=m(()=>o("br",null,null,-1)),dt=m(()=>o("h4",{id:"canvas-caselist-achieveclass"},"案例实现的类",-1)),pt=["id"],ut=["textContent"],mt=m(()=>o("br",null,null,-1)),vt=X({__name:"CaseList",setup(d){const r=x(),n=x(),h=x();let c;$(()=>{window.removeEventListener("keydown",c)});const p=x();function u(){p.value.moveSwitch()}class g{constructor(t){e(this,"canvas");e(this,"x");e(this,"y");e(this,"r");e(this,"xSpeed");e(this,"ySpeed");e(this,"ctx");e(this,"fillStyle");e(this,"frame",0);e(this,"moveFlag",!0);const{canvas:s,x:a,y:i,r:f,xSpeed:A,ySpeed:M,color:F,moveR:T}=t;this.canvas=s,this.r=f||3,this.x=a||R(0,s.width-this.r),this.y=i||R(0,s.height-this.r),this.xSpeed=A||1.25,this.ySpeed=M||1.25,this.ctx=s.getContext("2d"),this.fillStyle=F||"#fff",this.moveR=T||this.moveR}moveR(){this.x+=this.xSpeed,this.y+=this.ySpeed}draw(){if(this.x+this.r>this.canvas.width||this.y+this.r>this.canvas.height){cancelAnimationFrame(this.frame);return}this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle=this.fillStyle,this.ctx.fill()}move(){this.moveFlag&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.moveR(),this.draw(),this.frame=requestAnimationFrame(()=>this.move()))}moveSwitch(){this.moveFlag=!this.moveFlag,this.moveFlag&&this.move()}}class y{constructor(t,s=30,a=200){e(this,"canvas");e(this,"ctx");e(this,"pointNumber");e(this,"maxDis");e(this,"moveFlag",!0);e(this,"pointArr",[]);this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.pointNumber=s,this.maxDis=a,this.pointArr=new Array(this.pointNumber).fill(0).map(()=>new g({canvas:this.canvas,xSpeed:1.15*[-1,1][Math.floor(Math.random()*2)],ySpeed:1.15*[-1,1][Math.floor(Math.random()*2)],moveR:function(i){i=this,i.x+i.r>=i.canvas.width&&(i.x=i.canvas.width-i.r,i.xSpeed=-1.15),i.x<=i.r&&(i.x=i.r,i.xSpeed=1.15),i.y+i.r>=i.canvas.height&&(i.y=i.canvas.height-i.r,i.ySpeed=-1.15),i.y<=i.r&&(i.y=i.r,i.ySpeed=1.15),i.x+=i.xSpeed,i.y+=i.ySpeed}}))}draw(){if(this.moveFlag){requestAnimationFrame(()=>this.draw()),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t=0;t<this.pointNumber-1;t++){const s=this.pointArr[t];s.draw(),s.moveR();for(let a=t;a<this.pointNumber;a++){const i=this.pointArr[a];this.ctx.beginPath(),this.ctx.moveTo(s.x,s.y),this.ctx.lineTo(i.x,i.y);const f=Math.sqrt((i.x-s.x)**2+(i.y-s.y)**2);this.ctx.strokeStyle=`rgba(220,220,220,${1-f/this.maxDis})`,this.ctx.stroke()}}}}moveSwitch(){this.moveFlag=!this.moveFlag,this.moveFlag&&this.draw()}}class S{constructor(t){e(this,"canvas");e(this,"text");e(this,"font");e(this,"colorArr");e(this,"particleSize");e(this,"delay");e(this,"textCanvas",null);e(this,"textImageData",[]);e(this,"pixes",[]);e(this,"particles",[]);e(this,"frame");e(this,"delayTimer");e(this,"runFlag",!1);e(this,"isFirstRun",!0);e(this,"startRunTime",Date.now());e(this,"firstMoveTime",0);const{canvas:s,text:a,font:i,colorArr:f,particleSize:A,firstMoveR:M,secondMoveR:F,delay:T}=t;this.canvas=s,this.text=a||"🐖",this.font=i||"40px Arial",this.colorArr=f||["#ffa502","#ff6348","#ff4757","#2ed573","#1e90ff","#3745fa"],this.particleSize=A||5,this.firstMoveR=M||this.firstMoveR,this.secondMoveR=F||this.secondMoveR,this.delay=T||2e3,this.drawText(),this.drawPartcle()}drawText(){this.textCanvas=document.createElement("canvas");const t=this.textCanvas.getContext("2d");t.font=this.font;const{width:s}=t.measureText(this.text),a=s/j(this.text);this.textCanvas.width=s,this.textCanvas.height=a,t.font=this.font,t.textAlign="center",t.textBaseline="middle",t==null||t.fillText(this.text,s/2,a/2),this.textImageData=t==null?void 0:t.getImageData(0,0,s,a).data,this.pixes=[];for(let i=0;i<this.textImageData.length/4;i++)this.textImageData[i*4+3]!==0&&this.pixes.push(i);t==null||t.clearRect(0,0,s,a)}drawPartcle(){const t=(this.canvas.width-this.textCanvas.width)/2,s=(this.canvas.height-this.textCanvas.height)/2;for(let a of N(this.pixes,this.particleSize,this.textCanvas.width)){let i=a%this.textCanvas.width+t,f=a/this.textCanvas.width+s;this.particles.push(new g({canvas:this.canvas,x:i,y:f,r:this.particleSize/2,color:this.colorArr[Math.random()*this.colorArr.length|0]}))}}firstMoveR(){for(let t of this.particles){t.draw();const s=t.x,a=t.y;t.xSpeed=Math.random()-.5,t.ySpeed=Math.random()-.5,t.moveR=function(){(t.x<s-1||t.x>s+1)&&(t.xSpeed=-t.xSpeed),(t.y<a-1||t.y>a+1)&&(t.ySpeed=-t.ySpeed),t.x+=t.xSpeed,t.y+=t.ySpeed},t.moveR()}}secondMoveR(){for(let t of this.particles){t.draw();const s=t.y;t.xSpeed=(Math.random()-.5)*2,t.ySpeed=Math.random()-2,t.moveR=function(){t.y<s-10&&(t.ySpeed=-(2*t.ySpeed)),t.x+=t.xSpeed,t.y+=t.ySpeed},t.moveR()}}draw(){for(let t=0;t<this.particles.length;t++)this.particles[t].moveR(),this.particles[t].draw(),(this.particles[t].x<0||this.particles[t].x>this.canvas.width||this.particles[t].y<0||this.particles[t].y>this.canvas.height)&&this.particles.splice(t,1)}particleSwitch(){if(cancelAnimationFrame(this.frame),this.runFlag=!this.runFlag,this.runFlag&&this.run(),this.runFlag){if(this.firstMoveTime<this.delay){let t=this.delay-this.firstMoveTime;this.delayTimer=setTimeout(()=>{this.secondMoveR()},t)}this.run()}else clearTimeout(this.delayTimer),this.firstMoveTime=Date.now()-this.startRunTime}run(){if(!this.runFlag)return;const t=this.canvas.getContext("2d");t==null||t.clearRect(0,0,this.canvas.width,this.canvas.height),this.particles.length||(this.isFirstRun=!0,this.drawPartcle()),this.isFirstRun&&(this.startRunTime=Date.now(),this.isFirstRun=!1,this.firstMoveR(),this.delayTimer=setTimeout(()=>{this.secondMoveR()},this.delay)),this.draw(),this.frame=requestAnimationFrame(()=>this.run())}reset(){this.runFlag=!0,cancelAnimationFrame(this.frame),clearTimeout(this.delayTimer),this.particles=[],this.run()}}function R(l,t){return Math.floor(Math.random()*(t+1-l)+l)}function N(l,t,s){let a=[];for(let i of l)i%t===0&&(i/s|0)%t===0&&a.push(i);return a}function j(l){let t=1,s=1;const a=document.createElement("span");return a.textContent=l,a.style.display="inline-block",document.body.appendChild(a),t=a.clientWidth,s=a.clientHeight,document.body.removeChild(a),t/s}const k=x();function G(){k.value.reset()}function B(){k.value.particleSwitch()}U(()=>{const l=r._value;l.style.boxShadow="0 0 1px 1px",l.width=500*window.devicePixelRatio,l.height=400*window.devicePixelRatio,p.value=new y(l),p.value.draw(),u();const t=n._value;t.width=400*window.devicePixelRatio,t.height=200*window.devicePixelRatio,t.style.boxShadow="0 0 1px 1px",k.value=new S({canvas:t,text:"(⊙ˍ⊙)",font:"160px Arial",colorArr:["#ffa502","#ff6348","#ff4757","#2ed573","#1e90ff","#3745fa"]}),k.value.draw(),k.value.run();const s=h.value,a=new O({canvas:s,row:11,col:11,squareSize:50});c=i=>{switch(i.preventDefault(),i.key){case"ArrowUp":a.keyDirection="up";break;case"ArrowDown":a.keyDirection="down";break;case"ArrowLeft":a.keyDirection="left";break;case"ArrowRight":a.keyDirection="right";break}},window.addEventListener("keydown",c)});const v=x({getRandom:`function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}
`,dilutePixe:`function dilutePixe(pixes: number[], dilution: number, w: number) {
  let newPixes = []
  for (let p of pixes) {
    if (p % dilution === 0) {
      if ((p / w | 0) % dilution === 0) {
        newPixes.push(p)
      }
    }
  }
  return newPixes;
}
`,getTextScale:`function getTextScale(text: string) {
  let w = 1;
  let h = 1;
  const span = document.createElement('span');
  span.textContent = text;
  span.style.display = 'inline-block';
  document.body.appendChild(span);
  w = span.clientWidth;
  h = span.clientHeight;
  document.body.removeChild(span);
  return w / h
}
`,keydownHandle:`/** 键盘事件 */
  keydownHandle = (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp": greedySnake.keyDirection = 'up'; break;
      case "ArrowDown": greedySnake.keyDirection = 'down'; break;
      case "ArrowLeft": greedySnake.keyDirection = 'left'; break;
      case "ArrowRight": greedySnake.keyDirection = 'right'; break;
    }
  }`,createPoint:`/** 画布上生成点的类
 * @param {object} option 
 * @param {object} canvas: 挂载的画布对象
 * @param {number} x: 画布上的x坐标
 * @param {number} y: 画布上的x坐标
 * @param {number} r: 圆点半径
 * @param {object} color: 圆点的颜色
 * @param {number} xSpeed: x轴上的移动速度
 * @param {number} ySpeed: y轴上的移动速度
 * @param {function} moveR: 圆点的移动路径函数
 * }
 */
class CreatePoint {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  r: number;
  xSpeed: number;
  ySpeed: number;
  ctx: any;
  fillStyle: any;
  private frame: number = 0;
  private moveFlag: boolean = true;
  constructor(arg: {
    canvas: HTMLCanvasElement,
    x?: number,
    y?: number,
    r?: number,
    xSpeed?: number,
    ySpeed?: number,
    color?: any,
    moveR?: (_this?: CreatePoint) => void,
  }) {
    const { canvas, x, y, r, xSpeed, ySpeed, color, moveR } = arg;
    this.canvas = canvas;
    this.r = r || 3;
    this.x = x || getRandom(0, canvas.width - this.r);
    this.y = y || getRandom(0, canvas.height - this.r);
    this.xSpeed = xSpeed || 1.25;
    this.ySpeed = ySpeed || 1.25;
    this.ctx = canvas.getContext('2d');
    this.fillStyle = color || '#fff';
    this.moveR = moveR || this.moveR;
  }
  moveR() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  draw() {
    if (this.x + this.r > this.canvas.width || this.y + this.r > this.canvas.height) {
      cancelAnimationFrame(this.frame)
      return;
    }
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.fill();
  }
  move() {
    if (!this.moveFlag) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.moveR();
    this.draw();
    this.frame = requestAnimationFrame(() => this.move())
  }
  moveSwitch() {
    this.moveFlag = !this.moveFlag;
    this.moveFlag && this.move();
  }
}
`,createGraph:`/** 生成动态背景的类
 * @param {HTMLCanvasElement} canvas 挂载的画布对象
 * @param {number} pointNumber 图中点的数量
 * @param {number} maxDis 点之间最大连线距离
 */
class CreateGraph {
  canvas: HTMLCanvasElement;
  ctx: any;
  pointNumber: number;
  maxDis: number;
  private moveFlag: boolean = true;
  private pointArr: Array<any> = [];
  constructor(canvas: HTMLCanvasElement, pointNumber: number = 30, maxDis: number = 200) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.pointNumber = pointNumber;
    this.maxDis = maxDis;
    this.pointArr = new Array(this.pointNumber).fill(0).map(() => new CreatePoint({
      canvas: this.canvas,
      xSpeed: 1.15 * [-1, 1][Math.floor(Math.random() * 2)],
      ySpeed: 1.15 * [-1, 1][Math.floor(Math.random() * 2)],
      moveR: function (_this: CreatePoint) {
        _this = this; // this指向CreatePoint
        if (_this.x + _this.r >= _this.canvas.width) {
          _this.x = _this.canvas.width - _this.r
          _this.xSpeed = -1.15;
        }
        if (_this.x <= _this.r) {
          _this.x = _this.r
          _this.xSpeed = 1.15;
        }
        if (_this.y + _this.r >= _this.canvas.height) {
          _this.y = _this.canvas.height - _this.r
          _this.ySpeed = -1.15;
        }
        if (_this.y <= _this.r) {
          _this.y = _this.r
          _this.ySpeed = 1.15;
        }
        _this.x += _this.xSpeed;
        _this.y += _this.ySpeed;
      }
    }));
  }
  draw() {
    if (!this.moveFlag) return;
    requestAnimationFrame(() => this.draw())
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.pointNumber - 1; i++) {
      const p1 = this.pointArr[i];
      p1.draw();
      p1.moveR();
      for (let j = i; j < this.pointNumber; j++) {
        const p2 = this.pointArr[j];
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        const dis = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
        this.ctx.strokeStyle = 'rgba(220,220,220,\${1 - dis / this.maxDis})';
        this.ctx.stroke()
      }
    }
  }
  moveSwitch() {
    this.moveFlag = !this.moveFlag;
    this.moveFlag && this.draw();
  }
}
`,particleAnimation:`/** 画出文字粒子运动的类
 * @param {object} option
 * @param {HTMLCanvasElement} option.canvas 挂载画布对象
 * @param {string} option.text 文字
 * @param {string} option.font 文字字体(Context.font)
 * @param {string} option.colorArr 粒子颜色数组
 * @param {string} option.particleSize 粒子直径
 * @param {Funtion} option.firstMoveR 粒子第一阶段运动函数
 * @param {function} option.secondMoveR 粒子第二阶段运动函数
 * @param {number} option.delay 粒子第一阶段运动函数到第二阶段运动函数的延迟，单位ms
 */
class ParticleAnimation {
  canvas;
  text;
  font;
  colorArr;
  particleSize;
  delay;
  private textCanvas: HTMLCanvasElement | null = null;
  private textImageData: any = [];
  private pixes: any = []; // 文字占的像素位置
  private particles: any = []; // 显示的粒子
  private frame: any;
  private delayTimer: any;
  private runFlag: boolean = false;
  private isFirstRun: boolean = true;
  private startRunTime: number = Date.now();
  private firstMoveTime: number = 0;
  constructor(option: {
    canvas: HTMLCanvasElement,
    text?: string,
    font?: string,
    colorArr?: Array<any>,
    particleSize?: number,
    firstMoveR?: () => void,
    secondMoveR?: () => void,
    delay?: number,
  }) {
    const { canvas, text, font, colorArr, particleSize, firstMoveR, secondMoveR, delay } = option
    this.canvas = canvas;
    this.text = text || '🐖';
    this.font = font || '40px Arial';
    this.colorArr = colorArr || ['#ffa502', '#ff6348', '#ff4757', '#2ed573', '#1e90ff', '#3745fa'];
    this.particleSize = particleSize || 5;
    this.firstMoveR = firstMoveR || this.firstMoveR;
    this.secondMoveR = secondMoveR || this.secondMoveR;
    this.delay = delay || 2000;
    // 画出文字得到像素点和画出文字粒子，只执行一次
    this.drawText();
    this.drawPartcle();
  };
  /** 画出文字 */
  private drawText() {
    this.textCanvas = document.createElement('canvas');
    const ctx = this.textCanvas.getContext('2d');
    ctx.font = this.font;
    const { width } = ctx.measureText(this.text);
    const height = width / getTextScale(this.text);
    this.textCanvas.width = width;
    this.textCanvas.height = height
    ctx.font = this.font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx?.fillText(this.text, width / 2, height / 2);
    this.textImageData = ctx?.getImageData(0, 0, width, height).data;
    this.pixes = [];
    for (let i = 0; i < this.textImageData.length / 4; i++) {
      // 将有颜色的部分像素记录（文字部分）
      if (this.textImageData[i * 4 + 3] !== 0) {
        this.pixes.push(i)
      }
    }
    ctx?.clearRect(0, 0, width, height)
  }
  /** 画出粒子 */
  private drawPartcle() {
    /** 两个画布的width差/2 */
    const Dvalue_w = (this.canvas.width - this.textCanvas.width) / 2
    /** 两个画布的height差/2 */
    const Dvalue_h = (this.canvas.height - this.textCanvas.height) / 2
    // 生成粒子
    for (let i of dilutePixe(this.pixes, this.particleSize, this.textCanvas.width)) {
      let x = (i % this.textCanvas.width) + Dvalue_w;
      let y = (i / this.textCanvas.width) + Dvalue_h;
      this.particles.push(
        new CreatePoint({
          canvas: this.canvas,
          x,
          y,
          r: this.particleSize / 2,
          color: this.colorArr[Math.random() * this.colorArr.length | 0],
        })
      )
    }
  }
  /** 第一阶段粒子运动函数 */
  firstMoveR() {
    for (let p of this.particles) {
      p.draw();
      // 记录初始位置
      const startX = p.x;
      const startY = p.y;
      // 设置速度
      p.xSpeed = Math.random() - 0.5;
      p.ySpeed = Math.random() - 0.5;
      p.moveR = function () {
        if (p.x < startX - 1 || p.x > startX + 1) {
          p.xSpeed = -p.xSpeed;
        }
        if (p.y < startY - 1 || p.y > startY + 1) {
          p.ySpeed = -p.ySpeed;
        }
        p.x += p.xSpeed;
        p.y += p.ySpeed;
      }
      p.moveR();
    }
  }
  /** 第二阶段粒子运动函数 */
  secondMoveR() {
    for (let p of this.particles) {
      p.draw();
      // 记录初始位置
      const startY = p.y;
      p.xSpeed = (Math.random() - 0.5) * 2;
      p.ySpeed = Math.random() - 2;
      // 第一阶段，粒子晃动
      p.moveR = function () {
        if (p.y < startY - 10) {
          p.ySpeed = -(2 * p.ySpeed);
        }
        p.x += p.xSpeed;
        p.y += p.ySpeed;
      }
      p.moveR();
    }
  }
  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].moveR();
      this.particles[i].draw();
      if (
        this.particles[i].x < 0
        || this.particles[i].x > this.canvas.width
        || this.particles[i].y < 0
        || this.particles[i].y > this.canvas.height
      ) {
        this.particles.splice(i, 1)
      }
    }
  }
  particleSwitch() {
    cancelAnimationFrame(this.frame);
    this.runFlag = !this.runFlag;
    this.runFlag && this.run();
    if (this.runFlag) {
      // 如果在粒子运动第一阶段暂停
      if (this.firstMoveTime < this.delay) {
        let subTime = this.delay - this.firstMoveTime;
        this.delayTimer = setTimeout(() => {
          this.secondMoveR();
        }, subTime)
      }
      this.run();
    } else {
      clearTimeout(this.delayTimer)
      this.firstMoveTime = Date.now() - this.startRunTime;
    }
  }
  run() {
    if (!this.runFlag) return;
    const ctx = this.canvas.getContext('2d');
    ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // 动画结束
    if (!this.particles.length) {
      this.isFirstRun = true;
      this.drawPartcle();
    }
    // 第一次运动
    if (this.isFirstRun) {
      this.startRunTime = Date.now()
      this.isFirstRun = false;
      this.firstMoveR();
      this.delayTimer = setTimeout(() => {
        this.secondMoveR();
      }, this.delay)
    }
    this.draw();
    this.frame = requestAnimationFrame(() => this.run());
  }
  /** 重置 */
  reset() {
    this.runFlag = true;
    cancelAnimationFrame(this.frame);
    clearTimeout(this.delayTimer)
    this.particles = [];
    this.run();
  }
}
`}),_=x({func:[{title:"获取两个整数之间的随机数",code:v.value.getRandom},{title:"稀释像素点",code:v.value.dilutePixe},{title:"获取一段文字的宽高比",code:v.value.getTextScale},{title:"贪吃蛇的键盘事件",code:v.value.keydownHandle}],class:[{title:"画布上生成点的类",code:v.value.createPoint},{title:"画动态背景的类",code:v.value.createGraph},{title:"画粒子动画的类",code:v.value.particleAnimation},{title:"贪吃蛇食物类",code:Q},{title:"蛇的类",code:Z},{title:"贪吃蛇游戏的类",code:tt}]});return(l,t)=>(w(),b("div",null,[et,o("h4",{id:"canvas-caselist-bg"},[q(" 动态背景 "),o("button",{onClick:u}," 暂停/开始 ")]),o("canvas",{class:"canvas-bg",ref_key:"canvasRef1",ref:r},null,512),it,st,o("h4",{id:"canvas-caselist-pixe"},[q(" 粒子效果 "),o("button",{onClick:G}," 重置 "),o("button",{onClick:B}," 开始 / 暂停 ")]),o("canvas",{ref_key:"canvasRef2",ref:n},null,512),at,rt,o("canvas",{ref_key:"canvasRef3",ref:h,class:"canvas-bg"},null,512),nt,ot,(w(!0),b(D,null,z(_.value.func,(s,a)=>(w(),b("section",{key:s.title},[o("div",{id:"canvas-caselist-utilfunc"+(a+1),class:"three_Anchor"},C(s.title),9,ht),(w(),L(I,{key:new Date().getTime()+"utilfunc"+a},{default:P(()=>[o("div",{textContent:C(s.code)},null,8,ct)]),_:2},1024)),lt]))),128)),dt,(w(!0),b(D,null,z(_.value.class,(s,a)=>(w(),b("section",{key:s.title},[o("div",{id:"canvas-caselist-class"+(a+1),class:"three_Anchor"},C(s.title),9,pt),(w(),L(I,{key:new Date().getTime()+"class"+a},{default:P(()=>[o("div",{textContent:C(s.code)},null,8,ut)]),_:2},1024)),mt]))),128))]))}});const gt=K(vt,[["__scopeId","data-v-bf23d8f4"]]);export{gt as default};
