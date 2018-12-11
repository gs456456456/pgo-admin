export default {
  state: {
    navConfig: [
      { name: '线上商城',
        sub: [{
          name: '精选专场',
        //   active: false,
          url: '/',
          open: false
        }, {
          name: '开屏广告',
        //   active: false,
          url: '/openScreenAdvertisement/description',
          open: true
        }],
        url: false,
        active: false,
        open: true,
        showTabLi: false,
        subActiveList: [false, false]},
        { name: '门店导购', sub: [], url: '/', active: false, open: false, showTabLi: false, subActiveList: [] },
        { name: '营销工具', sub: [], url: '/marketingUtils/marketing', active: true, open: true, showTabLi: false, subActiveList: [] },
        { name: '数据报表', sub: [], url: '/', active: false, open: false, showTabLi: false, subActiveList: [] },
        { name: '设置', sub: [], url: '/', active: false, open: false, showTabLi: false, subActiveList: [] }
    ]
  },
  getters: {
    getNavConfig (state) {
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
