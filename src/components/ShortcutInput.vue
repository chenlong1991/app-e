<template>
  <div
    class="shortcut-display row"
    tabindex="0"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
  >
    <div class="col-10">
      <span v-for="(item, index) in sortedKeyList" :key="index">
        <q-icon
          :size="`${keyOrder.includes(item) ? '28px' : '22px'}`"
          :name="`img:/icons/keys/${item}.png`"
        />
        <span v-if="index < sortedKeyList.length - 1" class="plus"
          >&nbsp;+&nbsp;</span
        >
      </span>
    </div>
    <div class="row justify-end col-2">
      <q-btn
        padding="2px 2px"
        size="10px"
        flat
        icon="replay"
        @click="keyList = props.defaultKeyList"
      >
        <q-tooltip anchor="center right" self="center left" :offset="[15, 10]">
          重置
        </q-tooltip>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const keyList = defineModel()
const oldKeyList = keyList.value
const props = defineProps({
  defaultKeyList: {
    type: Array,
    default: () => ['alt', '1'],
  },
})
const pressedKeys = ref([])

const keyMapping = $q.platform.is.win
  ? {
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
      ShiftLeft: 'shift',
      ShiftRight: 'shift',
      ControlLeft: 'ctrl',
      AltLeft: 'alt',
      AltRight: 'alt',
    }
  : {
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
      ShiftLeft: 'shift-mac',
      ShiftRight: 'shift-mac',
      ControlLeft: 'control',
      AltLeft: 'option',
      MetaLeft: 'command',
      MetaRight: 'command',
      AltRight: 'option',
    }
// 定义按键顺序
const keyOrder = $q.platform.is.win
  ? ['ctrl', 'shift', 'alt', 'win']
  : ['control', 'shift-mac', 'option', 'command']
const sortedKeyList = computed(() => {
  // 按照 keyOrder 对 keyList 进行排序
  return [...keyList.value].sort((a, b) => {
    if (keyOrder.indexOf(a) === -1) return 1 // 如果 a 不在 keyOrder 中，排在后面
    if (keyOrder.indexOf(b) === -1) return -1 // 如果 b 不在 keyOrder 中，排在前面
    return keyOrder.indexOf(a) - keyOrder.indexOf(b) // 否则按照 keyOrder 中的顺序排序
  })
})
// 新增状态，用于判断组合键是否已经生效
const isShortcutActivated = ref(false)
const isValidShortcut = (keys) => {
  // 至少包含一个修饰键
  const hasModifier = keys.some(
    (key) =>
      key === 'ctrl' ||
      key === 'alt' ||
      key === 'shift' ||
      key === 'win' ||
      key === 'control' ||
      key === 'shift-mac' ||
      key === 'option' ||
      key === 'command',
  )
  // 只能有一个数字或字母键
  const hasOneLetterOrDigit =
    keys.filter((key) => /^[a-zA-Z0-9]$/.test(key)).length === 1
  // 必须同时满足以上两个条件
  return hasModifier && hasOneLetterOrDigit
}

const onKeyDown = (event) => {
  const key = keyMapping[event.code]
  if (key && !pressedKeys.value.includes(key)) {
    pressedKeys.value.push(key)
    keyList.value = [...pressedKeys.value]
  }

  // 在按下按键时，如果组合键已经生效，则不再进行判断
  if (isShortcutActivated.value) return

  if (isValidShortcut(pressedKeys.value)) {
    isShortcutActivated.value = true // 组合键生效
  }
}

const onKeyUp = (event) => {
  // 在松开按键时，重置组合键生效状态
  isShortcutActivated.value = false
  pressedKeys.value = []

  // 如果组合键不合法，则清空 keyList
  if (!isValidShortcut(keyList.value)) {
    keyList.value = oldKeyList
    console.log('keyList: ', keyList.value)
  }
}
</script>

<style lang="scss" scoped>
.shortcut-display {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.shortcut-display:focus {
  outline: none; /* 移除边框 */
}
</style>
