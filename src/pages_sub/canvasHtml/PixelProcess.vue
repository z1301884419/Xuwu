<template>
  <div>
    <!--  -->
    <h2 id="canvas-pixelprocess-title">像素处理 </h2>
    <div>在canvas中可以通过设置像素点的颜色来画图，也可以获取到某点的像素值</div>
    <h4 id="canvas-pixelprocess-create">创建像素数据对象：createImageData(width,height)</h4>
    <div>width,height: 像素图像的宽高</div>
    <br/>
    <div>调用createImageData(w,h)会返回一个像素数据对象imageDataObj，其中data属性为像素的值</div>
    <div>imageDataObj.data为一个数组，其中每4个值代表一个像素点的值，分别对应rgba(redColor,greenColor,blueColor,alpha)的4个值</div>
    <h4 id="canvas-pixelprocess-put">将像素数据放入画布：putImageData(imageData,canvsX,canvasY,sliceX,sliceY,sliceW,sliceH)</h4>
    <div>imageData：像素数据</div>
    <div>(canvsX,canvsY)：要放入画布的位置</div>
    <div>(sliceX,sliceY)：裁剪像素图像的位置</div>
    <div>(sliceW,sliceH)：要裁剪的宽高</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text="codeText.html1">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef1"></canvas>
    <br />
    <h4 id="canvas-pixelprocess-get">从canvas中获取像素：getImageData(x,y,width,height)</h4>
    <div>(x,y)：从(x,y)处开始获取像素值</div>
    <div>(width,height)：要获取的宽高</div>
    <div>返回一个像素数据对象imageDataObj</div>
    <CodeArea :key="new Date().getTime() + 'html2'">
      <div v-text="codeText.html2">
      </div>
    </CodeArea>
    <div>效果如下</div>
    <canvas ref="canvasRef2"></canvas>
    <br/>
    <br/>
    data值如下：
    <br/>
    <br/>
    <div class="imageData2">[{{ imageData2.toString() }}]</div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue';
const canvasRef1 = ref<Element>();
const canvasRef2 = ref<Element>();
const imageData2 =ref([]);

nextTick(() => {
  const canvas = canvasRef1._value;
  canvas.width = 400;
  canvas.height = 200;
  canvas.style.boxShadow = '0 0 1px 1px';
  const context = canvas.getContext("2d");
  let imageDataObj = context.createImageData(100, 100);
  for (let i = 0; i < imageDataObj.data.length; i++) {
    if (i < imageDataObj.data.length/4) setpixe(i,[255,0,0,255],imageDataObj.data);
    else if (i < imageDataObj.data.length*2/4) setpixe(i,[255,200,0,255],imageDataObj.data);
    else if (i <imageDataObj.data.length*3/4) setpixe(i,[255,255,100,255],imageDataObj.data);
    else if (i < imageDataObj.data.length) setpixe(i,[255,0,255,255],imageDataObj.data);
  }
  function setpixe(i,rgba,suorceData){
    const [r,g,b,a] = rgba;
    switch (i % 4) {
        case 0: suorceData[i] = r; break;
        case 1: suorceData[i] = g; break;
        case 2: suorceData[i] = b; break;
        case 3: suorceData[i] = a; break;
      }
  }
  context.putImageData(imageDataObj,50,50)
  //
  const canvas2 = canvasRef2._value;
  canvas2.width = 400;
  canvas2.height = 200;
  canvas2.style.boxShadow = '0 0 1px 1px';
  const context2 = canvas2.getContext("2d");
  context2.fillStyle='#009900';
  context2.fillRect(0,0,100,100)
  imageData2.value = context2.getImageData(10,10,10,10).data

})

const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
let imageDataObj = context.createImageData(100, 100);
for (let i = 0; i < imageDataObj.data.length; i++) {
  if (i < imageDataObj.data.length/4){
    setpixe(i,[255,0,0,255],imageDataObj.data);
  }
  else if (i < imageDataObj.data.length*2/4){
    setpixe(i,[255,200,0,255],imageDataObj.data);
  }
  else if (i <imageDataObj.data.length*3/4){
    setpixe(i,[255,255,100,255],imageDataObj.data);
  }
  else if (i < imageDataObj.data.length){
    setpixe(i,[255,0,255,255],imageDataObj.data);
  }
}
function setpixe(i,rgba,suorceData){
  const [r,g,b,a] = rgba;
  switch (i % 4) {
      case 0: suorceData[i] = r; break;
      case 1: suorceData[i] = g; break;
      case 2: suorceData[i] = b; break;
      case 3: suorceData[i] = a; break;
    }
}
context.putImageData(imageDataObj,50,50)
`, html2 : `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
context.fillStyle='#009900';
context.fillRect(0,0,100,100);
let imageData = context2.getImageData(10,10,10,10).data;
console.log(imageData)
`
});
</script>

<style lang="less" scoped>
.imageData2{
  overflow-wrap:  break-word;
  max-width: 500px;
}
</style>
