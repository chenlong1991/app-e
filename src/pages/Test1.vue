<template>
  <q-page class="fit justify-center col q-pt-md">
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">划词翻译：</div>
      <div class="col-8">
        <div
          class="shortcut-display"
          @keydown.stop="showIcon(shortcut1, $event)"
          @keyup="hideIcon(shortcut1, $event)"
          tabindex="0"
        >
          <span v-for="(item, index) in shortcut1" :key="index">
            <q-icon size="24px" :name="`img:/icons/keys/${item}.png`" />
            <span v-if="index < shortcut1.length - 1" class="plus">+</span>
          </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const shortcut1 = ref({ shortcutKeys: [] })

function showIcon(shortcut, event) {
  // 清空当前快捷键
  shortcut.defaultShortcutKeys = ['q', 'w']
  console.log('shortcut：', shortcut)
  // 记录按下的键
  if (event.ctrlKey || event.metaKey) {
    console.log('CommandOrControl')
    shortcut1.value.push('CommandOrControl')
  }
  if (event.shiftKey) {
    console.log('Shift:', event.shiftKey)
    console.log('shortcut：', shortcut.value)
    shortcut.value.push('Shift')
  }
  if (event.altKey) {
    shortcut.value.push('Alt')
  }
  if (
    event.code &&
    ![
      'ControlLeft',
      'ControlRight',
      'ShiftLeft',
      'ShiftRight',
      'AltLeft',
      'AltRight',
      'MetaLeft',
      'MetaRight',
    ].includes(event.code)
  ) {
    shortcut.value.push(event.code)
  }
  console.log('按键列表', shortcut1)
}

function hideIcon(shortcut, event) {
  console.log('Shift:', event.shiftKey)
  console.log('shortcut：', shortcut)
}
</script>

<style scoped lang="scss"></style>
