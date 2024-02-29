<template>
  <div class="box">
    <section id="jsnode_reg_regtable">
      <h3>正则字符表</h3>
      <el-table :data="regs" border>
        <el-table-column min-width="100" prop="char" label="字符" />
        <el-table-column min-width="300" prop="desc" label="描述" />
      </el-table>
    </section>
    <!--  -->
    <section  id="jsnode_reg_reguse">
      <h3>正则的使用</h3>
      <ol>
        <li><span>1.</span>let reg = /regChart/modifiers</li>
        <li><span>2.</span>let reg = new RegExp(regChart, modifiers).使用new RegExp可以动态设置regChart规则。</li>
      </ol>
      <h5>modifiers修饰符表</h5>
      <el-table :data="modifiers" border>
        <el-table-column min-width="100" prop="char" label="字符" />
        <el-table-column min-width="300" prop="desc" label="描述" />
      </el-table>
      <h5>正则表示式的函数</h5>
      <el-table :data="regProperies" border>
        <el-table-column min-width="100" prop="property" label="方法" />
        <el-table-column min-width="300" prop="desc" label="描述" />
      </el-table>
    </section>
    <!--  -->
    <section  id="jsnode_reg_stringreg">
      <h3>可与正则连用的字符串方法</h3>
      <el-table :data="stringUse" border>
        <el-table-column min-width="200" label="方法">
          <template #default="props">
          <div style="word-break:auto-phrase;" v-html="props.row.property"></div>
        </template>
        </el-table-column>
        <el-table-column min-width="300" label="描述">
          <template #default="props">
          <div style="word-break:auto-phrase;" v-html="props.row.desc"></div>
        </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script lang="ts" setup>

const regs = [
  {
    char: '^',
    desc: '匹配输入字行首'
  },
  {
    char: '$',
    desc: '匹配输入字行尾'
  },
  {
    char: '*',
    desc: '匹配前面的子表达式任意次。如zo*能匹配z，也能匹配zo以及zoo'
  },
  {
    char: '+',
    desc: '匹配前面的子表达式至少1次。如zo*能匹配zo以及zoo，但不能匹配z'
  },
  {
    char: '?',
    desc: '匹配前面的子表达式0次或1次。如de(sc)?能匹配de或desc'
  },
  {
    char: '{n}',
    desc: 'n是一个非负整数，匹配前面字符n次。如o{2}不能匹配node中的o，但能匹配到room中的o'
  },
  {
    char: '{n,m}',
    desc: 'n,m均为非负整数，其中n<=m，最少匹配n次且最多匹配m次。'
  },
  {
    char: '\\f',
    desc: '匹配一个换页符'
  },
  {
    char: '\\n',
    desc: '匹配一个换行符'
  },
  {
    char: '\\r',
    desc: '匹配一个回车符'
  },
  {
    char: '\\t',
    desc: '匹配一个制表符'
  },
  {
    char: '\\v',
    desc: '匹配一个垂直制表符'
  },
  {
    char: '.',
    desc: '匹配除\n和\r之外的任何单字符。'
  },
  {
    char: '\\b',
    desc: '匹配单词的边界。如，“er\\b”可以匹配“never”中的“er”，但不能匹配“verb”中的“er”；“\\b1_”可以匹配“1_23”中的“1_”，但不能匹配“21_3”中的“1_”。'
  },
  {
    char: '\\B',
    desc: '匹配非单词的边界。如：“er\\b”能匹配“verb”中的“er”，但不可以匹配“never”中的“er”'
  },
  {
    char: '\\d',
    desc: '匹配一个数字字符，等价于[0-9]。'
  },
  {
    char: '\\D',
    desc: '匹配一个数字字符，等价于[^0-9]。'
  },
  {
    char: '\\s',
    desc: '匹配任何不可见字符，等价于[\\f\\n\\r\\v]。'
  },
  {
    char: '\\S',
    desc: '匹配任何不可见字符。'
  },
  {
    char: '\\xxx',
    desc: '匹配以8进制数xxx规定的字符。'
  },
  {
    char: '\\xdd',
    desc: '匹配以16进制数dd规定的字符。'
  },
  {
    char: '\\uxxxx',
    desc: '匹配以16进制数xxxx规定的字符。'
  },
  {
    char: 'x|y',
    desc: '匹配x或y。'
  },
  {
    char: '[xyz]',
    desc: '字符集合，匹配所包含的任意字符。例如，“[abc]”可以匹配“plain”中的“a”。'
  },
  {
    char: '[^xyz]',
    desc: '负值字符集合，匹配未包含的任意字符。例如，“[^abc]”可以匹配“plain”中的“plin”任一字符。'
  },
  {
    char: '[a-z]',
    desc: '匹配a-z范围内的任意一个字符。'
  },
  {
    char: '()',
    desc: '将‘(’ 和 ’)‘ 之间的表达式定义为“组”（group），并且将匹配这个表达式的字符保存到一个临时区域（一个正则表达式中最多可以保存9个），它们可以用 \\1 到\\9 的符号来引用'
  },
]

const modifiers = [
  {
    char: 'g',
    desc: '执行全局匹配'
  },
  {
    char: 'i',
    desc: '对大小写不敏感的匹配'
  },
  {
    char: 'm',
    desc: '执行多行匹配'
  },
]
const regProperies = [
  {
    property: 'exec(string)',
    desc: '检索字符串中指定的值，返回找到的值，并确定其位置。'
  },
  {
    property: 'test(string)',
    desc: '检索字符串中指定的值，返沪true或false。'
  },
]
const stringUse = [
  {
    property: 'search(regchart | string)',
    desc: '检索与正则表达式匹配的值的位置。'
  },
  {
    property: 'match(regchart | string)',
    desc: '找到一个或多个正则表达式的匹配。'
  },
  {
    property: 'replace(regchart | string, newchart | ( findStr, findIndex, allStr ) => newchart)',
    desc: '替换与正则表达式匹配的子串'
  },
  {
    property: 'split(regchart | string)',
    desc: '把字符串按指定字符分割为数组。'
  },
]
</script>

<style lang="less" scoped>
  .box>section{
    margin-bottom: 50px;
  }
</style>
