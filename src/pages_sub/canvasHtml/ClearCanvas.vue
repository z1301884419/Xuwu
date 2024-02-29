<template>
  <div>
    <!--  -->
    <h2 id="clear-canvas-title"> 檫除和清空canvas </h2>
    <div>清除某块区域：clearRect(x,y,width,height)</div>
    <div>清除整个区域：重新设置画布的宽高，就会清空画布</div>
    <!--  -->
    <br />
    <h4 id="clear-canvas-clearrect"> clearRect(x,y,width,height) </h4>
    <div>x,y：从坐标为(x,y)处开始檫除</div>
    <div>width,height：要檫除的宽度和高度</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text="codeText.html1">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef1"></canvas>
    <br/>
    <br/>
    <h4 id="clear-canvas-restwh"> 重置画布宽高 </h4>
    <CodeArea :key="new Date().getTime() + 'html2'">
      <div v-text="codeText.html2">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef2"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
const canvasRef1 = ref<Element>();
const canvasRef2 = ref<Element>();

nextTick(() => {
  const canvas = canvasRef1._value;
  canvas.width = 400;
  canvas.height = 200;
  canvas.style.boxShadow = '0 0 1px 1px';
  const context = canvas.getContext("2d");
  context.fillStyle = "#009900";
  context.fillRect(10, 10, 100, 100);
  context.fillStyle = '#005500';
  context.fillRect(50,50,100,100)
  // 
  context.clearRect(70,70,20,30)

  //
  const canvas2 = canvasRef2._value;
  canvas2.width = 400;
  canvas2.height = 200;
  canvas2.style.boxShadow = '0 0 1px 1px';
  const context2 = canvas2.getContext("2d");
  context2.fillStyle = "#009900";
  context2.fillRect(0, 0, 400, 200);
  canvas2.width = 200;
  canvas2.height = 200;
})

const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.fillRect(10, 10, 100, 100);
context.fillStyle = '#005500';
context.fillRect(50,50,100,100)
//
context.clearRect(70,70,20,30)
`,
  html2: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.fillRect(0, 0, 400, 200);
//
canvas.width = 200;
canvas.height = 200;
`,
});
</script>

<style lang="less" scoped></style>
