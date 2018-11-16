// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSelectImage from 'vue-select-image'
import Vuefire from 'vuefire'
import firebase from './services/firebase'
import 'material-design-lite/material.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

require('material-design-lite')
require('vue-select-image/dist/vue-select-image.css')

Vue.config.productionTip = false
Vue.use(VueSelectImage)
Vue.use(Vuefire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    updates: firebase.database.ref('updates').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
})
