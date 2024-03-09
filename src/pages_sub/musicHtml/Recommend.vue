<template>
  <div class="sub-page">
    <h1>推荐</h1>
    <Banner />
    <!-- 热门推荐 -->
    <section class="classification hot-recommend">
      <h3>热门推荐</h3>
      <div class="card-list">
        <template v-for="item of bannerStore.hotRecommedData">
          <div v-if="item.bannerurl" class="card-item" :key="item.id">
            <img :src="item.bannerurl" alt="">
            <div>{{ item.name }}</div>
          </div>
        </template>
      </div>
    </section>
    <!-- 推荐歌单 -->
    <section class="classification recommend-order">
      <h3>推荐歌单</h3>
      <div class="card-list">
        <template v-for="item of bannerStore.recommendOrderData.slice(0, 5)">
          <div v-if="item.imgurl" class="card-item" :key="item.id">
            <img :src="item.imgurl.replace('/{size}', '')" alt="">
            <div>{{ item.specialname }}</div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import { useSearch } from '@/utils/musicApi';
import { useMusicBannerStore } from '@/stores/musicBannerStore';
import { nextTick } from 'vue';

useSearch().then(res => {
  // console.log(JSON.parse(res))
})

const bannerStore = useMusicBannerStore()
const { setHotRecommedData } = bannerStore;

nextTick(() => {

})
</script>

<style scoped lang="less">
.sub-page {
  .classification {
    margin-top: 20px;

    .card-list {
      display: flex;
      justify-content: space-evenly;

      .card-item {
        margin: 0 10px;

        img {
          width: 100%;
          object-fit: fill;
          border-radius: 8px;
        }

        div {
          width: 100%;
        }
      }

      .card-item:first-of-type {
        margin-left: 0;
      }

      .card-item:last-of-type {
        margin-right: 0;
      }
    }
  }
  .recommend-order{
    .card-item{
      width: 18.5%;
    }
  }

}
</style>