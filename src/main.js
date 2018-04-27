// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MainComponent from './components/MainComponent'
import store from './store/index'

import VueRouter from 'vue-router'
import router from './routes'

// import 'bulma/css/bulma.css'

Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { MainComponent },
  template: '<MainComponent />'
})
