<template>
  <div>
    <!--  -->
    <h2 id="draw-text-title"> 绘制文字 </h2>
    <div>镂空文字：strokeText(text, x, y, maxWidth)</div>
    <div>实体文字：fillText(text, x, y, maxWidth)</div>
    <div>text：要绘制的文字</div>
    <div>x：开始绘制的位置x坐标</div>
    <div>y：开始绘制的位置y坐标</div>
    <div>maxWidth：绘制内容的最大宽度</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text='codeText.html1'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef1" width="400" height="200"></canvas>
    <!--  -->
    <h4 id="draw-text-font"> 文字字体 </h4>
    <div>font = [font style][font weight][font size][font face]</div>
    <div>可设置的属性值与css一致： 如</div>
    <div>font style: normal | italic | oblique | inherit</div>
    <div>....</div>
    <div>font face: Verdana | Arial | Serif | Cursive | Fantasy | ...</div>
    <CodeArea :key="new Date().getTime() + 'html2'">
      <div v-text='codeText.html2'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef2" width="400" height="200"></canvas>
    <!--  -->
    <h4 id="draw-text-color"> 文字颜色 </h4>
    <div>strokeStyle = "color"</div>
    <div>fillStyle = "color"</div>
    <CodeArea :key="new Date().getTime() + 'html3'">
      <div v-text='codeText.html3'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef3" width="400" height="200"></canvas>
    <!--  -->
    <h4 id="draw-text-measure"> 测量文字宽度：measureText(text) </h4>
    <div>测量的文字的宽度以当前设置的字体大小计算</div>
    <CodeArea :key="new Date().getTime() + 'html4'">
      <div v-text='codeText.html4'>
      </div>
    </CodeArea>
    <!--  -->
    <h4 id="draw-text-baseline"> 文字基线：textBaseline = top | hanging | middle | alphabetic | ideographic | bottom </h4>
    <div>top: 以文本中最高的字体的顶部为准</div>
    <div>hanging: 与top类似</div>
    <div>middle: 以文本的中间为准</div>
    <div>alphabetic: 以文本中最高的字体的底部为准</div>
    <div>ideographic: 与bottom类似</div>
    <div>bottom: 以文本中最低的字体的底部为准</div>
    <CodeArea :key="new Date().getTime() + 'html5'">
      <div v-text='codeText.html5'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef4" width="500" height="200"></canvas>
    <!--  -->
    <h4 id="draw-text-align"> 文字对齐方式：textAlign = start | left | center | end | right</h4>
    <div>start: 文字的起始位置在x处</div>
    <div>left: 与start类似</div>
    <div>center: 文字的中间在x处</div>
    <div>end: 文字的结束位置在x处</div>
    <div>right: 与end类似</div>
    <CodeArea :key="new Date().getTime() + 'html6'">
      <div v-text='codeText.html6'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef5" width="400" height="200"></canvas>
    <!--  -->
    <h4 id="draw-text-direction">文字绘制方向（与textAlingn效果类似） direction = ltr | rtl | inherrit</h4>
    <div>ltr: 从x处向右绘制</div>
    <div>rtl: 从x处向左绘制</div>
    <div>inherrit: 从x处向右绘制</div>
    <CodeArea :key="new Date().getTime() + 'html7'">
      <div v-text='codeText.html7'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef6" width="400" height="100"></canvas>

  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import CodeArea from '@/components/CodeArea.vue'
