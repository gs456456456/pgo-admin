import Vue from 'vue'
import Router from 'vue-router'
import marketingUtils from '@/pages/marketingUtils'
import register from '@/pages/register'
import loginVerify from '@/pages/loginVerify/index.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/loginVerify',
      name: 'loginVerify',
      component: loginVerify
    },
    {
      path: '/marketingUtils',
      name: 'marketingUtils',
      component: marketingUtils.parent,
      children: [
        { path: 'marketing', component: marketingUtils.marketing },
        { path: 'coupon', component: marketingUtils.coupon },
        { path: 'previewShare', component: marketingUtils.previewShare },
        { path: 'previewCard', component: marketingUtils.previewCard }
        // { path: 'shareGift', component: marketingUtils.shareGift }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: register.parent,
      children: [
        { path: 'firststep', component: register.firststep },
        { path: 'secondstep', component: register.secondstep }
      ]
    },
    {
      path: '*',
      redirect: '/register/firststep'
    }
  ]
})
