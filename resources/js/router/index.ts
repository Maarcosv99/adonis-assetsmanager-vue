import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { Home, Github } from '../components'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/github',
    name: 'Github',
    component: Github,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
