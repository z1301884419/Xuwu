<template>
  <div>
    <!--  -->
    <h2 id="draw-graphpath-title"> 画笔与路径 </h2>
    <div>使用路径作画可以画出多种类型的图形</div>
    <h4 id="draw-graphpath-begin">路径的开启与闭合</h4>
    <div>开启：context.beginPath()</div>
    <div>闭合：context.closePath();与开启点闭合</div>
    <CodeArea :key="new Date().getTime() + 'html1'">
      <div v-text='codeText.html1'>
      </div>
    </CodeArea>
    <!--  -->
    <h4 id="draw-graphpath-linepen">画笔位置及连线</h4>
    <div>moveTo(x,y)： 将画笔移到坐标位置</div>
    <div>lineTo(x,y)： 画的线条，画的是画笔位置到该点位置，并将将画笔移到坐标位置</div>
    <div>stroke(): 以描边形式连接笔的路径，不使用closePath()时，将绘制画笔的路径</div>
    <div>fill(): 以填充形式连接笔的路径，使用填充时closePath()常不用写</div>
    <div>setLineDash([solidL,dashL])：solidL:实线部分长度,dashL: 虚线部分长度 </div>
    <div>lineDashoffset = number : 设置虚线起始偏移量 </div>
    <CodeArea :key="new Date().getTime() + 'html2'">
      <div v-text='codeText.html2'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef1" width="400" height="100"></canvas>
    <!--  -->
    <h4 id="draw-graphpath-linecap">线帽（lineCap）：线条两端的样式</h4>
    <div>butt(矩形)</div>
    <div>round(额外的圆型)</div>
    <div>square(额外的矩形)</div>
    <CodeArea :key="new Date().getTime() + 'html3'">
      <div v-text='codeText.html3'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef2" width="400" height="100"></canvas>
    <!--  -->
    <h4 id="draw-graphpath-linejoin">线条连接（linejoin）：线条拐角样式</h4>
    <div>miter: 尖角</div>
    <div>bevel: 平角</div>
    <div>round: 圆角</div>
    <CodeArea :key="new Date().getTime() + 'html4'">
      <div v-text='codeText.html4'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef3" width="400" height="100"></canvas>
    <!--  -->
    <h4 id="draw-graphpath-arc">绘制圆弧： arc(x,y,radius,startAngle,endAngle,anticlockwise)</h4>
    <div>x: 圆弧中心x坐标</div>
    <div>y: 圆弧中心y坐标</div>
    <div>radius: 圆弧半径</div>
    <div>startAngle: 弧起始的弧度角</div>
    <div>endAngle: 弧结束的弧度角</div>
    <div>anticlockwise: 绘制方向是否为逆时针(默认false为顺时针)</div>
    <h4>绘制圆弧： arcTo(cp1X,cp1Y,cp2X,cp2Y,r),绘制的弧线由两条切线确定，一条切线为起点与控制点1的连线，另一条为控制点1与控制点2的连线</h4>
    <div>cp1X: 控制点1的x坐标</div>
    <div>cp1Y: 控制点1的y坐标</div>
    <div>cp2X: 控制点2的x坐标</div>
    <div>cp2Y: 控制点2的y坐标</div>
    <div>r: 圆弧半径</div>
    <CodeArea :key="new Date().getTime() + 'html5'">
      <div v-text='codeText.html5'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef4" width="400" height="100"></canvas>
    <!--  -->
    <h4 id="draw-graphpath-curve">绘制二次贝塞尔曲线：quadraticCurveTo(cp1X,cp1Y,toX,toY)</h4>
    <div>cp1X: 控制点1的x坐标</div>
    <div>cp1Y: 控制点1的y坐标</div>
    <div>toX: 最终落笔点x坐标</div>
    <div>toY: 最终落笔点y坐标</div>
    <h4>绘制三次贝塞尔曲线：bezierCurveTo(cp1X,cp1Y,cp2X,cp2Y,toX,toY)</h4>
    <div>cp1X: 控制点1的x坐标</div>
    <div>cp1Y: 控制点1的y坐标</div>
    <div>cp2X: 控制点2的x坐标</div>
    <div>cp2Y: 控制点2的y坐标</div>
    <div>toX: 最终落笔点x坐标</div>
    <div>toY: 最终落笔点y坐标</div>
    <CodeArea :key="new Date().getTime() + 'html6'">
      <div v-text='codeText.html6'>
      </div>
    </CodeArea>
    <div>效果如下：</div>
    <canvas ref="canvasRef5" width="400" height="100"></canvas>
    
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
nextTick(() => {
  const context = canvasRef1._value.getContext("2d");
  canvasRef1._value.style.boxShadow = '0 0 1px 1px';
  context.moveTo(10, 10);
  context.beginPath();
  context.lineTo(50, 10);
  context.lineTo(60, 50);
  context.lineTo(100, 50);
  context.closePath();
  context.lineWidth = 5;
  context.strokeStyle = '#000000';
  context.stroke();
  //
  context.beginPath();
  context.moveTo(10, 80);
  context.lineTo(150, 80);
  context.lineWidth = 4;
  context.strokeStyle = '#000000';
  context.stroke();
  //
  context.beginPath();
  context.moveTo(200, 10);
  context.lineTo(240, 10);
  context.lineTo(240, 50);
  context.lineTo(200, 50);
  context.fillStyle = '#000000';
  context.fill();

  //
  context.beginPath();
  context.lineWidth = 1;
  context.setLineDash([6,2]);
  context.lineDashoffset = 0;
  context.moveTo(280, 10);
  context.lineTo(350, 10);
  context.lineTo(350, 70);
  context.lineTo(280, 70);
  context.closePath();
  context.stroke();

  // 线帽
  const context2 = canvasRef2._value.getContext("2d");
  canvasRef2._value.style.boxShadow = '0 0 1px 1px';
  context2.lineWidth = 5;
  context2.lineCap = 'butt';
  context2.beginPath();
  context2.moveTo(50, 10);
  context2.lineTo(150, 10);
  context2.strokeStyle = '#000000';
  context2.stroke();
  //
  context2.lineCap = 'round';
  context2.beginPath();
  context2.moveTo(50, 40);
  context2.lineTo(150, 40);
  context2.strokeStyle = '#000000';
  context2.stroke();
  //
  context2.lineCap = 'square';
  context2.beginPath();
  context2.moveTo(50, 70);
  context2.lineTo(150, 70);
  context2.strokeStyle = '#000000';
  context2.stroke();
  //
  context2.strokeStyle = '#009900';
  context2.lineWidth = 1;
  context2.strokeRect(50,0,100,100)
  // 线条连接
  const context3 = canvasRef3._value.getContext("2d");
  canvasRef3._value.style.boxShadow = '0 0 1px 1px';
  context3.lineWidth = 15;
  context3.lineJoin = 'miter';
  context3.beginPath();
  context3.moveTo(10, 10);
  context3.lineTo(50, 60);
  context3.lineTo(90, 10);
  context3.strokeStyle = '#000000';
  context3.stroke();
  //
  context3.lineJoin = 'bevel';
  context3.beginPath();
  context3.moveTo(120, 10);
  context3.lineTo(160, 60);
  context3.lineTo(200, 10);
  context3.strokeStyle = '#000000';
  context3.stroke();
  //
  context3.lineJoin = 'round';
  context3.beginPath();
  context3.moveTo(220, 10);
  context3.lineTo(260, 60);
  context3.lineTo(300, 10);
  context3.strokeStyle = '#000000';
  context3.stroke();
  //
  context3.strokeStyle = '#009900';
  context3.lineWidth = 1;
  context3.strokeRect(0,60,400,1)

  // 圆弧
  const context4 = canvasRef4._value.getContext("2d");
  canvasRef4._value.style.boxShadow = '0 0 1px 1px';
  context4.lineWidth = 5;
  context4.fillStyle = 'red';
  //
  context4.beginPath();
  context4.arc(50,50,30,0,Math.PI)
  context4.stroke();
  context4.fillRect(50,50,5,5)
  //
  context4.beginPath();
  context4.arc(150,50,30,0,Math.PI,true)
  context4.stroke();
  context4.fillRect(150,50,5,5)
  // arcTo
  context4.beginPath();
  context4.moveTo(250,50)
  context4.arcTo(300,50,300,0,50)
  context4.stroke();
  context4.fillRect(250,50,5,5)
  context4.fillRect(300,50,5,5)
  context4.fillRect(300,0,5,5)

  // 贝塞尔曲线
  const context5 = canvasRef5._value.getContext("2d");
  canvasRef5._value.style.boxShadow = '0 0 1px 1px';
  context5.lineWidth = 3;
  // 二次曲线
  context5.beginPath();
  context5.moveTo(20,50)
  context5.quadraticCurveTo(50,0,100,50)
  context5.stroke();
  //
  context5.fillStyle = 'blue';
  context5.fillRect(17,47,6,6)
  //
  context5.fillStyle = 'red';
  context5.fillRect(50,0,6,6)
  //
  context5.fillStyle = 'blue';
  context5.fillRect(97,47,6,6)
  // 三次曲线
  context5.beginPath();
  context5.moveTo(180,50)
  context5.bezierCurveTo(210,0,240,100,270,50)
  context5.stroke();
  //
  context5.fillStyle = 'blue';
  context5.fillRect(177,47,6,6)
  //
  context5.fillStyle = 'red';
  context5.fillRect(207,0,6,6)
  //
  context5.fillStyle = 'red';
  context5.fillRect(237,94,6,6)
  //
  context5.fillStyle = 'blue';
  context5.fillRect(267,47,6,6)
})
const codeText = ref({
  html1: `const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
context.beginPath();
.....路径的绘制
context.closePath();
`, html2: `const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
//
context.moveTo(10,10);
context.beginPath();
context.lineTo(50,10);
context.lineTo(60,50);
context.lineTo(100,50);
context.closePath();
context.lineWidth = 5;
context.strokeStyle = '#000000';
context.stroke();
//
context.beginPath();
context.moveTo(10, 80);
context.lineTo(150, 80);
context.lineWidth = 4;
context.strokeStyle = '#000000';
context.stroke();
//
context.beginPath();
context.moveTo(200,10);
context.lineTo(240,10);
context.lineTo(240,50);
context.lineTo(200,50);
context.fillStyle = '#000000';
context.fill(); 
//
context.beginPath();
context.lineWidth = 1;
context.setLineDash([6,2]);
context.lineDashoffset = 0;
context.moveTo(280, 10);
context.lineTo(350, 10);
context.lineTo(350, 70);
context.lineTo(280, 70);
context.closePath();
context.stroke();
`, html3: `const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
//
context.lineCap = 'butt';
context.beginPath();
context.moveTo(50,10);
context.lineTo(150,10);
context.strokeStyle = '#000000';
context.stroke();
//
context.lineCap = 'round';
context.beginPath();
context.moveTo(50,40);
context.lineTo(150,40);
context.strokeStyle = '#000000';
context.stroke();
//
context.lineCap = 'square';
context.beginPath();
context.moveTo(50,70);
context.lineTo(150,70);
context.strokeStyle = '#000000';
context.stroke();
//
context.strokeStyle = '#009900';
context.lineWidth = 1;
context.strokeRect(50,0,100,100)
`, html4: `const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
context.lineWidth = 15;
//
context.lineJoin = 'miter';
context.beginPath();
context.moveTo(10, 10);
context.lineTo(50, 60);
context.lineTo(90, 10);
context.strokeStyle = '#000000';
context.stroke();
//
context.lineJoin = 'bevel';
context.beginPath();
context.moveTo(120, 10);
context.lineTo(160, 60);
context.lineTo(200, 10);
context.strokeStyle = '#000000';
context.stroke();
//
context.lineJoin = 'round';
context.beginPath();
context.moveTo(220, 10);
context.lineTo(260, 60);
context.lineTo(300, 10);
context.strokeStyle = '#000000';
context.stroke();
//
context.strokeStyle = '#009900';
context.lineWidth = 1;
context.strokeRect(0,60,400,1)
`,html5:`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
context.lineWidth = 5;
//
context.beginPath();
context.arc(50,50,30,0,Math.PI)
context.stroke();
context.fillRect(50,50,5,5)
//
context.beginPath();
context.arc(150,50,30,0,Math.PI,true)
context.stroke();
context.fillRect(150,50,5,5);
// arcTo
context.beginPath();
context.moveTo(250,50)
context.arcTo(300,50,300,0,50)
context.stroke();
context.fillRect(250,50,5,5);
context.fillRect(300,50,5,5);
context.fillRect(300,0,5,5);
`,html6:`const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 100;
canvas.style.boxShadow = '0 0 1px 1px';
context.lineWidth = 5;
// 二次曲线
context.beginPath();
context.moveTo(20,50)
context.quadraticCurveTo(50,0,100,50)
context.stroke();
// 起点
context.fillStyle = 'blue';
context.fillRect(17,47,6,6)
// 控制点
context.fillStyle = 'red';
context.fillRect(50,0,6,6)
//  终点
context.fillStyle = 'blue';
context.fillRect(97,47,6,6)
// 三次曲线
context.beginPath();
context.moveTo(180,50)
context.bezierCurveTo(210,0,240,100,270,50)
context.stroke();
//  起点
context.fillStyle = 'blue';
context.fillRect(177,47,6,6)
//  控制点1
context.fillStyle = 'red';
context.fillRect(207,0,6,6)
//  控制点2
context.fillStyle = 'red';
context.fillRect(237,94,6,6)
//  终点
context.fillStyle = 'blue';
context.fillRect(267,47,6,6)
`
});
</script>

<style lang="less" scoped></style>
