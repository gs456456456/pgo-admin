<template>
    <div class="shareGiftContent">
        <div class="shareGiftView">
            <div class="shareGiftHead">
                <span class="shareGiftTitle">
                    转发享好礼 - 未开启
                </span>
                <div class="shareGiftButton">
                    <el-button >开启活动</el-button>
                    <el-button >修改</el-button>
                </div>
            </div>
            <div class="shareGiftInfo">
                <div></div>
                <div>
                    <span class="shareGiftActivtyTitle">活动信息</span>
                    <div class="shareGiftState">
                        <div>活动状态</div>
                        <div>未开启</div>
                    </div>
                    <div class="shareGiftType">
                        <div>活动类型</div>
                        <div>转发享好礼</div>
                    </div>
                     <span class="shareGiftActivtyTitle">奖励设置</span>
                    <div class="shareGiftState">
                        <div>奖励类型</div>
                        <div>送积分</div>
                    </div>
                    <div class="shareGiftState">
                        <div>奖励内容</div>
                        <div><span>500</span>积分</div>
                    </div>
                    <div class="shareGiftState">
                        <div>奖励内容</div>
                        <div>满<span>300</span>减<span>30</span>通用券</div>
                        <span class="shareGiftCheck">查看</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
<style lang='scss' >
@import "./shareGift.scss";
</style>

