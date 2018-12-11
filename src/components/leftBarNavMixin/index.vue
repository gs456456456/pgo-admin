<template>
    <div class="leftBarNavMixin fl">
        <left-bar class="left"></left-bar>
        <div class="right">
            <div class="right-inner" :class="showInnerNav?'bottom-border':''">
                <div class="title">
                    {{modulesTitle}}
                </div>
                <inner-nav-top :navTitle='innerNavTitle' class="inner-nav" v-if="showInnerNav">
                </inner-nav-top>
            </div>
            <div class="clearfix slot-outer">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import leftBar from '@/components/leftBar'
    import innerNavTop from '@/components/innerNavTop'
    import { mapActions, mapMutations } from 'vuex'
    export default {
      name: 'leftBarNavMixin',
      data () {
        return {
        //   navContent: [
        //         { name: '线上商城', url: '/', active: false, open: false },
        //         { name: '门店导购', url: '/', active: false, open: false },
        //         { name: '营销工具', url: '/marketingUtils/marketing', active: true, open: true },
        //         { name: '数据报表', url: '/', active: false, open: false },
        //         { name: '设置', url: '/', active: false, open: false }
        //   ]
        }
      },
      components: {
        leftBar: leftBar,
        innerNavTop: innerNavTop
      },
      props: {
        modulesTitle: String,
        innerNavTitle: Array,
        showInnerNav: Boolean
      },
      mounted () {

      },
      methods: {
        // ...mapMutations(['setUserInfo']),
        // ...mapActions(['userInfoFetch'])
      },
      computed: {
      },
      created () {
        // let res = await this.userInfoFetch()
        // if (res) {
        //   console.log(res)
        //   this.setUserInfo(res.result)
        // }
      }
    }
</script>
<style lang='scss' scoped>
    @import './index.scss'
</style>