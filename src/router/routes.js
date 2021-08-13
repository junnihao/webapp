import demoLogin from 'pages/demo/login/demoLogin'
import Layout from "layouts/demo/layout"
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
  },
  {
    path: '/main',
    component: Layout,
    icon: "el-icon-s-home",
    meta: {title: "工作台", requireAuth: true},
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "工作台",
        icon: "el-icon-s-home",
        meta: {title: "工作台", requireAuth: true},
        component: () => import('@/pages/demo/home.vue')
      }
    ]
  },
  {
    path: "/goods",
    name: "商品管理",
    component: Layout,
    icon: "el-icon-s-shop",
    meta: {title: "商品管理", requireAuth: true},
    children: [
      {
        path: "/goods-list",
        name: "商品列表",
        icon: "el-icon-s-data",
        meta: {title: "商品列表", requireAuth: true},
        component: () => import("@/pages/demo/GoodsList.vue")
      },
      {
        path: "/goods-add",
        name: "添加商品",
        icon: "el-icon-document-add",
        meta: {title: "添加商品", requireAuth: true},
        component: () => import("@/pages/demo/GoodsAdd.vue")
      }
    ]
  }
]

export default routes
