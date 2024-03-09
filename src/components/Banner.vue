<template>
  <el-carousel indicator-position="none" height="188px">
    <el-carousel-item v-for="item in imgsURL" :key="item">
      <el-image :src="item" fit="fill" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { useMusicBannerStore } from '@/stores/musicBannerStore'

const bannerStore = useMusicBannerStore()
const imgsURL = bannerStore.swiperImgs
</script>

<style lang="sass" scoped>

</style>