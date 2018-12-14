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
      innerNavTitle: [],
      showInnerNav: true,
      noNavUrl: [
        '/openScreenAdvertisement/addNewOrEdit'
      ],
      // modulesTitle: '开屏广告',
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
    this.setModuleTitle('开屏广告')
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