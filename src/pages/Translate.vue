<template>
  <q-page class="fit no-wrap column items-center">
    <div class="fit row no-wrap justify-center col">
      <q-card flat class="list q-my-md q-ml-md">
        <q-card-actions vertical>
          <q-list class="rounded-borders">
            <q-item
              clickable
              v-ripple
              :active="link === 'baidu'"
              @click="link = 'baidu'"
              active-class="bg-grey-4 text-grey-10"
              class="full-width row justify-between items-center"
            >
              <q-avatar size="24px">
                <img src="/百度云.png" />
              </q-avatar>
              <div class="q-py-xs">百度翻译</div>
              <q-toggle v-model="translation.baidu.isEnable" />
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'ali'"
              @click="link = 'ali'"
              active-class="bg-grey-4 text-grey-10"
              class="full-width row justify-between items-center"
            >
              <q-avatar size="24px">
                <img src="/1.阿里云-蓝.png" />
              </q-avatar>
              <div class="q-py-xs">阿里云翻译</div>
              <q-toggle v-model="translation.ali.isEnable" />
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'cozecn'"
              @click="link = 'cozecn'"
              active-class="bg-grey-4 text-grey-10"
              class="full-width row justify-between items-center"
            >
              <q-avatar size="24px">
                <img src="/1扣子.png" />
              </q-avatar>
              <div class="q-py-xs">扣子国内版</div>
              <q-toggle v-model="translation.cozecn.isEnable" />
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'coze'"
              @click="link = 'coze'"
              active-class="bg-grey-4 text-grey-10"
              class="full-width row justify-between items-center"
            >
              <q-avatar size="24px">
                <img src="/1扣子.png" />
              </q-avatar>
              <div class="q-py-xs">扣子国外版</div>
              <q-toggle v-model="translation.coze.isEnable" />
            </q-item>
          </q-list>
        </q-card-actions>
      </q-card>

      <q-card flat class="col q-ma-md">
        <q-card-section
          ><q-tab-panels v-model="link" animated>
            <q-tab-panel name="baidu" class="fit column justify-center">
              <div class="row items-center q-my-md">
                <div class="col-3 text-right">APP ID：</div>
                <q-input
                  dense
                  v-model="translation.baidu.appid"
                  filled
                  :type="isPwd.baidu.appidIsPwd ? 'password' : 'text'"
                  style="width: 300px"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="
                        isPwd.baidu.appidIsPwd ? 'visibility_off' : 'visibility'
                      "
                      class="cursor-pointer"
                      @click="isPwd.baidu.appidIsPwd = !isPwd.baidu.appidIsPwd"
                    />
                  </template>
                </q-input>
              </div>
              <div class="row items-center">
                <div class="col-3 text-right">Secret Key：</div>
                <q-input
                  dense
                  v-model="translation.baidu.key"
                  filled
                  :type="isPwd.baidu.secretKeyIsPwd ? 'password' : 'text'"
                  style="width: 300px"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="
                        isPwd.baidu.secretKeyIsPwd
                          ? 'visibility_off'
                          : 'visibility'
                      "
                      class="cursor-pointer"
                      @click="
                        isPwd.baidu.secretKeyIsPwd = !isPwd.baidu.secretKeyIsPwd
                      "
                    />
                  </template>
                </q-input>
              </div>
              <div class="q-ma-md self-end">
                <q-btn
                  color="grey-4"
                  text-color="black"
                  label="验证"
                  size="xs"
                  padding="xs md"
                  @click="verifyConnectivity()"
                />
              </div>
            </q-tab-panel>

            <q-tab-panel name="ali" class="fit column justify-center">
              <div class="row items-center q-my-md">
                <div class="col-3 text-right">Key ID：</div>
                <q-input
                  dense
                  v-model="translation.ali.keyId"
                  filled
                  :type="isPwd.ali.keyIdIsPwd ? 'password' : 'text'"
                  style="width: 300px"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="
                        isPwd.ali.keyIdIsPwd ? 'visibility_off' : 'visibility'
                      "
                      class="cursor-pointer"
                      @click="isPwd.ali.keyIdIsPwd = !isPwd.ali.keyIdIsPwd"
                    />
                  </template>
                </q-input>
              </div>
              <div class="row items-center">
                <div class="col-3 text-right">Key Secret：</div>
                <q-input
                  dense
                  v-model="translation.ali.keySecret"
                  filled
                  :type="isPwd.ali.secretKeyIsPwd ? 'password' : 'text'"
                  style="width: 300px"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="
                        isPwd.ali.secretKeyIsPwd
                          ? 'visibility_off'
                          : 'visibility'
                      "
                      class="cursor-pointer"
                      @click="
                        isPwd.ali.secretKeyIsPwd = !isPwd.ali.secretKeyIsPwd
                      "
                    />
                  </template>
                </q-input>
              </div>
              <div class="q-ma-md self-end">
                <q-btn
                  color="grey-4"
                  text-color="black"
                  label="验证"
                  size="xs"
                  padding="xs md"
                />
              </div>
            </q-tab-panel>

            <q-tab-panel name="cozecn">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="coze">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels></q-card-section
        >
      </q-card>
    </div>
    <div class="self-end q-mr-md q-mb-md">
      <q-btn color="primary" label="保存" size="sm" @click="save()" />
    </div>
  </q-page>
</template>

<script setup>
import {
  nextTick,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  reactive,
  ref,
  toRaw,
} from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const link = ref('baidu')

// 密码显示控制
const isPwd = reactive({
  baidu: {
    appidIsPwd: true,
    secretKeyIsPwd: true,
  },
  ali: {
    keyIdIsPwd: true,
    secretKeyIsPwd: true,
  },
})

// 翻译源配置数据
const translation = ref({
  baidu: {
    appid: '',
    key: '',
    isEnable: true,
  },
  ali: {
    keyId: '',
    keySecret: '',
    isEnable: false,
  },
  cozecn: {
    isEnable: false,
  },
  coze: {
    isEnable: false,
  },
})

// 验证翻译配置连通性
function verifyConnectivity() {
  console.log('验证', translation.value.baidu.appid)
}

// 保存翻译配置
function save() {
  console.log('保存翻译源配置', toRaw(translation.value))
  window.electron.ipcRenderer
    .invoke('storeSet', 'translation', toRaw(translation.value))
    .catch((err) => {
      $q.notify({
        type: 'negative',
        message: '保存翻译配置失败:' + err.message,
        timeout: 2000,
      })
    })
}

onMounted(() => {
  // 获取翻译配置
  window.electron.ipcRenderer
    .invoke('storeGet', 'translation')
    .then((res) => {
      console.log('读取数据源配置', res)
      // 赋值给翻译配置数据
      Object.assign(translation.value, res)
    })
    .catch((err) => {
      $q.notify({
        type: 'negative',
        message: '获取翻译配置失败:' + err.message,
        timeout: 2000,
      })
    })
})
</script>

<style lang="scss" scoped>
.list {
  width: 210px;
}
</style>
