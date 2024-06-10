<template>
  <q-drawer
    show-if-above
    v-model="leftDrawerOpen"
    side="left"
    behavior="desktop"
    bordered
    :mini="true"
    :mini-width="68.5"
    class="bg-grey-3 q-pt-lg"
  >
    <div>
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar class="items-center">
            <q-icon name="g_translate" />
          </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar class="items-center">
            <q-icon name="photo_camera" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar class="items-center">
            <q-icon name="send" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar class="items-center">
            <q-icon name="drafts" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-drawer>
</template>
<script>
export default {
  name: 'SideBars1',
  data() {
    return {
      leftDrawerOpen: false,
    }
  },
}
</script>
<style lang="scss" scoped></style>
