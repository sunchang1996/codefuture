import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HomePage from '@/views/HomePage'
import Setting from '@/components/Setting'
import Grade from '@/components/Grade'
import Production from '@/views/Production'
import HomeWord from '@/views/HomeWord'
import Courses from '@/views/Courses'
import Login from '@/views/Login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/home',
      component: HomePage,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          // props: {}
        },
        {
          path: '/setting',
          name: 'setting',
          component: Setting
        },
        {
          path: '/grade',
          name: 'grade',
          component: Grade
        },
        {
          path: '/production',
          name: 'production',
          component: Production
        },
        {
          path: '/curriculum',
          name: 'curriculum',
          component: Courses
        }
      ]
    },
    {
      path: '/homeword',
      name: 'homeword',
      component: HomeWord
    },
  ]
})
