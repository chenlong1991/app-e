<template>
  <q-card square flat bordered class="my-card q-pt-md">
    <q-card-actions vertical>
      <q-list class="rounded-borders">
        <q-item
          clickable
          v-ripple
          :active="link === 'settings'"
          @click="link = 'settings'"
          active-class="bg-grey-4 text-grey-10"
          class="row no-wrap items-center"
          to="/settings/translation/setting"
        >
          <q-icon name="settings" class="q-py-xs q-pr-md q-pl-md text-h5" />
          <div class="q-py-xs">翻译设置</div>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'help'"
          @click="link = 'help'"
          active-class="bg-grey-4 text-grey-10"
          class="row no-wrap items-center"
          to="/settings/translation/source"
        >
          <q-icon name="help" class="q-py-xs q-pr-md q-pl-md text-h5" />
          <div class="q-py-xs">翻译源</div>
        </q-item>
      </q-list>
    </q-card-actions>
  </q-card>
  <router-view></router-view>
</template>
<script setup>
import { ref, reactive } from 'vue'
const link = ref('settings')
</script>
<style lang="scss" scoped>
.my-card {
  width: 190px;
}
</style>
