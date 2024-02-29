<template>
  <div class="box">
    <section id="str_about_motehds">
      <h3>比较常用的String的属性或方法</h3>
    <el-table :data="methodsData" border>
      <el-table-column min-width="220">
        <template #header>
          属性或方法 <span style="font-weight: 400;"> (绿色为自己调用，红色为String对象调用)</span>
        </template>
        <template #default="props">
          <div style="word-break:auto-phrase;">
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
    </section>
    <!--  -->
    <section id="str_about_strhtmltag">
      <h3>生成带html标签的字符串方法（已弃用）</h3>
      <el-table :data="methodsOfHtml" border>
        <el-table-column min-width="100">
          <template #header>
            方法 <span style="font-weight: 400;">均为自己调用</span>
          </template>
          <template #default="props">
            <div style="word-break:auto-phrase;">
              <span :class="props.row.rootUse ? 'proto' : 'self'"></span>{{ props.row.property }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="300">
          <template #default="props">
            <div style="word-break:auto-phrase;"> {{ props.row.desc }}<br/><span v-html="props.row.html"></span></div>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script lang="ts" setup>


const methodsData = [
  {
    property: 'charAt(index)',
    desc: '返回指定位置的字符。',
  },
  {
    property: 'charCodeAt(index)',
    desc: '返回在指定位置的字符的Unicode码元(16位)编码。',
  },
  {
    property: 'fromCharCode(Unicode)',
    desc: '将Unicode码元(16位)编码转化成一个字符。',
    rootUse: true,
  },
  {
    property: 'codePointAt(index)',
    desc: '返回在指定位置的字符的Unicode码点(32位)编码。',
  },
  {
    property: 'fromCodePoint(Unicode)',
    desc: '将Unicode码点(32位)编码转化成一个字符。',
    rootUse: true,
  },
  {
    property: 'concat(str)',
    desc: '连接两个或多个字符串，并返沪新的字符串。如：str.concat(str2)。',
  },
  {
    property: 'indexOf(str)',
    desc: '返回指定的字符串值在字符串中首次出现的位置。',
  },
  {
    property: 'lastIndexOf(str)',
    desc: '返回指定的字符串值在字符串中最后一次出现的位置。',
  },
  {
    property: 'match(str | reg)',
    desc: '找到一个或多个正则的的匹配。',
  },
  {
    property: 'replace(str | reg, newstr | ( findstr, findindex, allstr) => newstr )',
    desc: '查找指定的字符串或正则表达式，并替换成新的字符串。',
  },
  {
    property: 'search(str | reg)',
    desc: '查找指定字符串或正则表达式的值，并返回其位置。',
  },
  {
    property: 'slice(start, end)',
    desc: `从start位置到end位置截取字符串，并返回新的字符串，不改变源字符串。如果式负数，位置的计算则
    从末尾开始计数.`,
  },
  {
    property: 'split(str)',
    desc: '按指定字符串子串将字符串分割位数组。不改变源字符串。',
  },
  {
    property: 'substr(index, count)',
    desc: `从起始索引提取指定数目的字符。index如果是负数，则从后面开始计算索引位置。`,
  },
  {
    property: 'substring(start, end)',
    desc: `从start位置到end位置截取字符串，并返回新的字符串，不改变源字符串。start,end只能是非负整数。`,
  },
  {
    property: 'toLowerCase()',
    desc: '将字符串的字母全都转成小写。去除字符串两边的空白。会改变源字符串。',
  },
  {
    property: 'toUpperCase()',
    desc: '将字符串的字母全都转成大写。去除字符串两边的空白。会改变源字符串。',
  },
  {
    property: 'trim()',
    desc: '去除字符串两边的空白。会改变源字符串。',
  },
  {
    property: 'valueOf()',
    desc: '返回某个字符串对象的原始值。',
  }
]

const methodsOfHtml = [
  {
    property: 'anchor(anchorName)',
    desc: `"Hello World!".anchor(zhk_anchor)，得到： 
    <a name="zhk_anchor">Hello World!</a>。`,
    html: '<a name="zhk_anchor">Hello World!</a>',
  },
  {
    property: 'big()',
    desc: '用大号的字体显示字符串。如："Hello World!".big()，得到<big>Hello World!</big>。',
    html: '<big>Hello World!</big>',
  },
  {
    property: 'small()',
    desc: '用小号的字体显示字符串。如："Hello World!".small()，得到<small>Hello World!</small>。',
    html: '<small>Hello World!</small>',
  },
  {
    property: 'bold()',
    desc: '使用粗体显示字符串。如："Hello World!".bold()，得到<b>Hello World!</b>。',
    html: '<b>Hello World!</b>',
  },
  {
    property: 'italics()',
    desc: '使用斜体显示字符串。如："Hello World!".italics()，得到<i>Hello World!</i>。',
    html: '<i>Hello World!</i>',
  },
  {
    property: 'fiexd()',
    desc: '以打字机文本显示字符串。如："Hello World!".fiexd()，得到<tt>Hello World!</tt>。',
    html: '<tt>Hello World!</tt>',
  },
  {
    property: 'strick()',
    desc: '显示添加删除线的字符串。如: "Hello World!".strick()，得到<strick>Hello World!</strick>。',
    html: '<strick>Hello World!</strick>',
  },
  {
    property: 'fontcolor(color)',
    desc: '使用指定的颜色来显示字符串。如: "Hello World!".fontcolor("red")，得到<font color="red">Hello World!</font>。',
    html: '<font color="red">Hello World!</font>',
  },
  {
    property: 'fontsize(size)',
    desc: '使用指定的尺寸来显示字符串。如: "Hello World!".fontsize(6)，得到<font size="6">Hello World!</font>。',
    html: '<font size="6">Hello World!</font>',
  },
  {
    property: 'sub()',
    desc: '将字符串显示为下标。如: "Hello World!".sub()，得到<sub>Hello World!</sub>。',
    html: 'ZHK<sub>Hello World!</sub>',
  },
  {
    property: 'sup()',
    desc: '将字符串显示为上标。如: "Hello World!".sup()，得到<sup>Hello World!</sup>。',
    html: 'ZHK<sup>Hello World!</sup>',
  },
  {
    property: 'link(url)',
    desc: '将字符串显示为链接。如: "Hello World!".link("http://xxxx.com")，得到<a href="http://xxxx.com">Hello World!</a>。',
    html: '<a href="http://xxxx.com">Hello World!</a>',
  },
  {
    property: 'blink()',
    desc: '显示闪动字符串。如: "Hello World!".blink()，得到<blink>Hello World!</blink>。',
    html: '<blink>Hello World!</blink>',
    
  },
]
</script>

<style lang="less" scoped>

.box>section{
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
