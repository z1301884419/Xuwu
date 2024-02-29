<template>
  <div>
    <!--  -->
    <h2 id="canvas-animation-title">canvas动画</h2>
    <div>实现原理：以渲染帧为时间单位，清空画布，再画出该帧时图像的样式</div>
    <div>请求渲染帧：requestAnimationFrame(callback)</div>
    <br />
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text="codeText.html1">
      </div>
    </CodeArea>
    <div>
      效果如下：
      <button class="stopMove" @click="stopMove">停止动画</button>
      <button class="beginMove" @click="beginMove">开始动画</button>
      <button class="resetMove" @click="resetMove">重置动画</button>
    </div>
    <br/>
    <canvas ref="canvasRef1"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
const canvasRef1 = ref<Element>();
const Square = ref({})

function stopMove() {
  Square.value.stop()
}
function beginMove() {
  Square.value.begin()
}
function resetMove() {
  Square.value.reset()
}

nextTick(() => {
  const canvas = canvasRef1._value;
  canvas.width = 400;
  canvas.height = 200;
  canvas.style.boxShadow = '0 0 1px 1px';
  const context = canvas.getContext("2d");
  context.fillStyle = '#009900';
  class DrawSquare {
    x; y; startX; startY; w; h; speed; canvas; context;
    private stopFlag = false;
    private timer;
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
      this.timer && cancelAnimationFrame(this.timer)
      this.moveRoute()
      if (this.x < 0 || this.y < 0 || this.x > this.canvas.width || this.y > this.canvas.height || this.stopFlag) return;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.draw()
      this.timer = requestAnimationFrame(() => this.move())
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
  Square.value = new DrawSquare(0, 50, 25, 25, 1.5, canvas)
  Square.value.draw()
  Square.value.move()
})

const codeText = ref({
  html1: `class DrawSquare {
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

`,
});
</script>

<style lang="less" scoped>
.stopMove {
  margin-left: 50px;
}

.beginMove {
  margin-left: 20px;
}

.resetMove {
  margin-left: 20px;
}
</style>
