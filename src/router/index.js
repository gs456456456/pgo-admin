import Vue from 'vue'
import Router from 'vue-router'
import marketingUtils from '@/pages/marketingUtils'
import register from '@/pages/register'
import loginVerify from '@/pages/loginVerify/index.vue'
Vue.use(Router)
export default new Router({
  // mode: 'history',
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
      redirect: '/marketingUtils/marketing',
      children: [
        { path: 'marketing', component: marketingUtils.marketing },
        { path: 'shareGift', component: marketingUtils.shareGift },
        { path: 'personNewGift', component: marketingUtils.personNewGift },
        { path: 'personNewGiftConfig', component: marketingUtils.personNewGiftConfig },
        { path: 'shareGiftConfig', component: marketingUtils.shareGiftConfig }
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
