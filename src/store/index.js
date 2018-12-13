import Vue from 'vue'
import Vuex from 'vuex'
import marketingUtils from './modules/marketingUtils'
import user from './modules/user'
import config from './modules/config'

Vue.use(Vuex)
const error = {
  state: {
    errorText: '',
    showError: false,
    successText: '',
    showSuccess: false
  },
  getters: {
    getError (state) {
      return state.errorText
    },
    getSuccess (state) {
      return state.successText
    }
  },
  actions: {

  },
  mutations: {
    setError (state, errorText) {
      state.showError = true
      state.errorText = errorText
      setTimeout(() => {
        state.showError = false
      }, 3000)
    },
    // 关闭所有提示
    closeError (state) {
      state.showError = false
      state.showSuccess = false
    },
    setSuccess (state, successText) {
      state.showSuccess = true
      state.successText = successText
      setTimeout(() => {
        state.showSuccess = false
      }, 3000)
    }
  }
}

export default new Vuex.Store({
  modules: {
    user,
    marketingUtils,
    error,
    config
  }
})
