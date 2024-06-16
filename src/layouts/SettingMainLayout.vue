<template>
  <div class="fixed-top full-width"></div>
  <q-layout view="hHh LpR fFf">
    <SideBar></SideBar>
    <q-page-container class="fit row no-wrap">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import SideBar from 'components/SideBar.vue'
</script>
<style lang="scss" scoped>
.fixed-top {
  height: 23px;
  -webkit-app-region: drag;
}
</style>
