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
  </q-page>
</template>

<script setup></script>
