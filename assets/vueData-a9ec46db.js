const e=[{id:"1001",title:"setup语法糖与setup函数的区别",desc:"setup语法糖与setup函数的区别：expose()函数（暴露属性）使用不同",readCount:5,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>< script setup>中，默认为expose()，不暴露任何东西；

setup函数中expose的使用方法：
1.使用回调函数
  export default{
    setup(props,{ expose }){
      ...
      const count = ref(0);
      <span class='vn-color-blue'>expose({
        count,
        ...
      })</span>
    }
  }
2.直接配置数组
  export default{
    expose:["fn","count"],
    methods: {
      fn(){}
    },
    setup(){
      const count = ref(0)
      ...
      return{
        count
      }
    }

  }
</pre>
</div>
    `},{id:"1002",title:"vue3父子组件的生命周期调用顺序（组合式）。",desc:"vue3中父子组件的生命周期调用顺序及其他回调钩子的调用时机。",readCount:0,createTime:"20223-06-02 20:00:00",html:`<div id="vn-container">
<code>组合式没有了beforeCreate和create两个生命周期，其生命周期有以下：
<- - - - >
<li>onBeforeMounted() // 组件挂载之前</li>
<li>onMounted() // 组件挂载之后</li>
<li>onBeforeUpdate() // 组件更新之前</li>
<li>onUpdated() //组件更新之后</li>
<li>onBeforeUnmount() // 组件卸载之前</li>
<li>onUnmounted() // 组件卸载之后</li>
<li>onRenderTracked() // 当组件追踪到响应式依赖时调用。仅开发模式下生效</li>
<li>onRenderTriggered() // 当响应式依赖的变更触发了组件的渲染时调用。仅开发模式下生效</li>

其他回调：
<- - - - >
<li>nexttick() // 组件完全加载之后</li>
<li>onErrorCaptured() // 在捕获了后代组件传递的错误时调用</li>
<li>onBeforeRouteUpdate() // 路由更新之前，如果在组件 < router-view>< /router-view>中</li>

父子组件挂载时调用顺序：
<- - - ->
<li>父BeforeMounted()</li>
<li>父onRenderTracked(); 如果有响应式依赖</li>
<li>子BeforeMounted()</li>
<li>子onRenderTracked(); 如果有响应式依赖</li>
<li>子onMounted()</li>
<li>父onMounted()</li>
<li>父nexttick()</li>
<li>子nexttick()</li>
父组件更新的依赖影响子组件更新时的调用顺序：
<- - - - >
<li>父onRenderTriggered() //仅开发模式有效</li>
<li>父onBeforeUpdate()</li>
<li>子onBeforeUpdate()</li>
<li>子onUpdated()</li>
<li>父onUpdated()</li>
父子组件卸载时的调用顺序：
< - - - ->
<li>父beforeUnmount()</li>
<li>子beforeUnmount()</li>
<li>子onUnmounted()</li>
<li>父onUnmounted()</li>

<- - - - >
<span class='vn-color-blue'>在组件的nexttick中获取子组件的dom信息时，由于nexttick父比子先执行，故获取不到子组件渲染完成的dom信息</span>
<span class='vn-color-blue'>如何解决：</span>在父nexttick中嵌套一层setTimeout微任务，延迟到子组件渲染完成后操作。
</code></div>`},{id:"1003",title:"自定义组件想实现v-model的效果可以使用provide(),inject()，可以实现上下级组件的数据共享",desc:'上级组件使用provide("count",count),下级组件使用const count = inject("count"),新版可以使用defineModel获取到组件传的v-model的值了',readCount:0,createTime:"20223-06-02 20:00:00",html:""},{id:"1004",title:"git忽略文件大小写规则",desc:"git忽略文件大小写规则：git config core.ignorecase false",readCount:0,createTime:"20223-06-02 20:00:00",html:""},{id:"1005",title:"js获取标签的css样式",desc:"js获取标签的css样式：getComputedStyle(Node)",readCount:0,createTime:"20223-06-02 20:00:00",html:`
    <div id="vn-container">
      如果用node.style来获取元素的css样式，只能获取到内联的style的样式<br/>
      <span class='vn-color-blue'>getComputedStyle(Node).style:</span>而getComputedStyle可以获取到元素的所有css属性的值<br/>
      <span class='vn-color-blue'>Node.getBoundingClientRect()</span> 可获取到元素的位置信息<br/>
      <span class='vn-color-blue'>老版ie中用currentStyle.style</span>获取样式
      </div>
    `},{id:"1006",title:"input输入框中文合成事件",desc:"输入框在输入中文时，每个字母的输入都会触发input事件，解决办法可以用输入框的合成事件",readCount:0,createTime:"20223-011-01 20:00:00",html:`
<div id="vn-container">
<code><"input 
@input="inputChange" 
@compositionstart="inputCompositionStart" 
@compositionend="inputCompositionEnd" />"

- - - - JavaScript - - -

import { ref } from 'vue' 
const searchCompositionRef = ref(false)
function inputChange(val){
  !searchCompositionRef.value && search(val.target.value);
}
function inputCompositionStart(val){
  searchCompositionRef.value = true;
}
function inputCompositionEnd(val){
  searchCompositionRef.value = false;
  search(val.target.value);
}
function search(searchQuery){
  console.log(searchQuery);
}
<span class='vn-color-blue'>compositionstart:</span>合成开始时，禁止input触发search事件</br>
<span class='vn-color-blue'>compositionend:</span>合成结束时，触发search并允许input触发search事件
</code>`},{id:"1007",title:"浏览器指纹",desc:"在不需要用户登录情况下判定用户身份，原理是不同的浏览器/电脑做相同的事会产生不同的值，详细使用：Fingerprint.js",readCount:0,createTime:"20223-06-02 20:00:00",html:""},{id:"1008",title:"字符串匹配时不能带有()[]{}",desc:"在使用search，macth字符串匹配时匹配字符中带有()[]{}时会出错",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>var str = 'AAnstcount=ref(1);expo';<br/>
var a =  'nstcount=ref<span class='vn-color-blue'>()</span>';<br/>
var index = str.search(a);<br/>
// index = 2<br/>
<br/>
var str = 'AAnstcount=ref(1);expo';<br/>
var a =  'nstcount=ref<span class='vn-color-blue'>(1)</span>';<br/>
var index = str.search(a);<br/>
// index = -1,找不到<br/>
<br/>
var str = 'AAnstcount=ref(1);expo';<br/>
var a =  'nstcount=ref<span class='vn-color-blue'>(</span>';<br/>
var index = str.search(a);<br/>
// 会报错
</code>
</div>
    `},{id:"1009",title:"parseInt的使用",desc:"parseInt(params1,params2):params1:转换的值；params2:转换的进制：2，8，10，16",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code><span class="vn-color-blue">parseInt的三种情况：
1.超出范围：NaN
2.0,undefined,不填：标识自动转换
  1):含有0X之类的会转换成16进制
  2):数字不超过7时会转换成8进制
  3):以上不符合的会转换成10进制
