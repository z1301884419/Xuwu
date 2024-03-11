<template>
  <div class="sub-page">
    <h1>推荐</h1>
    <Banner />
    <!-- 热门推荐 -->
    <section class="classification hot-recommend">
      <h3>热门推荐</h3>
      <div class="card-list-row">
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
      <div class="card-list-row">
        <template v-for="item of bannerStore.recommendOrderData.slice(0, 5)">
          <div v-if="item.imgurl" class="card-item" :key="item.id">
            <img :src="item.imgurl.replace('/{size}', '')" alt="">
            <div>{{ item.specialname }}</div>
          </div>
        </template>
      </div>
    </section>
    <!-- 热门榜单 + 新歌推荐 -->
    <section class="classification top-list">
      <!-- 热门榜单 -->
      <section class="hot-top">
        <h3>热门榜单</h3>
        <div class="card-list-vertical">
          <template v-for="item of bannerStore.hotOrderData.slice(0, 3)">
            <div v-if="item.banner_9" class="card-item" :key="item.id">
              <img :src="item.banner_9.replace('/{size}', '')" alt="">
              <ol>
                <li v-for="(song, index) of item.songinfo" :key="song.id">
                  <span>{{ index + 1 }}.</span>
                  {{ song.songname }}
                </li>
              </ol>
            </div>
          </template>
        </div>
      </section>
      <!-- 新歌推荐 -->
      <section class="new-song">
        <h3>新歌推荐</h3>
        <div class="card-list-row">
          <template v-for="item of bannerStore.newSongData.chinaSong.slice(0, 10)">
            <div v-if="item.cover" class="card-item" :key="item.id">
              <img :src="item.cover.replace('/{size}', '')" alt="">
              <div class="songinfo">
                <div class="songname">{{ item.filename.split(' - ')[1] }}</div>
                <div class="autor">{{ item.filename.split(' - ')[0] }}</div>
              </div>
            </div>
          </template>
        </div>
      </section>
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

nextTick(() => {

})
</script>

<style scoped lang="less">
.sub-page {

  img {
    display: block;
    object-fit: fill;
    border-radius: 8px;
  }

  .flex-row {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .card-list-row {
    .flex-row;

    .card-item {
      >img {
        width: 100%;
      }
    }
  }

  .card-list-vertical {
    .flex-column;

    .card-item {
      display: flex;
    }

  }

  .card-item-clear-margin {
    .card-item:first-of-type {
      margin: 0;
    }

    .card-item:last-of-type {
      margin: 0;
    }
  }

  .classification {
    margin-top: 20px;
  }

  .hot-recommend {
    .card-list-row {
      justify-content: space-between;

      .card-item {
        width: 24%;
      }
    }

  }

  .recommend-order {
    .card-list-row {
      justify-content: space-between;

      .card-item {
        width: 18.5%;
      }
    }

  }


  .top-list {
    display: flex;

    .card-list-vertical {
      .card-item {
        margin: 5px 0;
      }

      .card-item-clear-margin;
    }

    .hot-top {
      width: 40%;
      margin-right: 20px;

      .card-item {
        img {
          width: 30%;
        }

        ol {
          flex: 1;
          margin: 0;
          padding: 10px;
          .flex-column;
          justify-content: space-around;
          overflow: hidden;

          li {
            margin: 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }

    }

    .new-song {
      flex: 1;
      margin-left: 20px;

      .card-list-row {
        justify-content: space-between;
      }

      .card-item {
        display: flex;
        width: 45%;
        margin-top: 10px;

        img {
          width: 30%;
        }
        .songinfo{
          flex: 1;
        }

        div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .card-item:nth-of-type(1){
        margin: 0;
      }
      .card-item:nth-of-type(2){
        margin: 0;
      }


      .songinfo {
        .flex-column;
        justify-content: space-around;
        padding: 5px;
        .autor {
          font-size: 12px;
          font-weight: 200;
        }
      }
    }
  }

}
</style>