import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/Main-View.vue') },
    { path: '/auth', component: () => import('@/views/Auth-View.vue') },
    { path: '/list', component: () => import('@/views/List-View.vue') }
  ]
})

export default router
