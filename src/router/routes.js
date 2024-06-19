const routes = [
  { path: '/', redirect: '/settings' },
  {
    path: '/settings',
    redirect: '/settings/translation',
    component: () => import('layouts/SettingMainLayout.vue'),
    children: [
      {
        path: 'translation',
        component: () => import('pages/Translate.vue'),
      },
      {
        path: 'screenshot',
        component: () => import('pages/Screenshot.vue'),
      },
      {
        path: 'setting',
        component: () => import('pages/Setting.vue'),
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
