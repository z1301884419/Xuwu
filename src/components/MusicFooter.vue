<template>
  <footer>
    <div class="song-info">
      <img :src="currentSong.avatar" alt="" class="song-cover">
      <div>
        <div class="song-name">
          <span>{{ currentSong.name }}</span> - <span>{{ currentSong.singer }}</span>
        </div>
        <el-slider class="song-progress" v-model="songObj.currentTime" @input="progressInput" @change="progressChange"
          :min="0" :max="songObj.duration" />
      </div>
    </div>
    <div class="song-controller">
      <GoStart @click="playChange('pre')" :theme="theme || 'filled'" :size="size || 36" :fill="fill || '#7cd1be'" />
      <Play v-if="!playflag" @click="palyHandle" :theme="theme || 'filled'" :size="size || 36"
        :fill="fill || '#7cd1be'" />
      <PauseOne v-if="playflag" @click="palyHandle" :theme="theme || 'filled'" :size="size || 36"
        :fill="fill || '#7cd1be'" />
      <GoEnd @click="playChange('next')" :theme="theme || 'filled'" :size="size || 36" :fill="fill || '#7cd1be'" />
    </div>
    <div class="song-options">
      <VolumeNotice v-if="songObj.volumeFlag" @click="volumeTrigger(true)" :theme="theme || 'filled'" :size="size / 1.5 || 36 / 1.5"
        :fill="fill || '#7cd1be'" />
      <VolumeMute v-if="!songObj.volumeFlag" @click="volumeTrigger(false)" :theme="theme || 'filled'" :size="size / 1.5 || 36 / 1.5"
        :fill="fill || '#7cd1be'" />
      <el-slider class="song-volume" v-model="songObj.currentVolume" :min="0" :max="100" />
      <Download @click="download" :theme="theme || 'filled'" :size="size/1.5 || 36/1.5" :fill="fill || '#7cd1be'" />
    </div>

  </footer>
</template>

<script setup lang="ts">

import { Play, PauseOne, GoStart, GoEnd, VolumeMute, VolumeNotice, Download } from '@icon-park/vue-next';
import { defineProps, ref } from 'vue'
import { useMusicStore } from '@/stores/musicStore';
import { storeToRefs } from 'pinia';

interface IController {
  theme?: any;
  size?: string | number;
  fill?: string | string[];
}

const { songData, controlOption } = defineProps<{
  songData?: any[];
  controlOption?: IController;
}>()

const { theme, size, fill } = controlOption || {};

/** 歌曲播放 */
const musicStore = useMusicStore()
const { playSong } = musicStore;
const { playflag, currentSong, songObj } = storeToRefs(musicStore);
// 初始化歌曲
const playControl = playSong();
function palyHandle() {
  playflag.value ? playControl.pause() : playControl.play()
}
function playChange(type: string) {
  switch (type) {
    case 'pre': playControl.pre(); break;
    case 'next': playControl.next(); break;
  }
}
/** 进度控制 */
const currentTime = ref(0);
function progressChange() {
  playControl.progressChange(currentTime.value)
}
// vue el-slider 组件bug？change事件松开的值并不是滑到的值，要结合input事件使用
function progressInput(val: number) {
  currentTime.value = val;
}
/** 声音开关 */
function volumeTrigger(flag: boolean){
  playControl.volumeTrigger(flag);
}
/** 下载 */
function download(){
  playControl.download();
}

</script>

<style scoped lang="less">
footer {
  display: flex;

  .song-info {
    flex: 2;
    display: flex;

    .song-cover {
      height: 50px;
      width: 50px;
    }

    >div {
      padding: 5px;
      flex: 1;

      .song-progress {
        width: 100%;
      }
    }
  }

  .song-controller {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    >span {
      margin: 0 5px;
      cursor: pointer;
    }
  }

  .song-options {
    flex: 2;
    display: flex;
    align-items: center;

    >span {
      margin: 0 10px;
      cursor: pointer;
    }

    .song-volume {
      width: 50%;
    }
  }

  :deep(.el-slider__button) {
    width: 15px;
    height: 15px;
  }
}
</style>