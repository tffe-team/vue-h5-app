import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Welcome = () => import(/* webpackChunkName: "welcome" */'@/components/Welcome.vue')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Welcome,
      name: 'welcome'
    }
  ]
})
