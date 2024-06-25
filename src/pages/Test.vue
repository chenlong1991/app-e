<script setup>
import { ref } from 'vue'

let shortcut1 = ref([1, 2, ''])
const shortcut2 = ref([])

const recordShortcut = (shortcut, event) => {
  // 清空当前快捷键
  // shortcut.value = []
  console.log('按键列表', shortcut1.value)
  console.log('shortcut：', shortcut.value)
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
</script>

<template>
  <q-page class="fit justify-center col q-pt-md">
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">划词翻译：</div>
      <div class="col-8">
        <q-field outlined dense>
          <template v-slot:control>
            <div
              class="shortcut-display"
              @keydown="recordShortcut(shortcut1, $event)"
              tabindex="0"
            >
              <span v-for="(item, index) in shortcut1" :key="index">
                <q-icon size="24px" :name="`img:/icons/keys/${item}.png`" />
                <span v-if="index < shortcut1.length - 1" class="plus">+</span>
              </span>
            </div>
          </template>
        </q-field>
      </div>
    </div>
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">划词翻译：</div>
      <div class="col-8">
        <q-field outlined dense>
          <template v-slot:control>
            <div
              class="shortcut-display"
              @keydown.prevent="recordShortcut($event, shortcut2)"
              tabindex="0"
            >
              <span v-for="(item, index) in shortcut2" :key="index">
                <q-icon size="24px" :name="`img:/icons/keys/${item}.png`" />
                <span v-if="index < shortcut2.length - 1" class="plus">+</span>
              </span>
            </div>
          </template>
        </q-field>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
.shortcut-display {
  height: 100%;
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: text;
}

.shortcut-display:focus {
  outline: none;
}

.plus {
  font-size: 18px;
  margin: 0 5px;
}
</style>
