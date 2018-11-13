import http from '@/utils/http.js'
export default {
  state: {

  },
  getters: {

  },
  actions: {
    marketActivityFetch: async (ctx, companyId) => {
      let res = await http({
        url: `/market/activity/findMarketActivity?companyId=${companyId}`
      })
      return res
    },
    saveOrUpdateMarketActivityFetch: async (ctx, parms) => {
      let res = await http({
        url: '/market/activity/saveOrUpdateMarketActivity',
        method: 'POST',
        body: parms
      }, 'formData')
      return res
    },
    listCashCouponTemplateFetch: async (ctx, parms) => {
      let res = await http({
        url: '/market/coupon/listCashCouponTemplate',
        method: 'POST',
        body: parms
      }, 'formData')
      return res
    }
  },
  mutations: {

  }
}
