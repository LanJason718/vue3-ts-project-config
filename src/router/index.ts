import type { App } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
