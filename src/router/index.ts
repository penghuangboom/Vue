// src/router/index.ts

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/index',
    children: [
      // 需要layout的页面
      {
        path: 'index',
        name: 'index',
        meta: {
          title: 'index'
        },
        component: () => import('@/pages/login/index.vue')
      }
    ]
  },
  // 不需要layout的页面
  // 替代vue2中的'*'通配符路径
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes
})
export default router
