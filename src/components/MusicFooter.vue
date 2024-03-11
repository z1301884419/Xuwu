<template>
  <footer>
    <div class="song-info">
      <img v-if="showImg" :src="currentSong.avatar" alt="" class="song-cover">
      <div ref="songnameBoxRef">
        <div class="song-name" ref="songnameRef">
          <span>{{ currentSong.name }}</span> - <span>{{ currentSong.singer }}</span>
        </div>
        <el-slider v-if="showProgress" class="song-progress" v-model="songObj.currentTime" @input="progressInput"
          @change="progressChange" :min="0" :max="songObj.duration" />
      </div>
    </div>
    <div class="song-controller">
      <GoStart @click="playChange('pre')" :theme="theme" :size="size" :fill="fill" />
      <Play v-if="!playflag" @click="palyHandle" :theme="theme" :size="size"
        :fill="fill" />
      <PauseOne v-if="playflag" @click="palyHandle" :theme="theme" :size="size"
        :fill="fill" />
      <GoEnd @click="playChange('next')" :theme="theme" :size="size" :fill="fill" />
    </div>
    <div class="song-options">
      <VolumeNotice v-if="songObj.volumeFlag" @click="volumeTrigger(true)" :theme="theme"
        :size="size / 1.5" :fill="fill" />
      <VolumeMute v-if="!songObj.volumeFlag" @click="volumeTrigger(false)" :theme="theme"
        :size="size / 1.5" :fill="fill" />
      <el-slider class="song-volume" v-model="songObj.currentVolume" :min="0" :max="100" />
      <Download v-if="showDownload" @click="download" :theme="theme" :size="size / 1.5"
        :fill="fill" />
    </div>

  </footer>
</template>

<script setup lang="ts">

import { Play, PauseOne, GoStart, GoEnd, VolumeMute, VolumeNotice, Download } from '@icon-park/vue-next';
import { defineProps, nextTick, ref } from 'vue'
import { useMusicStore } from '@/stores/musicStore';
import { storeToRefs } from 'pinia';

interface IController {
  theme?: any;
  size?: string | number;
  fill?: string | string[];
}
interface IProps {
  songData?: any[];
  controlOption?: IController;
  showComp?: {
    showImg: boolean,
    showProgress: boolean,
    showDownload: boolean,
  }
}

const defaultControlOption = {
    theme: 'filled',
    size:'36',
    fill: '#7cd1be',
  }
const defaultShowComp = {
    showImg: true,
    showProgress: true,
    showDownload: true,
  }
const { songData, controlOption, showComp } = withDefaults(defineProps<IProps>(),{})
const { theme, size, fill } = {
  ...defaultControlOption,
  ...controlOption,
};
const { showImg, showProgress, showDownload } = {
  ...defaultShowComp,
  ...showComp,
};

const songnameRef = ref()
const songnameBoxRef = ref()

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
function volumeTrigger(flag: boolean) {
  playControl.volumeTrigger(flag);
}
/** 下载 */
function download() {
  playControl.download();
}
nextTick(() => {
  let songnameRef_w = parseInt(getComputedStyle(songnameRef.value).width)
  let songnameBoxRef_w = parseInt(getComputedStyle(songnameBoxRef.value).width)
  if (songnameRef_w > songnameBoxRef_w) {
    // 不能这么写，运行时找不到动画名，scope里定义的属性在运行时会额外生成一个hash值
    // songnameRef.value.style.animation = "text_scroll 5s linear infinite" 
    // 改用添加类名方法
    songnameRef.value.style.setProperty("--sroll-width", songnameBoxRef_w - songnameRef_w + 'px');
    songnameRef.value.classList.add('anmation');
  }
})

</script>

<style scoped lang="less">
footer {
  @keyframes text_scroll {
    0% {
      transform: translateX(0%);
    }

    50% {
      transform: translateX(var(--sroll-width));
    }

    100% {
      transform: translateX(0%);
    }
  }

  .anmation {
    animation: text_scroll 5s linear infinite;
  }

  display: flex;

  .song-info {
    width: 40%;
    display: flex;
    // background: blue;
    overflow: hidden;

    .song-cover {
      height: 50px;
      width: 50px;
    }

    >div {
      padding: 5px 10px;
      flex: 1;
      width: 100%;
      white-space: nowrap;
      overflow: scroll;

      .song-name {
        --sroll-width: 0px;
        width: max-content;
      }

      .song-progress {
        width: 100%;
      }
    }
  }

  .song-info>div::-webkit-scrollbar {
    width: 0;
    height: 0;
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