3.使用指定的进制：即使用第二的参数（推荐）</span>

例：[1,2,3].map(parseInt)的值
1.首先明确数组的map函数会向回调函数传3个值：item，index，arr
故[1,2,3].map(parseInt) = parseInt(1,0,[1,2,3])+parseInt(2,1,[1,2,3])+parseInt(3,2,[1,2,3])
故结果为：1，NaN，NaN
</code>
</div>
    `},{id:"1010",title:"标签通信:Broadcastchannel()",desc:'const channel = Broadcastchannel("标签名")',readCount:0,createTime:"20223-06-02 20:00:00",html:`
 <div id="vn-container">
<code><span class="vn-color-blue">1.创建通信实例：</span>const channel = new Broadcastchannel("标签名")
<span class="vn-color-blue">2.发布消息：</span>channel.postMessage(消息内容)
<span class="vn-color-blue">3.订阅消息：</span>channel.onmessage = (e)=>{e.data}<br/>
A页面：
const channel = new Broadcastchannel("shop")
channel.postMessage({price: 100, number: 1, total: 100})<br/>
B页面：
const channel = new Broadcastchannel("shop")
channel.onmessage = (e)=>{
  e.data // {price: 100, number: 1, total: 100}
}
</code>
</div>
    `},{id:"1011",title:"访问(用户选择)文件夹：showDirectoryPicker();访问(用户选择)文件：showOpenFilePicker",desc:"实现文件夹的读取：1.选择文件夹；2.获取文件夹内容；（异步迭代器）3.使文件目录结构可读；4.获取每个文件",readCount:0,createTime:"20223-06-02 20:00:00",html:`
    <div id="vn-container">
