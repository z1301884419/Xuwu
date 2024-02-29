<template>
  <div>
    <!--  -->
    <h2 id="canvas-statecache-title">状态的保存与取出 </h2>
    <div>如果在同一个canvas里需要重复画不同的样式的图形时，使用状态的保存与取出会有效减少你的代码</div>
    <h4>context.save(): 将当前的样式保存（进栈）</h4>
    <h4>context.restore(): 取出栈里面的第一个状态</h4>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text="codeText.html1">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef1"></canvas>
    <br/>
    <br/>
    <h4 id="canvas-statecache-savestyle">可以进行保存的值有: </h4>
    <ul>
      <li v-for="item of saveState" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
const canvasRef1 = ref<Element>();

const saveState = ref([
  'fillStyle','stokeStyle','lineWidth','lineJoin','lineCap','font',
  'textAlign','textBaseline','direction ','miterLimit','shadowOffsetX','shadowOffsetY',
  'shadowBlur','shadowColor','globalAlpha','globalCompositionOperation',
  'translate','rotate'
])

nextTick(() => {
  const canvas = canvasRef1._value;
  canvas.width = 400;
  canvas.height = 100;
  canvas.style.boxShadow = '0 0 1px 1px';
  const context = canvas.getContext("2d");
  // 
  context.fillStyle = '#660099';
  context.strokeStyle = '#0055ff';
  context.lineWidth = 5;
  context.save();
  //
  context.fillRect(10, 10, 50, 50);
  context.strokeRect(10, 10, 50, 50);
  //
  context.fillStyle = '#ff22ff';
  context.strokeStyle = '#ffff00';
  context.lineWidth = 10;
  context.save();
  //
  context.fillRect(80, 10, 50, 50);
  context.strokeRect(80, 10, 50, 50);
  //
  context.fillStyle = '#990000';
  context.fillRect(150, 10, 50, 50);
  context.strokeRect(150, 10, 50, 50);
  context.save()
  //
  context.restore();
  context.restore();
  context.fillRect(220, 10, 50, 50);
  context.strokeRect(220, 10, 50, 50);
  //
  context.restore();
  context.fillRect(290, 10, 50, 50);
  context.strokeRect(290, 10, 50, 50);

})

const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.fillStyle = '#660099';
context.strokeStyle = '#0055ff';
context.lineWidth = 5;
context.save();

// 此时fillStyle = '#660099';strokeStyle = '#0055ff';lineWidth = 5;
context.fillRect(10, 10, 50, 50);
context.strokeRect(10, 10, 50, 50);
//
context.fillStyle = '#ff22ff';
context.strokeStyle = '#ffff00';
context.lineWidth = 10;
context.save();

//此时fillStyle = '#ff22ff';strokeStyle = '#ffff00';lineWidth = 10;
context.fillRect(80, 10, 50, 50);
context.strokeRect(80, 10, 50, 50);
//
context.fillStyle = '#990000';
context.fillRect(150, 10, 50, 50);
context.strokeRect(150, 10, 50, 50);
context.save()
//
context.restore();
//此时fillStyle = '#990000';strokeStyle = '#ffff00';lineWidth = 10;
context.restore();
//此时fillStyle = '#ff22ff';strokeStyle = '#ffff00';lineWidth = 10;
context.fillRect(220, 10, 50, 50);
context.strokeRect(220, 10, 50, 50);
//
context.restore();
// 此时fillStyle = '#660099';strokeStyle = '#0055ff';lineWidth = 5;
context.fillRect(290, 10, 50, 50);
context.strokeRect(290, 10, 50, 50);
`,
});
</script>

<style lang="less" scoped>
  li{
    margin: 4px;
  }
</style>
