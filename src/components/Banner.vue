<template>
  <el-carousel indicator-position="none" class="music-banner">
    <el-carousel-item v-for="item in imgsURL" :key="item">
      <el-image :src="item" fit="fill" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { useMusicBannerStore } from '@/stores/musicBannerStore'
import { nextTick, onUnmounted, ref } from 'vue';

const bannerStore = useMusicBannerStore()
const imgsURL = bannerStore.swiperImgs;

/** 根据内容重新计算组件高度 */
function getBannerH(){
  const musicBanner = document.getElementsByClassName('music-banner')[0];
  const w = parseInt(getComputedStyle(musicBanner).width)
  // 图片的规格为：1400*340
  const h = (w * 340) / 1400;
  musicBanner.style.height = h+'px';
}
 
nextTick(()=>{
  getBannerH();
})

window.onresize = getBannerH;

onUnmounted(()=>{
  window.onresize = ()=>{};
})

</script>

<style lang="less" scoped>
  img{
    width: 100%;
    object-fit: fill;
  }
  :deep(.el-carousel__item){
    height: max-content;
    width: 100%;
  }
  :deep(.el-image){
    width: 100%;
  }
</style>