import http from '@/utils/http.js'
export default {
  state: {

  },
  getters: {

  },
  actions: {
    marketActivityFetch: async (ctx) => {
      let res = await http({
        url: '/market/activity/marketActivity'
      })
      return res
    }
  },
  mutations: {

  }
}
