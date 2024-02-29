import { defineStore } from 'pinia'
import { ref } from 'vue'

// 记录不需要被清除的定时器
export const useTimerStore = defineStore('timerStore',()=>{
  const timerArr = ref([]);
  function timerPush(timer){
    timerArr.value.push(timer)
  }
  return {timerArr, timerPush}
})