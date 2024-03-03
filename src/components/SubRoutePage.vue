<template>
  <div class="sub-page">
    <div class="nav">
      <el-menu :default-active="pagePath" class="el-menu-vertical-demo" @select="select">
        <template v-for="menu of menuData">
          <!--  -->
          <el-menu-item v-if="!menu.menuItem || !menu.menuItem.length" :index="menu.path" :key="menu.title">
            <span>{{ menu.title }}</span>
          </el-menu-item>
          <!--  -->
          <el-sub-menu v-if="menu.menuItem && menu.menuItem.length" :index="menu.path" :key="menu.title">
            <template #title>
              <span>{{ menu.title }}</span>
            </template>
            <el-menu-item v-for="item of menu.menuItem" :index="item.path" :key="item.title">
              <span>{{ item.title }}</span>
            </el-menu-item>
          </el-sub-menu>

        </template>
      </el-menu>
    </div>
    <div class="content" ref="contentRef">
      <UseWatermark text="张洪坤1301884419@qq.com" fontSize="20">
        <router-view></router-view>
      </UseWatermark>
    </div>
    <div class="anchor" v-if="anchorMenu?.length">
      <ul>
        <!--  -->
        <template v-for="item of anchorMenu">
          <!-- 一级锚点 -->
          <li v-if="!item.subAnchors" :key="item.title" class="anchor-item" @click="(e) => anchorTo(item.anchor, e)">
            <span class="active-flag"></span>{{ item.title }}
          </li>
          <!-- 二级锚点 -->
          <li v-if="item.subAnchors" :key="item.title" class="anchor-subitem" @click="(e) => anchorTo(item.anchor, e)">
            <div class="anchor-subsuper"><span class="active-flag"></span>{{ item.title }}</div>
            <ul>
              <li v-for="subAnchor of item.subAnchor" :key="subAnchor.title" class="anchor-item"
                @click="(e) => anchorTo(subAnchor.anchor, e)">
                <span class="active-flag"></span>{{ subAnchor.title }}
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, inject, computed, watch, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import UseWatermark from "@/components/UseWatermark.vue";
import { findPageAnchorMenu } from '@/utils/util.js';


interface menuType {
  title: string,
  path: string,
  menuItem?: any[],
  anchor?: any[],
}
const { menuData } = defineProps({
  menuData: {
    type: Array<menuType>,
    required: true,
  }
})

const route = useRouter();

const pagePath = ref(location.hash.split('/')[2])

/** 锚点信息 */
let anchorMenu = ref(findPageAnchorMenu(menuData, pagePath.value));

let timer: number | undefined;
onUnmounted(()=>{
  clearTimeout(timer)
})

watch(pagePath,()=>{
  anchorMenu.value = findPageAnchorMenu(menuData, pagePath.value);
  timer = setTimeout(()=>{
    scrolltoAnchor('routechange')
  })
})

const contentRef = ref<Element>()

/**  */
let preActiveAnchor: Element;

nextTick(() => {
  // 因为要获取的子组件的dom信息，但父nexttick比子nexttick先完成，故用settimeout延迟执行
  setTimeout(()=>scrolltoAnchor('nexttick'));
})



