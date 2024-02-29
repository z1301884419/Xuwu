<template>
  <div class="box">
    <h3>该专栏收录一些JS原生的使用</h3>
    <h4>菜就多练！🤡</h4>
    <ul class="cards">
      <li>JS小白</li>
      <div>→</div>
      <li>JS搬运工</li>
      <div>→</div>
      <li>JS大佬</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
  .box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .cards{
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      width: 80%;
      li{
        border: 1px solid gray;
        text-align: center;
        width: 150px;
        height: 100px;
        border-radius: 8px;
        line-height: 100px;
        font-size: 20px;
        font-weight: bolder;
      }
      div{
        height: 100px;
        line-height: 100px;
        font-size: 40px;
        font-weight: bolder;
      }
    }
  }
</style>
