<template>
  <div class="root-container">
    <TopSearch :v-model="searchStr" @searchHandle="searchHandle" />
    <ul class="container">
      <li v-for="item in pageData" :key="item.id" class="li-item" @click="itemClickHandle(item.id)">
        <div class="title item-title">{{ item?.title }}</div>
        <div class="desc item-desc">{{ item?.desc }}</div>
        <div class="item-bottom">
          <span>我的阅读量</span>
          <el-tooltip effect="light" content="数量的统计存在本地缓存中，清除浏览器缓存将会重置为0" placement="right">
            <el-icon>
              <QuestionFilled color="rgb(200,200,200)" />
            </el-icon>
          </el-tooltip>:
          <span class="read-count">{{ readCount[item.id] || '0' }}</span>
          <span class="card-create-time">{{ item.createTime || '暂无' }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import { QuestionFilled } from '@element-plus/icons-vue'
import { setLocal, getLocal } from '@/utils/util.js'
import TopSearch from '@/components/TopSearch.vue'
import vueData from '@/utils/vueData.js'


const pageData = ref(vueData)

// 搜索部分
const searchStr = ref()
/** 注入provide，解决无法在子组件改变父组件值问题 */
provide('v-modelSearchStr', searchStr)
function searchHandle() {
  pageData.value = vueData.filter(item => {
    if (item?.title.indexOf(searchStr.value) !== -1 || item?.desc.indexOf(searchStr.value) !== -1) return item
  })
}

/**阅读量统计 */
const readCount = ref(getLocal('read-count') || {})

/**
 * 点击卡片的回调
 * @param  list_id 每个卡片对象
 */
// 与详情页建立标签通信
const channel = new BroadcastChannel('details');

function itemClickHandle(list_id: any) {
  // 同步浏览器中的数据
  !isNaN(readCount.value[list_id]) ? readCount.value[list_id] += 1 : readCount.value[list_id] = 1
  setLocal('read-count', readCount.value)
  // 跳转到详情页
  if (getLocal('detailsIsOpen') !== 'true') {
    window.open(location.origin + '/#/details/' + list_id)
  } else {
    channel.postMessage(list_id)
  }

}



</script>


<style lang="less" scoped>
ul,
li {
  list-style: none;
  padding: 0;
}

.container {
  box-sizing: border-box;
  margin: 70px 0;
  padding: 0 20px;

  .li-item:hover {
    box-shadow: 1px 1px 12px -8px rgb(5, 184, 238);
  }

  .li-item {
    border: 1px solid rgb(197, 196, 196);
    box-shadow: 1px 1px 2px rgb(210, 210, 210);
    border-radius: 4px;
    padding: 4px 16px;
    margin-bottom: 16px;

    .item-title {
      // font-size: 18px;
      margin: 8px 0;
    }

    .item-desc {
      margin: 8px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }

  .item-bottom {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: light;
    position: relative;

    .read-count {
      margin-left: 4px;
    }

    .card-create-time {
      position: absolute;
      right: 0px
    }
  }
}

.li-item:last-child {
  // margin-bottom: 30px;
}
</style>