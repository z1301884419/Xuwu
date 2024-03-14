<template>
  <div :class="searchTopClassName || 'serch-top'">
      <el-input
        v-model="queryStr"
        placeholder="请输入查询内容"
        :class="searchInputClassName || 'serch-input'"
        autocomplete="on"
        size="large"
      >
        <template #append>
          <el-button :icon="Search" @click=" $emit('searchHandle')" />
        </template>
      </el-input>
      <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { Search } from '@element-plus/icons-vue'

  /**
   * vModel: 输入框双向绑定的值,
   * @searchHandle: 搜索按钮的回调函数,
   * serchTop: 整个组件的css类名,
   * serchInput: 输入框的css类名,
   */
  const props = defineProps<{
    searchHandle?: Function,
    vModel?: any,
    searchTopClassName?: string,
    searchInputClassName?: string,
  }>()
  // 引入inject，解决无法在子组件改变父组件值问题
  const queryStr = inject('v-modelSearchStr')

</script>

<style lang="less" scoped>
  .serch-top{
    display: flex;
    background-color: rgb(255,255,255);
    justify-content: center;
    align-items: center;
    position: fixed;
    width: calc(100% - 20px);
    top: 60px;
    left: 0;
    z-index: 99;
    .serch-input{
      margin: 15px;
      width: 50%;
     }
  }
</style>