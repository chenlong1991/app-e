<template>
  <q-layout view="hHh LpR fFf">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
      bordered
      :mini="true"
      :mini-width="68.5"
      class="bg-grey-3"
    >
      <div>
        <MacClose></MacClose>
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
}
</script>
<style scoped></style>
