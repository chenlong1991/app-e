import { app, BrowserWindow } from 'electron' // 从 electron 模块中导入 app 和 BrowserWindow
import path from 'node:path' // 从 node:path 模块中导入 path
import os from 'node:os' // 从 node:os 模块中导入 os
import { fileURLToPath } from 'node:url' // 从 node:url 模块中导入 fileURLToPath

// 获取当前平台，优先使用 process.platform，如果不存在则使用 os.platform()
const platform = process.platform || os.platform()
// 获取当前目录路径
const currentDir = fileURLToPath(new URL('.', import.meta.url))

let mainWindow // 声明主窗口变量

// 创建主窗口的函数
function createWindow() {
  mainWindow = new BrowserWindow({
    // 设置窗口图标
    icon: path.resolve(currentDir, 'icons/icon.png'),
    // 设置窗口宽度
    width: 1000,
    // 设置窗口高度
    height: 600,
    // 使用内容大小
    useContentSize: true,
    // 设置 webPreferences
    webPreferences: {
      // 启用上下文隔离
      contextIsolation: true,
      // 设置预加载脚本路径
      preload: path.resolve(
        currentDir,
        path.join(
          process.env.QUASAR_ELECTRON_PRELOAD_FOLDER, // 预加载文件夹
          'electron-preload' + process.env.QUASAR_ELECTRON_PRELOAD_EXTENSION, // 预加载文件扩展名
        ),
      ),
    },
  })

  // 如果是开发环境，加载开发环境的 URL
  if (process.env.DEV) {
    mainWindow.loadURL(process.env.APP_URL)
  } else {
    // 否则加载本地的 index.html 文件
    mainWindow.loadFile('index.html')
  }

  // 如果是调试模式，打开开发者工具
  if (process.env.DEBUGGING) {
    mainWindow.webContents.openDevTools()
  } else {
    // 否则监听开发者工具打开事件，并在打开时关闭开发者工具
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  // 监听窗口关闭事件
  mainWindow.on('closed', () => {
    mainWindow = null // 将主窗口变量置为 null
  })
}

// 当应用准备好时，调用 createWindow 函数创建窗口
app.whenReady().then(createWindow)

// 监听所有窗口关闭事件
app.on('window-all-closed', () => {
  // 如果不是 macOS 平台，退出应用
  if (platform !== 'darwin') {
    app.quit()
  }
})

// 监听应用激活事件（通常在 macOS 上，当点击 Dock 图标时触发）
app.on('activate', () => {
  // 如果主窗口为 null，重新创建窗口
  if (mainWindow === null) {
    createWindow()
  }
})
