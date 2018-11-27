<template>
    <div class="activeSettingView">
        <div class="activeSettingTitle">转发送礼拉新 - 活动配置</div>
        <div class="activeSettingContent">
            <div>
            </div>
            <div>
                <div class="activeSettingInfo">
                    <div class="activeSettingInfoTitle">奖品信息</div>
                    <add-product-component :title='shareUser.title'
                                           :description='shareUser.description'
                                           :type='shareUser.type'
                                           :form='shareUserForm'></add-product-component>
                    <add-product-component :title='newUser.title'
                                          :description='newUser.description'
                                          :type='newUser.type'
                                          :form='newUserForm'></add-product-component>
                    <add-product-component :title='oldUser.title'
                                           :description='oldUser.description'
                                           :type='oldUser.type'
                                           :form='oldUserForm'></add-product-component>
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
      shareUser: {
        title: '分享人',
        description: '分享给好友，好友领取后可获得奖品。奖品可为积分、储值或优惠券。',
        type: 'SHARE_USER'
      },
      newUser: {
        title: '新用户',
        description: '新用户注册后领取奖品。奖品可为积分、储值或优惠券。',
        type: 'NEW_USER'
      },
      oldUser: {
        title: '老用户',
        description: '新用户注册后领取奖品。奖品可为积分、储值或优惠券。',
        type: 'OLD_USER'
      }
    }
  },
  components: {
    addProductComponent: addProductComponent
  },
  computed: {
    ...mapState({
      shareUserForm: state => state.marketingUtils.shareUserForm,
      oldUserForm: state => state.marketingUtils.oldUserForm,
      newUserForm: state => state.marketingUtils.newUserForm
    })
  },
  async created () {
    if (this.$router.currentRoute.query.id !== 'null') {
      this.shareUserForm['id'] = this.$router.currentRoute.query.id
    }
  },
  methods: {
    ...mapActions([
      'saveOrUpdateMarketActivityFetch'
    ]),
    async submit () {
      let configMixin = {}
      configMixin['SHARE_USER'] = this.shareUserForm
      configMixin['OLD_USER'] = this.oldUserForm
      configMixin['NEW_USER'] = this.newUserForm
      let res = await this.saveOrUpdateMarketActivityFetch(configMixin)
      if (res) {
        //   this.goUrl('/marketingUtils')
      }
    }
  }
}
</script>
<style lang='scss'>
@import "./shareGiftConfig.scss";
</style>




