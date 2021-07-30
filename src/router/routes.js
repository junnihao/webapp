import demoLogin from 'pages/demo/login/demoLogin'
const routes = [
 /*{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },*/

  {
    path: '/',
    name: 'index',
    component: demoLogin,
    meta: {
      keepAlive: false // 需要被缓存
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/demoLogin',
    name: 'demoLogin',
    component: demoLogin,
    meta: {
      keepAlive: false // 需要被缓存
    }
  },
  {
    path: '/test',
    name: 'demoLogin',
    component: demoLogin,
    meta: {
      keepAlive: false // 需要被缓存
    }
  }
]

export default routes
