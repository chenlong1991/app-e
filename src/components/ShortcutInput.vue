<template>
  <div
    class="shortcut-display"
    tabindex="0"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
  >
    <span v-for="(item, index) in sortedKeyList" :key="index">
      <q-icon size="24px" :name="`img:/icons/keys/${item}.png`" />
    </span>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

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
      MetaLeft: 'win',
      MetaRight: 'win',
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
  : ['control', 'option', 'shift-mac', 'command']

const sortedKeyList = computed(() => {
  return [...props.modelValue].sort((a, b) => {
    if (keyOrder.indexOf(a) === -1) return 1
    if (keyOrder.indexOf(b) === -1) return -1
    return keyOrder.indexOf(a) - keyOrder.indexOf(b)
  })
})

// 新增状态，用于判断组合键是否已经生效
const isShortcutActivated = ref(false)

const isValidShortcut = (keys) => {
  // 至少包含一个修饰键
  const hasModifier = keys.some(
    (key) =>
      key === 'ctrl' || key === 'alt' || key === 'shift' || key === 'win',
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
    // 使用 emit 更新 props.modelValue
    emit('update:modelValue', [...pressedKeys.value])
  }
}

const onKeyUp = (event) => {
  // 在松开按键时，重置组合键生效状态
  isShortcutActivated.value = false
  pressedKeys.value = []

  // 如果组合键不合法，则清空 modelValue
  if (!isValidShortcut(props.modelValue)) {
    emit('update:modelValue', [])
  }
}
</script>

<style scoped>
.shortcut-display {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.shortcut-display > span:not(:last-child)::before {
  content: '+';
  margin-right: 4px;
}
</style>
