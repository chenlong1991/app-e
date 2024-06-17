<template>
  <q-page class="fit justify-center col q-pt-md">
    <div
      class="q-mt-md full-width row no-wrap flex-center"
      style="height: 40px"
    >
      <div class="q-mr-xs col-2 text-right self-center">划词翻译：</div>
      <div class="col-8">
        <q-input
          outlined
          placeholder=""
          dense
          model-value=""
          style="width: 300px"
        >
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>
    <div
      class="q-mt-md full-width row no-wrap flex-center"
      style="height: 40px"
    >
      <div class="q-mr-xs col-2 text-right self-center">截图翻译：</div>
      <div class="col-8">
        <q-input
          outlined
          placeholder="Placeholder"
          dense
          model-value=""
          style="width: 300px"
        >
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>
    <div
      class="q-mt-md full-width row no-wrap flex-center"
      style="height: 40px"
    >
      <div class="q-mr-xs col-2 text-right self-center">输入翻译：</div>
      <div class="col-8">
        <q-input
          outlined
          placeholder="Placeholder"
          dense
          model-value=""
          style="width: 300px"
        >
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>
    <div
      class="q-mt-md full-width row no-wrap flex-center"
      style="height: 40px"
    >
      <div class="q-mr-xs col-2 text-right self-center">目标语言：</div>
      <div class="col-8">
        <q-select
          outlined
          v-model="model"
          :options="['自动检测', '中文', 'English', '日本語', '한국어']"
          dense
          :options-dense="denseOpts"
          class="custom"
        ></q-select>
      </div>
    </div>
    <div
      class="q-mt-md full-width row no-wrap flex-center"
      style="height: 40px"
    >
      <div class="q-mr-xs col-2 text-right self-center">翻译窗口位置：</div>
      <div class="col-8">
        <q-input
          outlined
          placeholder="Placeholder"
          dense
          model-value=""
          style="width: 300px"
        >
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>
    <div
      class="q-mt-md full-width row no-wrap flex-center"
      style="height: 40px"
    >
      <div class="q-mr-xs col-2 text-right self-center">翻译窗口宽度：</div>
      <div class="col-8">
        <q-input
          outlined
          placeholder="Placeholder"
          dense
          model-value=""
          style="width: 300px"
        >
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>
    <div
      class="q-mt-md full-width row no-wrap flex-center"
      style="height: 40px"
    >
      <div class="q-mr-xs col-2 text-right self-center">历史记录容量：</div>
      <div class="col-8">
        <q-input
          outlined
          placeholder="Placeholder"
          dense
          model-value=""
          style="width: 300px"
        >
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.custom {
  width: 300px;
}
</style>
