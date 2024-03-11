<template>
  <div class="music-affix" ref="musicAffixRef" @mousedown="mousedown">
    <MusicFooter class="music-footer" :showComp="{ showDownload: false }" />
    <Performance class="icon" :theme="theme || 'filled'" :size="size || 50" :fill="fill || '#7cd1be'" />
  </div>
</template>
<script setup lang="ts">
import { Performance } from '@icon-park/vue-next';
import { nextTick, defineProps, ref } from 'vue';
import MusicFooter from '@/components/MusicFooter.vue'

const { theme, size, fill } = defineProps<{
  theme?: any;
  size?: string | number;
  fill?: string | string[];
}>()
const musicAffixRef = ref();

const clickDowm = ref(false);

let initX: number;
let initY: number;
let currentX = 0;
let currentY = 0;
let offsetX = 0;
let offsetY = 0;
window.onmousemove = (e) => {
  if (clickDowm.value) {
    e.preventDefault();
    // 鼠标偏移量
    if (e.clientX > innerWidth - 25) {
      offsetX = innerWidth - 25 - initX;
    } else if (e.clientX < 25) {
      offsetX = 25 - initX;
    } else {
      offsetX = e.clientX - initX;
    }
    if (e.clientY > innerHeight - 25) {
      offsetY = innerHeight - 25 - initY;
    } else if (e.clientY < 25) {
      offsetY = 25 - initY;
    } else {
      offsetY = e.clientY - initY;
    }
    musicAffixRef.value.style.transform = `translate(${currentX + offsetX}px,${currentY + offsetY}px)`
  }
}
window.onmouseup = (e) => {
  // 当前位置的偏移量
  if (clickDowm.value) {
    if (e.clientX > innerWidth - 25) {
      currentX += innerWidth - 25 - initX;
    } else if (e.clientX < 25) {
      currentX += 25 - initX;
    } else {
      currentX += e.clientX - initX;
    }
    if (e.clientY > innerHeight - 25) {
      currentY += innerHeight - 25 - initY;
    }
    else if (e.clientY < 25) {
      currentY += 25 - initY;
    } else {
      currentY += e.clientY - initY;
    }
    musicAffixRef.value.style.transition = '1s';
  }
  clickDowm.value = false
}
function mousedown(e) {
  // 初始鼠标位置
  initX = e.clientX;
  initY = e.clientY;
  clickDowm.value = true
  musicAffixRef.value.style.transition = '0s';
}
</script>
<style lang="less" scoped>
.music-affix {
  position: fixed;
  z-index: 999;
  height: 50px;
  width: 50px;
  top: 50px;
  right: 0;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  background: rgb(207, 222, 220);
  border: #95c1ab solid 1px;
  border-radius: 25px;

  .music-footer {
    flex: 1;
    margin-right: 50px;

  }

  .icon {
    position: absolute;
    right: 0;
    z-index: 2;
    background: rgb(207, 222, 220);
  }

}

.music-affix:hover {
  width: 600px;
  border: #95c1ab solid 1px;
  border-radius: 5px;
  transition: 1s;
}
</style>