import { app, BrowserWindow, ipcMain, Menu, nativeImage, Tray } from 'electron' // 从 electron 模块中导入 app 和 BrowserWindow
import path from 'node:path' // 从 node:path 模块中导入 path
import os from 'node:os' // 从 node:os 模块中导入 os
import { fileURLToPath } from 'node:url' // 从 node:url 模块中导入 fileURLToPath
import Store from 'electron-store' // 从 electron-store 模块中导入 Store

// 获取当前平台，优先使用 process.platform，如果不存在则使用 os.platform()
const platform = process.platform || os.platform()
console.log('当前平台:', platform)

// 导入环境变量
// 获取当前文件的目录名
const currentDir = fileURLToPath(new URL('.', import.meta.url))
const store = new Store({
  encryptionKey: 'CEHNLONG19911216.',
  defaults: {
    // 翻译源默认值
    translation: {
      baidu: {
        appid: '19911216',
        key: 'chenlong',
        isEnable: true,
      },
      ali: {
        keyId: '',
        keySecret: '',
        isEnable: false,
      },
      cozecn: {
        isEnable: false,
      },
      coze: {
        isEnable: false,
      },
    },
    // 设置默认值
    settings: {
      wordTranslation: '1',
      screenshotTranslation: '1',
      enterTranslation: '1',
      targetLanguage: '自动检测',
      translationWindowPosition: '居中',
      translationWindowWidth: '200px',
      historyCapacity: '不记录',
    },
  },
})

let mainWindow // 声明主窗口变量
let tray // 声明托盘变量

// 创建主窗口的函数
function createWindow() {
  mainWindow = new BrowserWindow({
    // 设置窗口图标
    icon: path.resolve(currentDir, 'icons/icon.png'),
    // 设置窗口宽度
    width: 800,
    // 设置窗口高度
    height: 600,
    // 使用内容大小
    frame: platform !== 'win32',
    useContentSize: true,
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 7, y: 5 },
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

  // electron-store 方法
  ipcMain.on('保存配置', (event, key, value) => {
    store.set(key, value)
  })

  mainWindow.webContents.on('did-navigate-in-page', () => {
    console.log('ye mian jia zai wan cheng')
    mainWindow.webContents.send(
      '加载配置',
      store.get('translation'),
      store.get('settings'),
    )
  })
  // 监听窗口关闭事件
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// 创建托盘图标的函数
function createTray() {
  const iconPath = path.resolve(
    currentDir,
    '../../src-electron/icons/16@2x.png',
  )
  const trayIcon = nativeImage.createFromPath(iconPath)
  // trayIcon.resize({ width: 12, height: 12 })
  tray = new Tray(trayIcon)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '设置', // 显示应用
      click: () => {
        if (mainWindow) {
          mainWindow.show() // 显示窗口
        } else {
          createWindow()
        }
      },
    },
    {
      label: '退出应用', // 退出应用
      click: () => {
        app.isQuiting = true // 设置应用退出标志
        app.quit() // 退出应用
      },
    },
  ])

  tray.setToolTip('My Electron App') // 设置托盘图标提示
  tray.setContextMenu(contextMenu) // 设置托盘图标右键菜单

  // 监听托盘图标点击事件
  tray.on('click', () => {
    if (mainWindow) {
      mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show() // 切换窗口显示/隐藏状态
    } else {
      createWindow()
    }
  })
}

// 当应用准备好时，调用 createWindow 函数创建窗口
app.whenReady().then(() => {
  createWindow()
  createTray()
})

// 监听所有窗口关闭事件
app.on('window-all-closed', () => {
  mainWindow = null // 隐藏窗口
})

// 监听应用激活事件（通常在 macOS 上，当点击 Dock 图标时触发）
app.on('activate', () => {
  // 如果主窗口为 null，重新创建窗口
  if (mainWindow === null) {
    createWindow()
  } else {
    mainWindow.show() // 显示窗口
  }
})

// 监听渲染进程的消息
ipcMain.on('窗口控制', (event, action) => {
  switch (action) {
    case 'minimize':
      mainWindow.minimize()
      break
    case 'maximize':
      mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
      break
    case 'close':
      mainWindow.close()
      break
    default:
      break
  }
})
