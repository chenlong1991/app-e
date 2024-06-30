<template>
  <q-page class="fit justify-center col q-pt-md">
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">划词翻译：</div>
      <div class="col-8">
        <q-field outlined dense class="custom">
          <template v-slot:control>
            <ShortcutInput
              v-model="translateShortcut"
              :default-key-list="['ctrl', 'shift', '1']"
            />
          </template>
        </q-field>
      </div>
    </div>
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">截图翻译：</div>
      <div class="col-8">
        <q-field outlined dense class="custom">
          <template v-slot:control>
            <ShortcutInput
              v-model="screenshotTranslation"
              :default-key-list="['ctrl', 'shift', '2']"
            />
          </template>
        </q-field>
      </div>
    </div>
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">输入翻译：</div>
      <div class="col-8">
        <q-field outlined dense class="custom">
          <template v-slot:control>
            <ShortcutInput
              v-model="enterTranslation"
              :default-key-list="['ctrl', 'shift', '3']"
            />
          </template>
        </q-field>
      </div>
    </div>
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">目标语言：</div>
      <div class="col-8">
        <q-select
          outlined
          v-model="settings.targetLanguage"
          :options="opt.targetLanguageOpt"
          dense
          options-dense
          class="custom"
        ></q-select>
      </div>
    </div>
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">翻译窗口位置：</div>
      <div class="col-8">
        <q-select
          outlined
          v-model="settings.translationWindowPosition"
          :options="opt.translationWindowPositionOpt"
          dense
          options-dense
          class="custom"
        ></q-select>
      </div>
    </div>
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">翻译窗口宽度：</div>
      <div class="col-8">
        <q-select
          outlined
          v-model="settings.translationWindowWidth"
          :options="opt.translationWindowWidthOpt"
          dense
          options-dense
          class="custom"
        ></q-select>
      </div>
    </div>
    <div class="q-mt-md full-width row no-wrap flex-center">
      <div class="q-mr-xs col-3 text-right self-center">历史记录容量：</div>
      <div class="col-8">
        <q-select
          outlined
          v-model="settings.historyCapacity"
          :options="opt.historyCapacityOpt"
          dense
          options-dense
          class="custom"
        ></q-select>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref, toRaw, watch } from 'vue'
import { useQuasar } from 'quasar'
import ShortcutInput from '../components/ShortcutInput.vue'

const $q = useQuasar()
const translateShortcut = ref(['ctrl', 'shift', 't'])
const screenshotTranslation = ref(['ctrl', 'shift', 's'])
const enterTranslation = ref(['ctrl', 'shift', 'e'])

// 下拉选项
const opt = ref({
  targetLanguageOpt: ['自动检测', '中文', 'English', '日本語', '한국어'],
  translationWindowPositionOpt: ['居中', '鼠标位置'],
  translationWindowWidthOpt: ['200px', '250px', '300px', '350px', '400px'],
  historyCapacityOpt: ['不记录', '50', '100', '200', '500'],
})

// 设置配置数据
const settings = ref({
  wordTranslation: '1',
  screenshotTranslation: '1',
  enterTranslation: '1',
  targetLanguage: opt.value.targetLanguageOpt[0],
  translationWindowPosition: opt.value.translationWindowPositionOpt[0],
  translationWindowWidth: opt.value.translationWindowWidthOpt[0],
  historyCapacity: opt.value.historyCapacityOpt[0],
})

// 保存设置配置
function save() {
  console.log('保存配置', settings.value)
  window.api.sendMsg('保存配置', 'settings', toRaw(settings.value))
}

// 监听设置配置变化并保存
watch(settings.value, (newValue, oldValue) => {
  console.log('设置配置变化:', toRaw(newValue), toRaw(oldValue))
  save()
})

onMounted(() => {
  // 获取翻译配置
  window.api.receiveMsg('加载配置', (dataT, dataS) => {
    console.log('读取配置: ', dataT, dataS)
    Object.assign(settings.value, dataS)
  })
})
</script>

<style scoped>
.custom {
  width: 260px;
}
</style>
