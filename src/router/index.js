import Vue from 'vue'
import Router from 'vue-router'
import marketingUtils from '@/pages/marketingUtils'
import openScreenAdvertisement from '@/pages/openScreenAdvertisement'
import register from '@/pages/register'
// import loginVerify from '@/pages/loginVerify/index.vue'
import login from '@/pages/login/index.vue'
import main from '@/main.js'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/loginVerify',
    //   name: 'loginVerify',
    //   component: loginVerify
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/openScreenAdvertisement',
      name: 'openScreenAdvertisement',
      component: openScreenAdvertisement.description,
      redirect: '/openScreenAdvertisement/description',
      children: [
        { path: 'description', component: openScreenAdvertisement.description },
        { path: 'config', component: openScreenAdvertisement.config }
      ],
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/marketingUtils',
      name: 'marketingUtils',
      component: marketingUtils.parent,
      redirect: '/marketingUtils/marketing',
      children: [
        { path: 'marketing', component: marketingUtils.marketing },
        { path: 'shareGift', component: marketingUtils.shareGift },
        { path: 'personNewGift', component: marketingUtils.personNewGift },
        { path: 'personNewGiftConfig', component: marketingUtils.personNewGiftConfig },
        { path: 'shareGiftConfig', component: marketingUtils.shareGiftConfig }
      ],
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: register.parent,
      redirect: '/signup/firststep',
      children: [
        { path: 'firststep', component: register.firststep },
        { path: 'secondstep', component: register.secondstep }
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  // 清除错误提示
  if (main) {
    main.$store.commit('closeError')
  }
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    if (localStorage.getItem('userInfo')) { // 判断是否登录
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
