import http from '@/utils/http.js'
export default {
  state: {
    shareUserForm: {
      benefitTypeList: [],
      // enable: true,
      activityType: 'SHARE_GIFT',
      cashCouponTemplateList: [],
      integral: 0,
      balance: 0,
      benefitUserType: 'SHARE_USER'
    },
    oldUserForm: {
      benefitTypeList: [],
      // enable: true,
      activityType: 'SHARE_GIFT',
      cashCouponTemplateList: [],
      integral: 0,
      balance: 0,
      benefitUserType: 'OLD_USER'
    },
    newUserForm: {
      benefitTypeList: [],
      // enable: true,
      activityType: 'SHARE_GIFT',
      cashCouponTemplateList: [],
      integral: 0,
      balance: 0,
      benefitUserType: 'NEW_USER'
    },
    openCardForm: {
      benefitTypeList: [],
      // enable: true,
      activityType: 'ACTIVE_CARD_GIFT',
      cashCouponTemplateList: [],
      integral: 0,
      balance: 0,
      type: 'SHARE_GIFT'
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
    saveOrUpdateBenefitMarketActivity: async (ctx, parms) => {
      let res = await http({
        url: `/market/activity/saveOrUpdateBenefitMarketActivity`,
        method: 'POST',
        body: parms
      }, 'formData')
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
    },
    setShareUserTotalForm (state, shareUser, newUser, oldUser) {
      state.shareUserForm = shareUser
      state.newUserForm = newUser
      state.oldUserForm = oldUser
    },
    setNewUserForm (state, form) {
      state.newUserForm = form
    },
    setOldUserForm (state, form) {
      state.oldUserForm = form
    },
    setOpenCardForm (state, form) {
      state.openCardForm = form
    }
  }
}
