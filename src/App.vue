
<template>
  <Layout>
    <UseWatermark text="张洪坤1301884419@qq.com" fontSize="20">
      <router-view></router-view>
    </UseWatermark>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './components/Layout.vue';
import UseWatermark from '@/components/UseWatermark.vue'
import { useRouter } from 'vue-router';
// 路由守卫
const route = useRouter();
route.beforeEach(() => {
  //
})
route.afterEach(() => {
// 
})
</script>

<style scoped>
  .watermark{
    position: fixed;
    height: calc(100% - 110px);
    width: 100%;
    top: 50px;
    z-index: -999;
  }
</style>

