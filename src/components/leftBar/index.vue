<template>
  <div class="main">
    <div class='tab-content' v-for='(item,index) in navContent'>
      <div class="tab-li-big" @click='changeTab(item)' :class="item.active?'active':''">
        {{item.name}}
      </div>
      <div v-for='(item2,index2) in item.sub' class="tab-li" v-if='item.showTabLi'
           @click='changeTab(item2,item)' :class="item2.active?'active':''">
        {{item2.name}}
      </div>
      <!-- <div class='line'></div> -->
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
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
          { name: '线上商城',
            sub: [{
              name: '精选专场',
              active: false,
              url: '/',
              open: false
            }, {
              name: '开屏广告',
              active: false,
              url: '/openScreenAdvertisement/description',
              open: true
            }],
            url: false,
            active: false,
            open: true,
            showTabLi: false},
          { name: '门店导购', sub: [], url: '/', active: false, open: false, showTabLi: false },
          { name: '营销工具', sub: [], url: '/marketingUtils/marketing', active: true, open: true, showTabLi: false },
          { name: '数据报表', sub: [], url: '/', active: false, open: false, showTabLi: false },
          { name: '设置', sub: [], url: '/', active: false, open: false, showTabLi: false }
        ],
        dialogVisible: false
      }
    },
    computed: {
      // showTabLi () {
      //   return this.navContent.filter((item) => {
      //     return item.showTabLi
      //   })
      // }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      tabDataFunc (item, orgItem) {
        // 判断是否是一级目录
        // obj = orgItem ? this.navContent : orgItem.sub
        this.navContent.forEach(it => {
          it.active = false
          if (item.name === it.name) {
            console.log(item.name)
            // 如果没有子路由
            console.log(it)
            if (it.sub.length > 0) {
              it.showTabLi = !it.showTabLi
            }
            it.active = true
          }
        })
      },
      changeTab (item, orgItem) {
        if (!item.open) {
          this.dialogVisible = true
          return
        }
        this.tabDataFunc(item, orgItem)
        item.url ? this.$router.push(item.url) : 0
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '@/assets/style/common.scss';

  .main {
    font-size: 15px;
    margin-top: 66px;
    text-align: left
  }

  .tab-content {
    /* border-bottom: 1px solid rgb(232,232,232); */
    color: black !important;
    cursor: pointer;
    font-size: 17px;
    .line{
      width:76px;
      height:1px;
      background-color:rgb(232,232,232)
    }
    .tab-li-big{
      padding-bottom: 30px
    }
    .tab-li{
      font-size: 14px;
      margin-bottom: 14px;
    }
    .tab-li:last-child{
      margin-bottom: 20px;
    }
    .tab-li:hover {
      color: $common-blue !important;
    }
    .tab-li-big:hover{
      color: $common-blue !important;
    }
    /* &:hover {
      color: $common-blue !important;
    } */
  }

  .active {
    color: $common-blue !important;
  }

  .main {
    width: 190px;
    min-width: 190px;
    padding: 0
  }

  @media(max-width:991px) {
    .main {
      display: none;
    }
  }
</style>