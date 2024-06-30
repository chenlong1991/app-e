import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  sendMsg: (channel, ...arg) => {
    ipcRenderer.send(channel, ...arg)
  },
  receiveMsg: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => callback(...args))
  },
})
