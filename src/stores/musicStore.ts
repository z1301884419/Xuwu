import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { getSession, setSession } from "@/utils/util.js";

//
export const useMusicStore = defineStore("music", () => {
  const musicData = ref([
    {
      name: "离别开出花",
      singer: "就是南方凯",
      avatar: "https://img2.kuwo.cn/star/albumcover/500/s3s47/0/3433413293.jpg",
      video: "./video/libiekaichuhua.mp3",
    },
    {
      name: "一丝不挂",
      singer: "陈奕迅",
      avatar:
        "https://p2.music.126.net/qE_9M-Ge5qwuk55IfkNO2g==/109951163200234557.jpg?param=200y200",
      video: "./video/yisibugua.mp3",
    },
    {
      name: "葡萄成熟时",
      singer: "陈奕迅",
      avatar: "https://img1.kuwo.cn/star/albumcover/500/83/42/4180851740.jpg",
      video: "./video/putaochengshushi.mp3",
    },
  ]);
  // 播放暂定标识
  const playflag = ref(false);
  //
  // 当前播放的音乐
  const musicCount = ref(0);
  const currentSong = computed(() => musicData.value[musicCount.value]);
  const song = new Audio(currentSong.value.video);
  // 当前音乐播放的进度
  const songObj = ref({
    duration: 0,
    currentTime: 0,
    currentVolume: 50,
    volumeFlag: true,
  });
  //
  watch(currentSong, () => {
    song.src = currentSong.value.video;
    playSong().play();
  });
  // 歌曲进度改变
  song.ontimeupdate = () => {
    songObj.value.currentTime = song.currentTime;
  };
  // 歌曲加载完成
  song.onprogress = () => {
    if (isNaN(song.duration)) {
      songObj.value.duration = getSession("song-duration");
    } else {
      songObj.value.duration = song.duration;
      setSession("song-duration", song.duration);
    }
  };
  // 歌曲播放完成
  song.onended = () => {
    musicCount.value >= musicData.value.length - 1
      ? (musicCount.value = 0)
      : musicCount.value++;
  };

  // 音量监听
  watch(
    () => songObj.value.currentVolume,
    (val) => {
      songObj.value.volumeFlag = val ? true : false;
      song.volume = val / 100;
    },
    {
      deep: true,
    }
  );

  /** 音乐播放控制 */
  function playSong() {
    return {
      play() {
        song.play();
        playflag.value = true;
      },
      pause() {
        song.pause();
        playflag.value = false;
      },
      pre() {
        musicCount.value <= 0
          ? (musicCount.value = musicData.value.length - 1)
          : musicCount.value--;
      },
      next() {
        musicCount.value >= musicData.value.length - 1
          ? (musicCount.value = 0)
          : musicCount.value++;
      },
      progressChange(val: number) {
        song.pause();
        song.currentTime = val;
        this.play();
      },
      volumeTrigger(flag: boolean) {
        if (flag) {
          song.volume = 0;
          songObj.value.volumeFlag = false;
        } else {
          song.volume = songObj.value.currentVolume / 100;
          if (!songObj.value.currentVolume) return;
          songObj.value.volumeFlag = true;
        }
      },
      download(){
        let a = document.createElement('a');
        a.href = song.src;
        a.download =  currentSong.value.name + "-" + currentSong.value.singer;
        a.click()
      }
    };
  }

  return { musicData, playSong, playflag, currentSong, songObj };
});
