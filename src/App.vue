
<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './components/Layout.vue';
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

