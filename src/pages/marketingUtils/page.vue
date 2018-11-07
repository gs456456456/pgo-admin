<template>
  <div>
    <left-bar-nav-mixin :innerNavTitle='innerNavTitle' :modulesTitle='modulesTitle' v-if='showNav'>
      <router-view></router-view>
    </left-bar-nav-mixin>
    <router-view v-else></router-view>
  </div>
</template>
<script>
  import leftBarNavMixin from '@/components/leftBarNavMixin'
  export default {
    name: 'parent',
    components: {
      leftBarNavMixin: leftBarNavMixin
    },
    data () {
      return {
        innerNavTitle: [
          {name: '营销', url: '/marketingUtils/marketing', active: true, open: true},
          {name: '卡劵', url: '/', active: false, open: false},
          {name: '会员', url: '/', active: false, open: false},
          {name: '礼品卡', url: '/', active: false, open: false},
          {name: '微信推送', url: '/', active: false, open: false},
          {name: '微主页', url: '/', active: false, open: false},
          {name: '公众号', url: '/', active: false, open: false}
        ],
        modulesTitle: '营销',
        showNav: true
      }
    },
    computed: {
    },
    methods: {
      judgeNavStatus () {
        // if (this.$router.currentRoute.path === '/marketingUtils/shareGift') {
        //   this.showNav = false
        // }
      }
    },
    created () {
      this.judgeNavStatus()
    },
    mounted () {
      console.log(this.$router)
    },
    watch: {

    }
  }
</script>