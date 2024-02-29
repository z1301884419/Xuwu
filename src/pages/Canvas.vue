<template>
  <div>
    <SubRoutePage :menu-data="canvasMenu"/>
  </div>
</template>

<script lang="ts" setup>
import SubRoutePage from '@/components/SubRoutePage.vue'
import { canvasMenu } from '@/utils/menu.js'

</script>

<style lang="less" scoped>

</style>
