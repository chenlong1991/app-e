// ipcUtils.js
import { ipcMain, ipcRenderer } from 'electron'

// 发送消息到主进程
const sendToMain = (channel, ...args) => {
  ipcRenderer.send(channel, ...args)
}

// 发送消息到渲染进程
const sendToRenderer = (window, channel, ...args) => {
  window.webContents.send(channel, ...args)
}

// 监听主进程消息
const handleOnMain = (channel, listener) => {
  ipcMain.on(channel, listener)
}

// 监听渲染进程消息
const handleOnRenderer = (channel, listener) => {
  ipcRenderer.on(channel, listener)
}

module.exports = {
  sendToMain,
  sendToRenderer,
  handleOnMain,
  handleOnRenderer,
}
