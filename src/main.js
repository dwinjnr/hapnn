// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NewsApi from 'newsapi'
import 'material-design-lite/material.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

require('material-design-lite')
require('bootstrap')

Object.defineProperty(Vue.prototype, '$newsapi', { value: new NewsApi('153ca5720f0446428f2fbfe54c7d0a08') })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
