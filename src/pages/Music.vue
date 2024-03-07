<template>
  <div class="container">
    <div class="container-head">
      <!-- 左边导航栏 -->
      <nav class="main-left">
        <div v-for="item in menu" :key="item.title">
          <span class="nav-title">{{ item.title }}</span>
          <ul>
            <li class="nav-item-title" v-for="subItem in item.menuItem" 
            :key="subItem.path"
            @click="pathChange(subItem.path)">
              <span>
                <Component :is="subItem.icon" />
              </span>
              {{ subItem.title }}
            </li>
          </ul>
        </div>
      </nav>
      <!-- 右边展示部分 -->
      <main class="main-right">
        <RouterView/>
      </main>
    </div>
    <!-- 底部按钮部分 -->
    <footer>底部</footer>
  </div>
</template>

<script setup lang="ts">
import { musicMenu } from '@/utils/menu.ts'
import { ref } from 'vue';

/** 导航栏数据 */
const menu = ref(musicMenu);
/** 页面路径 */
const pagePath = ref(location.hash.split('/')[2])

/** 导航栏点击 */
function pathChange(path){
  console.log(path)
  //
}

</script>

<style scoped lang="less">
.container {
  --active-color: #4fe499;
  min-width: 992px;
  height: var(--page-height);
  background: var(--theme);

  .container-head {
    display: flex;

    .main-left {
      width: 220px;
      background-color: #f0f0f0;

      .nav-title {
        color: #777;
        display: block;
        padding: 10px;
      }

      .nav-item-title {
        height: 36px;
        line-height: 36px;
        padding-left: 20px;
      }

      .nav-item-title:hover {
        background: var(--active-color);
      }
    }

    .main-right {
      flex: 1
    }

  }

}
</style>