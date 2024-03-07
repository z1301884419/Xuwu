import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

//
export const useMusicStore = defineStore("music", () => {
  const musicData = ref([
    {
      name: "离别开出花",
      singer: "就是南方凯",
      avatar: "https://img2.kuwo.cn/star/albumcover/500/s3s47/0/3433413293.jpg",
      video:
        "https://m701.music.126.net/20240307231935/8dadd223fe239550cedb5008a8aae5f4/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32103516877/3532/074b/bdea/4f512dfb86fec567b51062cc17695e22.m4a",
    },
    {
      name: "一丝不挂",
      singer: "陈奕迅",
      avatar:
        "https://p2.music.126.net/qE_9M-Ge5qwuk55IfkNO2g==/109951163200234557.jpg?param=200y200",
      video:
        "https://m801.music.126.net/20240307231539/c56087f32bf02cb593a7a673d7072934/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481781130/17d4/c256/d137/aaebb46b94a29568e76f6feafa6e1264.mp3",
    },
    {
      name: "葡萄成熟时",
      singer: "陈奕迅",
      avatar: "https://img1.kuwo.cn/star/albumcover/500/83/42/4180851740.jpg",
      video:
        "https://m801.music.126.net/20240307192159/3b69e1134c5f7934c1b38a083635f2c9/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32367558831/262f/a164/0261/b4856cc5242596f497f5a3c8420ac69f.m4a",
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
  const progressObj = ref({
    duration: 0,
    currentTime: 0,
  });
  //
  watch(currentSong, () => {
    song.src = currentSong.value.video;
    playSong().play();
  });
  // 歌曲进度改变
  song.ontimeupdate = () => {
    progressObj.value.currentTime = song.currentTime;
  };
  // 歌曲加载完成
  song.onprogress = () => {
    progressObj.value.duration = song.duration;
  };
  // 歌曲播放完成
  song.onended = () => {
    musicCount.value >= musicData.value.length - 1
      ? (musicCount.value = 0)
      : musicCount.value++;
  };

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
        song.play();
      },
    };
  }

  return { musicData, playSong, playflag, currentSong, progressObj };
});
