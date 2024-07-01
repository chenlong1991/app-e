// 在 Vue 组件中
<template>
  <div
    ref="captureArea"
    @mousedown="startSelection"
    @mousemove="updateSelection"
    @mouseup="endSelection"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const captureArea = ref(null)
let startX, startY, endX, endY
let selectionArea = null

onMounted(() => {
  document.addEventListener('mouseup', endSelection) // 在 document 上监听，防止鼠标移出区域
})

onUnmounted(() => {
  document.removeEventListener('mouseup', endSelection)
})

const startSelection = (event) => {
  startX = event.clientX
  startY = event.clientY
  selectionArea = document.createElement('div')
  selectionArea.style.position = 'absolute'
  selectionArea.style.border = '1px dashed #000'
  selectionArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
  selectionArea.style.top = startY + 'px'
  selectionArea.style.left = startX + 'px'
  document.body.appendChild(selectionArea)
}

const updateSelection = (event) => {
  if (selectionArea) {
    endX = event.clientX
    endY = event.clientY
    selectionArea.style.width = Math.abs(endX - startX) + 'px'
    selectionArea.style.height = Math.abs(endY - startY) + 'px'
  }
}

const endSelection = () => {
  if (selectionArea) {
    document.body.removeChild(selectionArea)
    // 计算截图区域的坐标和大小
    const captureBounds = {
      x: Math.min(startX, endX),
      y: Math.min(startY, endY),
      width: Math.abs(endX - startX),
      height: Math.abs(endY - startY),
    }
    // 使用 captureBounds 进行截图
    captureScreenshot(captureBounds)
    selectionArea = null
  }
}

const captureScreenshot = (bounds) => {
  // 使用 desktopCapturer 或其他截图工具进行截图
  // ...
}
</script>
