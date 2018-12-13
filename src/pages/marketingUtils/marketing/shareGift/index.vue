<template>
    <div class="ShareGift">
        <div class="previewShare-inner">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">营销活动</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">分享礼活动</a></el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 营销活动 <span>/转发享好礼活动</span> -->
        </div>
        <div class="previewShare-content">
            <div class="content-title">
                <p>转发享好礼 - {{activityEnable?'已开启':'未开启'}}</p>
                <div class="btns">
                    <div class="shareGiftButton">
                        <el-button @click="toggleActivityStatus">{{activityEnable?'关闭活动':'开启活动'}}</el-button>
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
                            <p class="second">{{activityEnable?'已开启':'未开启'}}</p>
                        </div>
                        <div class="right-content">
                            <p class="first">活动类型</p>
                            <p class="second">转发享好礼</p>
                        </div>
                    </div>
                    <div class="right-bot">
                        <p class="right-title">奖励设置</p>
                        <!-- <div v-for='item in marketActivityConfig'></div> -->

                        <div class="user-type-container">
                            <div class="user-type" v-if='getShareUserForm.benefitTypeList.length>=1'>分享用户</div>
                            <div v-for='item in getShareUserForm.benefitTypeList'>
                                <div class="right-content">
                                    <p class="first">奖励类型</p>
                                    <p class="second" v-if='item==="POINTS"'>送积分</p>
                                    <p class="second" v-if='item==="PRE_PAYED_MONEY"'>送储值</p>
                                    <p class="second" v-if='item==="CASH_COUPON"'>送卡券</p>
                                </div>
                                <div class="right-content" v-if='item==="POINTS"'>
                                    <p class="first">奖励内容</p>
                                    <p class="second">{{getShareUserForm.integral}}积分</p>
                                </div>
                                <div class="right-content" v-if='item==="PRE_PAYED_MONEY"'>
                                    <p class="first">奖励内容</p>
                                    <p class="second">{{getShareUserForm.balance}}</p>
                                </div>
                                <div class="right-content fl" v-if='item==="CASH_COUPON"'>
                                    <p class="first">奖励内容</p>
                                    <div>
                                        <div class="second second-coupon" v-for='item in getShareUserForm.cashCouponTemplateList'>
                                            {{item.title}} 
                                            <!-- 满300减30通用券 <span>查看</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  class="user-type-container">
                                <div class="user-type" v-if='getNewUserForm.benefitTypeList.length>=1'>新用户</div>
                                <div v-for='item in getNewUserForm.benefitTypeList'>
                                    <div class="right-content">
                                            <p class="first">奖励类型</p>
                                            <p class="second" v-if='item==="POINTS"'>送积分</p>
                                            <p class="second" v-if='item==="PRE_PAYED_MONEY"'>送储值</p>
                                            <p class="second" v-if='item==="CASH_COUPON"'>送卡券</p>
                                    </div>
                                    <div class="right-content" v-if='item==="POINTS"'>
                                        <p class="first">奖励内容</p>
                                        <p class="second">{{getNewUserForm.integral}}积分</p>
                                    </div>
                                    <div class="right-content" v-if='item==="PRE_PAYED_MONEY"'>
                                        <p class="first">奖励内容</p>
                                        <p class="second">{{getNewUserForm.balance}}</p>
                                    </div>
                                    <div class="right-content fl" v-if='item==="CASH_COUPON"'>
                                        <p class="first">奖励内容</p>
                                        <div>
                                            <div class="second second-coupon" v-for='item in getNewUserForm.cashCouponTemplateList'>
                                                {{item.title}} 
                                                <!-- 满300减30通用券 <span>查看</span> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="user-type-container">
                            <div class="user-type" v-if='getOldUserForm.benefitTypeList.length>=1'>老用户</div>
                            <div v-for='item in getOldUserForm.benefitTypeList' >
                                <div class="right-content">
                                    <p class="first">奖励类型</p>
                                    <p class="second" v-if='item==="POINTS"'>送积分</p>
                                    <p class="second" v-if='item==="PRE_PAYED_MONEY"'>送储值</p>
                                    <p class="second" v-if='item==="CASH_COUPON"'>送卡券</p>
                                </div>
                                <div class="right-content" v-if='item==="POINTS"'>
                                    <p class="first">奖励内容</p>
                                    <p class="second">{{getOldUserForm.integral}}积分</p>
                                </div>
                                <div class="right-content" v-if='item==="PRE_PAYED_MONEY"'>
                                    <p class="first">奖励内容</p>
                                    <p class="second">{{getOldUserForm.balance}}</p>
                                </div>
                                <div class="right-content fl" v-if='item==="CASH_COUPON"'>
                                    <p class="first">奖励内容</p>
                                    <div>
                                        <div class="second second-coupon" v-for='item in getOldUserForm.cashCouponTemplateList'>
                                            {{item.title}} 
                                            <!-- 满300减30通用券 <span>查看</span> -->
                                        </div>
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
    //   marketActivityConfig: {
    //     balance: 0,
    //     benefitTypeList: [],
    //     cashCouponTemplateList: [],
    //     enable: false,
    //     integral: 0,
    //     id: 0
    //   },
      activityEnable: false,
      activityEventList: null,
      activityId: {
        new: '',
        share: '',
        old: ''
      },
      marketActivityConfig: []
    }
  },
  computed: {
    ...mapGetters(['getUserInfo', 'getNewUserForm', 'getOldUserForm', 'getShareUserForm'])
  },
  mounted () {

  },
  async created () {
    // 给具体配置页面传值
    let that = this
    let res = await this.marketActivityFetch(that.getUserInfo.companyId)
    if (res) {
      res.result.forEach(element => {
        console.log(element.id)
        if (element.activityType === 'SHARE_GIFT') {
          switch (element.benefitUserType) {
            case 'SHARE_USER':
              that.activityId.share = element.id
              break
            case 'OLD_USER':
              that.activityId.old = element.id
              break
            case 'NEW_USER':
              that.activityId.new = element.id
              break
          }
          that.activityEnable = element.enable
          that.activityEventList = element.eventsList ? element.eventsList : null
          that.marketActivityConfig.push(element)
          if (element.benefitUserType === 'NEW_USER') {
            that.setNewUserForm(element)
          } else if (element.benefitUserType === 'OLD_USER') {
            that.setOldUserForm(element)
          } else if (element.benefitUserType === 'SHARE_USER') {
            that.setShareUserForm(element)
          }
           // 读取配置设置vuex
        }
      })
      console.log(this.activityId)
    }
  },
  methods: {
    ...mapActions(['marketActivityFetch', 'saveOrUpdateBenefitMarketActivity']),
    ...mapMutations(['setSuccess', 'closeError', 'setShareUserForm', 'setNewUserForm', 'setOldUserForm']),
    modifyConfig () {
      this.goUrl(`/marketingUtils/shareGiftConfig?new=${this.activityId.new}&old=${this.activityId.old}&share=${this.activityId.share}&eventsList=${this.activityEventList}`)
    },
    async toggleActivityStatus () {
      this.closeError()
      this.loading = true
      this.marketActivityConfig.forEach((element) => {
        element.enable = !element.enable
      })
      let res = await this.saveOrUpdateBenefitMarketActivity(this.marketActivityConfig)
      if (res) {
        this.activityEnable = !this.activityEnable
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
    @import './shareGift.scss'
</style>