<template>
  <div>
    <!--  -->
    <h2 id="draw-create-title"> 创建canvas </h2>
    <div>在html中创建一个canvas标签：canvas标签是双闭合标签，当浏览器支持canvas属性时
      不会显示标签内的内容，浏览器不支持时，显示标签内的内容
    </div>
    <CodeArea :key="new Date().getTime() + 'htmlText'">
      <div v-text="
`<div>
  <canvas>浏览器不支持canvas</canvas>
<div>`">
      </div>
    </CodeArea>
    <div>canvas标签可以设置width、height属性+全局属性；如设置如下属性</div>
    <CodeArea :key="new Date().getTime() + 'htmlText2'">
      <div v-text='
`<div>
  <canvas calss="mycanvas" width="200" height="200"></canvas>
<div>`'>
      </div>
    </CodeArea>
    <CodeArea :key="new Date().getTime() + 'css'">
      <div v-text='
`.mycanvas{
  background-color: #000000;
}`'>
      </div>
    </CodeArea>
    <!--  -->
    <h4 id="draw-create-get2d"> 获取canvas“2d”上下文 </h4>
    <CodeArea :key="new Date().getTime() + 'js'">
      <div v-text='
`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");`'>
      </div>
    </CodeArea>
    <!--  -->
    <h4 id="draw-create-ctxType"> getContext的值可以是： </h4>
    <div>2d: 绘制2d图像</div>
    <div>webgl: 绘制3d的上下文</div>
    <div>webgl2: 绘制3d的上下文</div>
    <br/>
  </div>
</template>

<script lang="ts" setup>
import CodeArea from '@/components/CodeArea.vue'
</script>

<style lang="less" scoped></style>
