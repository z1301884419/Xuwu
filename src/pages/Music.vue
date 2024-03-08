<template>
  <div class="container">
    <div class="container-head">
      <!-- 左边导航栏 -->
      <nav class="main-left">
        <div class="user">
          <img class="user-avatar" :src="avatarURL" />
          <span class="user-name">歪比巴布</span>
        </div>
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
    <MusicFooter class="footer"/>
  </div>
</template>

<script setup lang="ts">
import { musicMenu } from '@/utils/menu.ts'
import MusicFooter from '@/components/MusicFooter.vue'
import avatarURL from '/static/kedaya.jpeg'
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
  position: relative;

  .container-head {
    display: flex;
    height: calc(var(--page-height) - 30px);
    .main-left {
      width: 220px;
      background-color: #f0f0f0;
      overflow-y: scroll;
      padding-bottom: 20px;
      .user{
        display: flex;
        align-items: center;
        padding:  10px;
        .user-avatar{
          height: 40px;
          width: 40px;
          border-radius: 20px;
        }
        .user-name{
          margin: 0 10px;
        }
      }

      .nav-title {
        color: #777;
        display: block;
        padding: 10px;
      }

      .nav-item-title {
        height: 36px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        >span{
          display: block;
          margin: 5px 5px 0 5px;
        }
      }

      .nav-item-title:hover {
        background: var(--active-color);
      }
    }
    .main-left::-webkit-scrollbar {
      height: 0;
      width: 0;
    };

    .main-right {
      flex: 1;
      overflow-y: scroll;
    }
    .main-right::-webkit-scrollbar {
      height: 0;
      width: 0;
    };

  }

}
.footer{
  position: fixed;
  bottom: 50px;
  width: 100vw;
  height: 50px;
  background: rgb(207, 222, 220);
  padding: 0 20px;
  border: #95c1ab solid 1px;
}
</style>