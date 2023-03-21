import type { RouteRecordRaw } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const ApplicationView = () => import('@/views/ApplicationView.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/app',
    name: 'app',
    component: ApplicationView,
  },
]
