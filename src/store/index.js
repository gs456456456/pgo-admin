import Vue from 'vue'
import Vuex from 'vuex'
import marketingUtils from './modules/marketingUtils'
import user from './modules/user'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    user,
    marketingUtils
  }
})
