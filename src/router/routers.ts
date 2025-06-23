// 此文件由vite-plugin-routes自动生成，仅限meta、redirect属性手动修改
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: 'home',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'login',
    },
  },
]