<code><span class="vn-color-blue">1.选择文件夹；</span>showDirectoryPicker()<span class="vn-color-red">是异步的,返回一个'句柄'</span>
<span class="vn-color-blue">2.获取文件夹内容；</span>句柄.entries()<span class="vn-color-red">读取'句柄'，返回一个文件夹的异步迭代器</span>
<span class="vn-color-blue">3.使文件目录结构可读</span>
<span class="vn-color-blue">4.读取每个文件的内容</span>
<-->
< button>选择文件夹< /button>
<-->
const btn = document.querySelector('button');
btn.onclick = async function(){
  try{
    const handle = await showDirectoryPicker();
    /** 可读的目录结构*/
    const root = await processHandle(handle);
    // 若要读取每个文件的内容，使用getFile()即可获取到文件
    const fileHandle = root.children[0];
    const file = fileHandle.getFile();
    const reder = new FileReader();
    // 不同文件读取类型不一样
    reder.readAsText(file,'utf-8');
    reader.onload = function(e){
      console.log(e.target.result);
    } 
  }catch{
    // 用户拒绝的处理
  }
};
function processHandle(handle){
  if(handle.kind === 'file'){
    return handle;
  }
  handle.children = [// 进入句柄
  const iter = handle.entries(// 循环异步迭代器
  for await(const item of iter){
    // item文件夹中每个子目录的文件的句柄
    handle.children.push(await processHandle(item[1]));
  }
  return handle;
};</code></div>`},{id:"1012",title:"使用高阶函数减少内存",desc:"使用高阶函数减少内存",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>写法一：直接使用函数
function removeSpace(str){
  const reg = /s/g;
  return str.replace(reg,'')
}
<span class="vn-color-blue">写法一每次调用都会创建一个reg</span>
<-->
写法二：使用立即执行函数
const removeSpace = (()=>{
  const reg = /s/g;
  return (str)=>{
    return str.replace(reg,'')
  }
})()
<span class="vn-color-blue">写法二只会开始创建一次reg，但不会被回收</span>
<-->
写法三：使用高阶函数
const removeSpace = ()=>{
  const reg = /s/g;
  return (str)=>{
    return str.replace(reg,'')
  }
}
<span class="vn-color-blue">写法三只有在调用时才会创建reg，且只需创建一次，且可以被回收</span>
</code></div>
    `},{id:"1013",title:"js实现并发任务控制",desc:"js实现并发任务控制",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>/** @param tasks 并发任务
 * @param parallelCount 最大并发数量
 */
function paralleTask(tasks: Array<Function>, parallelCount: number = 2) {
  return new Promise((resolve)=>{
    if(!tasks.length){
      resolve();
      return;
    };
    parallelCount = Math.min(parallelCount,tasks.length);
    /** 要运行任务在tasks中的下标 */
    let nextIndex = 0;
    /** 已完成任务的数量 */
    let finishCount = 0; 
    /** 运行当前任务，运行后是否有下一个任务运行 */
    function _run(){
      const task = tasks[nextIndex];
      nextIndex++;
      task().then(()=>{
        finishCount++;
        if(nextIndex < tasks.length){
          // 运行下一个任务
          _run();
        }else if(finishCount == tasks.length){
          // 任务完成
          resolve();
        }
      })
    }
    // 开始并发数量为0；同时开启parallelCount个并发任务
    for(let i = 0; i<parallelCount;i++){
      _run();
    }
  })
}
let tasks = [
  () => new Promise((resolve) => {
    console.log('正在执行1');
    setTimeout(resolve, 4000);   
  }).then(() => {
    console.log('--结束执行1')
  }),
  () => new Promise((resolve) => {
    console.log('正在执行2');
    setTimeout(resolve, 2000);
  }).then(() => {
    console.log('--结束执行2')
  }),
  () => new Promise((resolve) => {
    console.log('正在执行3');
    setTimeout(resolve, 5000);
  }).then(() => {
    console.log('--结束执行3')
  }),
  () => new Promise((resolve) => {
    console.log('正在执行4');
    setTimeout(resolve, 7000);
  }).then(() => {
    console.log('--结束执行4')
  }),
  () => new Promise((resolve) => {
    console.log('正在执行5');
    setTimeout(resolve, 2000);
  }).then(() => {
    console.log('--结束执行5')
  }),
  () => new Promise((resolve) => {
    console.log('正在执行6');
    setTimeout(resolve, 8000);
  }).then(() => {
    console.log('--结束执行6')
  }),
  () => new Promise((resolve) => {
    console.log('正在执行7');
    setTimeout(resolve, 5000);
  }).then(() => {
    console.log('--结束执行7')
  }),
]
paralleTask(tasks, 3);</code></div>
    `},{id:"1014",title:"vue中watch及watchEffect(单依赖时推荐，若会使用到多个ref时不推荐)",desc:"vue中watch及watchEffect的使用及区别",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code><span class="vn-color-blue">watch使用：</span>
const num = ref(1);
// 单个 ref
watch(num, (newNum) => {
  console.log(num is newNum)
})   
// getter 函数（常用于监听对象的属性）
watch(
  () => newNum.value + 2, // 第一个函数的返回值作为新值
  (newSum) => {
    console.log(num is newNum)
  }
)
// 多个来源组成的数组,数组里可以是ref也可以是getter函数
watch( [x, () => y.value] , ([newX, newY]) => {
  console.log(x is newX and y is newY)
});
参数增加传递一个对象可配置：深度监听和立即执行监听和获取更新之后的dom
{ 
  deep: true, // 深度监听（现默认开启）
  immediate: true, // 立即监听
  flush: 'post', // 获取更新之后的dom
 }

<span class="vn-color-blue">watchEffect的使用：</span>

watchEffect为简化的watch使用函数：
一、
watchEffect(async()=>{
  const asyncFn = await async()=>{<span class="vn-color-blue">ref.value</span>;do something}; // 以上同步代码：自动追踪的依赖必须在同步代码完成之前注册
  await asyncFn();
  ref.value++;
})
二、
wacth(<span class="vn-color-blue">ref</span>,async()=>{
  const asyncFn = await async()=>{do something};
  await asyncFn();
  ref.value++;
},{<span class="vn-color-blue">immediate: true</span>})

<span class="vn-color-blue">写法一等效于写法二</span>

<-->
wacthEffect(callback,{flush:'post'})又等于 <span class="vn-color-blue">watchPostEffect(callback)</span>
<-->

<span class="vn-color-blue">关于停止监听器</span>

1.在同步语句中创建的监听器：会在宿主组件卸载时自动停止
2.在异步语句中创建的监听器：需要手动停止
要手动停止一个侦听器，需调用 watch 或 watchEffect 返回的函数：
const unwatch = watchEffect(() => {})
// ...当该侦听器不再需要时
unwatch()</code></div>`},{id:"1015",title:"对象的属性描述符：Object.getOwnPropertyDescriptor(obj,property)",desc:"认识对象的属性描述符：Object.getOwnPropertyDescriptor及如何修改:Object.defineProperty()",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>const obj = {
  a:1,
  b:2
}
const desc = Object.getOwnPropertyDescriptor(obj,'a');
console.log(desc):打印为 
<span class="vn-color-blue">
{
  value:1, // 值
  writable:true, // 可被重新赋值
  enumerable:true, // 可被遍历
  configurable:true // 本身可被修改
}
</span>
<-->
原型上自带属性的属性描述符
const desc1 = Object.getOwnPropertyDescriptor(Object.prototype,'toString');
console.log(desc1);打印为
<span class="vn-color-blue">
{
  value: ƒ toString(), 
  writable:true, 
  enumerable:<span class="vn-color-red">false</span>, // 所以遍历对象时不会遍历到自带的属性
  configurable:true 
}
</span>
<-->
修改属性描述符：Object.defineProperty();
<span class="vn-color-blue">
Object.defineProperty(obj,'a',{
  value:2, 
  writable:true, 
  enumerable:false,
  configurable:true 
})
</span></code></div>`},{id:"1016",title:"vue中提供自定义ref：customRef",desc:"使用v-model的同时利用customRef实现输入框的防抖",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>< Input v-model="inputVal"/>
<-->

import { customRef } form 'vue';

let inputVal = debounceRef('');
function debounceRef(value,delay=1000){
  let timer;
  /* <span class="vn-color-red">track </span><span class="vn-color-blue">customRef提供的自动收集依赖回调</span>
  * <span class="vn-color-red">trigger </span><span class="vn-color-blue">customRef提供的自动派发依赖更新回调</span>
  */
  return customRef((track,trigger)=>{
    return {
      get(){
        // 依赖收集
        track();
        return value;
      },
      set(val){
        clearTimeout(timer);
        timer = setTimeout(()=>{
          value = val;
          // 派发更新
          trigger();
        },delay)
      }
    }
  })
}</code></div>`},{id:"1017",title:"Ajax请求上传/响应的进度监控",desc:"Ajax请求上传/响应的进度监控：xhr：progress事件、fetch实现响应监听：利用文档读取事件实现;(fetch无法实现上传监听)：",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
<code><span class="vn-color-blue">xhr请求实现响应进度监听</span>
const xhr = new XMLHttpRequest();
xhr.addEventListener('progress',(e)=>{
  console.log(<span class="vn-color-red">e.loaded</span>); //已经接收的数据量
  console.log(<span class="vn-color-red">e.total</span>); // 总数据量
})
<span class="vn-color-blue">xhr请求实现上传进度监听</span>
xhr.updoad.addEventListener('progress',(e)=>{
  console.log(e.loaded); //已经接收的数据量
  console.log(e.total); // 总数据量
})
<-->
<span class="vn-color-blue">fetch请求实现进度监听</span>
const resp = await fetch(url,{methed:'',body:''});
const respTotal = resp.headers.get('content-length'); // <span class="vn-color-blue">响应请求的总量</span>
const reader = resp.body.getReader(); // <span class="vn-color-blue">获取到响应请求的读取器</span>
let loaded = 0;
const decoder = new TextDecoder(); // <span class="vn-color-blue">文档流只能被读取一次，这里手动调用了读取器，故需要手动的拼接成完整的文档</span>
let respBody = ''; // 响应内容
while(1){
  const { <span class="vn-color-red">done</span>, <span class="vn-color-red">value</span> } = await reader.read();
  // done: 当前响应读取是否完成、value：每次读取的数据，是一个数组
  <span class="vn-color-blue">loaded += value.length;</span>
  console.log(loaded / respTotal + '%');// 即响应的进度
  <span class="vn-color-blue">respBody += decoder.decode(value);</span> // 每次读取后拼接到body上
  if(done){
    break;
    resolve(body);
  }
}</code></div>`},{id:"1018",title:"判断两个变量的值是否一致：Object.is(a,b)",desc:"判断两个变量的值是否一致：Object.is(a,b)，解释函数形参的赋值问题",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>let user = {name:"小红"}
let user1 = {name:"小红"}
console.log(Object.is(user,user1)) // false
function changeName(u){
  u.name = '小明';
  console.log(Object.is(user,u)) // true，此时形参即为实参的地址
  console.log(user.name) // 小明
  u = {
    name:'小兰'
  }
  console.log(Object.is(user,u)) // false,此时形参重新赋值，引用新的地址空间
}
changeName(user)
console.log(user.name) // 小明</code></div>`},{id:"1019",title:"字符串的码元与码点",desc:"操作字符串的方法是通过操作码元实现的，但使用码元处理’双码元字符‘时会出现位置或乱码错误",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container"> 
<code>const str = '这是一个🐱猫的表情，其中🐱为双码元字符';
<span class="vn-color-blue"><span class="vn-color-red">码元:</span>
一个码元的编码空间为16位，但js的一个字符可以是16位或32位
在js中字符串的length属性：数的是码元的数量
获取一个字符的码元值：str.charCodeAt(4)；将一个码元的值恢复成字符：String.fromCharCode(str.charCodeAt(4))
</span>
<span class="vn-color-blue"><span class="vn-color-red">码点:</span>
一个码点对应一个字符
获取一个字符的码点值：str.codePointAt(4)；(<span class="vn-color-red">其中4为双码元字符的第一个码元位置，不能是第二个码元的位置</span>)，如：</span>
双码元字符🐱在str中占4和5两个码元位置，但str.codePointAt(4) //🐱; str.codePointAt(5) // � 
<span class="vn-color-blue">将一个码点的值恢复成字符：String.fromCodePoint(str.codePointAt(4))</span>

console.log(str.slice(2,5)) // 一个�
console.log(str.slice(2,6)) // 一个🐱
console.log(str.length) // 21
<span class="vn-color-blue">通常在未知字符串的情况下，无法确保是否含有双码元字符，
继续使用slice，length等方法、属性就会出现错误bug</span>
<------>
<span class="vn-color-red">使用码点和码元封装一个可以操作含双码元的slice函数</span>
String.prototype.sliceByPoint = function(sIndex,eIndex){
  let result = '';
  let charIndex = 0;
  for(let i=0; i < eIndex; i++){
    if(charIndex >= this.length) break;
    const pointCode = this.codePointAt(charIndex);
    if(i>=sIndex){
      result += String.fromCodePoint(pointCode)
    }
    charIndex += pointCode > 0xffff ? 2 : 1;
  }
  return result;
}</code></div>`},{id:"1020",title:"为什么众多库里面都使用void 0 代替 undefined",desc:"undefined在js中不是关键字，undefined在非全局域里面可以被当作变量声明",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>if(1){
  let undefined = 1;
  console.log(undefined) // 1
}</code></div>`},{id:"1021",title:"console的多种函数使用方法",desc:"不要只会用console.log()！建议多看此内容",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
<code><span class="vn-color-blue">console.table([{}]);</span>// 将[{}]格式的数据以表格形式打印
       
- - - - - -
<span class="vn-color-blue">console.dir(fn || element);</span> // 将函数或dom结构以对象形式打印

- - - - - -
function b(){
  <span class="vn-color-blue">console.trace();</span> // 打印调用此处的堆栈信息，找到调用源
}
function  a(){
  b();
}
a();
- - - - - -
console.time('time') // 打印time和timeEnd之间同步代码执行所需时间
...
console.timeLog('time',[]) // 
console.timeEnd('time') 
- - - - - -
console.group('label'); // 将console.group()和console.groupEnd()之间作为一个分组打印
...此间打印的所有内容将划分为一个分组
console.log(1);
console.log(2);
console.log(3);
console.groupEnd('label');

- - - - - -
[1,2,3,4,5].forEach(()=>{
  console.count('count') // 对打印的次数进行计数
})
console.countReset('count') // 清空lable为'count'的计数

- - - - - -
console.clear(); // 清空打印信息
console.debug(); // 将打印信息分类到debug栏
console.warn(); // 打印警告
console.error(); // 打印错误</code>
      </div>`},{id:"1022",title:"游离结点造成的内存泄露：浏览器不会回收最后一次聚焦过的结点",desc:"浏览器不会回收最后一次聚焦过的结点，如果最后聚焦的是一个富文本占用较大内存，在失焦后应创建一个input聚焦来解决此问题",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
      </div>`},{id:"1023",title:"将es6中的class类还原为es5语法（只包括属性和方法）",desc:"将es6中的class类还原为es5语法（只包括属性和方法）",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
      <code>// class
class Product {
  static count = 0;
  constructor(name, unitPrice, number) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.number = number;
    Product.count++;
  }
  get totalPrice() {
    return this.number * this.unitPrice;
  }
  increase() {
    this.number++;
  }
}
// es5 
// 立即执行函数模拟class的暂时性死区特性
var Product2 = (function () {
  function Product2(name, unitPrice, number) if (!this || Object.getPrototypeOf(this) !== Product.prototype) {
      // 根据new操作符的this指向是否指向构造函数的原型模拟实现只能用new操作符来调用构造函数
      throw new TypeError("class constructor Product cannot be invoked without 'new'")
    }
    this.name = name;
    this.unitPrice = unitPrice;
    this.number = number;
    Product.count++;
  }

  Product.count = 0;
  // 在原型上添加访问属性
  Object.defineProperty(Product.prototype, 'totalPrice', {
    get() {
      return this.number * this.unitPrice},
    enumerable: false // 不可遍历属性
  })
  //  添加方法
  Object.defineProperty(Product.prototype, 'increase', {
    value: function () {
      if (Object.getPrototypeOf(this) === Product.prototype
        .increase.prototype
      ) {
        throw new TypeError('increase is not a constructor')
      }
      this.number++;
    },
    enumerable: false,
  })

  return Product
})()
const p1 = new Product('衣服', 199, 1)
const p2 = new Product2('衣服', 199, 1)

