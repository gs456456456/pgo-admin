<template>
    <div class="openScreenAdvertisementAdd configDescription">
        <div class="activeSettingTitle">新建开屏广告</div>
        <div class="activeSettingContent">
            <div>
                
            </div>
            <div>
                <div class="activeSettingInfo">
                    <div class="activeSettingInfoTitle">广告设置</div>
                    <div class="activeSettingInfoContent">
                        <div class="activeSettingIntegration">
                            <div class="activeSetting">广告名称</div>
                            <el-input placeholder="请填写奖品积分值" v-model="form.name"></el-input>
                        </div>
                        <div class="activeSettingIntegration activeSettingSp">
                            <div class="activeSetting">广告图片</div>
                            <div>
                                <upload-picture></upload-picture>
                                <div class="pic-prompt">请上传JPG/PNG格式，建议图片比例为3:4，大小不超过 1M</div>
                            </div>
                        </div>
                        <div class="activeSettingIntegration activeSettingSp">
                            <div class="activeSetting">广告跳转</div>
                            <div>
                                <div class="link">广告点击跳转去处</div>
                                <el-dropdown trigger="click" @command="selectLink">
                                    <el-button class="btn">添加商品</el-button>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item command="activity">运营活动</el-dropdown-item>
                                        <el-dropdown-item command="firstLevel">精选专场</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="activeSettingButton">提交</div> -->
            </div>
        </div>
        <!-- <el-dialog :visible.sync="couponConfig.couponIsShow" class="coupondialog">
            <el-table ref="couponTable" :data="couponConfig.couponList" @current-change='chooseCoupon' v-loading="loading" highlight-current-row>
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
        </el-dialog> -->
    </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import uploadPicture from '@/components/uploadPicture'
export default {
  name: 'openScreenAdvertisementAdd',
  data () {
    return {
      form: {
        name: ''
      },
      activityList: [

      ],
      firstLevelList: [

      ]
    }
  },
  components: {
    uploadPicture: uploadPicture
  },
  computed: {
    ...mapActions(['getActivityConfig'])

  },
  methods: {
    ...mapMutations(['marketActivityFetch']),
    async selectLink (props) {
      if (props === 'activity') {

      } else {

      }
    }
  }
}
</script>
<style lang='scss'>
    @import "@/assets/style/configDescription.scss";
    @import './addNewOrEdit.scss'
</style>
