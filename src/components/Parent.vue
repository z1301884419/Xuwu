<template>
  <div v-if="isshow">
    {{ count2 }}
    <Sub :count="count2+1" />
    <Sub :count="count2"></Sub>
    <button @click="hidden"> hidden</button>
    <button @click="add"> add</button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered, nextTick, inject, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import Sub from './Sub.vue'

let { count } = defineProps(['count'])
const count2 = ref(count)
const isshow = ref(true)
function hidden(){
  isshow.value = !isshow.value
}
function add(){
  count2.value += 5
}
nextTick(() => {
  console.log('父nexttick')
})
onBeforeMount(() => {
  console.log('父onBeforeMount')
})
onMounted(()=>{
  console.log('父onMount')
})
onBeforeUpdate(() => {
  console.log('父onBeforeUpdate')
})
onUpdated(() => {
  console.log('父onUpdated')
})
onBeforeUnmount(() => {
  console.log('父onBeforeUnmount')
})
onUnmounted(() => {
  console.log('父onUnmounted')
})
onRenderTracked(() => {
  // 仅开发模式可用
  // 当组件渲染过程中追踪到响应式依赖时调用
  console.log('父onRenderTracked')
})
onRenderTriggered(() => {
  // 仅开发模式可用
  // 当响应式依赖变更触发了组件渲染时调用
  console.log('父onRenderTriggered')
})
onBeforeRouteUpdate(() => {
  console.log('父onBeforeRouteUpdate')
})
</script>
