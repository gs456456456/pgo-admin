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
                        <div class="activeSettingIntegration activeSettingUpload">
                            <div class="activeSetting">广告图片</div>
                            <upload-picture></upload-picture>
                        </div>
                        <div class="activeSettingIntegration">
                            <div class="activeSetting">广告跳转</div>
                            <div>
                                <span class="link">广告点击跳转去处</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="activeSettingButton">提交</div> -->
            </div>
        </div>

    </div>
</template>
<script>
import uploadPicture from '@/components/uploadPicture'
export default {
  name: 'openScreenAdvertisementAdd',
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  components: {
    uploadPicture: uploadPicture
  }
}
</script>
<style lang='scss'>
    @import "@/assets/style/configDescription.scss";
    @import './add.scss'
</style>
