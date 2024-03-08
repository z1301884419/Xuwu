<template>
  <div ref="containerRef" class="container">
    <div class="page_top">
      <h1>{{ detailsData?.title }}</h1>
      <div class="desc">{{ detailsData?.desc }}</div>
    </div>
    <div class="vue-node">
      <div class="carousel-img">
        <span>这是几张图片</span>
        <el-carousel indicator-position="none">
          <el-carousel-item v-for="item in imgArr" :key="item">
            <el-image style="width: 150px; height: 300px" :src="item" fit="fill" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div ref="editIcon" class="edit-show" v-if="detailsData?.html">
        <el-icon @click="editShow">
          <Edit />
        </el-icon>
      </div>
      <div v-if="detailsData?.html" class="node-show">
        <div class="node-text" ref="vueNodeRef" :contenteditable="editVisible" v-html="detailsData?.html"
          @mouseup="htmlMouseup"></div>
      </div>
      <div ref="operatePlaceRef" class="node-operate_place"></div>
      <div ref="operateRef" v-if="editVisible && detailsData?.html" class="node-operate">
        <div class="operate-color">
          字体颜色:
          <span class="tag-area">
            <el-tag v-for="item in operateObj.color" :key="item.value" :color="item.value"
              @click="selectEdit('vn-color-' + item.value)"></el-tag>
          </span>
        </div>
        <div class="operate-color">
          背景颜色:
          <span class="tag-area">
            <el-tag v-for="item in operateObj.color" :key="item.value" :color="item.value"
              @click="selectEdit('vn-background-color-' + item.value)"></el-tag>
          </span>
        </div>
        <div class="operate-textTpye">
          字体类型:
          <span class="tag-area">
            <el-tag v-for="item in operateObj.textType" :key="item.value"
              @click="selectEdit('vn-text-type-' + item.value)">{{ item.title }}</el-tag>
          </span>
        </div>
        <div class="operate-textShape">
          字体类型:
          <span class="tag-area">
            <el-tag v-for="item in operateObj.textShape" :key="item.value"
              @click="selectEdit('vn-text-shape-' + item.value)">{{ item.title }}</el-tag>
          </span>
        </div>
        <el-button class="edit-ok" type="primary" size="small" @click="editShow">完成编辑</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watchEffect, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router';
import { Edit } from '@element-plus/icons-vue'
import vueData from '@/utils/vueData.js';
import { debounce, setLocal } from '@/utils/util.js';
import { operateObj, rmdBetweenNode, mergeHtml, mergeCalssName } from '@/utils/detailsUtil.js'

const route = useRoute()

function getImageUrl(name:string) {
  return `../static/${name}`
}
const imgArr = [getImageUrl('sjbizhi2.jpg'), getImageUrl('sjbizhi3.jpg'), getImageUrl('sjbizhi4.jpg'), getImageUrl('sjbizhi5.jpg')]
console.log(imgArr)
const dataId = ref<any>(undefined);
// 建立的标签页通信
const channel = new BroadcastChannel('details');
channel.onmessage = (e) => {
  dataId.value = e.data;
  location.hash = '#/details/' + e.data;
}

// 通过id拿到详情数据
const detailsData = computed(() => {
  return vueData.filter((i: any) => i.id == dataId.value)[0] || {}
})

/** editIcon */
const containerRef = ref()
/** editIcon */
const editIcon = ref()
/** operate_placeRef */
const operatePlaceRef = ref()
/** operateRef */
const operateRef = ref()

// vue-node 部分
/** vueNodeRef */
const vueNodeRef = ref()

const selectObj = ref<{
  startNode: Element | null | undefined,
  endNode: Element | null | undefined,
  startTextNode: Element | null | undefined,
  endTextNode: Element | null | undefined,
  value: string | undefined,
  startOff: number | undefined,
  endOff: number | undefined,
}>({
  startNode: null,
  endNode: null,
  startTextNode: null,
  endTextNode: null,
  value: undefined,
  startOff: 0,
  endOff: 0,
})

/** 显示编辑框 */
const editVisible = ref(true)
function editShow() {
  editVisible.value = !editVisible.value;
}

/** 监听vue-node中的鼠标抬起事件，获取用户选取的内容 */
function htmlMouseup() {
  const select = getSelection()
  selectObj.value.value = select?.toString()
  // console.log("select",select)
  selectObj.value.startNode = select?.anchorNode.parentNode
  selectObj.value.endNode = select?.extentNode.parentNode
  selectObj.value.startTextNode = select?.anchorNode
  selectObj.value.endTextNode = select?.extentNode
  selectObj.value.startOff = select?.anchorOffset
  selectObj.value.endOff = select?.extentOffset
  console.log('startTextNode.nodeValue', select?.anchorNode.nodeValue)
  console.log('endTextNode.nodeValue', select?.extentNode.nodeValue)
}

/** 拿到用户选取的内容后，对其操作
 * calssName: 给标签添加的类名
 */
