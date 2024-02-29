<template>
  <div class="box">
    <h3>比较常用的Number的方法</h3>
    <el-table :data="methodsData" border>
      <el-table-column min-width="220">
        <template #header>
          属性或方法 <span style="font-weight: 400;"> (绿色为自己调用，红色为Number对象调用)</span>
        </template>
        <template #default="props">
          <div style="word-break:auto-phrase;" >
            <span :class="props.row.rootUse ? 'proto' : 'self'"></span>{{ props.row.property }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="描述" min-width="300">
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
    property: 'MAX_VALUE',
    desc: '可表示的最大的数。',
    rootUse: true,
  },
  {
    property: 'MIN_VALUE',
    desc: '可表示的最小的数。',
    rootUse: true,
  },
  {
    property: 'NEGATIVE_INFINITY',
    desc: '返回负无穷大， 溢出时返回此值。',
    rootUse: true,
  },
  {
    property: 'POSITIVE_INFINITY',
    desc: '返回正无穷大， 溢出时返回此值。',
    rootUse: true,
  },
  {
    property: 'NaN',
    desc: '返回非数字值。',
    rootUse: true,
  },
  {
    property: 'isNaN(any)',
    desc: '判断是否是一个NaN数字。',
    rootUse: true,
  },
  {
    property: 'isFinite(number)',
    desc: '判断是否是一个有限数。',
    rootUse: true,
  },
  {
    property: 'isSafeInteger(number)',
    desc: '判断是否是一个安全的整数（-2**53-1 ~ 2**53-1）。',
    rootUse: true,
  },
  {
    property: 'parseFloat(string)',
    desc: '将字符串的形式的数字转为Number型的浮点数字。',
    rootUse: true,
  },
  {
    property: 'parseInt(string, radix)',
    desc: '将字符串的形式的数字转为Number型的整型数字。radix：转换的进制，默认为10进制。',
    rootUse: true,
  },
  {
    property: 'toExponential()',
    desc: '返回一个数的科学计数法形式。如：(12345).toExponential();得到：1.2345e+4',
  },
  {
    property: 'toFixed(number)',
    desc: `将数字转换为字符串，并保留指定位数的小数。注意保留的算法并不是四舍五入。如：
    <pre><code>console.log((2).toFixed(2)) // 2.00
console.log((2.535).toFixed(2)) // 2.54
console.log((2.545).toFixed(2)) // 2.54
</code></pre>`,
  },
  {
    property: 'toPrecision(number)',
    desc: `把数字格式化成指定长度的科学计数法表示，多余的按四舍五入。如：
    (123456).toPrecision(2)) 得到： 1.2e+5`,
  },
  {
    property: 'toString()',
    desc: '返回数字的字符串。',
  },
  {
    property: 'valueOf()',
    desc: '返回数字本身的值。',
  },
  {
    property: 'toLocaleString()',
    desc: '返回该数字的千分号形式的字符串。',
  }

  
] 
</script>

<style lang="less" scoped>

.proto{
  display: inline-block;
  width: 4px;
  height: 10px;
  border-radius: 2px;
  margin-right: 10px;
  background: rgb(233, 83, 83);
}
.self{
  .proto;
  background: rgb(14, 241, 158);
}
</style>
