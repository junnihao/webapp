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
  },
  {
    path: "/order",
    name: "订单管理",
    component: Layout,
    icon: "el-icon-s-order",
    meta: {title: "订单管理", requireAuth: true},
    children: [
      {
        path: "/order-list",
        name: "订单列表",
        icon: "el-icon-s-data",
        meta: {title: "订单列表", requireAuth: true},
        component: () => import("@/pages/demo/OrderList.vue")
      },
      {
        path: "/order-goods-list",
        name: "商品订单列表",
        icon: "el-icon-document-copy",
        meta: {title: "商品订单列表", requireAuth: true},
        component: () => import("@/pages/demo/OrderGoodsList.vue")
      },
      {
        path: "/order-detail",
        name: "账单详情",
        icon: "el-icon-tickets",
        meta: {title: "账单详情", requireAuth: true},
        component: () => import("@/pages/demo/OrderDetail.vue")
      }
    ]
  },
  {
    path: "/merchant",
    name: "商户管理",
    component: Layout,
    icon: "el-icon-s-custom",
    meta: {title: "商户管理", requireAuth: true},
    children: [
      {
        path: "/merchant-list",
        name: "商户列表",
        icon: "el-icon-s-data",
        meta: {title: "商户列表", requireAuth: true},
        component: () => import("@/pages/demo/MerchantList.vue")
      },
      {
        path: "/merchant-analysis",
        name: "商户分析",
        icon: "el-icon-pie-chart",
        meta: {title: "商户分析", requireAuth: true},
        component: () => import("@/pages/demo/MerchantAnalysis.vue")
      }
    ]
  },
  {
    path: "/user",
    name: "用户管理",
    component: Layout,
    icon: "el-icon-user",
    meta: {title: "用户管理", requireAuth: true},
    children: [
      {
        path: "/user-list",
        name: "用户列表",
        icon: "el-icon-s-data",
        meta: {title: "用户列表", requireAuth: true},
        component: () => import("@/pages/demo/UserList.vue")
      },
      {
        path: "/user-setting",
        name: "个人设置",
        icon: "el-icon-setting",
        meta: {title: "个人设置", requireAuth: true},
        component: () => import("@/pages/demo/UserSetting.vue")
      },
      {
        path: "/user-password",
        name: "修改密码",
        icon: "el-icon-unlock",
        meta: {title: "修改密码", requireAuth: true},
        component: () => import("@/pages/demo/UserPassword.vue")
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    meta: {title: "404", requireAuth: false},
    component: () => import('@/pages/demo/404.vue')
  },
  {
    path: '/500',
    name: '500',
    meta: {title: "500", requireAuth: false},
    component: () => import('@/pages/demo/500.vue')
  },
]

export default routes
