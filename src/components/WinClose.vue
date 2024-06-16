<template>
  <q-bar>
    <q-btn dense flat icon="minimize" @click="minimize" />
    <q-btn dense flat icon="crop_square" @click="maximize" />
    <q-btn dense flat icon="close" @click="close" />
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

<style scoped></style>
