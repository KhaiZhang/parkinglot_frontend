import Vue from 'vue'
import Router from 'vue-router'
import BossHome from './views/BossHome.vue'
import CustomHome from './views/CustomHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'BossHome',
      component: BossHome
    },
    {
      path: '/CustomHome',
      name: 'CustomHome',
      component : CustomHome
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
