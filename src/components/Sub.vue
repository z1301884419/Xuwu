<template>
  <div v-if="isshow">{{ count }}
  <button @click="subcount">subcount</button>
  <button @click="hidden">subcount</button>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered, ref, inject, toRef } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

let props = defineProps(['count'])
const count = ref(props.count)
const isshow = ref(true)

function subcount(){
  count.value--;
}

function hidden(){
  isshow.value = !isshow.value
}
nextTick(() => {
  console.log('子nexttick')
})
onBeforeMount(() => {
  console.log('子onBeforeMount')
})
onMounted(() => {
  console.log('子onMount')
})
onBeforeUpdate(() => {
  console.log('子onBeforeUpdate')
})
onUpdated(() => {
  console.log('子onUpdated')
})
onBeforeUnmount(() => {
  console.log('子onBeforeUnmount')
})
onUnmounted(() => {
  console.log('子onUnmounted')
})
onRenderTracked(() => {
  // 仅开发模式可用
  // 当组件渲染过程中追踪到响应式依赖时调用
  console.log('子onRenderTracked')
})
onRenderTriggered(() => {
  // 仅开发模式可用
  // 当响应式依赖变更触发了组件渲染时调用
  console.log('子onRenderTriggered')
})
onBeforeRouteUpdate(() => {
  console.log('子onBeforeRouteUpdate')
})
</script>
<style>
</style>