function selectEdit(className: string) {
  let selectText = selectObj.value.value
  if (!selectText) return
  let nv_box = document.getElementById('vn-container')
  // 分两种情况，1.所选内容在同一个标签内，2.所选内容不在同一标签内
  /**  1.在同一标签 */
  const inOneSpan = selectObj.value.startTextNode == selectObj.value.endTextNode
  console.log('inOneSpan', inOneSpan)
  if (inOneSpan) {
    let node = selectObj.value.startNode
    let startTextNode = selectObj.value.startTextNode
    let newHtml: any = startTextNode.nodeValue;
    let start = Math.min(selectObj.value.startOff, selectObj.value.endOff)
    let end = Math.max(selectObj.value.startOff, selectObj.value.endOff)
    let beforeStr = newHtml.slice(0, start)
    let afterStr = newHtml.slice(end, newHtml.length)
    // 如果选择了默认文本标签，其父元素不为span
    if (node.nodeName.toUpperCase() != "SPAN") {
      console.log('文本标签')
      let newNode = document.createElement('span')
      newNode.className = className
      newNode.innerText = selectText
      let beforeText = document.createTextNode(beforeStr)
      let afterText = document.createTextNode(afterStr)
      // 替换原来的结点
      node.insertBefore(beforeText, startTextNode)
      node.insertBefore(newNode, startTextNode)
      node.insertBefore(afterText, startTextNode)
      node.removeChild(startTextNode)
      return
    } else {
      console.log('span标签')
      // 添加新的类名
      let newClassName = mergeCalssName(node.className, className)
      if (beforeStr && afterStr) {
        console.log(1)
        newHtml = `<span${node.className ? ` class="${node.className}"` : ''}>${beforeStr}</span><span class="${newClassName}">${selectText}</span><span${node.className ? ` class="${node.className}"` : ''}>${afterStr}</span>`
      } else if (beforeStr && !afterStr) {
        console.log(2)
        console.log('afterStr', afterStr)
        newHtml = `<span${node.className ? ` class="${node.className}"` : ''}>${beforeStr}</span><span class="${newClassName}">${selectText}</span>`
      } else if (!beforeStr && afterStr) {
        console.log(3)
        newHtml = `<span class="${newClassName}">${selectText}</span><span${node.className ? ` class="${node.className}"` : ''}>${afterStr}</span>`
      } else {
        console.log(4)
        newHtml = `<span class="${newClassName}">${selectText}</span>`
      }
      node.innerHTML = mergeHtml(newHtml)
      // 如果选择的不是某个标签的中间内容，那么就将元素作为父结点进行类名合并
      if (!beforeStr || !afterStr) {
        node.parentNode.innerHTML = mergeHtml(node.parentNode.innerHTML)
      }
    }

  } else {
    let startNode = selectObj.value.startNode
    let endNode = selectObj.value.endNode
    let startOff = selectObj.value.startOff
    let endOff = selectObj.value.endOff
    let startTextNode: any = selectObj.value.startTextNode
    let endTextNode: any = selectObj.value.endTextNode
    console.log('startTextNode.nodeValue', startTextNode.nodeValue)
    console.log('endTextNode.nodeValue', endTextNode.nodeValue)
    let beforeStartStr = startTextNode.nodeValue.slice(0, startOff)
    let afterStartStr = startTextNode.nodeValue.slice(startOff, startTextNode.nodeValue.length)
    let beforeEndStr = endTextNode.nodeValue.slice(0, endOff)
    let afterEndStr = endTextNode.nodeValue.slice(endOff, endTextNode.nodeValue.length)
    // 如果两个结点都是纯text结点
    // 创建span标签并添加类名
    let span = document.createElement('span')
    span.className = className
    span.innerText = selectText
    // 分两种情况，用户从前往后选择，用户从后往前选择
    let startfromHead = selectText.replace(/\(/g, "_").replace(/\)/g, "-").search(afterStartStr.replace(/\(/g, "_").replace(/\)/g, "-"))
    if (startfromHead == 0) {
      console.log("从前往后")
      // 处理原来的结点
      // 如果不是相邻结点
      if (selectText !== afterStartStr + beforeEndStr) {
        rmdBetweenNode(startTextNode, endTextNode, startTextNode)
      }
      // 为原来选择的结点设置新值
      selectObj.value.startTextNode.nodeValue = beforeStartStr
      selectObj.value.endTextNode.nodeValue = afterEndStr
      // 如果后面的结点为纯文本
      if (endNode.nodeName.toUpperCase() != "SPAN") {
        // 将创建的span标签插入parentnode
        console.log("前1")
        endNode.insertBefore(span, endTextNode)
        !afterEndStr && endNode.removeChild(endTextNode)
      } else {
        console.log("前2")
        endNode.parentNode.insertBefore(span, endNode)
        !afterEndStr && endNode.parentNode.removeChild(endNode)
      }
      // 如果前面的结点为纯文本
      if (startNode.nodeName.toUpperCase() != "SPAN") {
        console.log("前3")
        !beforeStartStr && startNode.removeChild(startTextNode)
      } else {
        console.log("前4")
        !beforeStartStr && startNode.parentNode.removeChild(startNode)
      }
    } else {
      console.log("从后往前")
      // 处理原来的结点
      // 如果不是相邻结点
      if (selectText !== afterStartStr + beforeEndStr) {
        rmdBetweenNode(endTextNode, startTextNode, endTextNode)
      }
      // 为原来选择的结点设置新值
      selectObj.value.startTextNode.nodeValue = afterStartStr
      selectObj.value.endTextNode.nodeValue = beforeEndStr
      // 如果前面的结点为纯文本
      if (startNode.nodeName.toUpperCase() != "SPAN") {
        // 将创建的span标签插入parentNode
        console.log("后1")
        startNode.insertBefore(span, startTextNode)
        !afterStartStr && startNode.removeChild(startTextNode)
      } else {
        console.log("后2")
        startNode.parentNode.insertBefore(span, startNode)
        !afterStartStr && startNode.parentNode.removeChild(startNode)
      }
      // 如果后面的结点为纯文本
      if (endNode.nodeName.toUpperCase() != "SPAN") {
        console.log("后3")
        !beforeEndStr && endNode.removeChild(endTextNode)
      } else {
        console.log("后4")
        !beforeEndStr && endNode.parentNode.removeChild(endNode)
      }
    }
    nv_box.innerHTML = mergeHtml(nv_box.innerHTML)

  }
}

