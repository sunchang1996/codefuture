import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Setting from '@/components/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
    },
    {
      path: '/homepage',
      name: 'home',
      component: Home,
    },
    {
      name: 'setting',
      path: '/setting',
      component: Setting
    }
  ]
})
