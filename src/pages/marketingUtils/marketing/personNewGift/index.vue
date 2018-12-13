<template>
        <div class="personNew" v-loading="loading">
            <div class="previewShare-inner">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">营销活动</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">新人礼活动</a></el-breadcrumb-item>
                </el-breadcrumb>
                <!-- 营销活动 <span>/转发享好礼活动</span> -->
            </div>
            <div class="previewShare-content">
                <div class="content-title">
                    <p>新人送礼活动 - {{marketActivityConfig.enable?'已开启':'未开启'}}</p>
                    <div class="btns">
                        <div class="shareGiftButton">
                            <el-button @click="toggleActivityStatus">{{marketActivityConfig.enable?'关闭活动':'开启活动'}}</el-button>
                            <el-button @click="modifyConfig">修改</el-button>
                        </div>
                    </div>
                </div>
                <div class="content-content">
                    <div class="content-content-left">
                        <!-- <p>10元代金券</p> -->
                    </div>
                    <div class="content-content-right">
                        <div class="right-top">
                            <p class="right-title">活动信息</p>
                            <div class="right-content">
                                <p class="first">活动状态</p>
                                <p class="second">{{marketActivityConfig.enable?'已开启':'未开启'}}</p>
                            </div>
                            <div class="right-content">
                                <p class="first">活动类型</p>
                                <p class="second">新人送礼</p>
                            </div>
                        </div>
                        <div class="right-bot">
                            <p class="right-title">奖励设置</p>
                            <!-- <div v-for='item in marketActivityConfig'></div> -->
                            <div v-for='item in marketActivityConfig.benefitTypeList' class="benefit-list">
                                <div class="right-content">
                                    <p class="first">奖励类型</p>
                                    <p class="second" v-if='item==="POINTS"'>送积分</p>
                                    <p class="second" v-if='item==="PRE_PAYED_MONEY"'>送储值</p>
                                    <p class="second" v-if='item==="CASH_COUPON"'>送卡券</p>
                                </div>
                                <div class="right-content" v-if='item==="POINTS"'>
                                    <p class="first">奖励内容</p>
                                    <p class="second">{{marketActivityConfig.integral}}积分</p>
                                </div>
                                <div class="right-content" v-if='item==="PRE_PAYED_MONEY"'>
                                    <p class="first">奖励内容</p>
                                    <p class="second">{{marketActivityConfig.balance}}</p>
                                </div>
                                <div class="right-content fl" v-if='item==="CASH_COUPON"'>
                                    <p class="first">奖励内容</p>
                                    <div>
                                        <div class="second second-coupon" v-for='item in marketActivityConfig.cashCouponTemplateList'>
                                            {{item.title}} 
                                            <!-- 满300减30通用券 <span>查看</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="right-content">
                                <p class="first">奖励内容</p>
                                <p class="second">满300减30通用券 <span>查看</span></p>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script>
    import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
    export default {
      data () {
        return {
          marketActivityConfig: {
            balance: 0,
            benefitTypeList: [],
            cashCouponTemplateList: [],
            enable: false,
            integral: 0,
            id: 0
          },
          loading: false
        }
      },
      computed: {
        ...mapGetters(['getUserInfo'])
      },
      mounted () {
    
      },
      async created () {
        // 给具体配置页面传值
        this.loading = true
        let that = this
        let res = await this.marketActivityFetch(that.getUserInfo.companyId)
        if (res) {
          this.loading = false
          res.result.forEach(element => {
            if (element.activityType === 'ACTIVE_CARD_GIFT') {
              that.marketActivityConfig = element
              // 读取配置设置vuex
              that.setOpenCardForm(element)
            }
          })
        }
      },
      methods: {
        ...mapActions(['marketActivityFetch', 'saveOrUpdateMarketActivityFetch']),
        ...mapMutations(['setSuccess', 'closeError', 'setOpenCardForm']),
        modifyConfig () {
          this.goUrl(`/marketingUtils/personNewGiftConfig?activityId=${this.marketActivityConfig.id}`)
        },
        async toggleActivityStatus () {
          this.closeError()
          this.loading = true
          this.marketActivityConfig.enable = !this.marketActivityConfig.enable
          let res = await this.saveOrUpdateMarketActivityFetch(this.marketActivityConfig)
          if (res) {
            this.loading = false
            this.setSuccess('修改成功')
          }
        }
      }
    }
    </script>
    
    <style lang='scss' scoped>
        @import "@/assets/style/common.scss";
        @import "@/assets/style/modifyConfig.scss";
        @import './personNewGift.scss'
    </style>