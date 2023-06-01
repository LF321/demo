
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { transition: 'slide-right' },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    // 页面路径
    path: '/red-envelope',
    component: () => import('pages/RedEnvelope.vue'),
    meta: { transition: 'slide-left' }
  },
  {
    // 页面路径
    path: '/dialog-demo',
    component: () => import('pages/DialogDemo.vue')
  },
  {
    // 页面路径
    path: '/buttom-sheet',
    component: () => import('pages/ButtomSheet.vue')
  },
  {
    // 页面路径
    path: '/list-item',
    component: () => import('pages/ListItem.vue')
  },
  {
    // 页面路径
    path: '/mc-donaldm',
    component: () => import('pages/McDonald.vue')
  },
  {
    // 页面路径
    path: '/form',
    component: () => import('pages/FormComponents.vue')
  },
  {
    // 页面路径
    path: '/pyp-i',
    component: () => import('pages/PYPI.vue')
  },
  {
    // 页面路径
    path: '/mc-donaldHome',
    component: () => import('src/pages/McDonaldHome.vue')
  },
  {
    // 页面路径
    path: '/mc-donaldReward',
    component: () => import('src/pages/McDonaldReward.vue')
  },
  {
    // 页面路径
    path: '/mc-donaldShopping',
    component: () => import('src/pages/McDonaldShopping.vue')
  },
  {
    // 页面路径
    path: '/mc-donaldSetting',
    component: () => import('src/pages/McDonaldSetting.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
