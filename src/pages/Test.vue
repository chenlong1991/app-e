<script setup>
import { ref, toRaw } from 'vue'

let shortcut1 = ref([])
const shortcut2 = ref([])
const ll = ref({
  Backquote: '`',
  Digit0: '0',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  KeyA: 'a',
  KeyB: 'b',
  KeyC: 'c',
  KeyD: 'd',
  KeyE: 'e',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyI: 'i',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  KeyM: 'm',
  KeyN: 'n',
  KeyO: 'o',
  KeyP: 'p',
  KeyQ: 'q',
  KeyR: 'r',
  KeyS: 's',
  KeyT: 't',
  KeyU: 'u',
  KeyV: 'v',
  KeyW: 'w',
  KeyX: 'x',
  KeyY: 'y',
  KeyZ: 'z',
  CapsLock: 'CapsLock',
  ShiftLeft: 'shift-mac',
  ShiftRight: 'shift-mac',
  ControlLeft: 'control',
  AltLeft: 'option',
  MetaLeft: 'command',
  MetaRight: 'command',
  AltRight: 'option',
})

const recordShortcut = (shortcut, event) => {
  // shortcut.code.push(event.code)
  // shortcut.key.push(event.key)
  shortcut.push(ll.value[event.code])
  console.log('按键列表', toRaw(shortcut))
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
              @keydown.prevent="recordShortcut(shortcut2, $event)"
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
