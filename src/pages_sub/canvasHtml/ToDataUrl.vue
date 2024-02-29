<template>
  <div>
    <!--  -->
    <h2 id="canvas-todataurl-title">canvas toDataURL </h2>
    <div>将canvas绘制的图像转换成base64格式的url字符串（canvas自身的样式不会被转换）</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text="codeText.html1">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef1"></canvas>
    <span class="url-text">{{ canvasUrl1 }}</span>
    <br/>
    <br/>
    <div>img使用src引用：红色边框为img标签的属性</div>
    <br/>
    <img style="border: 1px solid red;" :src="canvasUrl1" alt="">
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
const canvasRef1 = ref<Element>();
const canvasUrl1 = ref();

nextTick(() => {
  const canvas = canvasRef1._value;
  canvas.width = 150;
  canvas.height = 150;
  canvas.style.boxShadow = '0 0 1px 1px';
  canvas.style.background = '#000000';
  const context = canvas.getContext("2d");
  //
  context.fillStyle = "#88ff99";
  context.fillRect(25, 25, 100, 100);
  canvasUrl1.value = canvas.toDataURL();
})

const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 150;
canvas.height = 150;
canvas.style.boxShadow = '0 0 1px 1px';
canvas.style.background = '#000000';
const context = canvas.getContext("2d");
//
context.fillStyle = "#88ff99";
context.fillRect(25, 25, 100, 100);
document.querySelector("img").src = canvas.toDataURL();
`,
});
</script>

<style lang="less" scoped>
  .url-text{
    display: inline-block;
    border: 1px solid black;
    width: 200px;
    height: 150px;
    overflow-y: scroll;
    padding: 10px;
    margin-left: 20px;
    box-sizing: border-box;
    overflow-wrap:  break-word;
  }
</style>
