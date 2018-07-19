import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'

import Home from '@/views/Home'
import HomePage from '@/views/HomePage'
import Setting from '@/components/Setting'
import Grade from '@/components/Grade'
import Production from '@/views/Production'
import HomeWord from '@/views/HomeWord'
import Courses from '@/views/Courses'
import Login from '@/views/Login/Login'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      component: HomePage,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
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
      meta: {
        requireAuth: true
      },
      component: HomeWord
    },
  ]
})

router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  // if (to.matched.some(res => res.meta.requireAuth)) {
  //   if (store.get('FUTURE_WEB_TOKEN')) {
  //     next()
  //   }
  // } else {
  //   next({
  //     path: '/login',
  //     name: 'login'
  //   })
  // }
  let token = store.get('FUTURE_WEB_TOKEN');
  // console.log('------', to.matched.some(record => console.log(record)))
  if (to.matched.some(record => record.meta.requireAuth) && (!token || token === null)) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router;