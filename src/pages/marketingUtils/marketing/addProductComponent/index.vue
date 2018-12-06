<template>
    <div class="addProductComponent">
        <div class="activeSettingInfoContent">
            <div class="activeSettingShare">
                <div class="activeSetting">{{title}}</div>
                <div class="prompt fl-col">
                    {{description}}
                </div>
            </div>
            <div class="activeSettingIntegration" v-if='showPoint'>
                <div class="activeSetting">积分</div>
                <el-input  placeholder="请填写奖品积分值" v-model="form.integral"></el-input>
                <span class="activeSettingDelete" @click='delSelect("integral")'>删除</span>
                </div>
                <div class="activeSettingIntegration" v-if='showBalance'>
                <div class="activeSetting">储值</div>
                <el-input  placeholder="请填写储值" v-model="form.balance"></el-input>
                <span class="activeSettingDelete" @click='delSelect("balance")'>删除</span>
                </div>
                <!-- <div class="activeSettingIntegration coupon" v-for='(item,index) in couponConfig.multipleSelection' @click='showCouponList(index)'> -->
                <div class="activeSettingIntegration coupon" v-for='(item,index) in form.cashCouponTemplateList' @click='showCouponList(index)'>
                    <div class="activeSetting">优惠券</div>
                    <el-button class="selectCoupon">
                        <!-- {{couponConfig.couponTextList[index]||'请选择优惠券'}}<i class="el-icon-arrow-down el-icon--right"></i> -->
                        {{item&&item.hasOwnProperty('title')?item.title:'请选择优惠券'}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <span class="activeSettingDelete" @click.stop='delSelect("coupon",index)'>删除</span>
                </div>
            <el-dropdown class="drop-down" trigger="click" @command="showSelect">
            <el-button class="btn">添加商品
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="integral">送积分</el-dropdown-item>
                <el-dropdown-item command="balance">送储值</el-dropdown-item>
                <el-dropdown-item command="coupon">送优惠券</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog :visible.sync="couponConfig.couponIsShow" class="coupondialog">
                <el-table ref="couponTable" :data="couponConfig.couponList" @current-change='chooseCoupon' v-loading="loading" highlight-current-row>
                    <!-- <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column> -->
                    <el-table-column property="type" label="卡券类别" width="150"></el-table-column>
                    <el-table-column property="title" label="卡券标题" width="200"></el-table-column>
                    <el-table-column property="sillPrice" label="使用门槛"></el-table-column>
                    <el-table-column property="denomination" label="面额(元)"></el-table-column>
                    <el-table-column property="expireTime" width="280" label="有效期"></el-table-column>
                </el-table>
                <div class="block pagination">
                    <el-pagination
                        layout="prev, pager, next"
                        :page-count = "totalPage"
                        @current-change="couponPageChange">
                    </el-pagination>
                </div>
                <el-button type="primary" @click="submitCoupon" class="confirm-btn">确定</el-button>
                <el-button class="cancel-btn" @click="closeCoupon">取消</el-button>
            </el-dialog>
            <el-dialog
              title="提示"
              :visible.sync="errorDialog.repeatError"
              width="30%">
              <span>已添加{{errorDialog.errorType}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="errorDialog.repeatError = false">确 定</el-button>
              </span>
            </el-dialog>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'addProductComponent',
  data () {
    return {
      couponConfig: {
        couponIsShow: false,
        couponList: [],
        // multipleSelection: [],
        couponNow: 0,
        couponNowText: '',
        couponNowObj: null
        // couponTextList: []
      },
      page: {
        pageNumber: 1,
        pageSize: 5
      },
      totalPage: 1,
      loading: true,
      errorDialog: {
        errorType: '',
        repeatError: false
      }
    }
  },
  props: {
    title: String,
    description: String,
    type: String,
    form: Object
  },
  computed: {
    showPoint () {
      return this.form.benefitTypeList.indexOf('POINTS') > -1
    },
    showCoupon () {
      return this.form.benefitTypeList.indexOf('CASH_COUPON') > -1
    },
    showBalance () {
      return this.form.benefitTypeList.indexOf('PRE_PAYED_MONEY') > -1
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    ...mapMutations(['setShareUserForm', 'setOldUserForm', 'setNewUserForm', 'setOpenCardForm']),
    ...mapActions([
      'listCashCouponTemplateFetch'
    ]),
    delSelect (props, index) {
      let that = this
      if (props === 'integral') {
        this.form.benefitTypeList = this.removeArray(that.form.benefitTypeList, 'POINTS')
      } else if (props === 'balance') {
        this.form.benefitTypeList = this.removeArray(that.form.benefitTypeList, 'PRE_PAYED_MONEY')
      } else if (props === 'coupon') {
        // this.couponConfig.multipleSelection.splice(this.couponConfig.couponNow, 1)
        this.form.cashCouponTemplateList.splice(index, 1)
        this.couponConfig.couponTextList = []
        // 判断是否是最后张优惠券
        if (this.form.cashCouponTemplateList.length < 1) {
          this.form.benefitTypeList = this.removeArray(that.form.benefitTypeList, 'CASH_COUPON')
        }
      } else {

      }
    },
    closeCoupon () {
      // this.setCurrentCoupon(this.couponConfig.couponList[this.couponConfig.couponNow])
      this.couponConfig.couponIsShow = false
    },
    showSelect (props) {
      if (props === 'integral') {
        if (this.showPoint) {
          this.errorDialog.errorType = '积分'
          this.errorDialog.repeatError = true
        } else {
          this.form.benefitTypeList.push('POINTS')
        }
      } else if (props === 'balance') {
        if (this.showBalance) {
          this.errorDialog.errorType = '储值'
          this.errorDialog.repeatError = true
        } else {
          this.form.benefitTypeList.push('PRE_PAYED_MONEY')
        }
      } else if (props === 'coupon') {
        // this.couponConfig.multipleSelection.push([])
        this.form.cashCouponTemplateList.push({})
        if (!this.showCoupon) {
          this.form.benefitTypeList.push('CASH_COUPON')
        }
      } else {

      }
    },
    setCurrentCoupon (row) {
      this.$refs.couponTable.setCurrentRow(row)
    },
    showCouponList (index) {
      this.couponConfig.couponNow = index
      // console.log(index)
      // 第一次进入配置页面
      // couponNowObj
      this.couponListRender()
      this.couponConfig.couponIsShow = true
    },
    // 请求渲染优惠券
    async couponListRender () {
      let that = this
      let res = await this.listCashCouponTemplateFetch(this.page)
      if (res) {
        this.loading = false
        // 处理显示数据
        res.result.resultList.forEach(element => {
          element['type'] = '代金券'
          if (element.sillPrice === 0) {
            element.sillPrice = '无'
          } else {
            element.sillPrice = `满${element.sillPrice}元`
          }
          if (element.effectiveStartTime && element.effectiveEndTime) {
            element['expireTime'] = `${that.dateFormat(
              element.effectiveStartTime,
              'yyyy-mm-dd'
            )}至
                ${that.dateFormat(element.effectiveEndTime, 'yyyy-mm-dd')}有效`
          } else if (element.effectiveEndTime) {
            element['expireTime'] = `${that.dateFormat(
              element.effectiveEndTime,
              'yyyy-mm-dd'
            )}之前有效`
          } else {
            element['expireTime'] = '永久有效'
          }
        })
        this.couponConfig.couponList = res.result.resultList
        this.totalPage = res.result.totalPage
      }
    },
    submitCoupon () {
      // this.form.cashCouponTemplateList = []
      // this.couponConfig.couponTextList = []
      this.form.cashCouponTemplateList.forEach((v1, i1, a1) => {
        v1['cashCouponTemplateId'] = v1.id
        v1['count'] = 1
        // postObj['cashCouponTemplateId'] = v1.id
        // that.form.cashCouponTemplateList.push(postObj)
        // that.couponConfig.couponTextList.push(v1.title)
        // this.couponConfig.multipleSelection.forEach((v1, i1, a1) => {
        // 多选逻辑
        // let _couponText = ''
        // v1.forEach((v2, i2, a2) => {
        //   // 处理给后端的数据
        //   let postObj = {
        //     cashCouponTemplateId: 0,
        //     count: 1
        //   }
        //   postObj['cashCouponTemplateId'] = v2.id
        //   that.form.cashCouponTemplateList.push(postObj)

        //   // 处理显示文本
        //   _couponText += `${v2.title} `
        //   if (i2 === a2.length - 1) {
        //     that.couponConfig.couponTextList.push(_couponText)
        //   }
        // })
        // }
      })
      this.couponConfig.couponIsShow = false
    },
    chooseCoupon (val) {
      // 储存优惠券
      // console.log(couponNow)
      // console.log(val)
      if (val) {
        let couponNow = this.couponConfig.couponNow
        this.form.cashCouponTemplateList[couponNow] = val
      }
    },
    // 切换页面
    couponPageChange (val) {
      this.loading = true
      this.page.pageNumber = val
      this.couponListRender()
    }
  },
  watch: {
    form: {
      handler (cv, pv) {
        let that = this
        switch (that.type) {
          case 'SHARE_USER':
            that.setShareUserForm(cv)
            break
          case 'OLD_USER':
            that.setOldUserForm(cv)
            break
          case 'NEW_USER':
            that.setNewUserForm(cv)
            break
          case 'SHARE_GIFT':
            that.setOpenCardForm(cv)
            break
          default:
            break
        }
      },
      deep: true
    }
  }
}
</script>
<style scoped lang="scss">
</style>