const canvasRef1 = ref<Element>();
const canvasRef2 = ref<Element>();
const canvasRef3 = ref<Element>();
const canvasRef4 = ref<Element>();
const canvasRef5 = ref<Element>();
const canvasRef6 = ref<Element>();
nextTick(() => {
  const context = canvasRef1._value.getContext("2d");
  canvasRef1._value.style.boxShadow = '0 0 1px 1px';
  context.font = "30px Verdana";
  context.strokeText('最美不是下雨天', 20, 50)
  context.fillText('最美不是下雨天', 20, 120, 100)
  // 字体
  const context2 = canvasRef2._value.getContext("2d");
  canvasRef2._value.style.boxShadow = '0 0 1px 1px';
  context2.font = "italic bold 30px Verdana";
  context2.strokeText('是曾与你躲过雨的屋檐', 20, 50)
  context2.font = "normal 400 30px Serif";
  context2.fillText('是曾与你躲过雨的屋檐', 20, 120)
  // 颜色
  const context3 = canvasRef3._value.getContext("2d");
  canvasRef3._value.style.boxShadow = '0 0 1px 1px';
  context3.font = "30px Verdana";
  context3.strokeStyle = '#000000'
  context3.strokeText('黑色毛衣', 20, 50)
  context3.font = "30px Verdana";
  context3.fillStyle = 'pink'
  context3.fillText('粉色海洋', 20, 120)
  // 基线
  const context4 = canvasRef4._value.getContext("2d");
  canvasRef4._value.style.boxShadow = '0 0 1px 1px';
  context4.font = "16px Verdana";

  context4.textBaseline = "top";
  context4.fillText("top", 0, 75);

  context4.textBaseline = "hanging";
  context4.fillText("hanging", 40, 75);

  context4.textBaseline = "middle";
  context4.fillText("middle", 120, 75);

  context4.textBaseline = "alphabetic";
  context4.fillText("alphabetic", 200, 75);

  context4.textBaseline = "ideographic";
  context4.fillText("ideographic", 300, 75);

  context4.textBaseline = "bottom";
  context4.fillText("bottom-glyph", 400, 75);

  context4.stokeStyle = "#000000";
  context4.beginPath();
  context4.moveTo(0, 75);
  context4.lineTo(500, 75);
  context4.stroke();
  // 对齐
  const context5 = canvasRef5._value.getContext("2d");
  canvasRef5._value.style.boxShadow = '0 0 1px 1px';
  context5.font = "16px Verdana";

  context5.beginPath();
  context5.moveTo(200,0);
  context5.lineTo(200,200);
  context5.stroke();

  context5.textAlign = "start";
  context5.fillText("start",200,20);

  context5.textAlign = "left";
  context5.fillText("left",200,50);

  context5.textAlign = "center";
  context5.fillText("center",200,80);

  context5.textAlign = "end";
  context5.fillText("end",200,120)

  context5.textAlign = "right";
  context5.fillText("right",200,150)

  // 方向
  const context6 = canvasRef6._value.getContext("2d");
  canvasRef6._value.style.boxShadow = '0 0 1px 1px';
  context6.font = "16px Verdana";

  context6.beginPath();
  context6.moveTo(200,0);
  context6.lineTo(200,100);
  context6.stroke();

  context6.direction = "ltr";
  context6.fillText("窗前明月光",200,20);

  context6.direction = "rtl";
  context6.fillText("窗前明月光",200,50);

  context6.direction = "inherit";
  context6.fillText("窗前明月光",200,80);


})
const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "30px Verdana";
context.strokeText('最美不是下雨天',20,50)
context.fillText('最美不是下雨天',20,120,100)
`, html2: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "italic bold 30px Verdana";
context.strokeText('是曾与你躲过雨的屋檐',20,50)
context.font = "normal 400 30px Serif";
context.fillText('是曾与你躲过雨的屋檐',20,120)
`, html3: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "30px Verdana";
context.strokeStyle = '#000000'
context.strokeText('黑色毛衣',20,50)
context.font = "30px Verdana";
context.fillStyle = 'pink'
context.fillText('粉色海洋',20,120)
`, html4: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
const textMetrics = context.measureText("你猜我有多宽");
const width = textMetrics.width;
console.log('width',width);
`, html5: `const canvas = document.querySelector("canvas");
canvas.width = 500;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "16px Verdana";
context.fillStyle = "#000000";

context.textBaseline = "top";
context.fillText("top", 0, 75);

context.textBaseline = "hanging";
context.fillText("hanging", 40, 75);

context.textBaseline = "middle";
context.fillText("middle", 120, 75);

context.textBaseline = "alphabetic";
context.fillText("alphabetic", 200, 75);

context.textBaseline = "ideographic";
context.fillText("ideographic", 300, 75);

context.textBaseline = "bottom";
context.fillText("bottom-glyph", 400, 75);

context.lineWidth  = 1;
context.beginPath();
context.moveTo(  0, 75);
context.lineTo(500, 75);
context.stroke();
`,html6: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 200;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "16px Verdana";

context.beginPath();
context.moveTo(200,0);
context.lineTo(200,200);
context.stroke();

context.textAlign = "start";
context.fillText("start",200,20);

context.textAlign = "left";
context.fillText("left",200,50);

context.textAlign = "center";
context.fillText("center",200,80);

context.textAlign = "end";
context.fillText("end",200,120)

context.textAlign = "right";
context.fillText("right",200,150)
`,html7: `const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
const context = canvas.getContext("2d");
// 
context.font = "16px Verdana";

context.beginPath();
context.moveTo(200,0);
context.lineTo(200,100);
context.stroke();

context6.direction = "ltr";
context6.fillText("窗前明月光",200,20);

context6.direction = "rtl";
context6.fillText("窗前明月光",200,50);

context6.direction = "inherit";
context6.fillText("窗前明月光",200,80);

`,
});
</script>

<style lang="less" scoped></style>
