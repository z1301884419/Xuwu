import imgSrc from '@/static/bizhi4.jpg'
function getImageUrl(name) {
  return new URL(`../static/${name}`, import.meta.url).href
}
export const cssData = [
  {
    id: "1001",
    src: imgSrc,
    text: `calc()函数`,
    desc: 'css函数，可以动态计算值，计算符两边必须隔一个空格。示例：width:calc(100% - 20px)',
    code: `
    <html>
      <div class="box"></div>
      <p>你可以在右边尝试修改<p>
    </html>
    <style>
      .box{;
        width:50px;
        height:calc(100px - 50px);
        background-color:lightblue
      }
    </style>
    `
  }, {
    id: "1002",
    src: imgSrc,
    text: `多行文本溢出隐藏: -webkit-line-clamp;`,
    desc: '文本溢出指定行数隐藏，使用时需配合使用display: -webkit-box; overflow: hidden;-webkit-box-orient: vertical;',
    code: `
    <html>
      <span class="tip">设置换行并指定行数溢出隐藏</span>
      <div class="box">
      这是一段很长的文字这是一段很长的文字
      这是一段很长的文字这是一段很长的文字  这是一段很长的文字这是一段很长的文字
      </div>
      <br>
      <span class="tip">这是普通的换行显示,对换行符无效</span>
      <div class="box2">
      这是一段很长的文字这是一段很长的文字
      这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字
      </div>
      <br>
      <span class="tip">这是保留文本格式的换行显示，同white-space: pre-warp;</span>
      <div class="box3">
      这是一段很长的文字这是一段很长的文字
      这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字
      </div>
     </html>
    <style>
      .box{
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .box2{
        white-space: normal;
      }
      .box3{
        white-space: break-spaces;
      }
      .tip{
        font-size: 12px;
        color: red;
      }
    </style>
    `
  }, {
    id: "1003",
    src: imgSrc,
    text: `设置文本溢出显示样式: text-overflow`,
    desc: '设置文本溢出显示样式，如溢出省略...',
    code: `
    <html>
      <div class="box">
      这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字
      <div>
    </html>
    <style>
      .box{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    </style>
    `
  }
  , {
    id: "1004",
    src: imgSrc,
    text: `设置图片的填充方式: object-fit: (fill|cover|contain|scale-down)`,
    desc: '设置图片的填充方式，需要为img设置宽和高。fill：压缩图片使其填满整个容器。cover：按容器大小取图片中间部分。contain，scale-down：保持原图比列。',
    code: `
    <html>
      <div class="box">
        <img src="${getImageUrl('bgmohu.jpg')}">
      </div>
      <div class="box">
        <img src="${getImageUrl('bg1.jpg')}">
      <div>
    </html>
    <style>
      .box{
        width:150px;
        height:150px;
      }
      img{
        width:100%;
        height:100%;
        object-fit:fill
      }
    </style>
    `
  }
  , {
    id: "1005",
    src: imgSrc,
    text: `设置元素的阴影效果: box-shadow: h-shadow v-shadow blur spread color inset`,
    desc: `设置元素的阴影效果，h-shadow(px)：水平阴影的位置右正左负，
    v-shadow(px)：垂直阴影的位置下正上负，blur(px)：模糊距离(向外扩散的距离)，
    spread(px)：缩放阴影的大小，color(颜色值)：阴影的颜色，inset(inset)：阴影投影的方向;
    可以设置多个阴影，中间用逗号隔开；使用shadow可能会残留阴影？（滚动条设置阴影后遇到过）`,
    code: `
    <html>
      <div class="box"></div>
    </html>
    <style>
      .box{
        width:150px;
        height:150px;
        border: 1px solid grey;
        box-shadow: 2px 2px 5px 5px red 
      }
    </style>
    `
  },
  {
    id: "1019",
    src: imgSrc,
    text: `设置文字的阴影效果: text-shadow: h-shadow v-shadow blur spread color inset`,
    desc: `设置文字的阴影效果，h-shadow(px)：水平阴影的位置右正左负，v-shadow(px)：垂直阴影的位置下正上负，
    blur(px)：模糊距离(向外扩散的距离)，spread(px)：缩放阴影的大小，
    color(颜色值)：阴影的颜色，inset(inset)：阴影投影的方向; 可以设置多个阴影，中间用逗号隔开`,
    code: `
    <html>
      <div class="box">文字阴影</div>
    </html>
    <style>
      .box{
        width:150px;
        height:150px;
        border: 1px solid grey;
        text-align: center;
        line-height: 150px;
        font-size: 30px;
        text-shadow: 1px -1px #fff,-1px 1px #999,-5px 5px 5px #000;
      }
    </style>
    `
  }, {
    id: "1006",
    src: imgSrc,
    text: `规定背景的绘制区域: background-clip`,
    desc: `background-clip：规定背景的绘制区域，一般使用可以有3个值：border-box,content-box,padding-box
            当使用-webkit-background-clip:时值可以是text，规定以文字为绘制区域，与-webkit-text-fill-color:transparent
            一起使用可实现文件渐变和文字与图片结合的效果。`,
    code: `
    <html>
      <div class="box1">我是文字1</div>
      <div class="box2">文字</div>
    </html>
    <style>
      .box1{
        height:100px;
        font-size:30px;
        color:transparent;
        background-image:linear-gradient(to right,#FF0000,#FFF200,#1E9600);
        -webkit-background-clip:text;
      }
      .box2{
        width:200px;
        height:100px;
        font-size:60px;
        font-weight:bold;
        background:url( ${getImageUrl('sjbizhi4.jpg')}) no-repeat;
        background-size:100%;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
    </style>
    `
  }
  , {
    id: "1007",
    src: imgSrc,
    text: `实现倒影: -webkit-box-reflect: `,
    desc: '实现倒影效果',
    code: `
    <html>
      <div class="box">文字倒影</div>
    </html>
    <style>
      .box{
        -webkit-box-reflect:below;
      }   
    </style>
    `
  }
  , {
    id: "1008",
    src: imgSrc,
    text: `图文环绕样式: shape-outside:设置浮动元素周围内联元素对其包裹的形状`,
    desc: '可以用该属性实现图文环绕样式',
    code: `
    <html>
      <div class="box">
        <div class="shape"></div>
        我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字
        我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字我是文字
      </div>
    </html>
    <style>
      .box{
      }
      .shape{
        width:100px;
        height:100px;
        float:left;
        clip-path:circle();
        background-color:pink;
        shape-outside:circle();
      }
    </style>
    <script>
      console.log(2);
      console.log(3)
    <\/script>
    `
  }, {
    id: "1009",
    src: imgSrc,
    text: `sass函数实现媒体查询`,
    desc: '利用函数和循环实现css循环',
    code: `
    <html>
      <div class="box">
        下面的文字会根据窗口大小变化
      </div>
    </html>
    <style>
      $texts: 'text2','text3','text4','text5';
      $width: 1900px;
      .box::after{
        content: 'text1';
        @each $text in $texts{
          @media screen and (max-width: $width){
            content: '#{$text}'
          }
          $width: $width - 10px;
        }
      }

    </style>
    <script>
    <\/script>
    `
  }, {
    id: "1010",
    src: imgSrc,
    text: `拖动属性`,
    desc: '利用拖动属性实现课程安排',
    code: `
    <html>
      <div class="code_container">
        <div class="left">
          <ul>
            <li data-allow-enter="move" draggable="true" class="red">语文</li>
            <li data-allow-enter="move" draggable="true" class="orange">数学</li>
            <li data-allow-enter="move" draggable="true" class="green">英语</li>
            <li data-allow-enter="move" draggable="true" class="yellow">政治</li>
            <li data-allow-enter="move" draggable="true" class="pink">历史</li>
            <li data-allow-enter="move" draggable="true" class="blue">音乐</li>
            <li data-allow-enter="move" draggable="true" class="purple">绘画</li>
            <li data-allow-enter="move" draggable="true" class="cyan">体育</li>
          </ul>
        </div>
        <div class="right">
          <table border="1" width="100%">
            <thead>
              <tr>
                <td></td>
                <th>星期一</th>
                <th>星期二</th>
                <th>星期三</th>
                <th>星期四</th>
                <th>星期五</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="4">上午</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
              </tr>
              <tr>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
              </tr>
              <tr>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
              </tr>
              <tr>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
              </tr>
              <tr>
                <td colspan="8">午间休息</td>
              </tr>
              <tr>
                <td rowspan="2">下午</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
              </tr>
              <tr>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
                <td data-allow-enter="copy">无</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </html>
    <style>
    .code_container{
      display: flex;
      margin: 20px;
    }
    .left{
      flex: 1;
      border: 1px solid;
    }
    .left li{
      margin: 8px 4px;
      font-size: 22rm;
      line-height: 40rm;
      text-align: center;
    }
    .right{
      flex: 7;
      // border: 1px solid;
      padding: 0 10%;
    }
    .right td{
      margin: 0;
      padding: 0;
      text-align: center;
    }
    .right li{
      font-size: 22rm;
      line-height: 40rm;
      text-align: center;
    }
    .select{
      background-color : rgb(145, 153, 150) !important;
    }
    .red{
      background-color: rgb(203, 118, 118);
    }
    .yellow{
      background-color: rgb(204, 237, 40);
    }
    .green{
      background-color: rgb(143, 203, 118);
    }
    .blue{
      background-color: rgb(93, 160, 241);
    }
    .orange{
      background-color: rgb(245, 190, 10)
    }
    .pink{
      background-color: rgb(239, 162, 162);
    }
    .purple{
      background-color: rgb(203, 118, 177);
    }
    .cyan{
      background-color: rgb(21, 180, 141);
    }
    </style>
    <script>
    (function test(){
      let container = document.querySelector('.code_container');
      /** 被拖拽的原结点 */;
      let sourceNode;
      /** 开始拖拽元素时*/;
      container.ondragstart = (e)=>{
        sourceNode = e.target;
        /** 拖拽时的指针样式*/
        /** dataset获取data-的自定义属性*/
        const styleType = e.target.dataset.allowEnter == 'move' ? 'copy' : 'move';
        e.dataTransfer.effectAllowed = styleType;
      }
      /** 被拖拽元素当前在那个元素上层，即当前位置,会一直触发*/
      container.ondragover = (e)=>{
        /** 阻止元素的禁止被拖入*/
        e.preventDefault()
      };
      /** 被拖拽元素进入某个元素上层，即当前位置，只触发一次*/
      container.ondragenter = (e)=>{
        /** 为什么这里阻止默认行为不行(阻止元素的禁止被拖入)*/
        /** e.preventDefault()*/

        /** 清除之前的选中样式*/
        clearSelect();
        /** 添加选中样式*/
        if(e.target.dataset.allowEnter == e.dataTransfer.effectAllowed){
          e.target.classList.add('select');
        };
      };
      /** 释放被拖拽元素时*/
      container.ondragend = (e)=>{
        /** console.log(e.target)*/
        clearSelect();
      };
      /** 拖拽元素要投放的元素，元素必须要允许被拖入*/
      container.ondrop = (e)=>{
        const targetNode = e.target;
        /** 如果原结点与目标结点一致，则不执行*/
        if(targetNode.innerHTML == sourceNode.innerHTML) return;
        /** 拖进课程表*/
        if(targetNode.dataset.allowEnter == 'copy'){
          const tdNode = findTd(targetNode);
          tdNode.innerHTML = '';
          const cloneNode = sourceNode.cloneNode(true);
          cloneNode.dataset.allowEnter = 'copy';
          tdNode.appendChild(cloneNode);
        }else if(sourceNode.dataset.allowEnter == 'copy'){ /** 拖出课程表*/
          const tdNode = findTd(sourceNode);
          tdNode.innerHTML = '无';
        }
        
      }

      /** 寻找td父元素*/
      function findTd(node){
        /** console.dir(node) */
        if(node.tagName && node.tagName !== 'TD'){
          node = node.parentNode;
          findTd(node);
        }
        return node;
      }
      /** 清除选中的状态 */
      function clearSelect(){
        const selectNode = document.getElementsByClassName('select');
        selectNode.length && [...selectNode].forEach(element => {
          element.classList.remove('select')
        })
      }
    })()
    <\/script>
    `
  }, {
    id: "1011",
    src: imgSrc,
    text: `Flip动画`,
    desc: `Flip动画：F:first,记录元素的起始位置、
                     L:last，记录元素的结束位置、
                     I:Invert，倒置移动元素到起始的位置、
                     P:play：使用动画回到原本位置`,
    code: `
    <html>
      <div class="box">
        <ul class='list'>
          <li class="list-item bg_red">壹</li>
          <li class="list-item">贰</li>
          <li class="list-item">叁</li>
          <li class="list-item">肆</li>
          <li class="list-item">伍</li>
        </ul>
        <button class='btn'>开始移动</button>
        <button class='btn2'>重置</button>
      </div>
    </html>
    <style>
      .bg_red{
        background-color:red;
      }
      ul>li{
        border-radius:8px;
        border: solid 1px black;
        text-align:center;
        padding: 8px;
      }
    </style>
    <script>
      const firstItem = document.querySelector('.list-item:first-child');
      const lastItem = document.querySelector('.list-item:last-child');
      const list = document.querySelector('.list');
      const btn = document.querySelector('.btn');
      const btn2 = document.querySelector('.btn2');
      function getLocation() {
        const rect = firstItem.getBoundingClientRect();
        return rect.top;
      }
      const start = getLocation();
      btn.onclick = function(){
        firstItem.style.removeProperty('transform');
        firstItem.style.removeProperty('transition');
        list.insertBefore(firstItem,null);
        const end = getLocation();
        const dis = start - end; 
        firstItem.style.transform = "translateY(-147.2px)";
        raf(function(){
          firstItem.style.transition = "transform 1s";
          firstItem.style.removeProperty('transform');
        }); 
      };
      btn2.onclick = function(){
        firstItem.style.removeProperty('transform');
        firstItem.style.removeProperty('transition');
        const firstItem2 = document.querySelector('.list-item:first-child');
        list.insertBefore(firstItem,firstItem2);
        firstItem.style.transform = "translateY(147.2px)";
        raf(function(){
          firstItem.style.transition = "transform 1s";
          firstItem.style.removeProperty('transform');
        }); 
      };

      function raf(callback) {
        requestAnimationFrame(function(){
          requestAnimationFrame(callback);
        })
      };
      
    <\/script>
    `
  }, {
    id: "1012",
    src: imgSrc,
    text: `拼音标注<ruby>字 <rp>(</rp> <rt>拼音</rt> <rp>)</rp></ruby>`,
    desc: '拼音标注样式标签：第三方字典库：pinyin.js',
    code: `
    <html>
      <div class="box">
        <ruby>
          拼
          <rp>(</rp>
          <rt>pin</rt>
          <rp>)</rp>
        </ruby>
        <ruby>
          声
          <rp>(</rp>
          <rt>sheng</rt>
          <rp>)</rp>
        </ruby>
      </div>
    </html>
    <style>
      ruby{
        font-size: 24px;
      }
      rt{
        color: red;
        font-size: 18px;
        padding: 4px;
      }

    </style>
    <script>
    <\/script>
    `
  },
  {
    id: "1013",
    src: imgSrc,
    text: `加载样式`,
    desc: '',
    code: `
    <html>
      <section class="box">
        <div class="circle">
          <span style="--i:0"></span>
          <span style="--i:1"></span>
          <span style="--i:2"></span>
          <span style="--i:3"></span>
          <span style="--i:4"></span>
          <span style="--i:5"></span>
          <span style="--i:6"></span>
          <span style="--i:7"></span>
          <span style="--i:8"></span>
          <span style="--i:9"></span>
          <span style="--i:10"></span>
          <span style="--i:11"></span>
          <span style="--i:12"></span>
          <span style="--i:13"></span>
          <span style="--i:14"></span>
          <span style="--i:15"></span>
          <span style="--i:16"></span>
          <span style="--i:17"></span>
          <span style="--i:18"></span>
          <span style="--i:19"></span>
          <span style="--i:20"></span>
        </div>
        <div class="circle">
          <span style="--i:0"></span>
          <span style="--i:1"></span>
          <span style="--i:2"></span>
          <span style="--i:3"></span>
          <span style="--i:4"></span>
          <span style="--i:5"></span>
          <span style="--i:6"></span>
          <span style="--i:7"></span>
          <span style="--i:8"></span>
          <span style="--i:9"></span>
          <span style="--i:10"></span>
          <span style="--i:11"></span>
          <span style="--i:12"></span>
          <span style="--i:13"></span>
          <span style="--i:14"></span>
          <span style="--i:15"></span>
          <span style="--i:16"></span>
          <span style="--i:17"></span>
          <span style="--i:18"></span>
          <span style="--i:19"></span>
          <span style="--i:20"></span>
        </div>
    </section>
    </html>
    <style>
      .box{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #042104;
      }
      .box .circle{
        position: relative;
        width: 150px;
        height: 150px;
      }
      .box .circle span{
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        transform: rotate(calc(18deg*var(--i)));
      }
      .box .circle span::before{
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background: #00ff0a;
        border-radius: 50%;
        right: 0;
        box-shadow: 0px 0px 10px #00ff0a,
                    0px 0px 20px #00ff0a,
                    0px 0px 40px #00ff0a,
                    0px 0px 60px #00ff0a,
                    0px 0px 80px #00ff0a,
                    0px 0px 100px #00ff0a;
        top: calc(50% - 7.5px);
        transform: scale(0.1);
        animation: animate 4s linear infinite;
        animation-delay: calc(0.1s*var(--i));
      }
      @keyframes animate{
        0% {
          transform: scale(1);
        }
        50%,100%{
          transform: scale(0.1);
        }
      }
      .box .circle{
        margin: 0 -7.5px;
      }
      .box .circle:nth-child(2){
        transform: rotate(-180deg);
      }
      .box .circle:nth-child(2) span::before{
        animation-delay: calc(-0.1s*var(--i));
      }
      @keyframes animateColor{
        0%{
          filter: hue-rotate(0deg);
        }
        100%{
          filter: hue-rotate(360deg);
        }
      }
      .box{
        animation: animateColor 8s linear infinite;
      }
    </style>
    <script>
    <\/script>
    `
  },
  {
    id: "1014",
    src: imgSrc,
    text: `手机充电效果`,
    desc: '手机充电效果动画',
    code: `
    <html>
      <div class="phone">
        <div class="screen">
          <div class="number">68.8%</div>
          <div class="ascending">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble-home"></div>
            <div class="circle"></div>
          </div>
        <div>
      </div>
    </html>
    <style>
      .phone{
        margin: 20px auto;
        width:375px;
        height:600px;
        background: black;
        background-size:cover;
        box-sizing:border-box;
        padding-top:16px;
      }
      .screen{
        width:330px;
        height:557px;
        margin: 0 auto;
        background:black;
        border-radius: 45px 45px 0px 0px ;
        position: relative;
      }
      .screen .number {
        width: 200px;
        height: 200px;
        position: absolute;
        left:50%;
        top: 15%;
        transform: translateX(-50%);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items:center;
        font-size: 2.5em;
        color: #fff;
      }
      @keyframes animation1 {
        0%{
          filter: contrast(15) hue-rotate(0);
        }
        100%{
          filter: contrast(15) hue-rotate(360deg);
        }
      }
      @keyframes animation2 {
        0%{
          transform: rotate(0);
        }
        100%{
          transform: rotate(360deg);
        }
      }
      @keyframes animation3 {
        0%{
          bottom: 0;
        }
        100%{
          bottom: calc(80% - 170px);
        }
      }
      .screen .ascending{
        width:100%;
        height:100%;
        background: #050807;
        border-radius: 45px 45px 0px 0px;
        position: relative;
        filter: contrast(15);
        animation: animation1 5s linear infinite;
      }
      .screen .circle{
        width: 300px;
        height:300px;
        position: absolute;
        top: 7%;
        left: 50%;
        margin-left: -150px;
        filter: blur(8px);
        animation: animation2 5s linear infinite;
      }
      .circle::before{
        content:"";
        width: 200px;
        height: 200px;
        background-color:#4dff03;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 42% 38% 63% 49%/45%;
      }
      .circle::after{
        content: '';
        width: 178px;
        height: 178px;
        background-color:#000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius:50%;
      }
      .screen .bubble{
        width: 20px;
        height: 20px;
        background-color: #4dff03;
        border-radius: 100%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        z-index:5;
        filter: blur(5px);
        animation: animation3 5s ease-in-out infinite;
      }
      .bubble:nth-child(1){
        width: 20px;
        height: 20px;
        left: 50%;
        animation-duration: 5s;
        animation-delay: 1s;
      }
      .bubble:nth-child(2){
        width: 20px;
        height: 20px;
        left: 50%;
        animation-duration: 4s;
        animation-delay: 2s;
      }
      .bubble:nth-child(3){
        width: 20px;
        height: 20px;
        left: 50%;
        animation-duration: 3s;
        animation-delay: 3s;
      }
      .bubble:nth-child(4){
        width: 20px;
        height: 20px;
        left: 50%;
        animation-duration: 2s;
        animation-delay: 4s;
      }
      .bubble:nth-child(5){
        width: 20px;
        height: 20px;
        left: 51%;
        animation-duration: 1s;
        animation-delay: 5s;
      }
      .screen .bubble-home{
        width: 100px;
        height: 40px;
        background-color: #4dff03;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -50px;
        border-radius: 100px 100px 0px 0px;
        filter: blur(8px);
      }

    </style>
    <script>
      let intNum = 686;
      let timeId = null;
      timeId && clearInterval(timeId);
      timeId = setInterval(function(){
        intNum += 1;
        if(intNum >= 1000){
          window.clearInterval(timeId);
        };
        document.querySelector(".number").innerHTML = (intNum/10) + '%';
      },500)
    <\/script>
    `
  }, {
    id: "1015",
    src: imgSrc,
    text: `断行样式处理：-webkit-box-decoration-break: clone`,
    desc: '断行样式处理：-webkit-box-decoration-break: clone | slice(默认) ',
    code: `
    <html>
      <div class="box">
        <span class="odd">静止了，所有的花开。</span><span class="even">遥远了，清晰了爱。</span>
        <span class="odd">天郁闷，爱却很喜欢。</span><span class="even">那时候，我不懂这叫爱。</span>
        <span class="odd">你喜欢站在那窗台。</span><span class="even">你好久，都没再来。</span>
        <span class="odd">彩色的，时间染上空白。</span><span class="even">是你流的泪晕开。</span>
        <span class="odd">不要你离开，距离隔不开。</span><span class="even">思念变成海，在窗外进不来。</span>
        <span class="odd">原谅说太快，爱成了阻碍。</span><span class="even">手中的风筝飞太快回不来。</span>
        <span class="odd">不要你离开，回忆划不开。</span><span class="even">欠你的宠爱，我在等待重来。</span>
        <span class="odd">天空仍灿烂，它爱着大海。</span><span class="even">情歌被打败，爱已不存在。</span>
      </div>
    </html>
    <style>
      .odd{
        background-image: linear-gradient(135deg,deeppink,yellowgreen);
        color:#fff;
        padding: 2px 10px;
        border-radius:50% 3em 50% 3em;
        -webkit-box-decoration-break: clone;
      }
      .even{
        background-image: linear-gradient(135deg,orange,skyblue);
        color:#fff;
        padding: 2px 10px;
        border-radius:50% 3em 50% 3em;
        -webkit-box-decoration-break: clone;
      }
    </style>
    <script>
    <\/script>
    `
  },
  {
    id: "1016",
    src: imgSrc,
    text: `css新属性vmin和vmax：设置元素的属性为窗口中宽和高中最小/大的值`,
    desc: 'vmin：取vw和vh较小的值；vmax：取vw和vh较大的值；（常在图片预览的情况下使用）',
    code: ``
  },
  {
    id: "1017",
    src: imgSrc,
    text: `颜色混合属性：mix-blend-mode`,
    desc: `
      颜色混合属性：mix-blend-mode: normal | multiply | screeen | overlay | darken | lighten | color-dodge
      | color-burn | hard-light | soft-light | defference | exclusion | hue | saturation | color | luminosity
      `,
    code: `
    <html>
      <div class="box">
      <span class="prototype">multiply</span>混合后通常颜⾊会加深，多⽤在⽩⾊背景图⽚和其他元素的混合，以及彩⾊纹理的合并上。
      <span class="prototype">screen:255 - (255-A)(255-B)/255(遇白则白遇黑不变)</span>混合后颜⾊会减淡，⾮常适合实现霓虹灯光效果，适合⿊⾊背景素材和其他元素混合，⾮常实⽤。
      <span class="prototype">overlay</span>在颜⾊值暗的时候，采⽤了类似“正⽚叠底”的算法，⽽颜⾊亮的时候，采⽤了类似“滤⾊”的算法。此混合模式⽐较适合实现⽂字⽔印效果。
      <span class="prototype">darken</span>表⽰哪个颜⾊暗使⽤哪个颜⾊，在web开发中，给图形或⽂字着⾊会很实⽤。
      <span class="prototype">lighten</span>是哪个颜⾊浅就表现为哪个颜⾊，在web开发中，给图形或⽂字着⾊会很实⽤。
      <span class="prototype">color-dodge</span>颜⾊减淡混合模式可以⽤来保护底图的⾼光，适合处理⾼光下的⼈物照⽚。
      <span class="prototype">color-burn</span>颜⾊加深混合模式可以⽤来保护底图的阴影，适合处理幽深秘境⼀类的照⽚，通过和特定的⾊彩进⾏混合，可以营造更加幽深的意境。
      <span class="prototype">hard-light</span>的效果是强光，最终的混合效果就好像耀眼的聚光灯照射过来，表现为图像亮的地⽅更亮，暗的地⽅更暗。多⽤在图像表现处理上。
      <span class="prototype">soft-light</span>的效果是柔光，最终的混合效果就好像发散的光源弥漫过来，表现效果和hard-light有类似之处，只是表现没有那么强烈。给图像着⾊的时候常⽤此混合模式。
      <span class="prototype">difference</span>是差值效果，可以实现颜⾊的反⾊效果。
      <span class="prototype">exclusion</span>的效果是排除，最终的混合效果和difference模式是类似的，区别在于exclusion的对⽐度要更低⼀些。
      <span class="tip">接下来要介绍的4种混合模式都属于颜⾊系混合模式，在web开发中不常⽤，还是传统的图像表现处理领域⽤的较多。</span>
      <span class="prototype">hue</span>表⽰⾊调混合，最终的效果是混合后的颜⾊使⽤底层元素的亮度和饱和度，⽽使⽤上层元素的⾊调。
      <span class="prototype">saturation</span>表⽰饱和度混合，混合后的颜⾊保留底图的亮度和⾊调，使⽤顶图的饱和度。
      <span class="prototype">color</span>表⽰颜⾊混合，混合后的颜⾊保留底图的亮度，使⽤顶图的⾊调和饱和度。
      <span class="prototype">luminosity</span>表⽰亮度混合，混合后的颜⾊保留底图的⾊调和饱和度，使⽤顶图的亮度，和color模式正好是相反的。
      </div>
    </html>
    <style>
      .box{
        white-space: pre-line;
      }
      .prototype{
        color: red;
      }
      .tip{
        color:blue;
      }
    </style>
    `
  },
  {
    id: "1018",
    src: imgSrc,
    text: `设置容器滚动条样式`,
    desc: '伪元素设置滚动条样式：::-webkit-scrollbar：设置滚动条容器样式、::-webkit-scrollbar-thumb：滚动条滑块样式、::-webkit-scrollbar-track：滚动条轨道样式',
    code: `
    <html>
      <div class="box">
        <div>滚动条样式</div>
      </div>
    </html>
    <style>
      .box{
        height: 200px;
        border: 1px solid gray;
        overflow: auto;
      }
      .box div{
        height: 400px;
        width:800px;
        background-color: pink;
      }
      /** 设置整个滚动条区域的样式*/
      .box::-webkit-scrollbar{
        width: 5px;
        height: 15px;
        background-color: red;
      }
      .box::-webkit-scrollbar-thumb{
        border-radius: 4px;
        background-color: blue;
      }
      /** 与scrollbar的区别是，track只能设置可滑动区域的样式*/
      .box::-webkit-scrollbar-track{
        box-shadow: 0 0 1px;
        background-color: yellow;
      }
      /** 效果与track基本一致*/
      .box::-webkit-scrollbar-track-piece{
        background-color: green;
      }
      /** 设置横竖滚动条交叉部分样式*/
      .box::-webkit-scrollbar-corner{
        background-color: cyan;
      }
    </style>
    `
  },
  {
    id: "1020",
    src: imgSrc,
    text: `流光登录页`,
    desc: '',
    code: `
    <html>
      <section class="container">
        <div class="box">
          <span class="borderLine"></span>
          <form>
            <h2>Sign in</h2>
            <div class="inputBox">
              <input tpye="text" required/>
              <span>Username</span><i></i>
            </div>
            <div class="inputBox">
              <input type="password" required/>
              <span>Password</span><i></i> 
            </div>
            <div class="links">
              <a>Forget Password</a><a>Signup</a>
            </div>
            <input type="button"  value="Login">
          </form>
        </div>
      </section>
    </html>
    <style>
      .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #222;

      }
      .box{
        position: relative;
        width: 300px;
        height: 420px;
        background: #1c1c1c;
        border-radius: 8px;
        overflow: hidden;
      }
      .box form{
        position: absolute;
        inset: 4px;
        background: #222;
        padding: 50px 40px;
        border-radius: 8px;
        z-index: 2;
        display: flex;
        flex-direction: column;
      }
      .box form h2{
        color: #fff;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.1em;
      }
      .box form .inputBox{
        position: relative;
        width: 220px;
        margin-top: 35px;
      }
      .box form .inputBox input{
        position: relative;
        width: 100%;
        padding: 20px 10px 10px;
        background: transparent;
        outline: none;
        border: none;
        box-shadow: none;
        color: #23212a;
        font-size: 1em;
        letter-spacing: 0.05em;
        z-index: 10;
        transition: 0.5s;
      }
      .box form .inputBox span{
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px 0px 10px;
        pointer-events: none;
        color: #8f8f8f;
        font-size: 1em;
        letter-spacing: 0.05em;
        transition: 0.5s;
      }
      .box form .inputBox input:valid ~ span,
      .box form .inputBox input:focus ~ span{
        color: #fff !important;
        font-size: 0.75em !important;
        transform: translateY(-34px);
      }
      .box form .inputBox i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
        transition: 0.5s;
        pointer-events: none;
      }
      .box form .inputBox input:valid ~ i,
      .box form .inputBox input:focus ~ i{
        height: 40px !important;
      }
      .box form .links{
        display: flex;
        justify-content: space-between;
      }
      .box form .links a{
        margin: 10px 0;
        font-size: 0.75em;
        color: #8f8f8f;
        text-decoration: noen;
      }
      .box form .links a:hover,
      .box form .links a:nth-child(2){
        color: #fff;
      }
      .box form input[type="button"]{
        border: none;
        outline: none;
        padding: 9px 25px;
        background: #fff;
        cursor: pointer:
        font-size: 0.9em;
        border-radius: 4px;
        font-weight: 600;
        margin-top: 10px;
      }
      .box form input[type="button"]:active{
        opcity: 0.8;
      }
      .borderLine{
        position: absolute;
        inset: 0;
      }
      @keyframes animate{
        0%{
          transform: rotate(0deg);
        }
        100%{
          transform: rotate(360deg);
        }
      }
      .box::before,
      .box::after,
      .borderLine::before,
      .borderLine::after{
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 300px;
        height: 420px;
        background: linear-gradient(0deg,transparent,transparent,#45f3ff,#45f3ff,#45f3ff);
        z-index: 1;
        transform-origin: bottom right;
        animation: animate 6s linear infinite;
      }
      .box::after{
        animation-delay: -3s;
      }
      .borderLine::before{
        background: linear-gradient(0deg,transparent,transparent,#ff2770,#ff2770,#ff2770) !important;
        animation-delay: -1.5s;
      }
      .borderLine::after{
        background: linear-gradient(0deg,transparent,transparent,#ff2770,#ff2770,#ff2770)!important;
        animation-delay: -4.5s;
      }
      
    </style> 
    `
  },
  {
    id: "1021",
    src: imgSrc,
    text: `小球跳动Loading`,
    desc: '',
    code: `
    <html>
      <section class="box">
        <div class="loader">
          <span class="ball" style="--i:1"></span>
          <span class="shadow" style="--i:1"></span>
          <span class="ball" style="--i:2"></span>
          <span class="shadow" style="--i:2"></span>
          <span class="ball" style="--i:3"></span>
          <span class="shadow" style="--i:3"></span>
          <span class="ball" style="--i:4"></span>
          <span class="shadow" style="--i:4"></span>
          <span class="ball" style="--i:5"></span>
          <span class="shadow" style="--i:5"></span> 
        </div>
      </section>
    </html>
    <style>
      .box{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: #333;
      }
      .loader{
        width:100%;
        height: 200px;
        position: relative;
      }
      .loader span.ball{
        position: absolute;
        bottom: 100px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: lightseagreen;
        left: calc(var(--i) * 40px);
        animation: jump 1.8s linear infinite calc(var(--i)*0.3s);
      }
      .loader span.shadow{
        position: absolute;
        bottom: 12.5px;
        z-index: 1;
        opacity:0;
        width: 20px;
        height: 10px;
        background-color: #000;
        border-radius: 50%;
        left: calc(var(--i) * 40px);
        animation: shadow 1.8s linear infinite calc(var(--i)*0.3s);
      }
      @keyframes jump{
        0%,100%{
          bottom: 100px;
        }
        40%,60%{
          bottom: 15px;
          height: 30px;
        }
        50%{
          height: 15px;
          filter: hue-rotate(180deg);
        }
      }
      @keyframes shadow{
        0%,100%{
          transform: scale(2);
          opacity: 0.1;
          filter: blur(5px);
        }
        40%,60%{
          transform: scale(1);
          opacity: 1;
          filter: blur(2px);
        }
        45%,55%{
          transform: scale(1);
          opacity: 0;
        }
      }
    </style>
    `
  },
  {
    id: "1022",
    src: imgSrc,
    text: `滑动拼图验证`,
    desc: '',
    code: `
    <html>
      <section class="container">
        <div class="box">
          <div class="check">
            <div class="check-content"></div>
            <div class="check-block"></div>
          </div>
          <div class="drag">
            <div class="drag-block"></div>
            <div class="drag-tips">按住左边按钮向右拖动完成上方图像验证</div>
          </div>
        </div>
      </section>
    </html>
    <style>
      .box{
        position: relative;
        width: 300px;
        margin: 100px auto;
      }
      .check{
        width: 300px;
        height: 250px;
        background-size: 100% 100%;
        background-image: url(${getImageUrl('bizhi4.jpg')});
      }
      .check-content{
        position: absolute;
        top: 100px;
        left: 240px;
        width: 50px;
        height: 50px;
        background: raba(0,0,0,0.5);
        border: 1px solid #fff;
      }
      .check-block{
        width: 50px;
        height: 50px;
        border: 1px solid #fff;
        background-image: inherit;
        background-repeat: inherit;
        background-size: 300px 250px;
        background-position: -200px -50px;
        position: absolute;
        top: 100px;
        left: 100px;
      }
      .drag{
        width: 300px;
        height: 50px;
        background-color: #e3e3e3;
        margin-top: 10px;
        position: relative;
      }
      .drag-block{
        width: 50px;
        height: 50px;
        background-color: yellowgreen;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
      }
      .drag-tips{
        width: 95%;
        height: 100%;
        margin: 0 auto;
        text-align: center;
        line-height: 50px;
        font-size: 12px;
        color: #8a8a8a;
      }
    </style>
    <script>
      /** 获取校验区域*/
      const drag = document.querySelector('.drag');
      /**  获取两个滑块和拖动按钮*/
      const dragBlock = document.querySelector('.drag-block');
      const content = document.querySelector('.check-content');
      const check = document.querySelector('.check-block');
      /** 随机生成一个x,y坐标，用于设置校验块的位置*/
      let x = parseInt(240 - Math.random() * 100);
      let y = parseInt(Math.random() * 200);
      /** 定义个运动状态 如果为true代表鼠标已经按下*/
      let animating = false;
      /** 存储鼠标按下的x坐标*/
      let startX = 0;
      /** 存储移动的位置*/
      let offsetX = 0;
      content.style.cssText = \`left:\${x}px; top: \${y}px\`;
      check.style.cssText = \`background-position: -\${x}px -\${y}px; top: \${y}px\`;
      drag.addEventListener('mousemove', (e)=>{
        if(!animating){return};
        offsetX = e.pageX - startX;
        if(offsetX < 0 || offsetX > 300){ return };
        dragBlock.style.transform = \`translateX(\${offsetX}px)\`;
        check.style.left = \`\${offsetX}px\`;
      });
      dragBlock.addEventListener('mousedown',(e)=>{
        animating = true;
        startX = e.pageX;
      });
      dragBlock.addEventListener('mouseup',()=>{
        animating = false;
        if(offsetX >= x - 2 && offsetX <= x + 2){
          alert('成功'); 
        }
        dragBlock.style.transform = 'translateX(0px)';
        check.style.left = '0px';
      })

    </script>
    `
  },
  {
    id: "1023",
    src: imgSrc,
    text: `鸿蒙开机动画`,
    desc: '',
    code: `
    <html>
      <section class="box">
        <div class="container">
          <span class="delay">Harmony</span>
          <div class="letter">
            <ul class="ul">
              <li class="harmony"></li>
            </ul>
            <ul class="ul">
              <li class="harmony"></li>
            </ul>
            <svg>
              <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0 5" /> 
              </filter>
            </svg>
            <div class="line"></div>
          </div>
          <span class="delay">S</span>
        </div>
        <div class="shadow_spot"></div>
      </section>
    </html>
    <style>
      .box{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial;
        background-color: black;
        position: relative;
      }
      .container{
        display: flex;
        position: relative;
        justify-content: center;
        font-size: 50px;
        color: white;
      }
      .letter{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: cneter;
      }
      .letter .ul{
        position: relative;
        width: 50px;
        height: 28px;
        list-style: none;
        overflow: hidden;
      }
      .letter .ul:first-of-type{
        padding-bottom: 0;
      }
      .letter .ul:last-of-type{
        padding-top: 0;
      }
      .letter .ul .harmony{
        position: absolute;
        top: 10px;
        left: 10px;
        width: 25px;
        height: 25px;
        border: 5px solid white;
        border-radius: 50%;
        box-shadow: 0px 0px 15px 0px white,
                    inset 0px 0px 10px white;
        
      }
      .letter .ul:last-of-type>.harmony{
        top: auto;
        bottom: 10px;
      }
      .letter svg{
        position: absolute;
        width: 0px;
        height: 0px;
      }
      .letter .ul .harmony{
        transform: translateY(50%);
        animation: move 1.2s forwards,
                   shadow 1.5s 1.2s forwards; 
      }
      .letter .ul:last-of-type>.harmony{
        transform: translateY(-50%);
        // filter: url(#blur);
      }
      @keyframes move{
        to{
          transform: none;
        }
      }
      @keyframes shadow{
        to{
          box-shadow: none;
        }
      }
      .letter .line{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 5px;
        display: flex;
        justify-content: center;
      }
      .letter .line::after{
        content: '';
        width: 0%;
        background-color: #146df7;
        animation: line 0.5s 1.7s forwards;
      }
      @keyframes line{
        to{
          width: 60%;
        }
      }
      .container{
        transform: scale(2.5);
        transform-origin: 100% 50%;
        animation: move 0.8s 1.5s cubic-bezier(0.1,0.6,0,1) forwards;
      }
      .delay{
        opcity: 0;
        animation: fade_in 2s 0.5s forwards;
      }
      @keyframes fade_in{
        to{
          opacity: 1;
        }
      }
      .shadow_spot{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        background: radial-gradient(circle, transparent 60px, black 200px);
        animation: fade_spot 1s 1.5s forwards;
      }
      @keyframes fade_spot{
        to{ 
          transform: translateX(100px) scale(5);
        }
      }
    </style>
    <script>
      const filterElem = document.querySelector('feGaussianBlur');
      const clearFilter = () => {
        const stdDev = filterElem.getAttribute('stdDeviation').split(' ')[1];
        const value = parseFloat(stdDev) - 0.06;
        if(value > 0){
          filterElem.setAttribute('stdDeviation', \`0\${value}\`);
          requestAnimationFrame(clearFilter);
        }else{
          return;
        }
      }
      setTimeout(clearFilter,300);
    </script>
    `
  },
  {
    id: "1024",
    src: imgSrc,
    text: 'css步骤条',
    desc: '',
    code: `
    <html>
      <section class="box">
        <ol class="steps">
          <li>注册</li><!--已完成-->
          <li class="active">域认证</li><!--进行中-->
          <li>身份校验</li><!--未完成-->
          <li>开通账号</li><!--未完成-->
        </ol>
      </section>
    </html>
    <style>
      .box{
        width: 500px;
      }
      .steps{
        --normal-color: #666;
        --active-color: #06e;
      }
      .steps{
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 20px 10px;
        list-style: none;
        counter-rest: order; /** 定义css计数器*/
      }
      .steps > li{
        counter-increment: order; /** 选择器增量*/
      }
      .steps > li::before{
        content: counter(order);
        display: inline-block;
        width: 1.4em;
        line-height: 1.4em;
        text-align: center;
        border-radius: 50%;
        border: 1px solid;
        flex-shrink: 0;
      }
      /** 步骤条引导线*/
      .steps > li{
        flex: auto;
        display: flex;
        align-items: center;
        color: var(--active-color);
      }
      .setps > li:last-child{
        flex: none;
      }
      .steps > li:not(:last-child)::after{
        content: '';
        flex: 1;
        margin: 0 1em;
        border-bottom: 1px solid black;
        opacity: 0.6;
      }
      .steps > .active::before{
        color: #fff;
        background: var(--active-color);
        border-color: var(--active-color);
      }
      .steps > .active::after,
      .steps > .active ~ li {
        color: var(--normal-color);
      }
    </style>
    `
  },
  {
    id: "1025",
    src: imgSrc,
    text: '全景轮播效果',
    desc: '利用元素的内联样式和元素的唯一性实现轮播',
    code: `
    <html>
      <section class="box">
        <div class="container">
          <div class="slide">
            <div class="item" style="background-image: url('${getImageUrl('picture1.webp')}')"></div>
            <div class="item" style="background-image: url('${getImageUrl('picture2.webp')}')"></div>
            <div class="item" style="background-image: url('${getImageUrl('picture3.jpg')}')"></div>
            <div class="item" style="background-image: url('${getImageUrl('picture4.jpg')}')"></div>
            <div class="item" style="background-image: url('${getImageUrl('picture5.jpg')}')"></div>
            <div class="item" style="background-image: url('${getImageUrl('picture6.jpg')})"></div>
          </div>
          <div class="buttons">
            <div class="left">Prev</div>
            <div class="center">下载壁纸</div>
            <div class="right">Next</div>
          </div>
        </div>
      </section>
    </html>
    <style>
      .container{
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;
        background: linear-gradient(200deg, pink, #918ef9);
      }
      .item{
        width: 60px;
        height: 40px;
        position: absolute;
        top: calc(10% + 100px);
        left: 0;
        transform: translateY(-50%);
        border-radius: 5px;
        background-color: #fff;
        background-size: cover;
        background-position: center;
        transition: 1s;
        box-shadow: 0px 30px 50px #505050;
      }
      .item:nth-child(1),
      .item:nth-child(2){
        left: 0;
        top: 10%;
        width: 100%;
        height: 200px;
        transform: translateY(0);
        box-shadow: none;
        border-radius: 0;
      }
      .item:nth-child(3){
        left: 70%;
      }
      .item:nth-child(4){
        left: calc(70% + 60px);
      }
      .item:nth-child(5){
        left: calc(70% + 120px);
      }
      .item:nth-child(n+6){
        left: calc(70% + 180px);
      }
      .buttons{
        width: 100%;
        position: absolute;
        top: calc(10% + 220px);
        text-align: center;
        display: flex;
        justify-content: center;
      }
      .buttons div{
        min-width: 80px;
        height: 50px;
        line-height: 50px;
        text-align:center;
        border-radius: 5px;
        margin: 0px 25px;
        color: #fff;
        background-color: rgba(0,0,0,0.4);
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
        cursor: positer;
        user-select: none;
      }
    </style>
    <script>
      const leftBtn = document.querySelector('.buttons .left');
      const rightBtn = document.querySelector('.buttons .right');
      const slide = document.querySelector('.slide');
      /** 节流锁 */
      let openClick = true;
      /** 下一张*/
      rightBtn.addEventListener("click",()=>{
        if(openClick){
          openClick = false;
          const items = document.querySelectorAll(".slide .item");
          slide.appendChild(items[0]);
          setTimeout(()=>openClick = true,1000);
        }
      })
      /** 上一张*/
      leftBtn.addEventListener("click",()=>{
        if(openClick){
          openClick = false;
          const items = document.querySelectorAll(".slide .item");
          slide.prepend(items[items.length-1]);
          setTimeout(()=>openClick = true,1000);
        }
      })
    </script>
    `
  },
  {
    id: "1026",
    src: imgSrc,
    text: '',
    desc: '',
    code: `
    <html>
      
    </html>
    <style>
      
    </style>
    `
  },
]