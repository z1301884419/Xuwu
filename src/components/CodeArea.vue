<template>
  <div class="code-area" ref="codearea">
    <span class="copy" @click="copy">copy</span>
    <div ref="code">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { ElMessage } from 'element-plus'
import { copyText } from '../utils/util.js'

const codearea = ref<Element>()
const code = ref<Element>()
nextTick(() => {
  // console.log(codearea._value)
  // hljs.highlightElement(codearea._value);
})

function copy(){
  // navigator
  copyText(code._value.innerText).then(()=>{
    ElMessage({
        message: '复制成功',
        type: 'success'
      })
  })
}

</script>

<style lang="less" scoped>
.code-area {
  border: 1px solid rgb(137, 129, 129);
  border-radius: 4px;
  background: rgba(192, 186, 186, 0.3);
  padding: 8px;
  margin: 20px 0px;
  font-size: 16px;
  white-space: break-spaces;
  position: relative;
  min-width: 40px;
}

.copy {
  border: 1px solid rgb(186, 179, 179);
  display: inline-block;
  padding: 2px;
  border-radius: 4px;
  background-color: rgba(121, 130, 130,0.2);
  color: rgb(85, 177, 223);
  position: absolute;
  right: 4px;
  top: 4px;
}

.copy:hover {
  color: rgb(3, 7, 248);
  background-color: rgb(204, 226, 226);
  cursor: pointer;
}
</style>
