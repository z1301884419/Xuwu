<template>
  <div class="box">
    <!-- eventObjectData  -->
    <section id="event_about_eventobj">
      <h3>事件对象</h3>
      <el-table :data="eventObjectData" border>
        <el-table-column label="属性或方法" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section id="event_about_keyboard">
      <h3>键盘事件</h3>
      <el-table :data="keyboardData" border>
        <el-table-column label="事件名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
      <h3>键盘事件属性</h3>
      <el-table :data="keyboardPropData" border>
        <el-table-column label="属性" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
      <h3>常用的键位值</h3>
      <el-table :data="keyboardValData" border>
        <el-table-column label="键位名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="键位值" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- mouseEvent -->
    <section id="event_about_mouse">
      <h3>鼠标事件</h3>
      <el-table :data="mouseData" border>
        <el-table-column label="事件名" min-width="200">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
      <h3>鼠标按钮的button值</h3>
      <el-table :data="mouseKeyValData" border>
        <el-table-column label="参数值" min-width="200">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- Frame/Object Event -->
    <section id="event_about_frame">
      <h3>框架/对象（Frame/Object）事件</h3>
      <el-table :data="FrameData" border>
        <el-table-column label="事件名" min-width="200">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- clipboardData -->
    <section id="event_about_clipboard">
      <h3>剪粘板事件</h3>
      <el-table :data="clipboardData" border>
        <el-table-column label="事件名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
      <h3>剪粘板对象：Clipboard API (Async)</h3>
      <mark>如果navigator.clipboard属性返回undefined，说明当前浏览器不支持这个api。</mark><br />
      <mark>Chrome浏览器规定，只有https协议的页面才能使用这个api，不过开发（本地）环境允许使用非加密协议。</mark><br />
      <mark>Clipboard API的所有操作都是异步的，返回promise对象，不会造成页面卡顿。而且可以将任意内容（如图片）放入剪粘板。</mark><br /><br />
      <el-table :data="clipboardObjData" border>
        <el-table-column label="属性或方法名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
      <h4>剪粘板事件实现：通过document.execCommand</h4>
      <mark>只能将选中的内容复制到剪粘板，无法向剪粘板任意写入内容。</mark><br />
      <mark>同步操作，如果复制/粘贴大量数据，页面可能会出现卡顿。</mark><br />
      <mark>有些浏览器会跳出提示框，要求用户许可，这时在用户做出选择前，页面会失去响应。</mark><br /><br />
      <el-table :data="clipboardAchieveByDomData" border>
        <el-table-column label="事件名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="实现" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
      <h4>剪粘板事件实现：通过Clipboard API (Async)</h4>
      <el-table :data="clipboardAchieveByApiData" border>
        <el-table-column label="事件名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="实现" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- dragData -->
    <section id="event_about_drag">
      <h3>拖拽事件</h3>
      <el-table :data="dragData" border>
        <el-table-column label="事件名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- mediaData  -->
    <section id="event_about_media">
      <h3>多媒体（Media）事件</h3>
      <el-table :data="mediaData" border>
        <el-table-column label="事件名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- cssAnimateData  -->
    <section id="event_about_cssanimate">
      <h3>css动画事件</h3>
      <el-table :data="cssAnimateData" border>
        <el-table-column label="事件名" min-width="100">
          <template #default="props">
            <div style="word-break:auto-phrase;">
              {{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script lang="ts" setup>
const eventObjectData = [
  {
    property: 'bubbles',
    desc: `返回布尔值，指示事件是否是冒泡事件类型。`,
  },
  {
    property: 'cancelable',
    desc: `返回布尔值，指示事件是否可拥有可取消的默认动作。`,
  },
  {
    property: 'currentTarget',
    desc: `返回其事件监听器触发该事件的元素。`,
  },
  {
    property: 'eventPhase',
    desc: `返回事件传播的当前阶段。`,
  },
  {
    property: 'target',
    desc: `返回触发此事件的元素。`,
  },
  {
    property: 'timeStamp',
    desc: `返回事件生成的日期和时间。`,
  },
  {
    property: 'type',
    desc: `返回当前Event对象表示的事件的名称。`,
  },
  {
    property: 'initEvent()',
    desc: `初始化新创建的Event对象的属性。`,
  },
  {
    property: 'preventDafault()',
    desc: `阻止默认行为。`,
  },
  {
    property: 'stopPropagation()',
    desc: `不再派发事件（阻止冒泡）。`,
  },
  {
    property: 'addEventListener(type, handle)',
    desc: `在目标事件上注册监听事件。(IE8 = attachEvent())`,
  },
  {
    property: 'dispatchEvent()',
    desc: `允许发送事件到监听器上。(IE8 = fireEvent())`,
  },
  {
    property: 'removeEventListener(type, handle)',
    desc: `移出事件监听绑定的处理程序, handle为绑定的事件处理程序。(IE8 = datachEvent())`,
  },
  {
    property: 'handleEvent()',
    desc: `把任意对象注册为事件处理程序。`,
  },
  {
    property: 'createEvent()',
    desc: ``,
  },
]
const keyboardData = [
  {
    property: 'keydown',
    desc: '键盘上按下某个键时触发。',
  },
  {
    property: 'keyup',
    desc: '键盘上弹起某个键时触发。',
  },
  {
    property: 'keypress',
    desc: '键盘上按下并弹起某个键时触发。',
  },
]
const keyboardPropData = [
  {
    property: 'keyCode',
    desc: '键盘中对应键位的键值。',
  },
  {
    property: 'which',
    desc: '键盘中对应键位的Unicode编码 (IE8之前不持支)。',
  },
  {
    property: 'charCode',
    desc: '键盘中对应键位的Unicode编码，仅DOM支持 (Firefox浏览器的onkeypress事件中无效)。',
  },
  {
    property: 'target',
    desc: '发生事件的结点，仅DOM支持。',
  },
  {
    property: 'srcElement',
    desc: '发生事件的元素，仅IE支持。',
  },
  {
    property: 'shiftKey',
    desc: '是否按下Shift键，如果按下返回true，否则为false。',
  },
  {
    property: 'ctrlKey',
    desc: '是否按下Ctrl键，如果按下返回true，否则为false。',
  },
  {
    property: 'altKey',
    desc: '是否按下Alt键，如果按下返回true，否则为false。',
  },
  {
    property: 'metaKey',
    desc: '是否按下Meta键，如果按下返回true，否则为false, 仅DOM支持。',
  },
]
const keyboardValData = [
  {
    property: '0~9数字键',
    desc: '48~57',
  },
  {
    property: 'A~Z字母键',
    desc: '65~90',
  },
  {
    property: 'Backspace（退格键）',
    desc: '8',
  },
  {
    property: 'Tab（制表键）',
    desc: '9',
  },
  {
    property: 'Enter（回车键）',
    desc: '13',
  },
  {
    property: 'Space（空格键）',
    desc: '32',
  },
  {
    property: 'left arrow（左箭头键）',
    desc: '37',
  },
  {
    property: 'Right arrow（右箭头键）',
    desc: '39',
  },
  {
    property: 'Top arrow（上箭头键）',
    desc: '38',
  },
  {
    property: 'Down arrow（下箭头键）',
    desc: '40',
  },
]
const mouseData = [
  {
    property: 'click',
    desc: '鼠标左键单击触发。',
  },
  {
    property: 'dblclick',
    desc: '鼠标左键双击触发。',
  },
  {
    property: 'contextmenu',
    desc: '鼠标右键打开上下文菜单时触发。',
  },
  {
    property: 'mouseenter',
    desc: '当鼠标指针移入到元素上时触发。',
  },
  {
    property: 'mouseover',
    desc: '当鼠标移入到某元素之上触发。',
  },
  {
    property: 'mousemove',
    desc: '当鼠标指针在元素上移动时触发。',
  },
  {
    property: 'mouseleave',
    desc: '当鼠标指针移出元素时触发。',
  },
  {
    property: 'mouseout',
    desc: '当鼠标从元素上移出时触发。',
  },
  {
    property: 'mousedown',
    desc: '鼠标按键被按下时触发。',
  },
  {
    property: 'mouseup',
    desc: '鼠标按键被松开时触发。',
  },
]
const mouseKeyValData = [
  {
    property: 'event.button = 0',
    desc: '鼠标左键。（IE8及更早为：1）',
  },
  {
    property: 'event.button = 1',
    desc: '鼠标中键。（IE8及更早为：4）',
  },
  {
    property: 'event.button = 2',
    desc: '鼠标右键。（IE8及更早为：2）',
  },
]
const FrameData = [
  {
    property: 'abort',
    desc: '图像的加载被中断（< object>）',
  },
  {
    property: 'beforeunload',
    desc: '即将离开页面（刷新或关闭）时触发。',
  },
  {
    property: 'error',
    desc: '在加载文档或图象时发生错误。(< object>,< body>,< frameset>)',
  },
  {
    property: 'hashchange',
    desc: '当前URL的锚部分发生修改时触发',
  },
  {
    property: 'load',
    desc: '一张页面或一幅图完成加载时触发。',
  },
  {
    property: 'unload',
    desc: '用户退出页面时触发。(< body>, < frameset>)',
  },
  {
    property: 'pageshow',
    desc: `该事件在用户访问页面时触发（<body>）。
      与load的区别是load事件只在第一次加载时触发，pageshow在每次加载页面时触发。
      即load事件在页面从浏览器缓存中读取时不触发。<br/>
      判断页面是否是从缓存中读取：<br/>\< body onpageshow="func()"\>\< /body\>
      <br/>function func(event){ event.persisted; // 如果从缓存中读取该值返回true，否则返回false。 };`,
  },
  {
    property: 'pagehide',
    desc: `该事件在用户离开网页时触发(<body>)（跳转页面，刷新页面，提交表单，关闭浏览器等）。
      与unload的区别是：unload的触发不会缓存页面。`,
  },
  {
    property: 'resize',
    desc: `元素、窗口、框架被重新调整大小时触发。`,
  },
  {
    property: 'scroll',
    desc: `元素、窗口、框架被滚动时触发。`,
  },
]
const clipboardData = [
  {
    property: 'copy',
    desc: `该事件在用户拷贝元素内容时触发。`,
  },
  {
    property: 'cut',
    desc: `该事件在用户剪切元素内容时触发。`,
  },
  {
    property: 'paset',
    desc: `该事件在用户粘贴元素内容时触发。`,
  },
]
const clipboardObjData = [
  {
    property: 'readText()',
    desc: `获取剪粘板里面面的文本。浏览器这时会跳出一个对话框，询问用户是否同意读取剪粘板。`,
  },
  {
    property: 'read()',
    desc: `获取剪粘板里面的数据，可以是文本数据，也可以是二进制数据（如图片）。该方法需要用户的许可。如：
    <pre>async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        console.log(URL.createObjectURL(blob));
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }</pre>
1.ClipboardItem 对象表示一个单独的剪贴项，每个剪贴项都拥有ClipboardItem.types属性和ClipboardItem.getType()方法。<br/>
2.ClipboardItem.types属性返回一个数组，里面的成员是该剪贴项可用的 MIME 类型，比如某个剪贴项可以用 HTML 格式粘贴，也可以用纯文本格式粘贴，那么它就有两个 MIME 类型（text/html和text/plain）。<br/>
3.ClipboardItem.getType(type)方法用于读取剪贴项的数据，返回一个 Promise 对象。该方法接受剪贴项的 MIME 类型作为参数，返回该类型的数据，该参数是必需的，否则会报错。`,
  },
  {
    property: 'writeText()',
    desc: `该方法用于将文本内容写入剪粘板。`,
  },
  {
    property: 'write()',
    desc: `该方法将任意数据写入剪粘板。可以是文本数据，也可以是二进制数据。如：<br/>
    <pre>try {
  const imgURL = 'https://dummyimage.com/300.png';
  const data = await fetch(imgURL);
  const blob = await data.blob();
  await navigator.clipboard.write([
    new ClipboardItem({
      [blob.type]: blob
    })
  ]);
  console.log('Image copied.');
} catch (err) {
  console.error(err.name, err.message);
}
下面的例子是将同一个剪贴项的多种格式的值，写入剪贴板，一种是文本数据，另一种是二进制数据，供不同的场合粘贴使用:
function copy() {
  const image = await fetch('kitten.png');
  const text = new Blob(['Cute sleeping kitten'], {type: 'text/plain'});
  const item = new ClipboardItem({
    'text/plain': text,
    'image/png': image
  });
  await navigator.clipboard.write([item]);
}</pre>`,
  },
]
const clipboardAchieveByDomData = [
  {
    property: 'copy',
    desc: `const inputElement = document.querySelector('#input');<br/>
inputElement.select();<br/>
document.execCommand('copy');`,
  },
  {
    property: 'cut',
    desc: `const inputElement = document.querySelector('#input');<br/>
inputElement.select();<br/>
document.execCommand('cut');`,
  },
  {
    property: 'paset',
    desc: `const pasteText = document.querySelector('#output');<br/>
pasteText.focus();<br/>
document.execCommand('paste');`,
  },
]
const clipboardAchieveByApiData = [
  {
    property: 'copy',
    desc: `<pre>const source = document.querySelector('.source');
source.addEventListener('copy', (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData('text/plain', selection.toString());
  event.preventDefault();
});</pre>`,
  },
  {
    property: 'cut',
    desc: `<pre>const source = document.querySelector('.source');
source.addEventListener('cut', (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData('text/plain', selection.toString());
  event.preventDefault();
});</pre>`,
  },
  {
    property: 'paset',
    desc: `<pre>document.addEventListener('paste', async (e) => {
  e.preventDefault();
  const text = await navigator.clipboard.readText();
  console.log('Pasted text: ', text);
});</pre>`,
  },
]
const dragData = [
  {
    property: 'drag',
    desc: `该事件在元素正在拖动时触发。(e.target == 拖动元素)`,
  },
  {
    property: 'dragend',
    desc: `该事件在用户完成元素的拖动时触发。(e.target == 拖动元素)`,
  },
  {
    property: 'dragenter',
    desc: `该事件在拖动的元素进入放置目标时触发。(e)=> { e.target == 放置目标元素 }。`,
  },
  {
    property: 'dragleave',
    desc: `该事件在拖动的元素离开放置目标时触发。(e.target == 放置目标元素)。`,
  },
  {
    property: 'dragover',
    desc: `该事件在拖动的元素在放置目标上时触发。(e.target == 拖动元素)`,
  },
  {
    property: 'dragstart',
    desc: `该事件在用户开始拖动元素时触发。(e.target == 拖动元素)`,
  },
  {
    property: 'drop',
    desc: `该事件在拖动的元素放置在目标区域（完成拖动动作）时触发。(e.target == 放置目标元素)`,
  },
]
const mediaData = [
  {
    property: 'play',
    desc: `事件在视频/音频(audio/video)开始播放时触发。`,
  },
  {
    property: 'pause',
    desc: `事件在视频/音频(audio/video)暂停时触发。`,
  },
  {
    property: 'playing',
    desc: `事件在视频/音频(audio/video)暂停或缓冲后准备重新开始播放时触发。`,
  },
  {
    property: 'ended',
    desc: `事件在视频/音频(audio/video)播放结束时触发。`,
  },
  {
    property: 'abort',
    desc: `事件在视频/音频(audio/video)终止时触发`,
  },
  {
    property: 'canplay',
    desc: `事件在用户可以播放视频/音频(audio/video)时触发`,
  },
  {
    property: 'canplaythrough',
    desc: `事件在视频/音频(audio/video)可以正常播放且无需停顿和缓冲时触发`,
  },
  {
    property: 'emptied',
    desc: `事件当前播放列表为空时触发。`,
  },
  {
    property: 'error',
    desc: `事件在视频/音频(audio/video)数据加载期间发生错误时触发。`,
  },
  {
    property: 'loadedmetadata',
    desc: `事件在指定视频/音频(audio/video)的元数据加载后触发`,
  },
  {
    property: 'loadstart',
    desc: `事件在浏览器开始寻找指定视频/音频(audio/video)时触发`,
  },
  {
    property: 'progress',
    desc: `事件在浏览器加载指定的视频/音频(audio/video)时触发。`,
  },
  {
    property: 'durationchange',
    desc: `事件在视频/音频(audio/video)的时长变化时触发`,
  },
  {
    property: 'volumechange',
    desc: `事件在音量发生改变时触发。`,
  },
  {
    property: 'ratechange',
    desc: `事件在视频/音频(audio/video)的播放速度发生改变时触发。`,
  },
  {
    property: 'seeking',
    desc: `事件在用户开始重新定位视频/音频(audio/video)时触发。`,
  },
  {
    property: 'seeked',
    desc: `事件在用户重新定位视频/音频(audio/video)的播放位置后触发。`,
  },
  {
    property: 'timeupdate',
    desc: `事件在当前的播放位置发生改变时触发。`,
  },
  {
    property: 'waiting',
    desc: `事件在视频由于要播放下一帧而需要缓冲时触发。`,
  },
  {
    property: 'stalled',
    desc: `事件在浏览器获取媒体数据但媒体数据不可用时触发。`,
  },
  {
    property: 'suspend',
    desc: `事件在浏览器读取媒体数据中止时触发。`,
  },
]
const cssAnimateData = [
  {
    property: 'animationstart',
    desc: `事件在css动画开始播放时触发。`,
  },
  {
    property: 'animationiteration',
    desc: `事件在css动画重复播放时触发。`,
  },
  {
    property: 'animationsend',
    desc: `事件在css动画结束播放时触发。`,
  },
  {
    property: 'transitionend',
    desc: `事件在css完成过渡后触发。`,
  },
]

</script>

<style lang="less" scoped>
.box>section {
  margin-bottom: 50px;
}

.proto {
  display: inline-block;
  width: 4px;
  height: 10px;
  border-radius: 2px;
  margin-right: 10px;
  background: rgb(233, 83, 83);
}

.self {
  .proto;
  background: rgb(14, 241, 158);
}
</style>