console.log(p1)
console.log(p2)
console.log(p1.totalPrice)
console.log(p2.totalPrice)
p1.increase()
p2.increase()
console.log(p2.totalPrice)
console.log(p2.totalPrice)</code>
      </div>`},{id:"1024",title:"vue菜单组件修改二级菜单样式不生效",desc:"vue中样式不生效，可以使用深度选择器: deep() | /deep/",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
<code><- 使用deep 深度选择器(旧) ->
.el-sub-menu <span class="vn-color-blue">/deep/</span> .el-sub-menu__title {
  height: 30px;
  line-height: 30px;
}

<- 使用deep 深度选择器(新) ->
.el-sub-menu <span class="vn-color-blue">:deep(.el-sub-menu__title)</span>  {
  height: 30px;
  line-height: 30px;
}</code>
      </div>`},{id:"1025",title:"vue中改变组件key值，重新渲染某个组件",desc:"vue中改变组件key值，重新渲染某个组件",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
<code><-某插槽组件根据父内容更新组件，由于组件未使用响应式数据，导致不会更新->
< template>
  < div ref="htmltotextRef" >
    < slot></slot>
  < /div>
< /template>

<span class="vn-text-type-bold">javascript:</span>

import { nextTick, ref } from "vue";
const htmltotextRef = ref<Element>();
nextTick(()=>{
  htmltotextRef._value.textContent = htmltotextRef._value.innerHTML
})

<-解决：在父组件每次更新时重新给子组件绑定一个新的key值->
< HtmlToText :key="new Date().getTime()+'htmlText'"></code>
      </div>`},{id:"1026",title:"mutationobserver监听dom变化",desc:"MutationObserver是一个JavaScript的API，用于监测DOM树的变化。它提供了一种异步的方式来监听DOM元素的增加、删除、属性变化等操作，以及文本节点的修改。通过MutationObserver，开发者可以实时地捕捉到DOM的变化，并做出相应的响应。",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
        使用MutationObserver实现水印效果：
        < div ref='contentRef'>内容< /div>
<code>const contentRef = ref();
// 水印div
let markDiv;
/** 设备像素比 */
const devicePixelRatio = window.devicePixelRatio || 1
// 画水印
function drawWatermark(text, fontSize) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = devicePixelRatio * fontSize + 'px serif';
  const { width } = ctx.measureText(text);
  const canvasSize = Math.max(100, width+40)
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  ctx.globalAlpha = 0.4;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((Math.PI / 180) * -25);
  ctx.font = devicePixelRatio * fontSize + 'px serif';
  ctx.fillText(text, 0, 0);
  return {
    base64: canvas.toDataURL(),
    size: canvasSize / devicePixelRatio,
  }
}
/** 水印属性（url地址及大小size） */
const WatermarkProps = computed(() => {
  return drawWatermark('水印文字', 水印字体大小)
})
/** 添加水印到容器 */
function addWatermark() {
  const { base64, size } = WatermarkProps.value;
  if (!useMask) {
    contentRef.value.style.backgroundImage = url(\${base64});
    contentRef.value.style.backgroundRepeat = 'repeat';
    contentRef.value.style.backgroundSize = \${size}px \${size}px;
  } else {
    if (markDiv) {
      markDiv.remove()
    }
    markDiv = document.createElement('div');
    markDiv.style.position = 'absolute';
    markDiv.style.backgroundImage = url(\${base64});
    markDiv.style.backgroundRepeat = 'repeat';
    markDiv.style.backgroundSize = \${size}px \${size}px;
    markDiv.style.zIndex = '999';
    markDiv.style.inset = '0';
    contentRef.value.appendChild(markDiv)
  }
}
/** 观察markRef结点 */
const ob = new MutationObserver((entries) => {
  for (const entry of entries) {
    if (useMask) {
      for (const dom of entry.removedNodes) {
        if (dom === markDiv) {
          // console.log('删除');
          addWatermark();
          return
        }
      }
      if (entry.target === markDiv) {
        // console.log("修改");
        addWatermark();
        return
      }
    } else {
      if (entry.target === markRef.value) {
        // console.log("修改");
        addWatermark();
        return
      }
    }
  }
})
//
onMounted(() => {
  addWatermark();
  ob.observe(contentRef.value,{
    childList: true,
    subtree:true,
    attributes:true,
  })
})
onUnmounted(()=>{
  ob.disconnect()
})</code>

      </div>`},{id:"1027",title:"元素相交监听：new IntersectionObserver()",desc:"监听两个结点相交：IntersectionObserver是异步的",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
        <div><b>利用交叉监听实现图片懒加载</b></div>
        <pre>
        <code>const ob = new IntersectionObserver((entries)=>{
  console.log('要观察的元素',entries);
  for(const entry of entries){
    if(<span class="vn-color-blue">entry.isIntersecting</span>){
      console.log('发生交叉,交叉的元素是', entry.target);
      const img = entry.target;
      img.src = omg.dataset.src;
      <span class="vn-color-blue">ob.unobserve(img)</span>; // 取消对该元素的观察
    }
  }
},
{
  root: null, // 配置被相交元素，必须是父级元素，默认是null，与视口相交
  rootMargin:0, // 配置被相交元素相交范围的扩撒或缩小
  threshold:1 // 取值0~1，相交的程度，0：刚好接触，1：完全相交
})
const imgs = documenet.querySelectorAll('img');
imgs.forEach((img)=>{
  <span class="vn-color-blue">ob.observe(img)</span>
})</code>
        </pre>
        
      </div>`},{id:"1028",title:"copy的监听与禁用",desc:"copy事件",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
< div> 我的文章我的文章我的文章我的文章我的文章我的文章 < /div>
<code>const div = document.querySelector('div');
div.addEventListener('copy',(e)=>{
e.preventDefault(); // 阻止默认行为即可禁用
e.clipboardData.setData('text/plain','别白嫖了！');
})</code>
</div>`},{id:"1029",title:"js中小技巧",desc:"",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
        <ol>
          <li>判断两个数字的符号是否相同：<span class="vn-color-blue">(-4 ^ 4) >= 0</span> </li>
          <li>判断一个数是否是2的整数次幂：<span class="vn-color-blue">const isPowerOf2 = (n) => (n & (n-1) === 0;)</span> </li>
          <li>小数求整：<span class="vn-color-blue">~~3.14; 3.14 >> 0; 3.14 << 0; 3.14 | 0 </span></li>
          <li>求一个数的2的n次方：<span class="vn-color-blue">const powerOf2 = (n) => 1 << n;</span> <li>
        </ol>
      </div>`},{id:"1030",title:"锚点实现",desc:"锚点实现，点击和滚动",readCount:0,createTime:"20223-06-02 20:00:00",html:`
<div id="vn-container">
<code>< div ref="contentRef">
    < div class="anchor-content" id="xx_anchor1">锚点内容< /div>
    < div class="anchor-content" id="xx_anchor2">锚点内容< /div>
    < div class="anchor-content" id="xx_anchor3">锚点内容< /div>
< div>
< ul>
  < li class="anchor-item" @click="anchorTo(#xx_anchor1)">
    < span class="active-flag">< /span>锚点1
  < /li>
  < li class="anchor-item" @click="anchorTo(#xx_anchor2)">
    < span class="active-flag">< /span>锚点2
  < /li>
  < li class="anchor-item" @click="anchorTo(#xx_anchor3)">
    < span class="active-flag">< /span>锚点3
  < /li>
< /ul>

- - -css- - -

.active-flag {
  display: inline-block;
  height: 20px;
  width: 3px;
  margin-right: 10px;
  border-radius: 3px;
}

.active {
  background-color: rgb(65, 185, 35);
}

- - - javascript- - - 

nexttick(()=>{
  scrolltoAnchor();
})
/** 页面锚点跳转 */
function anchorTo(anchor: any) {
  document.querySelector(anchor).<span class="vn-color-blue">scrollIntoView</span>({
    behavior: "smooth"
  });
}
/** 滚动实现锚点 */
function scrolltoAnchor() {
  /**锚点结点的位置*/
  let <span class="vn-color-blue">positionArr</span> = [];
  for(let item of document.querySelectorAll('.anchor-content')){
    try {
      let top = document.querySelector(item.anchor).getBoundingClientRect().top;
      positionArr.push(top);
    } catch (err) {
      console.error(err);
      console.error('找不到锚点结点：' + item.anchor);
    }
  }
  /**跳转锚点结点 */
  let anchorE = document.querySelectorAll('.active-flag')
  // 初始化添加active给第一个结点
  if (!document.querySelectorAll('.active').length) anchorE[0].className = 'active-flag active';
  positionArr.sort((i, j) => j - i)
  // content容器的滚动事件
  contentRef._value.<span class="vn-color-blue">addEventListener('scroll'</span>, () => {
    for (let i = 0; i < positionArr.length; i++) {
      if (positionArr[i] < contentRef._value.scrollTop + 150) {
        preActive && (preActive.className = 'active-flag');
        anchorE[Math.abs(i - positionArr.length + 1)].className = 'active-flag active';
        preActive = anchorE[Math.abs(i - positionArr.length + 1)];
        break;
      } else {
        anchorE[Math.abs(i - positionArr.length + 1)].className = 'active-flag';
      }
    }
  })
}</code>   
</div>`},{id:"1031",title:"vite+vue打包部署到githubpages服务器上时静态资源失效问题",desc:"项目在本地环境中使用图片等静态资源ok，但打包结果部署到服务器后访问路径错误",readCount:0,createTime:"20223-06-02 20:00:00",html:`
      <div id="vn-container">
<pre><code>
<h3>1.<span class="vn-color-blue">vite.config文件配置base路径为'./'</span></h3>
export default defineConfig({
  ...
  <span class="vn-color-blue">base: './'</span>,
  resolve: {
    // 文件系统路径的别名
        'vue': 'vue/dist/vue.esm-bundler.js',
      },
  },
}
<h3>2.<span class="vn-color-blue">将静态资源文件夹放到public文件夹中</span></h3>
public下的文件被访问，不用加相对路径；public文件夹在项目打包时不会被编译。<br/>
<h3>3.<span class="vn-color-blue">使用静态资源时，用import导入资源路径</span></h3>
如： import imgURL from '/asset/xxx.png'
< img :src="imgURL" /><br/>
<h3>4.<span class="vn-color-blue">更多详情方法<a contenteditable="false" href="https://cn.vitejs.dev/guide/assets#explicit-url-imports" target="_blank">vite静态资源处理</a></span></h3>
</code></pre>
      </div>`}];export{e as v};
