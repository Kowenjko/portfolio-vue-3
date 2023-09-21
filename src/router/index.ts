import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ChatPage from '@/pages/ChatPage.vue'
import RecoveryPage from '@/pages/RecoveryPage.vue'

import { useAuth } from '@/composables/useAuth'

const { auth, recoveryUser } = useAuth()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage,
      beforeEnter: () => (auth.value.id ? true : '/'),
    },
    {
      path: '/recovery-password',
      name: 'recovery-password',
      component: RecoveryPage,
      beforeEnter: () => (recoveryUser.value.id ? true : '/'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: HomePage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
