<template>
  <div class="main">
    <div class='tab-content' v-for='(item,index) in getNavConfig'>
      <div class="tab-li-big" @click='changeTab(item,"big",index)' :class="item.noActive?'':'tab-hover'">
        <span :class="item.active?'active':''" >
            {{item.name}}
        </span>                  
      </div>
      <!-- <div v-for='(item2,index2) in item.sub' class="tab-li" v-if='item.showTabLi'
           @click='changeTab(item2)' :class="item.subActiveList[index2]?'active':''">
        {{item2.name}}
      </div> -->
        <div v-for='(item2,index2) in getSubNavConfig' class="tab-li"
           @click='changeTab(item2,"sub",index2)' :class="item2.noActive?'':'tab-hover'" v-if='item2.extends===item.name'>
          <span :class="item2.active?'active':''">{{item2.name}}</span>
      </div>
      <div class='line'></div>
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
  import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
  export default {
    name: 'leftBar',
    data () {
      return {
        dialogVisible: false
      }
    },
    computed: {
      ...mapGetters(['getNavConfig', 'getSubNavConfig'])
    },
    created () {
    },
    mounted () {
    },
    methods: {
      ...mapMutations(['setNavConfig', 'setSubNavConfig']),
      tabDataFunc (item, which) {
        let obj = null
        let anotherObj = null
        obj = which === 'sub' ? this.getSubNavConfig : this.getNavConfig
        anotherObj = which === 'sub' ? this.getNavConfig : this.getSubNavConfig
        anotherObj.forEach(it => {
          it.active = false
        })
        obj.forEach(it => {
          it.active = false
          if (item.name === it.name) {
            // it.showTabLi = !it.showTabLi
            it.active = true
          } else {
            // it.showTabLi = false
          }
        })
      },
      changeTab (item, which, index) {
        if (!item.open) {
          this.dialogVisible = true
          return
        }
        // 判断是否可以点击
        if (!item.noActive) {
          this.tabDataFunc(item, which)
        }
        // this.setNavConfig(this.getNavConfig)
        // 页面跳转
        item.url ? this.$router.push(item.url) : 0
        // 保存选项卡设置在本地
        localStorage.setItem('leftBar', which + index)
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
    font-size: 17px;
    .line{
      width:76px;
      height:1px;
      background-color:rgb(232,232,232)
    }
    .tab-li-big{
      padding-bottom: 20px;
      padding-top: 20px
    }
    .tab-li{
      font-size: 14px;
      margin-bottom: 14px;
    }
    .tab-li:last-child{
      margin-bottom: 20px;
    }
    /* .tab-li:hover {
      color: $common-blue !important;
    } */
    /* .tab-li-big:hover{
      color: $common-blue !important;
    } */
    .tab-hover{
      cursor: pointer;
      &:hover{
        color: $common-blue !important;
      }
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