<template>
  <div>
    <!--  -->
    <h2 id="canvas_compose-title"> 合成(图层控制) </h2>
    <div>2D上下文中由两个属性可以改变图层的显示效果：</div>
    <div>globalAlpha:透明度</div>
    <div>globalCompositeOperation:合成</div>
    <!--  -->
    <br />
    <h4 id="canvas_compose-alpha">globalAlpha:透明度（在绘制前设置生效）</h4>
    <div>context.globalAlpha = 0~1</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text="codeText.html1">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef1"></canvas>
    <br/>
    <br/>
    <h4 id="canvas_compose-compose"> globalCompositeOperation:合成（在绘制新图像前设置生效） </h4>
    <div>globalCompositeOperation设置新(源)图像与旧(目标)图像的合成显示效果，其值可以是：</div>
    <br/>
    <div>copy：只保留新图像</div>
    <div>destination-atop：重叠部分显示旧图像，其余显示新图像</div>
    <div>destination-in：只显示重叠部分的旧图像</div>
    <div>destination-out：只显示旧图像未重叠部分</div>
    <div>destination-over：新旧图像都显示，旧图像在上层</div>
    <div>source-atop：重叠部分显示新图像，其余显示旧图像</div>
    <div>source-in：只显示重叠部分的新图像</div>
    <div>source-out：只显示新图像未重叠部分</div>
    <div>source-over：新旧图像都显示，新图像在上层(默认值)</div>
    <div>xor：只显示新旧图像未重叠部分</div>
    <div>lighter：新旧图像都显示，重叠部分的颜色值做加处理：如#554433与#334455得到#888888</div>
    <div>lighten：新旧图像都显示，重叠部分的颜色值取小值：如#554433与#334455得到#334433</div>
    <div>darken：新旧图像都显示，重叠部分的颜色值取大值：如#554433与#334455得到#554455</div>
    <CodeArea :key="new Date().getTime() + 'html2'">
      <div v-text="codeText.html2">
      </div>
    </CodeArea>
    选值查看效果：
    <select v-model="globalCompositeOperationValue" @change="valueChange">
      <option v-for="item of valueArr" :key="item" :value="item">{{ item }}</option>
    </select>
    <br/>
    <br/>
    <canvas ref="canvasRef2"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
const canvasRef1 = ref<Element>();
const canvasRef2 = ref<Element>();

const globalCompositeOperationValue = ref('source-over');
const valueArr = ['copy','destination-atop','destination-in',
'destination-out','destination-over','source-atop',
'source-in','source-out','source-over','xor','lighter','lighten','darken']

function valueChange(){
  const canvas2 = canvasRef2._value;
  canvas2.width = 400;
  canvas2.height = 200;
  canvas2.style.boxShadow = '0 0 1px 1px';
  const context2 = canvas2.getContext("2d");
  context2.fillStyle = "#554433";
  context2.fillRect(20, 20, 100, 100);
  context2.globalCompositeOperation = globalCompositeOperationValue._value;
  context2.fillStyle = "#334455";
  context2.fillRect(70, 70, 100, 100);
}

nextTick(() => {
  const canvas = canvasRef1._value;
  canvas.width = 400;
  canvas.height = 150;
  canvas.style.boxShadow = '0 0 1px 1px';
  const context = canvas.getContext("2d");
  context.fillStyle = "#009900";
  context.globalAlpha = 0.5;
  context.fillRect(10, 10, 100, 100);
  //
  const canvas2 = canvasRef2._value;
  canvas2.width = 400;
  canvas2.height = 200;
  canvas2.style.boxShadow = '0 0 1px 1px';
  const context2 = canvas2.getContext("2d");
  context2.fillStyle = "#554433";
  context2.fillRect(20, 20, 100, 100);
  context2.fillStyle = "#334455";
  context2.fillRect(70, 70, 100, 100);
})

const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 150;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#009900";
context.globalAlpha = 0.5; // 在绘制前设置生效
context.fillRect(10, 10, 100, 100);
`,
  html2: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle = "#554433";
context.fillRect(20, 20, 100, 100);
context.globalCompositeOperation = "选的值";
context.fillStyle = "#334455";
context.fillRect(70, 70, 100, 100);
`,
});
</script>

<style lang="less" scoped>
  select{
    width: 150px;
    height: 28px;
    font-size: 18px;
    border-radius: 5px;
  }
</style>
