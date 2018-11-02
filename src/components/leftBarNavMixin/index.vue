<template>
    <div class="leftBarNavMixin fl">
        <left-bar class="left"></left-bar>
        <div class="right">
            <div class="right-inner">
                <div class="title">
                    {{modulesTitle}}
                </div>
                <inner-nav-top :navTitle='innerNavTitle' class="inner-nav">
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
    export default {
      name: 'leftBarNavMixin',
      components: {
        leftBar: leftBar,
        innerNavTop: innerNavTop
      },
      props: {
        modulesTitle: String,
        innerNavTitle: Array
      },
      mounted () {

      }
    }
</script>
<style lang='scss' scoped>
    @import './index.scss'
</style>