<template>
    <div class="main">
      <div class='tab-content' v-for='(item,index) in navContent'>
        {{item}}
      </div>
    </div>
</template>
<script>
export default {
  name: 'leftBar',
  data () {
    return {
      navContent: ['线上商城', '门店导购', '营销工具', '数据报表', '设置']
    }
  },
  created () {

  },
  mounted () {
  }
}
</script>
<style scoped lang="scss">
    @import '@/assets/style/common.scss';
    .main{
      font-size: 15px;
      margin-top: 66px;
      text-align: left
    }
    .tab-content{
      margin-bottom: 40px
    }
    .main{
        width: 190px;
        min-width: 190px;
        padding: 0
    }
    @media(max-width:991px){
      .main{
        display: none;
      }
    } 
</style>