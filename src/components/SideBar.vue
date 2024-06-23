<template>
  <q-drawer
    show-if-above
    side="left"
    behavior="desktop"
    bordered
    :mini="true"
    :mini-width="68.5"
    class="bg-grey-4 q-pt-lg"
  >
    <div>
      <q-list padding>
        <q-item
          clickable
          v-ripple
          :active="link === 'translate'"
          @click="link = 'translate'"
          to="/settings/translation"
        >
          <q-item-section avatar class="items-center">
            <q-icon name="g_translate" />
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'screenshot'"
          @click="link = 'screenshot'"
          to="/settings/screenshot"
        >
          <q-item-section avatar class="items-center">
            <q-icon name="photo_camera" />
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'setting'"
          @click="link = 'setting'"
          to="/settings/setting"
        >
          <q-item-section avatar class="items-center">
            <q-icon name="settings" />
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'drafts'"
          @click="link = 'drafts'"
          to="/settings/test"
        >
          <q-item-section avatar class="items-center">
            <q-icon name="drafts" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-drawer>
</template>
<script setup>
import { ref } from 'vue'
const link = ref('translate')
</script>
<style lang="scss" scoped></style>
