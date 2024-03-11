import { defineStore } from "pinia";
import { ref } from "vue";
import {
  useHotRecommend,
  useRecommendOrder,
  useHotOrder,
  useNewSong,
} from "@/utils/musicApi";
import {
  hotRecommedDataMock,
  recommendOrderDataMock,
  hotOrderDataMock,
  newSongDataMock,
} from "@/utils/musicMockData";
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
  const hotRecommedData = ref(<any>[] = hotRecommedDataMock);
  useHotRecommend().then((data: any) => {
    isArray(data.info) && (hotRecommedData.value = data.info);
  });
  // 推荐歌单
  const recommendOrderData = ref(<any>[] = recommendOrderDataMock);
  useRecommendOrder().then((data: any) => {
    isArray(data.info) && (recommendOrderData.value = data.info);
  });
  // 热门榜单
  const hotOrderData = ref(<any>[] = hotOrderDataMock);
  useHotOrder().then((data: any) => {
    isArray(data.info) && (hotOrderData.value = data.info);
  });
  // 新歌推荐
  const newSongData = ref(newSongDataMock);
  async function getNewSong() {
    await useNewSong().then((data: any) => {
      isArray(data.info) && (newSongData.value.chinaSong = data.info);
    });
    await useNewSong("western").then((data: any) => {
      isArray(data.info) && (newSongData.value.westernSong = data.info);
    });
    await useNewSong("j_and_k").then((data: any) => {
      isArray(data.info) && (newSongData.value.j_and_kSong = data.info);
    });
  }
  getNewSong();

  return {
    swiperImgs,
    hotRecommedData,
    recommendOrderData,
    hotOrderData,
    newSongData,
  };
});