/**  选择菜单触发，更新导航栏地址，替换页面内容 */
async function select(path: string) {
  await route.push(path)
  pagePath.value = path;
  contentRef._value.scrollTop = 0;
}
/** 页面锚点跳转 */
function anchorTo(anchor: any, e: Event) {
  e.stopPropagation();
  document.querySelector(anchor).scrollIntoView({
    behavior: "smooth"
  });

}
/** 滚动实现锚点 */
function scrolltoAnchor(from:any) {
  from;
  // console.log('scrolltoAnchor--',from)
  // console.log(from);
  contentRef._value.scrollTop = 0;
  /**锚点结点的位置*/
  let positionArr: number[] = [];
  anchorMenu.value.forEach((item: any) => {
    try {
      if (item.anchor) {
        positionArr.push(document.querySelector(item.anchor).getBoundingClientRect().top)
      }
      if (item.subAnchor) {
        item.subAnchor.forEach((subitem: any) => {
          positionArr.push(document.querySelector(subitem.anchor).getBoundingClientRect().top)
        })
      }
    } catch (err) {
      console.error(err)
      console.error('找不到锚点结点：' + item.anchor)
    }
  })
  /**跳转锚点结点 */
  let anchorE = document.querySelectorAll('.active-flag')
  // 初始化添加active给第一个结点
  if (!document.querySelectorAll('.active').length && anchorE.length) anchorE[0].className = 'active-flag active';
  positionArr.sort((i, j) => j - i)
  // content容器的滚动事件
  contentRef._value.addEventListener('scroll', () => {
    for (let i = 0; i < positionArr.length; i++) {
      if (positionArr[i] < contentRef._value.scrollTop + 150) {
        // console.log('i',i)
        preActiveAnchor && (preActiveAnchor.className = 'active-flag');
        anchorE[Math.abs(i - positionArr.length + 1)].className = 'active-flag active';
        preActiveAnchor = anchorE[Math.abs(i - positionArr.length + 1)];
        break;
      } else {
        anchorE[Math.abs(i - positionArr.length + 1)].className = 'active-flag';
      }
    }
  })
}


</script>

<style lang="less" scoped>
// 
@side-width: 200px;

@media screen and (max-width: 960px) {

  .anchor {
    display: none;
  }

  .content {
    width: calc(100vw - @side-width) !important;
  }
}

@media screen and (max-width: 760px) {
  .nav {
    display: none;
  }

  .anchor {
    display: none;
  }

  .content {
    width: 100vw !important;
  }
}

.sub-page {
  widows: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between
}

.sidecss {
  width: @side-width;
  height: calc(100vh - 110px);
  box-sizing: border-box;
}

.nav {
  .sidecss;
  width: max-content;
  .el-menu {
    height: calc(100vh - 110px);
    padding-top: 10px;
  }

  .el-menu-item {
    height: 32px;
    line-height: 32px;
    letter-spacing: 1px;
  }

  .el-sub-menu :deep(.el-sub-menu__title) {
    .el-menu-item;
  }
}

.anchor {
  .sidecss;
  padding-top: 10px;
  padding-left: 20px;
}


.content {
  width: calc(100vw - 2 * @side-width);
  height: calc(100vh - 110px);
  overflow: auto;
  box-sizing: border-box;
  padding: 10px 40px;
  flex: auto;
}

// 滚动条的长宽
.nav::-webkit-scrollbar,
.content::-webkit-scrollbar,
.anchor::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

// 滚动条内滑块的样式
.nav::-webkit-scrollbar-thumb,
.content::-webkit-scrollbar-thumb,
.anchor::-webkit-scrollbar-thumb {
  border-radius: 3px;
  // 滑块的颜色
  background: rgb(146, 181, 204);
}

// 滚动轨道的样式
.nav::-webkit-scrollbar-track,
.content::-webkit-scrollbar-track,
.anchor::-webkit-scrollbar-track {
  background: #ffffff;
  // box-shadow: 0 0 1px; 使用shadow可能会残留阴影
  border: 1px solid rgb(213, 213, 213)
}

.anchor-item {
  padding: 4px;
  display: flex;

  .active-flag {
    display: inline-block;
    height: 20px;
    width: 3px;
    margin-right: 10px;
    border-radius: 3px;
  }

  .text {
    width: max-content;
  }

  .active {
    background-color: rgb(65, 185, 35);
  }
}

.anchor-subitem {
  display: flex;
  flex-direction: column;

  .anchor-item {
    margin-left: 13px;
    font-weight: 200;
    font-size: 14px;
  }

  .anchor-subsuper:hover {
    background-color: #ecf5ff;
  }
}

.anchor-subsuper {
  .anchor-item;
}

.anchor-item:hover {
  background-color: #ecf5ff;
}
</style>
