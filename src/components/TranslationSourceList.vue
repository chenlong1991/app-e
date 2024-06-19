<template>
  <q-card bordered class="my-card q-ma-lg rounded-borders">
    <q-card-actions vertical>
      <q-list class="rounded-borders">
        <q-item
          clickable
          v-ripple
          :active="link === 'settings'"
          @click="link = 'settings'"
          active-class="bg-grey-4 text-grey-10"
          class="full-width row justify-between"
          to="/settings/translation/setting"
        >
          <q-icon name="settings" class="q-py-xs text-h5" />
          <div class="q-py-xs">百度翻译</div>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'help'"
          @click="link = 'help'"
          active-class="bg-grey-4 text-grey-10"
          class="full-width row justify-between"
          to="/settings/translation/source"
        >
          <q-icon name="help" class="q-py-xs text-h5" />
          <div class="q-py-xs">阿里云翻译</div>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'help'"
          @click="link = 'help'"
          active-class="bg-grey-4 text-grey-10"
          class="full-width row justify-between"
          to="/settings/translation/source"
        >
          <q-icon name="help" class="q-py-xs text-h5" />
          <div class="q-py-xs">扣子国内版</div>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="link === 'help'"
          @click="link = 'help'"
          active-class="bg-grey-4 text-grey-10"
          class="full-width row justify-between"
          to="/settings/translation/source"
        >
          <q-icon name="help" class="q-py-xs text-h5" />
          <div class="q-py-xs">扣子国外版</div>
        </q-item>
      </q-list>
    </q-card-actions>
  </q-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.my-card {
  width: 200px;
}
</style>
