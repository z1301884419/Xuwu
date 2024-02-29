<template>
  <div>
    <!--  -->
    <h2 id="canvas-caselist-title"> 案列效果 </h2>
    <!--  -->
    <h4 id="canvas-caselist-bg">
      动态背景
      <button @click="bgGraphSwitch"> 暂停/开始 </button>
    </h4>
    <canvas class="canvas-bg" ref="canvasRef1"></canvas>
    <br />
    <br />
    <h4 id="canvas-caselist-pixe">
      粒子效果
      <button @click="particleReset"> 重置 </button>
      <button @click="particleSwitch"> 开始 / 暂停 </button>
    </h4>
    <canvas ref="canvasRef2"></canvas>
    <br />
    <h4 id="canvas-caselist-greedy_snake">贪吃蛇小游戏</h4>
    <canvas ref="canvasRef3" class="canvas-bg"></canvas>
    <br />
    <h4 id="canvas-caselist-utilfunc">案例工具函数</h4>
    <section v-for="(item, index) of funcAndClass.func" :key="item.title">
      <div :id="'canvas-caselist-utilfunc'+(index+1)" class="three_Anchor">{{ item.title }}</div>
      <CodeArea :key="new Date().getTime() + 'utilfunc'+index">
        <div v-text="item.code">
        </div>
      </CodeArea>
      <br />
    </section>
    <h4 id="canvas-caselist-achieveclass">案例实现的类</h4>
    <section v-for="(item, index) of funcAndClass.class" :key="item.title">
      <div  :id="'canvas-caselist-class'+ (index+1)" class="three_Anchor">{{ item.title }}</div>
      <CodeArea :key="new Date().getTime() + 'class'+index">
        <div v-text="item.code">
        </div>
      </CodeArea>
      <br />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
import {
  GreedySnakeCanvas,
  SnakeFoodHtml,
  snakeHtml,
  greedySnakeCanvasHtml
} from './greedySnkeCanvas'
const canvasRef1 = ref<Element>();
const canvasRef2 = ref<Element>();
const canvasRef3 = ref<Element>();


/** 键盘事件 */
let keydownHandle: any;
onUnmounted(() => {
  window.removeEventListener('keydown', keydownHandle)
})

/** 动态背景实例化对象  */
const bgGraph = ref();
/** 背景图开始/暂停函数 */
function bgGraphSwitch() {
  bgGraph.value.moveSwitch()
}
/** 画布上生成点的类
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

/** 生成动态背景的类
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
        this.ctx.strokeStyle = `rgba(220,220,220,${1 - dis / this.maxDis})`;
        this.ctx.stroke()
      }
    }
  }
  moveSwitch() {
    this.moveFlag = !this.moveFlag;
    this.moveFlag && this.draw();
  }
}
/** 画出文字粒子运动的类
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

/** 获取两个整数之间的随机数 */
function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}
/** 稀释像素点
 * @param {number[]} pixes 源像素数组data
 * @param {number} dilution 稀释度
 * @param {number} w 源图像的宽
 * @example dilutePixe(pixesData,5,200)
 */
function dilutePixe(pixes: number[], dilution: number, w: number) {
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
/** 获取一段文字的宽高比 */
function getTextScale(text: string) {
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

/** 粒子效果的实例对象 */
const particle = ref();
function particleReset() {
  particle.value.reset();
}
function particleSwitch() {
  particle.value.particleSwitch();
}

nextTick(() => {
  // 动态背景
  const canvas = canvasRef1._value;
  canvas.style.boxShadow = '0 0 1px 1px';
  canvas.width = 500 * window.devicePixelRatio;
  canvas.height = 400 * window.devicePixelRatio;
  bgGraph.value = new CreateGraph(canvas);
  bgGraph.value.draw();
  bgGraphSwitch();

  // 粒子效果
  const canvas2 = canvasRef2._value;
  canvas2.width = 400 * window.devicePixelRatio;
  canvas2.height = 200 * window.devicePixelRatio;
  canvas2.style.boxShadow = '0 0 1px 1px';
  particle.value = new ParticleAnimation({
    canvas: canvas2,
    text: "(⊙ˍ⊙)",
    font: '160px Arial',
    colorArr: ['#ffa502', '#ff6348', '#ff4757', '#2ed573', '#1e90ff', '#3745fa'],
  });
  particle.value.draw();
  particle.value.run();

  // 贪吃蛇游戏
  const canvas3 = canvasRef3.value;
  const greedySnake = new GreedySnakeCanvas({
    canvas: canvas3,
    row: 11,
    col: 11,
    squareSize: 50,
  })
  /** 键盘事件 */
  keydownHandle = (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp": greedySnake.keyDirection = 'up'; break;
      case "ArrowDown": greedySnake.keyDirection = 'down'; break;
      case "ArrowLeft": greedySnake.keyDirection = 'left'; break;
      case "ArrowRight": greedySnake.keyDirection = 'right'; break;
    }
  }
  window.addEventListener('keydown', keydownHandle)
})

const codeText = ref({
  getRandom: `function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}
`,
  dilutePixe: `function dilutePixe(pixes: number[], dilution: number, w: number) {
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
`,
  getTextScale: `function getTextScale(text: string) {
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
`,
  keydownHandle: `/** 键盘事件 */
  keydownHandle = (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp": greedySnake.keyDirection = 'up'; break;
      case "ArrowDown": greedySnake.keyDirection = 'down'; break;
      case "ArrowLeft": greedySnake.keyDirection = 'left'; break;
      case "ArrowRight": greedySnake.keyDirection = 'right'; break;
    }
  }`,
  createPoint: `/** 画布上生成点的类
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
`,
  createGraph: `/** 生成动态背景的类
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
`,
  particleAnimation: `/** 画出文字粒子运动的类
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
`,
});

/** 工具函数和实现类的管理 */
const funcAndClass = ref({
  'func': [
    {
      title: '获取两个整数之间的随机数',
      code: codeText.value.getRandom,
    },
    {
      title: '稀释像素点',
      code: codeText.value.dilutePixe,
    },
    {
      title: '获取一段文字的宽高比',
      code: codeText.value.getTextScale,
    },
    {
      title: '贪吃蛇的键盘事件',
      code: codeText.value.keydownHandle,
    },
  ],
  'class': [
    {
      title: '画布上生成点的类',
      code: codeText.value.createPoint,
    },
    {
      title: '画动态背景的类',
      code: codeText.value.createGraph,
    },
    {
      title: '画粒子动画的类',
      code: codeText.value.particleAnimation,
    },
    {
      title: '贪吃蛇食物类',
      code: SnakeFoodHtml,
    },
    {
      title: '蛇的类',
      code: snakeHtml,
    },
    {
      title: '贪吃蛇游戏的类',
      code: greedySnakeCanvasHtml,
    },
  ]
})
</script>

<style lang="less" scoped>
.canvas-bg {
  display: block;
  background-color: rgba(30, 30, 30, 0.7);
}

.three_Anchor {
  font-weight: bold;
}

button {
  margin: 0 10px;
}
</style>
