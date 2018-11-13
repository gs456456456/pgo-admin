<template>
    <div class="marketing-inner">
        <div class="marketing-inner-inner">
          <div class="content-title">开启以下活动，帮助拉新客户、转化付费</div>
          <div class="content fl wrap">
            <div class="content-inner fl" v-for='item in activityConfig' 
                                          @click='goDetailActivity(item)'>
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
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'marketing',
    data () {
      return {
        activityConfig: [
          {text: '新人有礼', open: false, url: '/marketingUtils/personNewGift', symbol: 'ACTIVE_CARD_GIFT', id: null},
          {text: '分享有礼', open: false, url: '/marketingUtils/shareGift', symbol: 'SHARE_GIFT', id: null},
          {text: '买单有礼', open: false, url: '/marketingUtils/openCardGift', symbol: 'test', id: null},
          {text: '转发享好礼活动', open: false, url: '/marketingUtils/openCardGift', symbol: 'test', id: null}
        ]
      }
    },
    computed: {
      ...mapGetters(['getUserInfo'])
    },
    methods: {
      ...mapActions(['marketActivityFetch']),
      goDetailActivity (item) {
        if (!item.id) {
          this.goUrl(item.url + 'Config?id=null')
        } else {
          this.goUrl(item.url + `?id=${item.id}`)
        }
      },
      formatObj (item) {
        return item[Object.keys(item)[0]]
      },
      pageInit () {
        this.marketActivityFunc()
      },
      async marketActivityFunc () {
        let res = await this.marketActivityFetch(this.getUserInfo.companyId)
        if (res.result.length > 0) {
          res.result.forEach(element => {
            if (element.enable) {
              this.activityConfig.forEach(ele2 => {
                if (ele2.symbol === element.activityType) {
                  ele2.open = true
                }
              })
            }
            this.activityConfig.forEach(ele2 => {
              if (ele2.symbol === element.activityType) {
                ele2.id = element.id
              }
            })
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