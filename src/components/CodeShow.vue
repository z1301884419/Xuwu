<script setup lang="ts">
import { computed, nextTick, onUnmounted, toRef, watch } from 'vue';
import { useTimerStore } from '@/stores/timerStore.js'

const props = defineProps(['doc'])
const propdoc = toRef(props, 'doc')
const timerStore = useTimerStore()

/** 获取html结构 */
const htmlDoc = computed(() => {
  let doc = ''
  props?.doc?.replace(/<html>[\s\S]+<\/html>/g, (value) => {
    doc = value.slice(6, value.length - 7).trim()
    return value
  })
  return doc
})
/** 获取css结构 */
const cssDoc = computed(() => {
  let doc = ''
  props?.doc?.replace(/<style>[\s\S]+<\/style>/g, (value) => {
    doc = value.slice(7, value.length - 8)
      ?.replace(/ (\+|\-|\*|\/|\%) /g, value => '_' + value.trim() + '_')
      ?.replace(/\S \S/g, value => value.replace(' ', "^"))
      ?.replace(/\s/g, '')
      ?.replace(/_(\+|\-|\*|\/|\%)_/g, value => ' ' + value.substr(1, 1) + ' ')
      ?.replace(/\S\^\S/g, value => value.replace('^', " "))
      ?.replace(/\/\*\*[^*\/]*\*\//g, "") // 去除文档注释
    return value
  })
  return doc
})
/** 获取js结构 */
const jsDoc = computed(() => {
  let doc = ''
  props?.doc?.replace(/<script>[\s\S]+<\/script>/g, (value) => {
    doc = value.slice(8, value.length - 9).replace(/[\}]\s/g, value => value.substr(0, 1) + ";")
      ?.replace(/(function |const |let |new |else |return |var |transform )/g, value => value + '-')
      ?.replace(/document[^\)]*\)/g, value => value.replace(' ', "^"))
      ?.replace(/[\)|\}][\r|\n]/g, value => value + ';') // )}后加;
      ?.replace(/\s/g, '')
      ?.replace(/document[^\)]*\)/g, value => value.replace('^', " "))
      ?.replace(/(function-|const-|let-|new-|else-|return-|var-|transform-)/g, value => value.slice(0, value.length - 1) + ' ')
    return value
  })
  return doc

})

watch(propdoc, () => {
  nextTick(addDoc)
}, {
  immediate: true
})

onUnmounted(() => {
  // 销毁时，清除掉添加的css、js
  removeDoc()
})

function addDoc() {
  removeDoc()
  // 向html文档中添加css部分
  if (cssDoc.value) {
    const cssNode = document.createElement('style')
    cssNode.innerText = cssDoc.value.split('}').map((item) => {
      if (item[0] !== "@" && item.trim() && isNaN(item[0]) || item[0] == '.') {
        let newItem = item?.replace(/[\S|\s]*{/g, value => value.replace(/,/g, ",#code_show "))
        return `#code_show ${newItem} `
      }
      return item
    }).join('}')
    cssNode.setAttribute("id", 'cssdoc')
    document.getElementsByTagName('html')[0].appendChild(cssNode)
  }
  // 向html文档中添加js部分
  if (jsDoc.value) {
    const jsNode = document.createElement('script')
    jsNode.innerText = `var jscode = undefined;jscode = function(){${jsDoc.value}};jscode()`
    jsNode.setAttribute("id", 'jsdoc')
    document.getElementsByTagName('html')[0].appendChild(jsNode)
  }
}
// 删除上一个css,js
function removeDoc() {
  if (document.getElementById("cssdoc")) {
    document.getElementsByTagName('html')[0].removeChild(document.getElementById("cssdoc"))
  }
  if (document.getElementById("jsdoc")) {
    document.getElementsByTagName('html')[0].removeChild(document.getElementById("jsdoc"))
    // 清除定时器和计时器
    let timeCount = setTimeout(() => { });
    for (let i = 0; i < timeCount; i++) {
      if (!timerStore.timerArr.includes(i)) {
        window.clearInterval(i);
        window.clearTimeout(i);
      }
    }
  }
}

</script>


<template>
  <div v-html="htmlDoc" :key="new Date().getTime()" id="code_show"></div>
</template>

<style scoped></style>