// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import css from './assets/css/reset.css'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  css,
  components: { App },
  template: '<App/>'
})
