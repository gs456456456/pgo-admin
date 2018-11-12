<template>
    <div class="marketing-inner">
        <div class="marketing-inner-inner">
          <div class="content-title">开启以下活动，帮助拉新客户、转化付费</div>
          <div class="content fl wrap">
            <div class="content-inner fl" v-for='item in activityConfig' 
                                          @click='goUrl(item.url)'>
              <div class="img-container"></div>
              <div class="text-container">
                <div class="name">{{item.text}}</div>
                <div class="status fl-row-yctr xcenter">
                  <span v-if='item.open'>已开启</span>
                  <span v-else>未开启</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'marketing',
    data () {
      return {
        activityConfig: [
          {text: '新人有礼', open: false, url: '/marketingUtils/personNewGift'},
          {text: '买单有礼', open: false, url: '/marketingUtils/openCardGift'},
          {text: '转发享好礼活动', open: false, url: '/marketingUtils/openCardGift'},
          {text: '分享有礼', open: false, url: '/marketingUtils/shareGift'}
        ]
      }
    },
    computed: {
    },
    methods: {
      ...mapActions(['marketActivityFetch']),
      pageInit () {
        this.marketActivityFunc()
      },
      async marketActivityFunc () {
        let res = await this.marketActivityFetch()
        if (res.result.length > 0) {
          res.result.forEach(element => {
            if (element.activityType === 'ACTIVE_CARD_GIFT' && element.enable) {
  
            } else if (element.activityType === 'SHARE_GIFT' && element.enable) {

            }
          })
        }
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