let containerRefWidth: number;
let operateWidth: number;
let operateRight: number;
function resize() {
  // console.log('resize')
  if (editVisible.value) {
    if (!operateRef._value) return
    containerRefWidth = parseInt(window.getComputedStyle(containerRef._value).width, 10);
    operateWidth = parseInt(window.getComputedStyle(operateRef._value).width, 10);
    operateRight = parseInt(window.getComputedStyle(operateRef._value).right, 10);
    operatePlaceRef._value.style.width = (operateWidth + operateRight) * 0.88 + 'px';
    editIcon._value.style.right = parseInt(operatePlaceRef._value.style.width, 10) + containerRefWidth * 0.03 + 45 + 'px';
  } else {
    operatePlaceRef._value.style.width = 0;
    editIcon._value.style.right = containerRefWidth * 0.03 + 40 + 'px';
  }
}

watchEffect(() => {
  editVisible.value;
  resize()
}, { flush: 'post' })

onMounted(() => {
  setLocal('detailsIsOpen', 'true');
  if (!dataId.value) {
    dataId.value = route.params.id
  }
})
nextTick(() => {
  debounce(resize)()
})
window.onresize = debounce(resize);
window.onbeforeunload = () => {
  setLocal('detailsIsOpen', 'false');
  channel.close();
}

</script>

<style>
@import url(@/utils/detailsUtil.css);
</style>
<style lang="less" scoped>
@media screen and (max-width: 1100px) {
  .carousel-img {
    display: none;
  }

  .node-show {
    margin-left: 0px !important;
  }
}

@media screen and (max-width: 912px) {

  .edit-show,
  .node-operate,
  .node-operate_place {
    display: none;
  }
}

@margin_width: 3%;

.container {
  margin: 0 @margin_width;
  margin-top: 100px;
}

.page_top {
  position: fixed;
  width: 94%;
  left: 0;
  top: 60px;
  margin: 0 3%;
  white-space: nowrap;
  overflow: hidden;
  // padding: 0 3%;
  z-index: 9;
  background-color: #fff;
  padding-bottom: 10px;
  border-bottom: 1px gray dashed;
}

.vue-node {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 16px;
  padding-top: 16px;

  .carousel-img {
    // border: 1px solid black;
    width: 150px;
    text-align: center;
    font-size: 14px;
    margin-top: 50px;
    position: fixed;
    left: 3%;
  }

  .edit-show {
    position: fixed;
    // right: 100px;
    z-index: 1;
    background-color: aliceblue;
    color: rgb(24, 140, 241);
  }

  .node-show {
    box-sizing: content-box;
    box-shadow: 0px 0px 1px;
    flex: 3;
    padding: 0 10px;
    margin-left: 150px;
    margin-bottom: 10px;
    min-height: 400px;

    .node-text {
      outline: none;

      :deep(code) {
        display: block;
        font-weight: 600;
        font-size: 16px;
        white-space: break-spaces;
        padding: 10px;
      }
    }
  }

  .node-operate_place {
    // background: red;
  }

  .node-operate::after {
    content: '';
    display: table;
    clear: both;
  }

  .node-operate {
    box-shadow: 0px 0px 2px;
    // margin-left: 50px;
    padding: 8px;
    position: fixed;
    right: calc(@margin_width + 40px);

    // top:0;
    >div {
      font-size: 12px;
      margin: 14px 0;
      display: flex;

      .tag-area {
        display: flex;
        flex-wrap: wrap;
        width: 200px;

        >span {
          margin: 2px;
          cursor: pointer;
        }
      }
    }

    .edit-ok {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }
  }
}
</style>