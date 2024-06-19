/* eslint-env node */

import { configure } from 'quasar/wrappers'
import { fileURLToPath } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'
import { IconSet } from 'quasar'
import { isContext } from 'node:vm'

export default configure((ctx) => {
  return {
    // 应用启动时加载的文件
    boot: ['i18n', 'axios'],
    // 全局 CSS 文件
    css: ['app.scss'],
    // 额外的字体和图标
    extras: ['roboto-font', 'material-icons'],
    build: {
      // 构建目标
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'], // 浏览器目标
        node: 'node20', // Node.js 目标
      },
      // 路由模式，可选值：'hash' 或 'history'
      vueRouterMode: 'hash',
      // Vite 插件配置
      vitePlugins: [
        // 自动按需引入 Quasar 组件
        Components({ resolvers: [QuasarResolver()] }),
        // 国际化插件配置
        [
          '@intlify/unplugin-vue-i18n/vite',
          {
            ssr: ctx.modeName === 'ssr', // 是否启用 SSR
            include: [fileURLToPath(new URL('./src/i18n', import.meta.url))], // 包含的国际化资源路径
          },
        ],
        // 代码检查插件配置
        [
          'vite-plugin-checker',
          { eslint: { lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"' } }, // ESLint 配置
          { server: false }, // 服务器配置
        ],
      ],
    },
    // 开发服务器配置
    devServer: { open: true }, // 自动打开浏览器窗口
    // Quasar 框架配置
    framework: {
      config: {
        notify: {
          position: 'top', // 通知位置，可选值：'top'、'bottom'、'left'、'right'
        },
      }, // 全局配置
      plugins: ['Notify'],
      // Quasar 插件
    },
    // 动画配置
    animations: [],
    // 服务器端渲染 (SSR) 配置
    ssr: {
      prodPort: 3000, // 生产服务器端口
      middlewares: ['render'], // 中间件配置，'render' 应该放在最后
      pwa: false, // 是否启用 PWA
    },
    // 渐进式 Web 应用 (PWA) 配置
    pwa: { workboxMode: 'GenerateSW' }, // Workbox 模式，可选值：'GenerateSW' 或 'InjectManifest'
    // Cordova 配置
    cordova: {},
    // Capacitor 配置
    capacitor: { hideSplashscreen: true }, // 隐藏启动屏幕
    // Electron 配置
    electron: {
      preloadScripts: ['electron-preload'], // Electron 预加载脚本
      inspectPort: 5858, // 调试端口
      bundler: 'packager', // 打包工具，可选值：'packager' 或 'builder'
      packager: {}, // Electron Packager 配置
      builder: {
        appId: 'app-e', // 应用 ID
        extraResources: [
          {
            from: 'src-electron/icons/',
            to: 'icons/',
            filter: ['**/*'],
          },
        ],
      },
    },
    // 浏览器扩展 (BEX) 配置
    bex: { contentScripts: ['my-content-script'] }, // 内容脚本
  }
})
