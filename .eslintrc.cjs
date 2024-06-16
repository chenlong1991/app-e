module.exports = {
  // 指定这是根配置文件，ESLint 将不再向上查找配置文件
  root: true,

  // 解析器选项
  parserOptions: {
    // 指定 ECMAScript 版本为 2021
    ecmaVersion: 2021,
  },

  // 环境定义
  env: {
    // Node.js 全局变量和 Node.js 作用域
    node: true,
    // 浏览器全局变量
    browser: true,
  },

  // 扩展的配置
  extends: [
    // 使用 Vue 3 的基本配置
    'plugin:vue/vue3-essential',
    // 使用 Prettier 来格式化代码
    'prettier',
    // 推荐的 Prettier 配置
    'plugin:prettier/recommended',
  ],

  // 插件配置
  plugins: [
    // 使用 Vue 插件
    'vue',
    // 使用 Prettier 插件
    'prettier',
  ],

  // 全局变量定义
  globals: {
    // 只读的 Google Analytics 变量
    ga: 'readonly',
    // 只读的 Cordova 变量
    cordova: 'readonly',
    // 只读的静态资源变量
    __statics: 'readonly',
    // 只读的 Quasar SSR 变量
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    // 只读的进程变量
    process: 'readonly',
    // 只读的 Capacitor 变量
    Capacitor: 'readonly',
    // 只读的 Chrome 变量
    chrome: 'readonly',
  },

  // 自定义规则
  rules: {
    // 一行最多160个字符
    'max-len': ['error', { code: 160 }],
    // 关闭 prefer-promise-reject-errors 规则
    'prefer-promise-reject-errors': 'off',
    // 在生产环境中禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 关闭 no-useless-escape 规则
    'no-useless-escape': 0,
    // 禁用分号
    semi: [2, 'never'],
    // 分号前后空格规则
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // 缩进规则，使用 2 个空格，SwitchCase 需要缩进一级
    indent: [2, 2, { SwitchCase: 1 }],
    // 逗号规则
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    // 禁止条件语句中赋值操作
    'no-cond-assign': 2,
    // 禁止对象字面量中出现重复的键
    'no-dupe-keys': 2,
    // 禁止在 switch 语句的 case 子句中出现重复的测试表达式
    'no-duplicate-case': 2,
    // 禁止多余的分号
    'no-extra-semi': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 2,
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止多次声明同一变量
    'no-redeclare': 2,
    // 禁止使用逗号操作符
    'no-sequences': 2,
    // 禁止标签与变量同名
    'no-label-var': 2,
    // 函数调用时，函数名与括号之间不能有空格
    'fun-call-spacing': [0, 'never'],
    // 禁止出现多行空行，最多允许一行空行
    'no-multiple-empty-lines': [2, { max: 1 }],
    // 禁止行尾空格
    'no-trailing-spaces': 2,
    // 禁止不必要的括号
    'no-extra-parens': [2, 'functions'],
    // 块语句前必须有空格
    'space-before-blocks': [2, 'always'],
    // 圆括号内不允许有空格
    'space-in-parens': [2, 'never'],
    // 中缀操作符周围要有空格
    'space-infix-ops': 2,
    // 一元操作符前后要有空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    // 禁止不规则的空白
    'no-irregular-whitespace': 2,
    // 块内空格规则
    'block-spacing': [2, 'always'],
    // 箭头函数的箭头前后要有空格
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // Prettier 的配置
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // Vue 组件名称必须是多字的，忽略 "index" 和 "main"
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: ['index', 'main'],
    //   },
    // ],
  },
}
