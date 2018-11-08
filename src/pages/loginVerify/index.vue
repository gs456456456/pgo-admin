<template>
    <div class="loginVerify">
        <div class="register-container">
            <p class="title">当前帐号待验证</p>
            <p class="content">
                <p>手机 {{getUserInfo.phone}} 已成功注册 ”予能科技公司” 运营后台。</p>
                <p>当前帐号待验证，请管理员至 wisenable.com 后台通过验证后，</p>
                <p>可正常使用所有功能。</p>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loginVerify',
  computed: {
    ...mapGetters(['getUserInfo'])
  },
  methods: {
  },
  created () {

  },
  mounted () {
  },
  watch: {
    // el-step__icon is-text
  }
}
</script>
<style lang="scss">
    @import '@/assets/style/common.scss';
    @import './loginVerify.scss'
</style>