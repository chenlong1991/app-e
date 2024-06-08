import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  controlWindow: (action) => {
    console.log('Sending window control action:', action) // 添加日志
    ipcRenderer.send('window-control', action) // 修复错误
  },
})
