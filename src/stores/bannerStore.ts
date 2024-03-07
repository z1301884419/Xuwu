import { defineStore } from 'pinia'
import { ref } from 'vue'

// 
export const useBannerStore = defineStore('banner',()=>{
  const bannerImgs = ref([
    'https://kwimg1.kuwo.cn/star/upload/73/44/1677749209264_.png',
    'https://kwimg3.kuwo.cn/star/upload/69/39/1706087266755_.jpg',
    'https://kwimg1.kuwo.cn/star/upload/96/56/1709277817002_.jpg',
    'https://kwimg4.kuwo.cn/star/upload/62/75/1708701591329_.jpg',
    'https://kwimg4.kuwo.cn/star/upload/75/19/1707540691701_.jpg',
  ]);
  
  return {bannerImgs}
})