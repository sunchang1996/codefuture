// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from 'store'
import axios from 'axios'
import request from '@/utils/request'

require('normalize.css')
require ('@/styles/global.less')
require('@/assets/fonts/iconfont.css')
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$localStore = store
Vue.prototype.$request = request


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
