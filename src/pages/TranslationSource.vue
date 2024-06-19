<template>
  <q-page class="fit column">
    <q-banner class="bg-grey-4">
      <div class="text-h6 text-grey-10 text-weight-bold">翻译源</div>
      <div class="text-grey-9">
        翻译功能的核心服务支持配置，下方开启的翻译源将被使用。
      </div>
    </q-banner>
    <div class="fit row col">
      <TranslationSourceList></TranslationSourceList>
      <RouterView></RouterView>
    </div>
  </q-page>
</template>

<script setup>
import TranslationSourceList from 'components/TranslationSourceList.vue'
</script>
