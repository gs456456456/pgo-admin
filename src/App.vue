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
      showSuccess: state => state.error.showSuccess
    }),
    ...mapGetters(['getError', 'getSuccess'])
  },
  methods: {
    ...mapMutations(['setUserInfo'])
  },
  created () {
    if (localStorage.getItem('userInfo')) {
      this.setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
    }
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
