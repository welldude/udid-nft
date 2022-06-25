import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Nft',
    component: () => import('@/views/nft/Nft.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
