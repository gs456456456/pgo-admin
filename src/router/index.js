import Vue from 'vue'
import Router from 'vue-router'
import marketingUtils from '@/pages/marketingUtils'
import register from '@/pages/register'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/marketingUtils',
      name: 'marketingUtils',
      component: marketingUtils.parent,
      children: [
        { path: 'marketing', component: marketingUtils.marketing },
        { path: 'coupon', component: marketingUtils.coupon },
        { path: 'previewShare', component: marketingUtils.previewShare },
        { path: 'previewCard', component: marketingUtils.previewCard },
        { path: 'shareGift', component: marketingUtils.shareGift}
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
    }
  ]
})
