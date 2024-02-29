<template>
  <div>
    <!--  -->
    <h2 id="canvas-morph-title"> 变形 </h2>
    <div>可以对canvas图像进行一些变形操作，如：位移，旋转，缩放；只对设置后画的图形生效</div>
    <h4 id="canvas-morph-translate"> 平移：translate(x, y) </h4>
    <div>x,y：在x,y轴移动的量(可以理解将将原来(x,y)的点重新作为坐标原点(0,0))</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text="codeText.html1">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef1"></canvas>
    <br/>
    <br/>
    <h4 id="canvas-morph-rotate"> 旋转：rotate(弧度) </h4>
    <div>以坐标原点(0,0)为旋转点，逆时针开始旋转</div>
    <CodeArea :key="new Date().getTime() + 'html2'">
      <div v-text="codeText.html2">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef2"></canvas>
    <br/>
    <br/>
    <h4 id="canvas-morph-scale"> 缩放：scale(scaleX, scaleY) </h4>
    <div>scaleX: x轴的坐标缩放的倍数</div>
    <div>scaleY: y轴的坐标缩放的倍数</div>
    <CodeArea :key="new Date().getTime() + 'html3'">
      <div v-text="codeText.html3">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef3"></canvas>
    <br/>
    <br/>
    <!--  -->
    <h4 id="canvas-morph-mix"> 混合使用 </h4>
    <CodeArea :key="new Date().getTime() + 'html4'">
      <div v-text="codeText.html4">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef4"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
const canvasRef1 = ref<Element>();
const canvasRef2 = ref<Element>();
const canvasRef3 = ref<Element>();
const canvasRef4 = ref<Element>();

nextTick(() => {
  const canvas = canvasRef1._value;
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
  //旋转
  const canvas2 = canvasRef2._value;
  canvas2.width = 400;
  canvas2.height = 200;
  canvas2.style.boxShadow = '0 0 1px 1px';
  const context2 = canvas2.getContext("2d");
  context2.fillStyle = "#009900";
  context2.fillRect(50, 50, 100, 100);
  context2.moveTo(0,0)
  context2.lineTo(100,100);
  context2.strokeStyle = '#000000';
  context2.stroke();
  context2.rotate((Math.PI / 180) * 25);
  context2.fillStyle = "#660088";
  context2.fillRect(50, 50, 100, 100);
  context2.moveTo(0,0)
  context2.lineTo(100,100);
  context2.strokeStyle = '#000000';
  context2.stroke();
  // 缩放
  const canvas3 = canvasRef3._value;
  canvas3.width = 400;
  canvas3.height = 200;
  canvas3.style.boxShadow = '0 0 1px 1px';
  const context3 = canvas3.getContext("2d");
  context3.fillStyle = "#009900";
  context3.fillRect(0, 0, 50, 50);
  context3.scale(2,2);
  context3.fillStyle = "#660088";
  context3.fillRect(50, 50, 50, 50); // 相当于原来的context3.fillRect(100, 100, 100, 100)
  // 混合使用
  const canvas4 = canvasRef4._value;
  canvas4.width = 400;
  canvas4.height = 200;
  canvas4.style.boxShadow = '0 0 1px 1px';
  const context4 = canvas4.getContext("2d");
  context4.fillStyle = "#009900";
  context4.fillRect(50, 50, 100, 100);
  context4.translate(100, 100);
  context4.rotate((Math.PI / 180) * 45);
  context4.translate(-100, -100);
  context4.scale(1.5,1.5);
  context4.fillStyle = "#660088";
  context4.fillRect(50/1.5, 50/1.5, 100/1.5, 100/1.5);

})

const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
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
`,
  html2: `const canvas = document.querySelector("canvas");
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
`, html3: `const canvas = document.querySelector("canvas");
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
context.fillRect(50/1.5, 50/1.5, 100/1.5, 100/1.5);`
});
</script>

<style lang="less" scoped></style>
