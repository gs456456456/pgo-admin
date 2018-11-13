<template>
    <div class="previewShare">
        <div class="previewShare-inner">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">营销活动</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">新人礼活动</a></el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 营销活动 <span>/转发享好礼活动</span> -->
        </div>
        <div class="previewShare-content">
            <div class="content-title">
                <p>转发享好礼 - 未开启</p>
                <div class="btns">
                    <div class="shareGiftButton">
                        <el-button>开启活动</el-button>
                        <el-button @click="goUrl('/marketingUtils/shareGiftConfig')">修改</el-button>
                    </div>
                </div>
            </div>
            <div class="content-content">
                <div class="content-content-left">
                    <p>10元代金券</p>
                </div>
                <div class="content-content-right">
                    <div class="right-top">
                        <p class="right-title">活动信息</p>
                        <div class="right-content">
                            <p class="first">活动状态</p>
                            <p class="second">未开启</p>
                        </div>
                        <div class="right-content">
                            <p class="first">活动类型</p>
                            <p class="second">转发享好礼</p>
                        </div>
                    </div>
                    <div class="right-bot">
                        <p class="right-title">奖励设置</p>
                        <div class="right-content">
                            <p class="first">奖励类型</p>
                            <p class="second">送积分</p>
                        </div>
                        <div class="right-content">
                            <p class="first">奖励内容</p>
                            <p class="second">500积分</p>
                        </div>
                        <div class="right-content">
                            <p class="first">奖励内容</p>
                            <p class="second">满300减30通用券 <span>查看</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang='scss' scoped>
    @import './shareGift.scss'
</style>