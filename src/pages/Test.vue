<script setup>
import { ref } from 'vue'

const shortcut1 = ref([])
const shortcut2 = ref([])

const recordShortcut = (event, shortcut) => {
  // 清空当前快捷键
  shortcut.value = []

  // 记录按下的键
  if (event.ctrlKey || event.metaKey) {
    console.log('CommandOrControl')
    shortcut.value.push('CommandOrControl')
  }
  if (event.shiftKey) {
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
  console.log('按键列表', shortcut.value)
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
              @keydown.prevent="recordShortcut($event, shortcut1)"
              tabindex="0"
            >
              <span v-for="(key, index) in shortcut1" :key="index">
                <q-icon size="24px" :name="`img:/icons/keys/${key}.png`" />
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
              <span v-for="(key, index) in shortcut2" :key="index">
                <q-icon size="24px" :name="`img:/icons/keys/${key}.png`" />
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
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 300px;
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
