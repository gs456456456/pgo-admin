import Vue from 'vue'
import Vuex from 'vuex'
import marketingUtils from './modules/marketingUtils'
import user from './modules/user'

Vue.use(Vuex)
const error = {
  state: {
    errorText: '',
    showError: false
  },
  getters: {
    getError (state) {
      return state.errorText
    }
  },
  actions: {

  },
  mutations: {
    setError (state, errorText) {
      state.showError = true
      state.errorText = errorText
    },
    closeError (state) {
      state.showError = false
    }
  }
}

export default new Vuex.Store({
  modules: {
    user,
    marketingUtils,
    error
  }
})
