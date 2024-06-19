import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  controlWindow: (action) => {
    // 发送窗口控制动作
    console.log('Sending window control action:', action)
    ipcRenderer.send('window-control', action)
  },
})

contextBridge.exposeInMainWorld('electronStore', {
  // 获取存储数据
  storeGet: (key) => ipcRenderer.invoke('storeGet', key),
  // 设置存储数据
  storeSet: (key, value) => ipcRenderer.invoke('storeSet', key, value),
  // 删除存储数据
  storeDelete: (key) => ipcRenderer.invoke('storeDelete', key),
  // 检查存储数据是否存在
  storeHas: (key) => ipcRenderer.invoke('storeHas', key),
  // 清除所有存储数据
  storeClear: () => ipcRenderer.invoke('storeClear'),
})
