export default {
  state: {
    navConfig: [
      // { name: '线上商城',
      //   sub: [{
      //     name: '精选专场',
      //   //   active: false,
      //     url: '/',
      //     open: false
      //   }, {
      //     name: '开屏广告',
      //   //   active: false,
      //     url: '/openScreenAdvertisement/description',
      //     open: true
      //   }],
      //   url: false,
      //   active: false,
      //   open: true,
      //   showTabLi: false,
      //   subActiveList: [false, false]},
      { name: '线上商城', url: false, active: false, open: true, noActive: true},
      { name: '门店导购', url: '/', active: false, open: false, noActive: false},
      { name: '运营助手', url: '/marketingUtils/marketing', active: false, open: true, noActive: false},
      { name: '库存管理', url: '/inventoryManagement/allProduct', active: false, open: true, noActive: false},
      { name: '数据助手', url: '/', active: false, open: false, noActive: false},
      { name: '设置', url: '/', active: false, open: false, noActive: false}
    ],
    subNavConfig: [
      { name: '精选专场', url: false, active: false, open: false, noActive: true, extends: '线上商城', noActive: false},
      { name: '开屏广告', url: '/openScreenAdvertisement/config', active: false, open: true, noActive: false, extends: '线上商城', noActive: false}
    ]
  },
  getters: {
    getNavConfig (state) {
      return state.navConfig
    },
    getSubNavConfig (state) {
      return state.subNavConfig
    }
  },
  actions: {

  },
  mutations: {
    setNavConfig (state, navConfig) {
      state.navConfig = navConfig
    },
    setSubNavConfig (state, navConfig) {
      state.subNavConfig = navConfig
    }
  }
}
