<template>
    <div class="marketing-inner">
        <div class="marketing-inner-inner">
          <p class="content-title">开启以下活动，帮助拉新客户、转化付费</p>
          <div class="content fl">
            <div class="content-inner">

            </div>
            <div class="content-inner">

            </div>
            <div class="content-inner">

            </div>
            <div class="content-inner">

            </div>
          </div>
        </div>
      </div>
</template>
<script>
  export default {
    name: 'marketing',
    data () {
      return {
        navTitle: ['营销', '卡劵', '会员', '礼品卡', '微信推送', '微主页', '公众号']
      }
    },
    computed: {
    },
    methods: {
      pageInit () {

      }
    },
    created () {
      this.pageInit()
    },
    mounted () {

    },
    watch: {

    }
  }
</script>
<style lang='scss' scoped>
  @import './marketing.scss'
</style>