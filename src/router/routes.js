const routes = [
  {
    path: '/settings',
    redirect: '/settings/translation/setting',
    component: () => import('layouts/SettingMainLayout.vue'),
    children: [
      {
        path: 'translation',
        redirect: '/settings/translation/setting',
        component: () => import('components/SideMenuTranslation.vue'),
        children: [
          {
            path: 'setting',
            component: () => import('pages/TranslationSettings.vue'),
          },
          {
            path: 'source',
            component: () => import('pages/TranslationSource.vue'),
          },
        ],
      },
      {
        path: 'screenshot',
        redirect: '/settings/screenshot/setting',
        component: () => import('components/SideMenuScreenshot.vue'),
        children: [
          {
            path: 'setting',
            component: () => import('pages/ScreenshotSettings.vue'),
          },
          {
            path: 'source',
            component: () => import('pages/ScreenshotSource.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
