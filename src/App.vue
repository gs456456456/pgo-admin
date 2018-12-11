<template>
  <div id="app">
    <nav-top></nav-top>
    <el-alert v-if='showError'
      :title='getError'
      type="error"
      style="position: absolute;">
    </el-alert>
    <el-alert v-if='showSuccess'
      :title='getSuccess'
      type="success"
      style="position: absolute;">
    </el-alert>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import navTop from '@/components/navTop'
export default {
  name: 'App',
  components: {
    navTop: navTop
  },
  computed: {
    ...mapState({
      showError: state => state.error.showError,
      showSuccess: state => state.error.showSuccess,
      navConfig: state => state.config.navConfig,
      subNavConfig: state => state.config.subNavConfig
    }),
    ...mapGetters(['getError', 'getSuccess'])
  },
  methods: {
    ...mapMutations(['setUserInfo', 'setNavConfig', 'setSubNavConfig']),
    // 初始化本地设置
    initLocalConfig () {
      this.initUserInfo()
      this.initLeftBarConfig()
    },
    initUserInfo () {
      if (localStorage.getItem('userInfo')) {
        this.setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
      }
    },
    initLeftBarConfig () {
      if (localStorage.getItem('leftBar')) {
        let whichLeftBar = localStorage.getItem('leftBar').slice(0, 3)
        let index = localStorage.getItem('leftBar').substring(3, 4)
        if (whichLeftBar === 'sub') {
          this.subNavConfig.forEach(element => {
            element.active = false
          })
          this.subNavConfig[index].active = true
        } else {
          this.navConfig.forEach(element => {
            element.active = false
          })
          this.navConfig[index].active = true
        }
      }
    }
  },
  created () {
    this.initLocalConfig()
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/style/common.scss';
  /* #app{
    width: 100%;
    font-family:'PingFang-SC-Regular'
  } */
  .router-link-active {
    text-decoration: none;
  }
</style>
