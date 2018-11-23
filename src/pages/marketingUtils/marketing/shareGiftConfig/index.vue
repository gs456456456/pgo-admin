<template>
    <div class="activeSettingView">
        <div class="activeSettingTitle">转发送礼拉新 - 活动配置</div>
        <div class="activeSettingContent">
            <div>
            </div>
            <div>
                <div class="activeSettingInfo">
                    <div class="activeSettingInfoTitle">奖品信息</div>
                    <div class="activeSettingInfoContent">
                      <div class="activeSettingShare">
                        <div class="activeSetting">分享人</div>
                        <div class="prompt fl-col">
                            分享给好友，好友领取后可获得奖品。奖品可为积分、储值或优惠券。
                        </div>
                        <!-- <el-checkbox-group class="fl-row-xbtw-yctr"
                            v-model="form.benefitTypeList">
                            <el-checkbox label="POINTS" border class="check-item">送积分</el-checkbox>
                            <el-checkbox label="CASH_COUPON" class="s1 check-item" border>送储值</el-checkbox>
                            <el-checkbox label="PRE_PAYED_MONEY" class="s2 check-item" border>送优惠券</el-checkbox>
                        </el-checkbox-group> -->
                    </div>
                    <el-button class="btn">添加商品</el-button>
                    </div>
                    <div class="activeSettingInfoContent">
                      <div class="activeSettingShare">
                        <div class="activeSetting">新用户</div>
                        <div class="prompt fl-col">
                            新用户注册后领取奖品。奖品可为积分、储值或优惠券。
                        </div>
                        <!-- <el-checkbox-group class="fl-row-xbtw-yctr"
                            v-model="form.benefitTypeList">
                            <el-checkbox label="POINTS" border class="check-item">送积分</el-checkbox>
                            <el-checkbox label="CASH_COUPON" class="s1 check-item" border>送储值</el-checkbox>
                            <el-checkbox label="PRE_PAYED_MONEY" class="s2 check-item" border>送优惠券</el-checkbox>
                        </el-checkbox-group> -->
                      </div>
                      <div class="activeSettingIntegration">
                        <div class="activeSetting">积分</div>
                        <el-input  placeholder="请填写奖品积分值"></el-input>
                        <span class="activeSettingDelete">删除</span>
                      </div>
                      <el-button class="btn">添加商品</el-button>
                    </div>
                    <div class="activeSettingInfoContent">
                      <div class="activeSettingShare">
                        <div class="activeSetting">分享人</div>
                        <div class="prompt fl-col">
                            老用户也可领取 1 次奖品。奖品可为积分、储值或优惠券。
                        </div>
                        <!-- <el-checkbox-group class="fl-row-xbtw-yctr"
                            v-model="form.benefitTypeList">
                            <el-checkbox label="POINTS" border class="check-item">送积分</el-checkbox>
                            <el-checkbox label="CASH_COUPON" class="s1 check-item" border>送储值</el-checkbox>
                            <el-checkbox label="PRE_PAYED_MONEY" class="s2 check-item" border>送优惠券</el-checkbox>
                        </el-checkbox-group> -->
                    </div>
                    <el-button class="btn">添加商品</el-button>
                    </div>
                    <!-- <div v-if='showPoint'>
                        <div class="activeSetting">积分额</div>
                        <el-input placeholder="请输入内容" type='number' v-model="form.integral"></el-input>
                    </div>
                    <div v-if='showSaving'>
                        <div class="activeSetting">储值</div>
                        <el-input placeholder="请输入内容" type='number' v-model="form.balance"></el-input>
                    </div>
                    <div v-if='showCoupon'>
                        <div class="activeSetting">优惠券</div>
                        <div @click="showCouponList">选择优惠券</div>
                    </div> -->
                    <!-- <div class="activeSettingInfoTitle afterTitle">活动信息</div>
                    <div class="fl-row-yctr">
                        <div class="activeSetting">
                            活动图片
                        </div>
                        <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        上传图片
                        </el-upload>
                    </div> -->
                </div>
                <div class="activeSettingButton" @click="submit">提交</div>
            </div>
        </div>
        <el-dialog :visible.sync="couponIsShow">
            <el-table :data="couponList" @current-change='chooseCoupon' v-loading="loading">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column property="type" label="卡券类别" width="150"></el-table-column>
                <el-table-column property="title" label="卡券标题" width="200"></el-table-column>
                <el-table-column property="sillPrice" label="使用门槛"></el-table-column>
                <el-table-column property="denomination" label="面额(元)"></el-table-column>
                <el-table-column property="expireTime" label="有效期"></el-table-column>
            </el-table>
            <div class="block pagination">
                <el-pagination
                    layout="prev, pager, next"
                    :page-count = "totalPage"
                    @current-change="couponPageChange">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        benefitTypeList: ["POINTS"],
        enable: true,
        activityType: "ACTIVE_CARD_GIFT",
        cashCouponTemplateList: [],
        integral: 0,
        balance: 0
      },
      couponIsShow: false,
      couponList: [],
      page: {
        pageNumber: 1,
        pageSize: 2
      },
      totalPage: 1,
      loading: true
    };
  },
  computed: {
    showPoint() {
      return this.form.benefitTypeList.indexOf("POINTS") > -1;
    },
    showCoupon() {
      return this.form.benefitTypeList.indexOf("CASH_COUPON") > -1;
    },
    showSaving() {
      return this.form.benefitTypeList.indexOf("PRE_PAYED_MONEY") > -1;
    }
  },
  async created() {
    if (this.$router.currentRoute.query.id !== "null") {
      this.form["id"] = this.$router.currentRoute.query.id;
    }
  },
  methods: {
    ...mapActions([
      "saveOrUpdateMarketActivityFetch",
      "listCashCouponTemplateFetch"
    ]),
    showCouponList() {
      this.couponListRender();
      this.couponIsShow = true;
    },
    // 请求渲染优惠券
    async couponListRender() {
      let that = this;
      let res = await this.listCashCouponTemplateFetch(this.page);
      if (res) {
        this.loading = false;
        // 处理显示数据
        res.result.resultList.forEach(element => {
          element["type"] = "代金券";
          if (element.sillPrice === 0) {
            element.sillPrice = "无";
          } else {
            element.sillPrice = `满${element.sillPrice}元`;
          }
          if (element.effectiveStartTime && element.effectiveEndTime) {
            element["expireTime"] = `${that.dateFormat(
              element.effectiveStartTime,
              "yyyy-mm-dd"
            )}至
                ${that.dateFormat(element.effectiveEndTime, "yyyy-mm-dd")}有效`;
          } else if (element.effectiveEndTime) {
            element["expireTime"] = `${that.dateFormat(
              element.effectiveEndTime,
              "yyyy-mm-dd"
            )}之前有效`;
          } else {
            element["expireTime"] = "永久有效";
          }
        });
        this.couponList = res.result.resultList;
        this.totalPage = res.result.totalPage;
      }
    },
    chooseCoupon(val) {
      this.form.cashCouponTemplateId.push(val.id);
      this.couponIsShow = false;
    },
    // 切换页面
    couponPageChange(val) {
      this.loading = true;
      this.page.pageNumber = val;
      this.couponListRender();
    },
    async submit() {
      let res = await this.saveOrUpdateMarketActivityFetch(this.form);
      if (res) {
        //   this.goUrl('/marketingUtils')
      }
    }
  }
};
</script>
<style lang='scss'>
@import "./shareGiftConfig.scss";
</style>




