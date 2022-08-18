import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueSmoothScroll from 'vue-smooth-scroll'
// import jquery from 'jquery'

// import top from '@/components/top'
import top from '@/views/top'
import work from '@/views/work'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(vueSmoothScroll)
// Vue.use(jquery)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/work/:id',
      name: 'work',
      component: work,
      props: true
    }
  ]
})
