<template>
  <div>
    <left-bar-nav-mixin :innerNavTitle='innerNavTitle' :modulesTitle='modulesTitle'>
      <router-view></router-view>
    </left-bar-nav-mixin>
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
        innerNavTitle: ['营销', '卡劵', '会员', '礼品卡', '微信推送', '微主页', '公众号'],
        modulesTitle: '营销'
      }
    },
    computed: {
    },
    methods: {
    },
    created () {
    },
    mounted () {
      console.log(this.$router)
    },
    watch: {

    }
  }
</script>