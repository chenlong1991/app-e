import { contextBridge, ipcRenderer, desktopCapturer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  sendMsg: (channel, ...arg) => {
    ipcRenderer.send(channel, ...arg)
  },
  receiveMsg: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => callback(...args))
  },
  onceMsg: (channel, callback) => {
    ipcRenderer.once(channel, (event, ...args) => callback(...args))
  },
  invoke: (channel, ...arg) => {
    return ipcRenderer.invoke(channel, ...arg)
  },
  screenshot: () => desktopCapturer,
})
