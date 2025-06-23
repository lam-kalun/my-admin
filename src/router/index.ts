import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routers'

import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home',
    },
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/404',
    }
  ]
})

export default router

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
