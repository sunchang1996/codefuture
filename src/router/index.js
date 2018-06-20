import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HomePage from '@/views/HomePage'
import Setting from '@/components/Setting'
import Grade from '@/components/Grade'
import Production from '@/views/Production'
import HomeWord from '@/views/HomeWord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/',
          component: Home,
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/setting',
          component: Setting
        },
        {
          path: '/grade',
          component: Grade
        },
        {
          path: '/production',
          component: Production
        },
      ]
    },
    {
      name: 'homeword',
      path: '/homeword',
      component: HomeWord
    },
  ]
})
