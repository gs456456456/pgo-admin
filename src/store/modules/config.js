export default {
  state: {
    navConfig: null
  },
  getters: {
    getUserInfo (state) {
      return state.navConfig
    }
  },
  actions: {

  },
  mutations: {
    setNavConfig (state, navConfig) {
      state.navConfig = navConfig
    }
  }
}
