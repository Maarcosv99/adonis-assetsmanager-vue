import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { Home, Github, NotFound } from '@/components'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/github',
    name: 'Github',
    component: Github,
  },
  {
    path: '/:patchMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
