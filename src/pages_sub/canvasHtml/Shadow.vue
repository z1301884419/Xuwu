<template>
  <div>
    <!--  -->
    <h2 id="canvas-shadow-title">阴影 </h2>
    <div>阴影的设置要在绘制之前</div>
    <h4>canvas阴影由以下4个属性控制：</h4>
    <div>shadowOffsetX：阴影离源图象在x轴上的距离</div>
    <div>shadowOffsetY：阴影离源图象在y轴上的距离</div>
    <div>shadowBlur：设置阴影的模糊度</div>
    <div>shadowColor：设置阴影的颜色</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text="codeText.html1">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef1"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
const canvasRef1 = ref<Element>();

nextTick(() => {
  const canvas = canvasRef1._value;
  canvas.width = 400;
  canvas.height = 200;
  canvas.style.boxShadow = '0 0 1px 1px';
  const context = canvas.getContext("2d");
  // 阴影的设置要在绘制之前
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.shadowColor = "#000000";
  //
  context.fillStyle = "#88ff99";
  context.fillRect(10, 10, 100, 100);

})

const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 阴影的设置要在绘制之前
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 10;
context.shadowColor = "#000000";
//
context.fillStyle = "#88ff99";
context.fillRect(10, 10, 100, 100);
`,
});
</script>

<style lang="less" scoped></style>
