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
            <img class="lazy-img" :data-src="item.bannerurl" alt="">
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
            <img class="lazy-img" :data-src="item.imgurl.replace('/{size}', '')" alt="">
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
              <img class="lazy-img" :data-src="item.banner_9.replace('/{size}', '')" alt="">
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
        <h3 @click="click">新歌推荐</h3>
        <div class="card-list-row">
          <template v-for="item of bannerStore.newSongData.chinaSong.slice(0, 10)">
            <div v-if="item.cover" class="card-item" :key="item.id">
              <img class="lazy-img" :data-src="item.cover.replace('/{size}', '')" alt="">
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
import { useMusicBannerStore } from '@/stores/musicBannerStore';
import { nextTick, ref, watch } from 'vue';

const bannerStore = useMusicBannerStore()

// 图片懒加载处理(配合watch和nextTick使用)
// 使用局限性(首屏图片元素的监听始终快于接口，此时data-src为空)
function imgLazyLoad() {
  const imgOb = new IntersectionObserver((entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        let img: any = entry.target;
        if (img.dataset.src) {
          entry.target.src = img.dataset.src;
        }
        imgOb.unobserve(img)
      }
    }
  })
  const imgs = document.querySelectorAll('.lazy-img')
  imgs.forEach((img) => {
    imgOb.observe(img)
  })
}
watch(bannerStore, () => {
  imgLazyLoad()
})
nextTick(() => {
  imgLazyLoad()
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

        .songinfo {
          flex: 1;
        }

        div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .card-item:nth-of-type(1) {
        margin: 0;
      }

      .card-item:nth-of-type(2) {
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