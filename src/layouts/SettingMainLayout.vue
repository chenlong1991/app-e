<template>
  <div v-if="$q.platform.is.mac" class="mac fixed-top full-width"></div>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <WinClose v-if="$q.platform.is.win"></WinClose>
    </q-header>
    <SideBar></SideBar>
    <q-page-container class="fit row no-wrap">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import SideBar from 'components/SideBar.vue'
import WinClose from 'components/WinClose.vue'
</script>
<style lang="scss" scoped>
.mac {
  height: 23px;
  -webkit-app-region: drag;
}
</style>
