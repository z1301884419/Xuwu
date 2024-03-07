<template>
  <div class="box">
    45245646
    <p>112312321321321321</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";



nextTick(() => {

})


</script>

<style lang="less" scoped>
.box {
  position: relative;
  height: var(--page-height);
  background: red;
  width: max-content;
  p{
    min-width: 992px;
    background: blue;
  }
}

</style>
