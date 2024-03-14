<template>
  <div class="root-container">
    <div class="search-top" ref="searchTopRef">
      <TopSearch
      :v-model="queryStr"
      @search-handle="searchHandel"
      search-top-class-name="search"
      />
      <!-- 更多操作 -->
      <div class="more-btn">
        <el-dropdown split-button type="primary">
          <span class="downmenu">更多操作</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="openAddCssDialog('add')">添加</el-dropdown-item>
              <el-dropdown-item @click="removeCardBtn">删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 额外的按钮位置 -->
        <el-button plain type="primary" v-if="checkboxVisible" @click="checkAllCardHandle">{{ allCheckedCards.length == checkedCards.length ? '取消全选' : '全选' }}</el-button>
        <el-button plain type="primary" v-if="checkboxVisible" @click="rmoveCardHandle">删除</el-button>
        <el-button plain type="primary" v-if="checkboxVisible" @click="closeRmoveCardHandle">退出删除</el-button>
      </div>
    </div>
    <!-- 卡片展示 -->
    <el-checkbox-group  v-model="checkedCards"  @change="handleCheckedCardChange">
      <el-row class="container" :style="{marginTop: marginSearchTop}">  
        <el-col class="item" :span="4" v-for="(item,index) in cssDataRef" :key="index">
            <el-checkbox v-if="checkboxVisible" :label="item?.id"  class="check-item" ><span></span></el-checkbox>
            <el-icon  class="edit-css" @click="openAddCssDialog('edit',item)"><Edit /></el-icon>    
            <el-card class="card" :body-style="{ padding: '0px' }"  @click="openCard(item)">     
              <el-image class="item-img" :src="item?.src" fit="cover" />
                <div style="padding: 14px">
                  <div class="card-text">{{ item?.text }}</div>
                  <span class="card-desc">{{ item?.desc }}</span>
                </div>
            </el-card>
        </el-col>
      </el-row>
    </el-checkbox-group>
    <CssDialog id="css-dialong" :info="cssDialogInfo" :visible="cssDialogVisible"  @closeVisible="closeCssDialogVisible" />
    <AddCssCardDialog 
    :visible="addCssDialogVisible" 
    @closeVisible="closeAddCssDialog"
    :open-type="openAddCssDialogType"
    :default-data="defaultAddCssDialogData" />
 </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, provide, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { Edit } from '@element-plus/icons-vue'
  import { nanoid } from 'nanoid'
  import CssDialog from '@/components/CssDialog.vue'
  import AddCssCardDialog from '@/components/AddCssCardDialog.vue'
  import TopSearch from '@/components/TopSearch.vue'
  import { cssData } from '@/utils/cssDate.js'
  import { useTimerStore } from '@/stores/timerStore.js'

  const route = useRoute()
  const timerStore = useTimerStore()

  // 顶部样式
  /** 装载顶部搜索框容器 */
  const searchTopRef = ref()
  const marginSearchTop = ref('72px')
  let timer: number;
  window.onresize = ()=>{
    if(route.path !== '/cssnote')return 
    timer && clearTimeout(timer)
    timer = setTimeout(()=>{
      marginSearchTop.value = getComputedStyle(searchTopRef.value).height
    },300)
    timerStore.timerPush(timer)
  }
  // 搜索部分
  /** 要搜索的字符串 */
  const queryStr = ref();
  /** 注入provide，解决无法在子组件改变父组件值问题 */
  provide('v-modelSearchStr',queryStr)

  function searchHandel(){
    if (!queryStr.value)return
    cssDataRef.value = cssData.filter(item=>{
     return item?.text.indexOf(queryStr.value) != -1 ||
      item?.code.indexOf(queryStr.value) != -1 ||
      item?.desc.indexOf(queryStr.value) != -1
    })
       
  }

  // 删除部分
  function removeCardBtn(){
    checkboxVisible.value = true
  }
  /** 全选/取消全选 */
  function checkAllCardHandle(e){
    if(e.target.innerText == '全选'){
      checkedCards.value = allCheckedCards.value
    }else{
      checkedCards.value = preCheckedCards.value.length == allCheckedCards.value.length ? [] : preCheckedCards.value
    }
    
  }
  /** 删除卡片 */
  function rmoveCardHandle(){
    cssDataRef.value = cssDataRef.value.filter(item=>!checkedCards.value.includes(item?.id))
  }
  /** 取消删除按钮 */
  function closeRmoveCardHandle(){
    checkboxVisible.value = false
  }


  // 卡片详情部分
  const cssDataRef = ref(cssData);
  const cssDialogVisible = ref(false);
  const cssDialogInfo = ref({});

  function openCard(info:any){
    cssDialogInfo.value = info
    cssDialogVisible.value = true;
  }

  function closeCssDialogVisible(){
    cssDialogVisible.value = false;
  }

  // 添加/编辑卡片的弹框
  const addCssDialogVisible = ref(false);
  const openAddCssDialogType = ref();
  const defaultAddCssDialogData = ref();
  

  function openAddCssDialog(type:string, data:any){
    openAddCssDialogType.value = type
    defaultAddCssDialogData.value = data
    addCssDialogVisible.value = true;
  }
  function closeAddCssDialog(type:string, addData: any){
    // 添加
    if(type=="addSure" && addData){
      addData.id = nanoid()
      cssDataRef.value.push(addData)
    }
    // 编辑
    if(type=="editSure" && addData){
      cssDataRef.value.forEach((item : any,index: number)=>{
        item?.id == addData?.id && (cssDataRef.value[index] = addData)
      })
    }
    addCssDialogVisible.value = false;
  }

  // 多选框
  /** 当前页面上所有的卡片checkbox为勾选状态的值 */
  const allCheckedCards = ref([])
  /** 上一次勾选后的checkbox为勾选状态的值 */
  const preCheckedCards = ref([])
  /** 当前被勾选的checkbox的值 */
  const checkedCards = ref([])
  const checkboxVisible = ref(false)
  function handleCheckedCardChange(value){
    preCheckedCards.value = value
  }

  // 挂在之后
  onMounted(()=>{
    allCheckedCards.value = cssData.map(item=>item.id)
  })

  onUnmounted(()=>{
    
  })

</script>

<style lang="less" scoped>
  .root-container{
    position: relative;
  }
  .search-top{
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(255,255,255);
    justify-content: center;
    align-items: center;
    position: fixed;
    width: calc(100% - 20px);
    top: 60px;
    left: 0;
    z-index: 2;
    padding: 8px;
    .search{
      width: 50%;
      min-width: 300px;
      margin: 8px;
    }
    .more-btn{
      margin: 8px;
      button {
        margin-left: 8px;
      }
    }
    .el-dropdown{
      .downmenu {
        cursor: pointer;
        outline: none;
      }
    }

  }
  .container{
    box-sizing: content-box;
    height: 100%;
    margin: 60px 0; 
  }
  .el-checkbox-group {
    font-size: 16px;
    line-height: 16px; 
      .check-item{
        position: absolute;
        top:0px;
        left: 8px;
        z-index: 1;
      }
    }
  .item .card:hover{
    box-shadow: 1px 1px 10px rgb(156, 152, 152);
  }
  .item{
    min-width: 200px;
    margin: 20px;
    position: relative;
    .edit-css{
      position: absolute;
      top:5px;
      right: 5px;
      z-index: 1; 
      background-color: aliceblue;
      color: rgb(24, 140, 241);
    }
    .item-img{
      height: 200px;
      width: 100%;
    }
    .card-text{
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .card-desc{
      margin-top: 5px;
      font-size: 13px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  @media(max-width: 600px){
  }

</style>