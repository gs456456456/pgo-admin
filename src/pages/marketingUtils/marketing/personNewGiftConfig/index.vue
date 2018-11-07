<template>
    <div class="activeSettingView">
        <div class="activeSettingTitle">新人送礼 - 活动配置</div>
        <div class="activeSettingContent">
            <div>
            </div>
            <div>
                <div class="activeSettingInfo">
                    <div class="activeSettingInfoTitle">活动信息</div>
                    <div>
                        <div class="activeSetting">礼品设置</div>
                        <div>
                            <el-radio v-model="radio" label="1">送积分</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="radio" label="2">送卡券</el-radio>
                        </div>
                    </div>
                    <div>
                        <div class="activeSetting">积分额</div>
                        <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div>
                        <div class="activeSetting">优惠券</div>
                         <el-select placeholder="选择优惠券">
                             <el-option>
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="activeSettingButton">提交</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
<style lang='scss' scoped>
    @import './personNewGiftConfig.scss'
</style>