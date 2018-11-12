<template>
  <div class="login-container">
    <div class="inner-box">
      <div>
        <div class="title">登录 WiStore 营销后台</div>
        <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px" class="loginForm">
          <div>
              <el-form-item label="账号" prop="username" class="form-item">
                  <el-input v-model="loginForm.userAccount" placeholder="手机号"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" class="form-item">
                <el-input type="password" v-model="loginForm.userPassword" autocomplete="off" placeholder="密码"></el-input>
              </el-form-item>
              <div class="login-select fl-row-xbtw-yctr">
                <div class="left">
                    <el-checkbox v-model="checked">记住账号</el-checkbox>
                </div>
                <div class="right">
                  手机验证码登录
                </div>
              </div>
          </div>
          <el-form-item class="login-btn-container">
            <el-button class='submit' type="primary" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

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
        },
        checked: true,
        loading: false
      }
    },
    computed: {
      ...mapGetters(['getUserInfo'])
    },
    methods: {
      ...mapActions(['userLoginFetch', 'userInfoFetch']),
      ...mapMutations(['setUserInfo']),
      hasLoginFunc (v) {
        if (v) {
          this.goUrl('/marketingUtils')
        }
      },
      remeberUserName () {
        if (this.checked) {
          localStorage.setItem('lastUserName', this.loginForm.userAccount)
        } else {
          localStorage.removeItem('lastUserName')
        }
      },
      async submit () {
        // await this.userInfoFetch()
        let res = await this.userLoginFetch(this.loginForm)
        if (res) {
          let res = await this.userInfoFetch()
          if (res) {
            this.setUserInfo(res.result)
            this.remeberUserName()
            this.goUrl('/marketingUtils')
          }
        }
      }
    },
    mounted () {
      if (localStorage.getItem('lastUserName')) {
        this.loginForm.userAccount = localStorage.getItem('lastUserName')
      }
    },
    created () {
      this.hasLoginFunc(this.getUserInfo)
    },
    watch: {
      // 监听是否登陆,登陆后则跳转
      getUserInfo (currentV, pastV) {
        this.hasLoginFunc(currentV)
      }
    }
  }
</script>
<style lang="scss">
  @import '@/assets/style/common.scss';
  @import './login.scss'
</style>