import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import(/* webpackChunkName: "forget" */ '../views/Forget.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
