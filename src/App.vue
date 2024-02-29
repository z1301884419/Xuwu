
<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './components/Layout.vue';
import { useRouter } from 'vue-router';
import { provide, ref } from 'vue';
// 路由守卫
// 在根组件注入导航
const nav = ref();
provide('nav',nav)
const route = useRouter();
route.beforeEach((guard) => {
  nav.value = guard.path;
})
route.afterEach(() => {
// 
})
</script>

