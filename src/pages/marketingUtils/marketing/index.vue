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
  export default {
    name: 'marketing',
    data () {
      return {
        activityConfig: [
          {text: '新人有礼', open: true, url: '/marketingUtils/personNewGift'},
          {text: '买单有礼', open: true, url: '/marketingUtils/openCardGift'},
          {text: '转发享好礼活动', open: true, url: '/marketingUtils/openCardGift'},
          {text: '分享有礼', open: true, url: '/marketingUtils/shareGift'}
        ]
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