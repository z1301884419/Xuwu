<template>
  <div class="container">
    
    <div class="box">
      <span class="span">221</span>
      <span>54544554</span>
    </div>
   
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";

let a = fetch('https://kwimg1.kuwo.cn/star/upload/73/44/1677749209264_.png').then((res)=>{
  console.log(res)
})

nextTick(() => {

})


</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: var(--page-height);
  padding: 0 20px;
}
.box{
  height: 40px;
  // line-height: 40px;
  display: flex;
  align-items: center;
  background: red;
  .span{
    display: inline-block;
    margin-top: 5px;
    background: blue;
  }
}

</style>
