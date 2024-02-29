<template>
  <div class="box">
    <p>112312321321321321</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";

const myFetch = (function (fetchFunc) {
  return (url:any, options: any) => {
    // 这里拦截请求
    console.log(url, options)
    if ('请求不通过') {
      return new Promise(()=>{
        throw '请求不通过'
      });
    }
    return fetchFunc(url, options)
      .then((response) => {
        //console.log(response)
        // 这里做响应拦截
        if (response.ok == false) {
          alert('请求失败')
        }
        return response;
      })
      .catch(error => {
        throw error;
      })
  }
})(fetch)

 myFetch('/aaa', {
  method: 'GET'
}).then((res)=>{
  console.log(res)
})

nextTick(() => {

})


</script>

<style lang="less" scoped>
.box {
  position: relative;
}

.item {
  transition: 1s;
}

.item:nth-child(1) {
  height: 50px;
  width: 500px;
}

.item:nth-child(n+2) {
  width: 100px;
}
</style>
