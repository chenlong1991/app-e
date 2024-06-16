<template>
  <q-bar class="win">
    <div>设置</div>

    <q-space />
    <q-btn dense flat icon="remove" @click="minimize" class="btn" />
    <q-btn dense flat icon="crop_square" @click="maximize" class="btn" />
    <q-btn dense flat icon="close" @click="close" class="btn" />
  </q-bar>
</template>

<script setup>
const minimize = () => {
  window.electron.controlWindow('minimize')
}

const maximize = () => {
  window.electron.controlWindow('maximize')
}

const close = () => {
  window.electron.controlWindow('close')
}
</script>

<style scoped>
.win {
  -webkit-app-region: drag;
}
.btn {
  -webkit-app-region: no-drag;
}
</style>
