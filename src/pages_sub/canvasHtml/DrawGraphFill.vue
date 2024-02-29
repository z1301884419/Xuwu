<template>
  <div>
    <!--  -->
    <h2 id="draw-graphfill-title"> 描边和填充 </h2>
    <div>获取到“2d”上下文后，可以在画布上画画了</div>
    <br/>
    <div>描边：stroke;与lineWidth连用，画线条和中空图形</div>
    <div>strokeStyle = “color”: 描边样式（边框颜色）</div>
    <div>lineWidth = number： 线条宽度</div>
    <div>strokeRect(x,y,widht,height)：x相对于画布（0，0）的距离、y相对于画布（0，0）的距离、要画的宽度、要画的高度</div>
    <br/>
    <div>填充：fill,画实心图形</div>
    <div>fillkeStyle = “color”:</div>
    <div>fillRect(x,y,widht,height)</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text='codeText.html1'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef1"></canvas>
    <!--  -->
    <h4 id="draw-graphfill-gradient"> 渐变描边和填充 </h4>
    <h5>渐变类型</h5>
    <div>线性渐变：createLinearGradient(x1,y1,x2,y2)；</div>
    <div>其中渐变方向为(x1,y1)到(x2,y2)的方向；渐变范围为整个canvas</div>
    <br/>
    <div>径向渐变：createRadialGradient(x1,y1,r1,x2,y2,r2)</div>
    <div>径向渐变由两个圆控制，其中(x1,y1),(x2,y2)为圆心；r1,r2为半径；渐变范围为整个canvas</div>
    <h5>渐变颜色：addColorStop(0~1,color)</h5>
    <div>使用createLinearGradient或createRadialGradient时，会返回一个设置渐变属性的对象；
      使用该对象的addColorStop(0~1,color)来设置渐变的颜色</div>
    <br/>
    <div>第一参数为一个百分比值，第二个参数为该百分比位置的颜色值</div>

    <CodeArea :key="new Date().getTime() + 'html2'">
      <div v-text='codeText.html2'>
      </div>
    </CodeArea>
    <div>效果如下：上面为线性渐变，下面为径向渐变</div>
    <br>
    <canvas ref="canvasRef2"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue'
const canvasRef1 = ref<Element>();
const canvasRef2 = ref<Element>();
nextTick(() => {
  const context = canvasRef1._value.getContext("2d");
  canvasRef1._value.width = 400;
  canvasRef1._value.height = 200;
  canvasRef1._value.style.boxShadow = '0 0 1px 1px';
  context.strokeStyle = "#000000";
  context.lineWidth = 15;
  context.strokeRect(30, 10, 150, 100);
  context.fillStyle = "#009900";
  context.fillRect(30, 10, 150, 100);
  // 
  const context2 = canvasRef2._value.getContext("2d");
  canvasRef2._value.width = 350;
  canvasRef2._value.height = 350;
  canvasRef2._value.style.boxShadow = '0 0 1px 1px';
  //
  const linearGradient = context2.createLinearGradient(50,30,150,130);
  linearGradient.addColorStop(0.15,'rgb(255,0,0)')
  linearGradient.addColorStop(0.5,'rgb(0,255,0)')
  linearGradient.addColorStop(0.85,'rgb(0,0,255)')
  context2.fillStyle = linearGradient;
  context2.fillRect(50,30,100,100)
  context2.fillRect(0,10,400,10)
  context2.fillRect(0,140,400,10)
  //
  const radialGradient = context2.createRadialGradient(100,250,50,100,250,10);
  radialGradient.addColorStop(0,'rgb(0,0,255)')
  radialGradient.addColorStop(0.5,'rgb(0,255,0)')
  radialGradient.addColorStop(1,'rgb(255,0,0)')
  context2.fillStyle = radialGradient;
  context2.fillRect(50,200,100,100)
  context2.fillRect(0,180,400,10)
  context2.fillRect(0,310,400,10)
})
const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 描边
context.strokeStyle = "#000000";
context.lineWidth = 15; 
/** 绘制参数： */
context.strokeRect(30,10,150,100); 
// 填充
context.fillStyle = "#009900";
context.fillRect(30,10,150,100);
`,html2: `const canvas = document.querySelector("canvas");
canvas.width = 350;
canvas.height = 350;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 线性渐变
const linearGradient = context.createLinearGradient(50,30,150,130);
linearGradient.addColorStop(0.15,'rgb(255,0,0)')
linearGradient.addColorStop(0.5,'rgb(0,255,0)')
linearGradient.addColorStop(0.85,'rgb(0,0,255)')
context.fillStyle = linearGradient;
context.fillRect(50,30,100,100)
context.fillRect(0,10,400,10)
context.fillRect(0,140,400,10)
// 径向渐变
const radialGradient = context.createRadialGradient(100,250,50,100,250,10);
radialGradient.addColorStop(0,'rgb(0,0,255)')
radialGradient.addColorStop(0.5,'rgb(0,255,0)')
radialGradient.addColorStop(1,'rgb(255,0,0)')
context.fillStyle = radialGradient;
context.fillRect(50,200,100,100)
context.fillRect(0,180,400,10)
context.fillRect(0,310,400,10)
context.fillRect(30,10,150,100);
`,
});
</script>

<style lang="less" scoped></style>
