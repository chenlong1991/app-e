<template>
  <div>
    <button @click="takeScreenshot">截图</button>
    <img
      v-if="screenshot"
      :src="screenshot"
      alt="Screenshot"
      @click="card = true"
    />
    <q-dialog maximized v-model="card">
      <q-img fit="fill" src="screenshot" />
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const screenshot = ref(null)
const card = ref(false)

const takeScreenshot = async () => {
  // 调用electron的api，获取截图数据
  screenshot.value = await window.api.invoke('截图事件')
  console.log(screenshot.value)
}
</script>

<style scoped>
button {
  margin: 20px;
}

img {
  margin-top: 20px;
  max-width: 100%;
  border: 1px solid #ccc;
}
</style>
