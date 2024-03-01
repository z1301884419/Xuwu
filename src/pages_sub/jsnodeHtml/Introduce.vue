<template>
  <div class="box">
    <h3>该专栏收录一些JS原生的使用</h3>
    <h4>菜就多练！🤡</h4>
    <ul class="cards">
      <li><span>JS初学</span></li>
      <div>→</div>
      <li><span>JS熟练</span></li>
      <div>→</div>
      <li><span>JS精通</span></li>
    </ul>
    <section class="buttons">
      <button @click="goMore(1)">GO TO W3C School</button>
      <button @click="goMore(2)">GO TO MDN Web Docs</button>
    </section>
  </div>
</template>

<script lang="ts" setup>
  function goMore(type:number){
    let url: string;
    if(type === 1){
      url = 'https://www.w3cschool.cn/javascript/'
    }else{
      url ='https://developer.mozilla.org/zh-CN/docs/Web/API'
    }
    window.open(url)
  }
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 130px);
  .cards {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    width: 80%;
    li {
      position: relative;
      text-align: center;
      width: 150px;
      height: 100px;
      border-radius: 8px;
      line-height: 100px;

      span {
        position: absolute;
        inset: 2px;
        z-index: 1;
        font-size: 20px;
        font-weight: bolder;
        border-radius: 4px;
        color: #255;
        background: rgb(249, 249, 249);
      }
    }

    li::before {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-conic-gradient(from var(--a), #6f9, #f99,
          #0ff, #f9f, #99f);
      border-radius: 8px;
      animation: rotating 4s linear infinite;
    }

    li::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-conic-gradient(from var(--a), #6f9, #f99,
          #0ff, #f9f, #99f);
      border-radius: 8px;
      animation: rotating 4s linear infinite;
      filter: blur(10px);
      opacity: 0.85;
    }

    @property --a {
      syntax: '<angle>';
      inherits: false;
      initial-value: 0deg;
    }

    @keyframes rotating {
      0% {
        --a: 0deg;
      }

      100% {
        --a: 360deg;
      }
    }

    div {
      height: 100px;
      line-height: 100px;
      font-size: 40px;
      font-weight: bolder;
    }
  }
  .buttons{
    margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    button{
      padding: 8px 12px;
      border: none;
      border-radius: 8px;
      background: rgba(2, 183, 255,0.7);
      color: white;
      cursor: pointer;
    }
    button:hover{
      box-shadow: rgb(156, 253, 255) 0 0 2px 1px;
    }
  }
}</style>
