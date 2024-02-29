<template>
  <div class="box">
    <h3>Math对象常用的属性和方法</h3>
    <el-table :data="methodsData" border>
      <el-table-column label="属性或方法" prop="property" />
      <el-table-column min-width="300" label="描述">
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
    property: 'E',
    desc: '返回算数常量e，（约等于2.718）。'
  },
  {
    property: 'LN2',
    desc: '返回2的自然对数（约等于0.693）。'
  },
  {
    property: 'LN10',
    desc: '返回10的自然对数（约等于2.302）。'
  },
  {
    property: 'LOG2E',
    desc: '返回以2为底的e的对数（约等于1.414）。'
  },
  {
    property: 'LOG10E',
    desc: '返回以10为底的e的对数（约等于0.434）。'
  },
  {
    property: 'PI',
    desc: '返回圆周率（约等于3.14159）。'
  },
  {
    property: 'SQRT_2',
    desc: '返回2的平方根的倒数（约等于0.707）。'
  },
  {
    property: 'SQRT2',
    desc: '返回2的平方根（约等于1.414）。'
  },
  {
    property: 'abs(x)',
    desc: '返回x的绝对值。'
  },
  {
    property: 'sin(x)',
    desc: '返回x的正弦。'
  },
  {
    property: 'cos(x)',
    desc: '返回x的余弦。'
  },
  {
    property: 'tan(x)',
    desc: '返回x的正切。'
  },
  {
    property: 'asin(x)',
    desc: '返回x的反正弦值。'
  },
  {
    property: 'acos(x)',
    desc: '返回x的反余弦值。'
  },
  {
    property: 'atan(x)',
    desc: '以介于-PI/2与PI/2弧度之间的数值来返回x的反正切值。'
  },
  {
    property: 'atan2(x, y)',
    desc: '返回从x轴到点 (x,y) 的角度 (介于-PI/2与PI/2弧度之间)。'
  },
  {
    property: 'sqrt(x)',
    desc: '返回x的平方根。'
  },
  {
    property: 'pow(x, y)',
    desc: '返回x的y次幂的值。'
  },
  {
    property: 'log(x)',
    desc: '返回以e为底的数的自然对数。'
  },
  {
    property: 'exp(x, y)',
    desc: '返回E的x次方。'
  },
  {
    property: 'min(x, y, ...)',
    desc: ' 返回其中最小的值。'
  },
  {
    property: 'max(x, y)',
    desc: '返回其中最大的值。'
  },
  {
    property: 'round(x)',
    desc: '返回x四舍五入最为接近的数。'
  },
  {
    property: 'random()',
    desc: '返回 0 ~ 1 之间的随机数。'
  },
  {
    property: 'foolr(x)',
    desc: '返回x向下舍入的值。'
  },
  {
    property: 'ceil(x)',
    desc: '返回x向上舍入的值。'
  },

  
] 

</script>

<style lang="less" scoped>



</style>
