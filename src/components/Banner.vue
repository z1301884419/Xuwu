<template>
  <el-carousel indicator-position="none" height="188px">
    <el-carousel-item v-for="item in imgsURL" :key="item">
      <el-image :src="item" fit="fill" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { useBannerStore } from '@/stores/bannerStore'
import { toRef } from 'vue';
const bannerStore = useBannerStore()
const imgsURL = toRef(bannerStore.bannerImgs)
</script>

<style lang="sass" scoped>

</style>