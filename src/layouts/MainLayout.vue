<template>
  <div class="fixed-top full-width"></div>
  <q-layout view="hHh LpR fFf">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
      bordered
      :mini="true"
      :mini-width="68.5"
      class="bg-grey-3 q-pt-lg"
    >
      <div>
        <!-- <MacClose></MacClose> -->
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar class="items-center">
              <q-icon name="g_translate" />
              <div>翻译</div>
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar class="items-center">
              <q-icon name="star" />
              <div>翻译哈哈</div>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar class="items-center">
              <q-icon name="send" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar class="items-center">
              <q-icon name="drafts" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container class="fit row no-wrap">
      <q-card square flat bordered class="my-card q-pt-md">
        <q-card-actions vertical>
          <q-list class="rounded-borders">
            <q-item
              clickable
              v-ripple
              :active="link === 'settings'"
              @click="link = 'settings'"
              active-class="my-menu-link"
              class="row no-wrap items-center"
            >
              <q-icon name="settings" class="q-py-xs q-pr-md q-pl-md text-h5" />
              <div class="q-py-xs">翻译设置</div>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'help'"
              @click="link = 'help'"
              active-class="my-menu-link"
              class="row no-wrap items-center"
            >
              <q-icon name="help" class="q-py-xs q-pr-md q-pl-md text-h5" />
              <div class="q-py-xs">翻译源</div>
            </q-item>
          </q-list>
        </q-card-actions>
      </q-card>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const link = ref('settings')
</script>
<style lang="scss" scoped>
.fixed-top {
  height: 23px;
  /* background: #7d7a72; */
  -webkit-app-region: drag;
}
.my-menu-link {
  /* color: white; */
  background: $grey-4;
}
.my-card {
  width: 180px;
}
</style>
