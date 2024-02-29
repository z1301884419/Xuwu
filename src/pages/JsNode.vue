<template>
  <div class="box">
    <SubRoutePage :menu-data="jsnodeMenu" />
  </div>
</template>

<script lang="ts" setup>
import SubRoutePage from '@/components/SubRoutePage.vue'
import { jsnodeMenu } from '@/utils/menu.js'

</script>

<style lang="less" scoped>

</style>
