// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from '@/store/index'
import mixins from '@/mixins/index'
import 'element-ui/lib/theme-chalk/index.css'
// import '../static/font/font.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
export default vm
