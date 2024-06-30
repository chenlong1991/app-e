// ipcUtils.js
import { ipcMain, ipcRenderer } from 'electron'

// 发送消息到主进程
export const sendToMain = (channel, ...args) => {
  window.electron.sendMessage(channel, ...args)
}

// 发送消息到渲染进程
export const sendToRenderer = (window, channel, ...args) => {
  window.webContents.send(channel, ...args)
}

// 接收主进程消息
export const receiveFromMain = (channel, callback) => {
  window.electron.receiveMessage(channel, callback)
}

// 接收渲染进程消息
export const receiveFromRenderer = (channel, listener) => {
  ipcMain.on(channel, listener)
}

// module.exports = {
//   sendToMain,
//   sendToRenderer,
//   receiveFromMain,
//   receiveFromRenderer,
// }

/*

controlWindow: (action) => {
  // 发送窗口控制动作
  console.log('Sending window control action:', action)
  ipcRenderer.send('window-control', action)
},
  ipcRenderer: {
  send: (channel, ...args) => ipcRenderer.send(channel, ...args),
    on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(event, ...args)),
    invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
},*/
