<template>
  <div>
    <left-bar-nav-mixin :innerNavTitle='innerNavTitle'
                        :showInnerNav='showInnerNav'
                        v-if='showNav'>
      <router-view></router-view>
    </left-bar-nav-mixin>
    <router-view v-else></router-view>
  </div>
</template>
<script>
  import leftBarNavMixin from '@/components/leftBarNavMixin'
  import { mapActions, mapMutations } from 'vuex'
  export default {
    name: 'parent',
    components: {
      leftBarNavMixin: leftBarNavMixin
    },
    beforeRouteUpdate (to, from, next) {
      this.judgeNavStatus(to.path)
      next()
    },
    beforeRouteLeave (to, from, next) {
      this.judgeNavStatus(to.path)
      next()
    },
    data () {
      return {
        innerNavTitle: [
          {name: '营销', url: '/marketingUtils/marketing', active: true, open: true},
          {name: '卡券', url: '/', active: false, open: false},
          {name: '会员', url: '/', active: false, open: false},
          {name: '礼品卡', url: '/', active: false, open: false},
          {name: '微信推送', url: '/', active: false, open: false},
          {name: '微主页', url: '/', active: false, open: false},
          {name: '公众号', url: '/', active: false, open: false}
        ],
        showInnerNav: true,
        noNavUrl: [
          '/marketingUtils/personNewGiftConfig',
          '/marketingUtils/shareGiftConfig'
        ],
        // modulesTitle: '营销',
        showNav: true
      }
    },
    computed: {
    },
    methods: {
      ...mapActions(['userInfoFetch']),
      ...mapMutations(['setModuleTitle']),
      judgeNavStatus (path) {
        if (this.noNavUrl.indexOf(path) > -1) {
          this.showNav = false
        } else {
          this.showNav = true
        }
      }
    },
    created () {
      this.setModuleTitle('营销')
      this.judgeNavStatus(this.$router.currentRoute.path)
      // 请求用户信息 防止登录过期
      this.userInfoFetch()
    },
    mounted () {
    },
    watch: {

    }
  }
</script>