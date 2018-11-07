<template>
    <div class="main">
      <nav>
        <div class="inner-box fl-row-xbtw-yctr">
          <div class="img"></div>
          <div class="select">
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </nav>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'navTop',
//   data () {
//       return {}
//     },
  created () {

  },
  mounted () {
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'getLoginState'
    ])
  }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/style/common.scss';
    .main{
      height: 60px;
      background: white;
      .inner-box{
        @include paddingLR(56px);
        height: 60px;
        .img{
          width: 36px;
          height: 36px;
          background: black
        }
      }
      .el-dropdown{
        color:rgb(96,98,102)
      }
    }
</style>