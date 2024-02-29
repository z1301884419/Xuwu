<template>
  <div>
    <!--  -->
    <h2 id="draw-img-title">绘制图片</h2>
    <div>绘制原图：drawImage(image,drawX,drawY)</div>
    <div>绘制缩放图：drawImage(image,drawX,drawY,drawW,drawH)</div>
    <div>绘制裁剪图：drawImage(image,sliceX,sliceY,sliceW,sliceH,drawX,drawY,drawW,drawH)</div>
    <br/>
    <div>image：image对象或canvas对象</div>
    <div>drawX：开始画图的x坐标</div>
    <div>drawY：开始画图的y坐标</div>
    <div>drawW：画的图片的宽度</div>
    <div>drawH：画的图片的高度</div>
    <div>sliceX：从源图片上x处开始裁剪</div>
    <div>sliceY：从源图片上y处开始裁剪</div>
    <div>sliceW：裁剪的宽度</div>
    <div>sliceH：裁剪的高度</div>
    <!--  -->
    <h4 id="draw-img-img">绘制image对象图片: 创建image对象，并监听image图片的onload事件</h4>
    <br/>
    <div>绘制原图</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text='codeText.html1'>
      </div>
    </CodeArea>
    <div>绘制原图效果如下：</div>
    <canvas ref="canvasRef1"></canvas>
    <br/>
    <div>绘制缩放图</div>
    <CodeArea :key="new Date().getTime() + 'html2'">
      <div v-text='codeText.html2'>
      </div>
    </CodeArea>
    <div>绘制缩放图效果如下：</div>
    <canvas ref="canvasRef2"></canvas>
    <br/>
    <div>绘制裁剪图</div>
    <CodeArea :key="new Date().getTime() + 'html3'">
      <div v-text='codeText.html3'>
      </div>
    </CodeArea>
    <div>绘制裁剪图效果如下：</div>
    <canvas ref="canvasRef3"></canvas>
    <!--  -->
    <h4 id="draw-img-canvas">绘制canvas对象图片</h4>
    <br/>
    <CodeArea :key="new Date().getTime() + 'html4'">
      <div v-text='codeText.html4'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef4"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue'
const canvasRef1 = ref<Element>();
const canvasRef2 = ref<Element>();
const canvasRef3 = ref<Element>();
const canvasRef4 = ref<Element>();
nextTick(() => {
  const context = canvasRef1._value.getContext("2d");
  canvasRef1._value.width = 600;
  canvasRef1._value.height = 400;
  canvasRef1._value.style.boxShadow = '0 0 1px 1px';
  const image = new Image();
  image.src = 'src/assets/picture1.webp';
  image.addEventListener('load',()=>{
    context.drawImage(image,0,0);
  })
  //
  const context2 = canvasRef2._value.getContext("2d");
  canvasRef2._value.width = 500;
  canvasRef2._value.height = 300;
  canvasRef2._value.style.boxShadow = '0 0 1px 1px';
  const image2 = new Image();
  image2.src = 'src/assets/picture1.webp';
  image2.addEventListener('load',()=>{
    context2.drawImage(image,0,0,500,300);
  })
  //
  const context3 = canvasRef3._value.getContext("2d");
  canvasRef3._value.width = 400;
  canvasRef3._value.height = 400;
  canvasRef3._value.style.boxShadow = '0 0 1px 1px';
  const image3 = new Image();
  image3.src = 'src/assets/picture1.webp';
  image3.addEventListener('load',()=>{
    context3.drawImage(image,800,0,image3.width - 800,600,0,0,400,400);
  })
  // canvas
  const context4 = canvasRef4._value.getContext("2d");
  canvasRef4._value.width = 400;
  canvasRef4._value.height = 400;
  canvasRef4._value.style.boxShadow = '0 0 1px 1px';
  //
  const canvasImg = document.createElement('canvas');
  const contextImg = canvasImg.getContext("2d");
  canvasImg.width = 500;
  canvasImg.height = 300;
  const image4 = new Image();
  image4.src = 'src/assets/picture1.webp';
  image4.addEventListener('load',()=>{
    contextImg.drawImage(image4,0,0,500,300);
    context4.drawImage(canvasImg,200,0,300,300,0,0,400,400)
  })

})
const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 600;
canvas.height = 400;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
const image = new Image();
image.src = 'src/assets/picture1.webp';
image.addEventListener('load',()=>{
  context.drawImage(image,0,0);
})`,
html2: `const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 300;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
const image = new Image();
image.src = 'src/assets/picture1.webp';
image.addEventListener('load',()=>{
  context.drawImage(image,0,0,500,300);
})`,
html3: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
const image = new Image();
image.src = 'src/assets/picture1.webp';
image.addEventListener('load',()=>{
  context.drawImage(image,800,0,image3.width - 800,600,0,0,400,400);
})`,
html4: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
//
const canvasImg = document.createElement('canvas');
const contextImg = canvasImg.getContext("2d");
canvasImg.width = 500;
canvasImg.height = 300;
const image = new Image();
image.src = 'src/assets/picture1.webp';
image.addEventListener('load',()=>{
  contextImg.drawImage(image,0,0,500,300);
  context.drawImage(canvasImg,200,0,300,300,0,0,400,400)
})`,
});
</script>

<style lang="less" scoped>
  canvas{
    display: block;
  }
</style>
