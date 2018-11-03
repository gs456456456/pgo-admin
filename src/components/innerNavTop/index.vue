<template>
    <div class="main">
      <ul class="nav">
        <li v-for='item in navTitle' 
            class="nav-item"
            :class="item.active?'nav-item-active':''"
            @click=changeTab(item)
            >{{item.name}}</li>
      </ul>
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
  name: 'innerNavTop',
  data () {
    return {
      dialogVisible: false
    }
  },
  props: {
    navTitle: Array
  },
  created () {},
  mounted () {},
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
@import "@/assets/style/common.scss";
.main {
  max-width: 900px;
  min-width: 700px;
}
.nav {
  float: left;
  // padding-bottom: 8px;
  // min-width: 600px;
  .nav-item {
    cursor: pointer;
    font-size: 18px;
    padding-bottom: 16px;
    margin-right: 46px;
    padding-left: 0;
    float: left;
    &:hover {
      color: $common-blue;
    }
  }
  .nav-item-active {
    color: $common-blue;
    border-bottom: 2px solid $common-blue;
  }
}
</style>