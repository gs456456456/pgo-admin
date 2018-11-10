<template>
    <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.userAccount"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.userPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        userAccount: '',
        userPassword: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getLoginState'])
  },
  methods: {
    ...mapActions(['userLoginFetch', 'userInfoFetch']),
    ...mapMutations(['setLoginState']),
    hasLoginFunc (v) {
      if (v) {
        this.goUrl('/marketingUtils')
      }
    },
    async submit () {
          // await this.userInfoFetch()
      let res = await this.userLoginFetch(this.loginForm)
      if (res) {
        this.setLoginState(true)
        this.goUrl('/marketingUtils')
      }
    }
  },
  created () {
    this.hasLoginFunc(this.getLoginState)
  },
  watch: {
      // 监听是否登陆,登陆后则跳转
    getLoginState (currentV, pastV) {
      this.hasLoginFunc(currentV)
    }
  }
}
</script>