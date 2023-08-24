import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BaseView.vue'),
      children: [
        {
          path: '/',
          name: 'Dashboard',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/dashboard/DashboardPage.vue'),
        },
        {
          path: '/admin/ip',
          name: 'Admin Ip',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/admin/AdminIp.vue'),
        },
        {
          path: '/admin/log',
          name: 'Admin Log',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/admin/AdminLog.vue'),
        },
        {
          path: '/admin/user',
          name: 'Admin User',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/admin/AdminUser.vue'),
        },
        {
          path: '/usermember/allgroup',
          name: 'All Group Member',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userMember/UserMemberAllGroupMember.vue'),
        },
        {
          path: '/usermember/referal',
          name: 'Referal',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userMember/UserMemberReferal.vue'),
        },
        {
          path: '/usermember/all',
          name: 'Win - Lose All',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userMember/UserMemberWinLoseAll.vue'),
        },
        {
          path: '/usermember/togel',
          name: 'Win - Lose Togel',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userMember/UserMemberWinLoseTogel.vue'),
        },
        {
          path: '/userbank/allgroup',
          name: 'All Group Bank',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userBank/UserBankAllGroupMember.vue'),
        },
        {
          path: '/userbank/referal',
          name: 'Referal',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userBank/UserBankReferal.vue'),
        },
        {
          path: '/userbank/all',
          name: 'Win - Lose All',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userBank/UserBankWinLoseAll.vue'),
        },
        {
          path: '/userbank/togel',
          name: 'User Bank',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/userBank/UserBankWinLoseTogel.vue'),
        }
      ]
    }
  ]
})

export default router
