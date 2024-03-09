import { defineStore } from "pinia";
import { ref } from "vue";
import { useHotRecommend, useRecommendOrder, useHotOrder } from '@/utils/musicApi'
import { isArray } from "lodash";

//
export const useMusicBannerStore = defineStore("musicbanner", () => {
  // 轮播图
  const swiperImgs = ref([
    "https://kwimg1.kuwo.cn/star/upload/73/44/1677749209264_.png",
    "https://kwimg3.kuwo.cn/star/upload/69/39/1706087266755_.jpg",
    "https://kwimg1.kuwo.cn/star/upload/96/56/1709277817002_.jpg",
    "https://kwimg4.kuwo.cn/star/upload/62/75/1708701591329_.jpg",
    "https://kwimg4.kuwo.cn/star/upload/75/19/1707540691701_.jpg",
  ]);
  // 热门推荐
  const hotRecommedData = ref(<any>[]);
  useHotRecommend().then((res:any)=>{
    hotRecommedData.value = isArray(res.data.info) ? res.data.info: [];
  })
  // 推荐歌单
  const recommendOrderData = ref(<any>[]);
  useRecommendOrder().then((res:any)=>{
    console.log(res)
    recommendOrderData.value = isArray(res.data.info) ? res.data.info: [];
  })
  // 热门歌单
  const hotOrderData = ref(<any>[]);
  useHotOrder().then((res:any)=>{
    console.log(res)
    hotOrderData.value = isArray(res.data.info) ? res.data.info: [];
  })
  


  return { swiperImgs, hotRecommedData, recommendOrderData, hotOrderData };
});
