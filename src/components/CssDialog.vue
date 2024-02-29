<template>
  <el-dialog :model-value="visible" :title="info?.text" width="800" destroy-on-close @close="$emit('closeVisible')">
    <div>
      <span class="desc">{{ info?.desc }}</span>

      <div class="container">
        <div class="left">
          <div>
            <CodeShow :doc="state?.codeText || info?.code" />
            <!-- <el-image style="width: 100%; height: 100%" :src="info?.src" fit="cover" /> -->
          </div>
        </div>
        <div class="right">
          <span class="code-tip">可以尝试修改，失焦后生效</span>
          <span class="copy" @click="copyHandel">copy</span>
          <div class="code-box">
            <pre ref="preEl" contenteditable @blur="codeBlur" v-text='info?.code' />
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import CodeShow from './CodeShow.vue';
import { nextTick, onMounted, ref, toRef, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { copyText } from '../utils/util.js'

/**
 * info 
 */
const props = defineProps<{
  info?: any,
  visible?: boolean,
  closeVisible?: Function,
}>()

const visible = toRef(props, 'visible')
const info = toRef(props, 'info')

// 组件自身状态
const state = ref({
  codeText: ''
})


// 监听visible的状态，为false时，清除一些状态
watch(visible, (visible, previsible) => {
  if (!visible) {
    state.value.codeText = ''
  } else {
    nextTick(() => {
      hljs.highlightElement(preEl._value);
    })
  }
})

onMounted(() => {
})

const preEl = ref();

// 复制的回调函数
function copyHandel(){
  copyText(props.info?.code).then(()=>{
    ElMessage({
        message: '复制成功',
        type: 'success'
      })
  })
} 
// 编辑code失去焦点
function codeBlur(e) {
  state.value.codeText = e.target.innerText
}

</script>

<style lang="less" scoped>
.language-xml {
  background-color: transparent;
}

.el-dialog__body {
  padding-top: 0;
}

.container {
  //height: 400px;
  display: flex;
  position: relative;
}

.desc {
  width: 100%;
}

.left {
  // background-color: lightcoral;
  width: 50%;
  box-sizing: border-box;
  margin: 10px;
  border: 1px solid rgb(151, 224, 183);
  box-shadow: lightgrey;
  overflow: auto;
}

.right {
  background-color: rgb(211, 241, 235);
  width: 50%;
  box-sizing: border-box;
  margin: 10px 10px 10px 50px;
  border: 1px solid rgb(151, 224, 183);
  box-shadow: lightgrey;
  max-height: 600px;
  overflow: auto;
  .code-tip{
      font-size: 12px;
      font-weight: bold;
      color: red;
    }
  .code-box {
    pre {
      background-color: rgb(211, 241, 235);
      display: block;
      outline: none;
      white-space: break-spaces;
      min-height: 350px;
      overflow: auto;
    }
  }
}

// 滚动条的长宽
.left::-webkit-scrollbar,
.right::-webkit-scrollbar{
  width: 8px;
  height: 8px;
}

// 滚动条内滑块的样式
.left::-webkit-scrollbar-thumb,
.right::-webkit-scrollbar-thumb {
  border-radius: 2px;
  // 滑块的颜色
  background: rgb(146, 181, 204);
}

// 滚动容器的样式
.left::-webkit-scrollbar-track,
.right::-webkit-scrollbar-track{
  background: #ffffff;
  box-shadow: 0 0 1px;
}

.copy {
  color: rgb(0, 123, 255);
  display: block;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  border: 1px solid rgb(114, 205, 238);
  padding: 2px;
  border-radius: 4px;
}
.copy:hover{
  background-color: rgba(114, 205, 238, 0.3);
}
</style>
