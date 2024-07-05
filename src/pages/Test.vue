<template>
  <div>
    <button>截图</button>
    <img :src="srceenshot" alt="截图" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const srceenshot = ref(null)

onMounted(() => {
  window.api.receiveMsg('截图事件', (msg, data) => {
    srceenshot.value = msg
    console.log('Received message:', msg, data) // 确保你在这里打印的是消息参数
  })
})
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
