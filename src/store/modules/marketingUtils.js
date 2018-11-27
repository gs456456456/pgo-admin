import http from '@/utils/http.js'
export default {
  state: {
    shareUserForm: {
      benefitTypeList: [],
      enable: true,
      activityType: 'ACTIVE_CARD_GIFT',
      cashCouponTemplateList: [],
      integral: 0,
      balance: 0
      // type: 'SHARE_USER'
    },
    oldUserForm: {
      benefitTypeList: [],
      enable: true,
      activityType: 'ACTIVE_CARD_GIFT',
      cashCouponTemplateList: [],
      integral: 0,
      balance: 0
      // type: 'OLD_USER'
    },
    newUserForm: {
      benefitTypeList: [],
      enable: true,
      activityType: 'ACTIVE_CARD_GIFT',
      cashCouponTemplateList: [],
      integral: 0,
      balance: 0
      // type: 'NEW_USER'
    }
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
    setShareUserForm (state, form) {
      state.shareUserForm = form
    }
  }
}
