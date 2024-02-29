<template>
  <div class="box">
    <h3>比较常用的对象的方法</h3>
    <el-table :data="methodsData" border>
      <el-table-column width="400">
        <template #header>
          属性或方法 <span style="font-weight: 400;"> (绿色为自己调用，红色为Object对象调用)</span>
        </template>
        <template #default="props">
          <div style="word-break:auto-phrase;" >
            <span :class="props.row.useType ? 'root-object' : 'self'"></span>{{ props.row.property }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template #default="props">
          <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>


const methodsData = [
  {
    property: 'create(proto, propertiesObject)',
    desc: `使用指定的原型对象及属性创建一个新的对象。new操作符的实现及es5类的继承实现原理会用到。
    例如:let obj = Object.create(null); 创建一个无原型链的纯净对象。`,
    useType: 'root-object',
  },
  {
    property: 'hasOwnProperty(key)',
    desc: '检查对象是否含有指定的属性名，返回一个Boolaen值。'
  },
  {
    property: 'constructor()',
    desc: '返回创建该对象的构造函数的引用。'
  },
  {
    property: 'getPrototypeOf(obj)',
    desc: '返回指定对象的原型。',
    useType: 'root-object',
  },
  {
    property: 'setPrototypeOf(obj, prototype)',
    desc: '设置指定对象的原型。如：Object.setPrototypeOf({}, null) 等价于 Object.create(null)',
    useType: 'root-object',
  },
  {
    property: 'getOwnPropertyNames(obj)',
    desc: `返回给定对象的所有自有属性(不在原型上找)的字符串数组。如：
    let obj = {name: 'zhk', age: 23, gender: 1}; Object.getOwnPropertyNames(obj);
    得到：['name', 'age', 'gender']。`,
    useType: 'root-object',
  },
  {
    property: 'keys(obj)',
    desc: `返回给定对象中所有可枚举属性的字符串数组。如：
    let obj = {name: 'zhk', age: 23, gender: 1}; 
    Object.defineProperty(obj,'gender',{ enumerable: false, });Object.keys(obj);
    得到：['name', 'age']。`,
    useType: 'root-object',
  },
  {
    property: 'values()',
    desc: '返回给定对象中所有可枚举属性的值的数组。',
    useType: 'root-object',
  },
  {
    property: 'entries(obj)',
    desc: `返回给定对象自身所有可枚举属性键值对数组。其排列顺序与使用for...in遍历该对象时的顺序一致，
    如：let obj = {name: 'zhk', age: 23, gender: 1}; 
    Object.defineProperty(obj,'gender',{ enumerable: false, });Object.entries(obj);
    得到：[['name','zhk'],['age',23]]。`,
    useType: 'root-object',
  },
  {
    property: 'getOwnPropertySymbols(obj)',
    desc: '返回给定对象中所有Symbol属性的值的数组。',
    useType: 'root-object',
  },
  {
    property: 'assign(targetObj, ...objArg)',
    desc: `将所有的objArg身上所有的可枚举的属性复制到targetObj身上，
    如果有重复的属性，取最后一个objArg的属性值，
    返回合并后的targetObj，会改变原targetObj。如：
    let obj = { name: 'zhk', age: 23, a: 'a', b: 'b' };
    Object.defineProperty(obj, 'b', {enumerable: false,});
    let obj2 = { c: 1,d: 2,a: 3 };
    let obj3 = { name: 'xxx' };
    let resObj = Object.assign(obj2,obj,obj3);<br>
    console.log(resObj); 得到：{a: 'a', age: 23, c: 1, d: 2, name: 'xxx'}。<br>
    console.log(resObj === obj2); 得到：true。
    `,
    useType: 'root-object',
  },
  {
    property: 'defineProperty(obj, property, descriptor)',
    desc: `定义或修改指定对象的指定属性的描述值或访问器，返回目标对象。descriptor的值有：
    { value: any, writable: boolean, enumerable: boolean, configurable: boolean,
       set: (setVal) => void, get: () => value }。注意：(value或writable)不能与(访问器set或get)同时存在。
    <br>value: 属性值；writable: 是否可被重新赋值；enumerable: 是否可被遍历；configurable: 属性本身是否可被修改。
    set: 为属性设置值时触发，get: 读取属性时触发，返回值即为读到的属性值。<br>
    如：<pre><code>let obj = { };
Object.defineProperty(obj, 'name', {
  ...,
  set: (setVal) => {
    console.log(setVal) // 李四
  },
  get: ()=>{
    return '王五'
  }
})
obj.name = '李四';
console.log(obj.name); // 王五</code></pre>
`,
    useType: 'root-object',
  },
  {
    property: 'defineProperties(obj, props:{ property: descriptor })',
    desc: `其作用与defineProperty()一样，defineProperties()可以一次设置多个属性的描述值或访问器。
    如：<pre><code>let obj = { name: '张三' };
Object.defineProperties(obj, {
  'name': {
    value: '李四',
    writable: true,
  },
  'age': {
    set: (setVal)=>{
      console.log(setVal); // 32
    },
    get: ()=>{
      return 23;
    }
  },
  'gender': {
    value: '男',
    writable: false;
  }
})
console.log(obj.name); // 李四
obj.name = '王五';
console.log(obj.name); // 王五
obj.age = 32;
console.log(obj.age); // 23
obj.gender = '1'; // 报错，gender是 read only 属性
console.log(obj.gender);</code></pre>`,
    useType: 'root-object',
  },
  {
    property: 'getOwnPropertyDescriptor(obj, property)',
    desc: '返回指定对象上指定的自有属性的属性描述符。',
    useType: 'root-obeject'
  },
  {
    property: 'getOwnPropertyDescriptor(obj)',
    desc: '返回指定对象的所有自有属性的属性描述符。',
    useType: 'root-obeject'
  },
  {
    property: 'is()',
    desc: '判断两个对象是否引用同一块内存地址。即是否是同一个对象。',
    useType: 'root-obeject'
  },
  {
    property: 'valueOf()',
    desc: `返回指定对象的原始值(被用作运算时的值,单纯调用返回对象本身)，自己可以设置对象的valueOf()来改变对象的原始值。
    如:
    <pre><code>let myNum = function (n) {
  this.number = n;
};
let num1 = new myNum(2); 
console.log(num1.valueOf()); // myNun{number: 2}
console.log(num1+1);// [object Object]1
myNum.prototype.valueOf = function () {
  return '[object myNum]'
}
let num2 = new myNum(2); 
console.log(num2.valueOf()); // myNun{number: 2}
console.log(num2+1) // [object myNum]1
myNum.prototype.valueOf = function () {
  return this.number
}
let num3 = new myNum(2); 
console.log(num1.valueOf()); // myNun{number: 2}
console.log(num3+1) // 3</code></pre>`
  },
  {
    property: 'toString()',
    desc: `返回表示该对象的字符串。常用Object.prototype.toString.call()来判断某属性的类型。如：
    <pre><code>let toString = Object.prototype.toString();
{}.toString(); // [object Object]
toString.call([]); // [object Array]
toString.call('abc'); // [object String]
toString.call(123); // [object Number]
toString.call(new Date()); // [object Date]
toString.call(true); // [object Boolean]
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
toString.call(Symbol()); // [object Symbol]
</code></pre>`
  },
  {
    property: 'seal(obj)',
    desc: `密封对象，并返回被密封后的对象。密封对象不可以添加或删除属性，
    也不可以修改属性的描述符，但仍可以为描述符wrieable为true的属性赋值。`,
    useType: 'root-object'
  },
  {
    property: 'isSealed(obj)',
    desc: `判断一个对象是否是密封对象。返回一个Boolean值。`,
    useType: 'root-object'
  },
  {
    property: 'freeze(obj)',
    desc: `冻结一个对象，对象被冻结后，不能修改其任何属性，即该对象将永不改变。返回被冻结的对象`,
    useType: 'root-object'
  },
  {
    property: 'isFrozen(obj)',
    desc: `判断一个对象是否被冻结。返回一个Boolean值。`,
    useType: 'root-object'
  },
  {
    property: 'prevenetExtensions(obj)',
    desc: `让一个对象变的不可扩展(不能添加新的属性)。返回一个Boolean值。`,
    useType: 'root-object'
  },
  {
    property: 'isExtensible(obj)',
    desc: `判断一个对象是否是可拓展的(是否可以在它上面添加新的属性)。返回一个Boolean值。`,
    useType: 'root-object'
  },
  {
    property: 'propertyIsEnumerable(porperty)',
    desc: `判断一个对象的指定属性是否是可遍历的。返回一个Boolean值。`,
  },
  {
    property: '__proto__',
    desc: `返回对象的原型。`,
  },
  {
    property: 'prototype',
    desc: `返回对象的原型。`,
  },
] 
</script>

<style lang="less" scoped>

:deep(.property-label){
  width: 300px !important;
  background: red;
}
.root-object{
  display: inline-block;
  width: 4px;
  height: 10px;
  border-radius: 2px;
  margin-right: 10px;
  background: rgb(233, 83, 83);
}
.self{
  .root-object;
  background: rgb(14, 241, 158);
}
</style>
