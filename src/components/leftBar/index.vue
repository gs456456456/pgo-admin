<template>
    <div class="main">
      <div class='tab-content' v-for='(item,index) in navContent' 
                 :class="item.active?'active':''"
                 @click=changeTab(item)>
          {{item.name}}
      </div>
      <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%">
          <span>功能暂未开放</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'leftBar',
  data () {
    return {
      navContent: [
        {name: '线上商城', url: '/', active: false, open: false},
        {name: '门店导购', url: '/', active: false, open: false},
        {name: '营销工具', url: '/marketingUtils/marketing', active: true, open: true},
        {name: '数据报表', url: '/', active: false, open: false},
        {name: '设置', url: '/', active: false, open: false}
      ],
      dialogVisible: false
    }
  },
  created () {

  },
  mounted () {
  },
  methods: {
    tabNotActive () {
      this.navTitle.forEach(element => {
        element.active = false
      })
    },
    changeTab (item) {
      if (!item.open) {
        this.dialogVisible = true
        return
      }
      this.tabNotActive()
      item.active = true
      this.$router.push(item.url)
    }
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
      margin-bottom: 40px;
      color:black!important;
      cursor: pointer;
      &:hover{
        color:$common-blue!important;
      }
    }
    .active{
      color:$common-blue!important;
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