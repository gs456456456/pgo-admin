<template>
    <div class="personNewConfig" v-loading='loading'>
        <div class="activeSettingTitle">新人送礼 - 活动配置</div>
        <div class="activeSettingContent">
            <div>
            </div>
            <div>
                <div class="activeSettingInfo">
                    <div class="activeSettingInfoTitle">奖品信息</div>
                    <add-product-component :title='openCard.title'
                                           :description='openCard.description'
                                           :type='openCard.type'
                                           :form='openCardForm'></add-product-component>
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

    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import addProductComponent from '../addProductComponent'
export default {
  data () {
    return {
      openCard: {
        title: '开卡礼品',
        description: '新用户开卡填写手机号即送礼品',
        type: 'SHARE_USER'
      },
      loading: false
    }
  },
  components: {
    addProductComponent: addProductComponent
  },
  computed: {
    ...mapState({
      openCardForm: state => state.marketingUtils.openCardForm
    })
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'saveOrUpdateMarketActivityFetch'
    ]),
    async submit () {
      let that = this
      // 判断是更新还是第一次进活动
      let activityId = this.$router.currentRoute.query.activityId
      this.loading = true
      if (activityId) {
        this.openCardForm['id'] = activityId
      }
      let res = await this.saveOrUpdateMarketActivityFetch(that.openCardForm)
      if (res) {
        this.loading = false
        this.goUrl('/marketingUtils')
      }
    }
  }
}
</script>
<style lang='scss'>
@import "./personNewGiftConfig.scss";
</style>




