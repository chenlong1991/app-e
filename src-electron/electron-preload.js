import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  // controlWindow: (action) => {
  //   // 发送窗口控制动作
  //   console.log('Sending window control action:', action)
  //   ipcRenderer.send('window-control', action)
  // },
  // ipcRenderer: {
  //   send: (channel, ...args) => ipcRenderer.send(channel, ...args),
  //   on: (channel, func) =>
  //     ipcRenderer.on(channel, (event, ...args) => func(event, ...args)),
  //   invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
  // },
  sendMessage: (channel, ...arg) => {
    ipcRenderer.send(channel, ...arg)
  },
  receiveMessage: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => callback(...args))
  },
})
