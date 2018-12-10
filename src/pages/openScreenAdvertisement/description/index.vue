<template>
    <div class="openScreenDescription">
        <left-bar-nav-mixin :innerNavTitle='innerNavTitle'
                            :modulesTitle='modulesTitle'
                            :showInnerNav='showInnerNav'
                            >
        <div class="previewShare-content">
                <div class="content-title">
                    <p>裂变活动20180912</p>
                    <div class="btns">
                        <div class="shareGiftButton">
                            <el-button>投放</el-button>
                            <el-button>编辑</el-button>
                        </div>
                    </div>
                </div>
                <div class="content-content">
                    <div class="content-content-left">
                        <!-- <p>10元代金券</p> -->
                    </div>
                    <div class="content-content-right">
                        <div class="right-top">
                            <p class="right-title">活动信息</p>
                            <div class="right-content">
                                <p class="first">活动状态</p>
                                <p class="second"></p>
                            </div>
                            <div class="right-content">
                                <p class="first">活动类型</p>
                                <p class="second">新人送礼</p>
                            </div>
                        </div>
                        <div class="right-bot">
                            <p class="right-title">奖励设置</p>
                            <!-- <div v-for='item in marketActivityConfig'></div> -->
                            <div class="benefit-list">
                                <div class="right-content">
                                    <p class="first">奖励内容</p>
                                    <p class="second">积分</p>
                                </div>
                            </div>
                            <!-- <div class="right-content">
                                <p class="first">奖励内容</p>
                                <p class="second">满300减30通用券 <span>查看</span></p>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </left-bar-nav-mixin>
    </div>
</template>
    
<script>
import leftBarNavMixin from '@/components/leftBarNavMixin'
export default {
  name: 'openScreenAdvertisementDescription',
  data () {
    return {
      showInnerNav: false,
      modulesTitle: '开屏广告详情',
      innerNavTitle: []
    //   activeLeftBar:''
    }
  },
  components: {
    leftBarNavMixin: leftBarNavMixin
  },
  computed: {
  },
  methods: {
  },
  created () {

  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style lang='scss'>
    @import './description.scss'
</style>