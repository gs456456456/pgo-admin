<template>
    <div class="activeSettingView">
        <div class="activeSettingTitle">新人送礼 - 活动配置</div>
        <div class="activeSettingContent">
            <div>
            </div>
            <div>
                <div class="activeSettingInfo">
                    <div class="activeSettingInfoTitle">礼品信息</div>
                    <div>
                        <div class="activeSetting">礼品设置</div>
                        <el-checkbox-group class="fl-row-xbtw-yctr"
                            v-model="form.benefitType">
                            <el-checkbox label="POINTS" border class="check-item">送积分</el-checkbox>
                            <el-checkbox label="CASH_COUPON" class="s1 check-item" border>送储值</el-checkbox>
                            <el-checkbox label="OTHER" class="s2 check-item" border>送优惠券</el-checkbox>
                        </el-checkbox-group>
                        <!-- <div>
                            <el-radio v-model="form.benefitType" label="POINTS">送积分</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.benefitType" label="CASH_COUPON">送卡券</el-radio>
                        </div> -->
                    </div>
                    <!-- <div v-if="form.benefitType==='POINTS'"> -->
                    <div v-if='showPoint'>
                        <div class="activeSetting">积分额</div>
                        <el-input placeholder="请输入内容" type='number' v-model="form.integral"></el-input>
                        <!-- <el-input placeholder="请输入内容" type='number' onkeyup="form.integral=form.integral.replace(/[^\d]/g,'');" ></el-input> -->
                    </div>
                    <!-- <div v-else> -->
                    <div v-if='showCoupon'>
                        <div class="activeSetting">优惠券</div>
                        <div @click="showCouponList">选择优惠券</div>
                    </div>
                    <div class="activeSettingInfoTitle afterTitle">活动信息</div>
                    <div class="fl-row-yctr">
                        <div class="activeSetting">
                            活动图片
                        </div>
                        <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <!-- <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div> -->
                        <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
                        </el-upload>
                    </div>
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
                <el-table-column property="cashCouponSceneType" label="卡券类别" width="150"></el-table-column>
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
        benefitType: ["POINTS"],
        enable: true,
        activityType: "ACTIVE_CARD_GIFT",
        cashCouponTemplateId: [],
        integral: 0
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
      return this.form.benefitType.indexOf("POINTS") > -1;
    },
    showCoupon() {
      return this.form.benefitType.indexOf("CASH_COUPON") > -1;
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
    //请求渲染优惠券
    async couponListRender() {
      let res = await this.listCashCouponTemplateFetch(this.page);
      if (res) {
        this.loading = false;
        this.couponList = res.result.resultList;
        this.totalPage = res.result.totalPage;
      }
    },
    chooseCoupon(val) {
      this.form.cashCouponTemplateId.push(val.id);
      this.couponIsShow = false;
    },
    //切换页面
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
<style lang='scss' scoped>
@import "./personNewGiftConfig.scss";
</style>