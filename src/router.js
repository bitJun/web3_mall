import { createRouter, createWebHistory } from 'vue-router';

// 路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./pages/Login/index.vue'),
    meta: {
      title: '登录注册'
    }
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('./pages/Download/index.vue'),
    meta: {
      title: '下载'
    }
  },
  {
    path: '/forgetPwd',
    name: 'ForgetPwd',
    component: () => import('./pages/ForgetPwd/index.vue'),
    meta: {
      title: '忘记密码'
    }
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('./pages/Goods/list.vue'),
    meta: {
      title: '商品列表'
    }
  },
  {
    path: '/goods/:id',
    name: 'GoodsDetail',
    component: () => import('./pages/Goods/index.vue'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/wish',
    name: 'Wish',
    component: () => import('./pages/Wish/index.vue'),
    meta: {
      title: '心愿单'
    }
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import('./pages/Confirm/index.vue'),
    meta: {
      title: '确认订单'
    }
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import('./pages/Pay/index.vue'),
    meta: {
      title: '确认订单'
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('./pages/Mine/index.vue'),
    meta: {
      title: '我的'
    },
    children: [
      {
        path: '/order',
        name: 'Order',
        component: () => import('./pages/Mine/order.vue'),
        meta: {
          title: '我的订单'
        },
      },
      {
        path: '/collect',
        name: 'Collect',
        component: () => import('./pages/Mine/collect.vue'),
        meta: {
          title: '我的收藏'
        },
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('./pages/Mine/user.vue'),
        meta: {
          title: '个人中心'
        },
      },
      {
        path: '/address',
        name: 'Address',
        component: () => import('./pages/Mine/address.vue'),
        meta: {
          title: '我的地址'
        },
      },
      {
        path: '/aftersale',
        name: 'Aftersale',
        component: () => import('./pages/Mine/aftersale.vue'),
        meta: {
          title: '我的售后'
        },
      }
    ]
  },
  // 404页面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./pages/NotFound.vue'),
    meta: {
      title: '页面未找到'
    }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
  // 路由切换时滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // 这里可以添加权限验证逻辑
  // 例如：检查用户登录状态、权限等

  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 路由切换完成后的逻辑
  // 例如：埋点统计、页面加载完成事件等
  console.log(`路由切换: ${from.path} -> ${to.path}`)
})

export default router