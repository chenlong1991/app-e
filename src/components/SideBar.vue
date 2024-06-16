<template>
  <q-drawer
    show-if-above
    side="left"
    behavior="desktop"
    bordered
    :mini="true"
    :mini-width="68.5"
    class="bg-grey-3 q-pt-lg"
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
          :active="link === 'camera'"
          @click="link = 'camera'"
          to="/settings/screenshot"
        >
          <q-item-section avatar class="items-center">
            <q-icon name="photo_camera" />
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'send'"
          @click="link = 'send'"
        >
          <q-item-section avatar class="items-center">
            <q-icon name="send" />
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'drafts'"
          @click="link = 'drafts'"
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
