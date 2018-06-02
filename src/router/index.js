import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Setting from '@/components/Setting'
import Grade from '@/components/Grade'

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
    },
    {
      name: 'grade',
      path: '/grade',
      component: Grade
    }
  ]
})
