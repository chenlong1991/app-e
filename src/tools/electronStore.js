import { Notify } from 'quasar'

export const electronStoreVue = {
  storeGet(key) {
    return window.electronStore
      .storeGet(key)
      .then((value) => {
        return value
      })
      .catch((error) => {
        Notify.create({
          message: '获取数据失败，error:' + error,
          color: 'negative',
        })
        return ''
      })
  },

  storeSet(key, value) {
    return window.electronStore.storeSet(key, value).catch((error) => {
      Notify.create({
        message: '保存数据失败，error:' + error,
        color: 'negative',
      })
    })
  },

  storeDelete(key) {
    return window.electronStore.storeDelete(key)
  },

  storeHas(key) {
    return window.electronStore.storeHas(key)
  },

  storeClear() {
    return window.electronStore.storeClear()
  },
}
