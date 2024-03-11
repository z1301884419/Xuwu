<template>
  <div class="container">
    
    <div class="box">
      <span class="span">221</span>
      <span>54544554</span>
    </div>
    <div class="out-box" @mousedown="outBox">
      <div class="inner-box" @mousedown="innerBox"></div>
    </div>
   
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";

let a = fetch('https://kwimg1.kuwo.cn/star/upload/73/44/1677749209264_.png').then((res)=>{
  console.log(res)
})

function outBox(e){
  console.log('out')
}
function innerBox(e){
  e.preventDefault();
  e.stopPropagation()
  console.log('inner')
}

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
.out-box{
  width: 100px;
  height: 100px;
  border: 2px solid red;
  .inner-box{
    width: 50px;
    height: 50px;
    border: 2px solid yellow;
  }
}

</style>
