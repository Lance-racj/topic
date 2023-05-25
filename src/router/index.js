import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    redirect: '/one',
    children: [
      {
        path: '/one',
        name: 'one',
        component: () => import('../views/One.vue')
      },
      {
        path: '/two',
        name: 'two',
        component: () => import('../views/Two.vue')
      },
      {
        path: '/three',
        name: 'three',
        component: () => import('../views/Three.vue')
      },
      {
        path: '/four',
        name: 'four',
        component: () => import('../views/Four.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 解决路由重复问题
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
