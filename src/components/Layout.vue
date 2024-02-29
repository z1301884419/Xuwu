<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer> <Footer /> </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">


</script>

// 选项式
<script lang="ts">
import { routes } from '@/routers.ts'
import { inject } from 'vue';

// header 
const Header = {
  data(){
    return{
      currentPage: '/home',
      routes: routes.filter(item=>item.name)
    }
  },
  methods: {
    handleSelect(key: string){
      this.$router.push(key);
    }
  },
  computed: {
    nav(){
      this.currentPage = '/'+inject('nav')?.value?.split('/')[1];
      return inject('nav')?.value ? '/'+inject('nav')?.value?.split('/')[1] : '/home'
    }
  },
  watch: {
    currentPage(){
      document.getElementsByTagName('main')[0].scrollTop = 0;
    }
  },
  template: `
  <div class="header">
    <div class="logo">
      <el-image style="width: 58px; height: 58px" src="../src/assets/bizhi4.jpg" fit="cover" />
    </div>
    <div class="nav">
      <el-menu
      :default-active="nav"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      >
        <el-menu-item v-for="item in routes" :index="item.path" :key="item.path">{{item.name}}</el-menu-item>
      </el-menu>
    </div>
  </div>
  `,
};
// footer
const Footer = {
  template: `
  <div class="footer">
    我寄了张卡片，地址叫感觉，收件人叫永远。
  </div>
  `,
};

export default {
  components: {Footer,Header}
}

</script>


<style lang="less" >
  .common-layout{
    height: 100%;
    min-width: 400px;
  }
  .el-container{
    height: 100%;
  }
  .el-header{
    background-color: rgb(240, 240, 240) ;
    position: fixed;
    width: 100%;
    height: 60px;
    top:0;
    min-width: 400px;
  }
  .header{
    display: flex;
    .logo{
      width: 10%;
    }
    .nav{
      width: 90%;
      display: flex;
      justify-content: left;
      align-items: center;
      .el-menu{
        width: 100%;
        background-color: rgb(240, 240, 240) ;
      }
    }
  }
  .el-footer{
    background-color: rgb(240, 240, 240);
    position: fixed;
    width: 100%;
    height: 50px;
    bottom:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 400px;
  }
  .el-main{
    margin-top: 60px;
    margin-bottom: 50px;
    padding: 0 20px;
    min-width: 400px;
  }
</style>
