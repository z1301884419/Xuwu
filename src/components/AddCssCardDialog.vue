<template>
  <el-dialog
    :model-value="visible"
    title="添加css"
    width="700"
    destroy-on-close
    @close="$emit('closeVisible')">
    <div>
      <el-form
        ref="ruleFormRef"
        :model="formData"
        label-width="60px"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="标题" required prop="text">
          <el-input v-model="formData.text" />
          <template #error><span class="errtext">标题不能为空</span></template>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input v-model="formData.desc" />
        </el-form-item>
        <el-form-item label="封面">
          <el-upload 
          action="#"
          :show-file-list="false" 
          :auto-upload="false"
          :on-change="imgUploadSuccess"
          :before-upload="beforeImgUpload"
          >
            <img v-if="formData.src" :src="formData.src" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            <span v-if="formData.src" class="preview-icon" @click="handlePictureCardPreview" >
              <el-icon><zoom-in /></el-icon>
            </span>
          </el-upload>
        </el-form-item>
        <el-form-item label="code" required prop="code">
          <el-input autosize v-model="formData.code" type="textarea" />
          <template #error><span class="errtext">code不能为空</span></template>
        </el-form-item>
      </el-form>
      <el-dialog width="800" height="400" :show-close="false" style="padding: 5px;" v-model="imgDialogVisible">
        <img class="preview-img" :src="formData.src" alt="Preview Image" />
      </el-dialog>    
    </div>
    <!-- 底部按钮 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('closeVisible')">取消</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button :loading="sureLoding" type="primary" @click="addSureHandle">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref, toRef, watch } from 'vue'
import { Plus, ZoomIn } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'

/**
 * props 
 */
const props = defineProps<{
  visible?: boolean, 
  closeVisible?: Function,
  openType?:string,
  defaultData?:{
    id:string,
    text:string,
    desc:string,
    src:string,
    code:string,
  }
}>()

const visible = toRef(props, 'visible')
const defaultData = toRef(props, 'defaultData')
const emit = defineEmits(['closeVisible'])

// 组件自身状态
/** 表单数据 */
const formData = ref<{ 
  id: string | undefined; 
  text: string | undefined; 
  desc: string | undefined; 
  src: string | undefined; 
  code: string | undefined; 
}>({
  id: '',
  src: '',
  text: '',
  desc: '',
  code: '',
})
// 表单重置
function resetForm(){
  defaultData?.value ? formData.value = {...defaultData?.value} : formData.value = {
    id: undefined,
    src: undefined,
    text: undefined,
    desc: undefined,
    code: undefined,
  }
}

/** form表单实例 */
const ruleFormRef = ref<FormInstance>()

// 上传图片
const imgDialogVisible = ref(false)

/** 文件添加时的函数 */
const imgUploadSuccess = (
  uploadFile: { raw: Blob|MediaSource },
  uploadFiles: Array<{ raw: Blob|MediaSource }>
) => {
  formData.value.src = URL.createObjectURL(uploadFile.raw!)
}

const beforeImgUpload = (rawFile: { type: string; size: number }) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}


/** 图片预览 */
function handlePictureCardPreview(e){
  imgDialogVisible.value = true
  e.stopPropagation()
}


/** 确认添加 */
const sureLoding = ref(false)
async function addSureHandle(){
  let validated = await ruleFormRef.value?.validate() 
  !validated && ElMessage.error('表单校验不通过')
  if(validated){
    sureLoding.value = true
    setTimeout(()=>{
      sureLoding.value = false
      if(props?.openType == 'add') emit('closeVisible','addSure',formData.value)
      if(props?.openType == 'edit') emit('closeVisible','editSure',formData.value)
    },1000)
  }
}

onMounted(()=>{
  // console.log('ruleFormRef',ruleFormRef.value)
  // 为什么在此时和watch中拿不到form实例，因为挂载时没有内容，所以form此时不存在？必须打开弹框才组件才会挂载？
})

watch(visible,()=>{
  resetForm()
},{
  deep:true
})
watch(defaultData,()=>{
  resetForm()
},{ 
  deep:true
})


</script>

<style lang="less" scoped>
.demo-ruleForm{
  padding: 40px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
  border: 1px solid gainsboro;
  object-fit: cover;
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  border: 1px solid rgb(197,200,205);
  text-align: center;
}
.preview-icon{
  position: absolute;
  font-size: 30px;
  top:50%;
  transform: translateY(-50%);
  z-index: 3;
  color: #9db3d3;
}
.preview-img{
  width: 100%;
  height: 400px;
  object-fit: contain;
}
.errtext{
  color: red;
  font-size: 13px;
}
</style>
