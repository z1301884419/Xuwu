<template>
  <div class="watermark" ref="markRef">
    <slot></slot>
  </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref, toRef } from 'vue';
/** 
 * useMask: 是否使用蒙层；不使用蒙层则设置组件容器的背景，会被设置了background的子元素覆盖
 */
const { text, fontSize, useMask } = defineProps({
  text: {
    type: String,
    required: true,
  },
  fontSize: {
    type: [Number, String],
    required: true,
  },
  useMask: {
    type: Boolean,
    default: false,
  }
})

const markRef = ref();
let markDiv;

/** 设备像素比 */
const devicePixelRatio = window.devicePixelRatio || 1

/** 水印属性（url地址及大小size） */
const WatermarkProps = computed(() => {
  text; fontSize;
  return drawWatermark(text, fontSize)
})

/** 观察markRef结点 */
const ob = new MutationObserver((entries) => {
  for (const entry of entries) {
    if (useMask) {
      for (const dom of entry.removedNodes) {
        if (dom === markDiv) {
          // console.log('删除');
          addWatermark();
          return
        }
      }
      if (entry.target === markDiv) {
        // console.log("修改");
        addWatermark();
        return
      }
    } else {
      if (entry.target === markRef.value) {
        console.log("修改");
        addWatermark();
        return
      }
    }
  }
})

onMounted(() => {
  addWatermark();
  ob.observe(markRef.value, {
    childList: true,
    subtree: true,
    attributes: true,
  })
})
onUnmounted(() => {
  ob.disconnect()
})

/** 画水印 */
function drawWatermark(text, fontSize) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = devicePixelRatio * fontSize + 'px serif';
  const { width } = ctx.measureText(text);
  const canvasSize = Math.max(100, width + 40)
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  ctx.globalAlpha = 0.4;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((Math.PI / 180) * -25);
  ctx.font = devicePixelRatio * fontSize + 'px serif';
  ctx.fillText(text, 0, 0);
  return {
    base64: canvas.toDataURL(),
    size: canvasSize / devicePixelRatio,
  }
}

/** 添加水印到容器 */
function addWatermark() {
  const { base64, size } = WatermarkProps.value;
  if (!useMask) {
    markRef.value.style.backgroundImage = `url(${base64})`;
    markRef.value.style.backgroundRepeat = 'repeat';
    markRef.value.style.backgroundSize = `${size}px ${size}px`;
  } else {
    if (markDiv) {
      markDiv.remove()
    }
    markDiv = document.createElement('div');
    markDiv.style.position = 'absolute';
    markDiv.style.backgroundImage = `url(${base64})`;
    markDiv.style.backgroundRepeat = 'repeat';
    markDiv.style.backgroundSize = `${size}px ${size}px`;
    markDiv.style.zIndex = '999';
    markDiv.style.inset = '0';
    markRef.value.appendChild(markDiv)
  }
}
</script>
<style lang="less">
.watermark {
  position: relative;
  // 组件高度问题，设置100%则
}
</style>