<template>
  <div
    class="fit row no-wrap justify-center"
    @mouseover="bg = true"
    @mouseout="bg = false"
  >
    <div class="q-px-ss">
      <q-btn
        round
        color="deep-orange"
        size="4px"
        class="cursor-inherit"
        @click="close"
      >
        <q-icon v-show="bg" name="close" size="11px" color="grey-9" />
      </q-btn>
    </div>
    <div class="q-px-ss">
      <q-btn
        round
        color="amber"
        size="4px"
        class="cursor-inherit"
        @click="minimize"
      >
        <q-icon v-show="bg" name="remove" size="11px" color="grey-9" />
      </q-btn>
    </div>
    <div class="q-px-ss">
      <q-btn round color="grey-5" size="4px" class="cursor-inherit">
        <q-icon name="circle" size="11px" color="grey-5" />
      </q-btn>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const bg = ref(false)
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
<style lang="scss" scoped>
.q-px-ss {
  padding-left: 2.5px;
  padding-right: 2.5px;
  padding-top: 4px;
}
</style>
