<template>
  <div class="login-container" v-loading="loading">
    <div class="inner-box">
      <div>
        <div class="title">登录 WiStore 营销后台</div>
        <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px" class="loginForm">
          <div>
                  <el-form-item label="账号" prop="username" class="form-item">
                      <el-input v-model="loginForm.userAccount" placeholder="手机号"></el-input>
                  </el-form-item>
              <div v-if="loginMethod==='username'">                
                  <el-form-item label="密码" prop="password" class="form-item">
                    <el-input type="password" v-model="loginForm.userPassword" autocomplete="off" placeholder="密码"></el-input>
                  </el-form-item>
              </div>
              <div v-else>
                  <el-form-item label="验证码" class="form-item" prop="validCode">
                      <el-input class="input sms-input" placeholder="请输入验证码" v-model='loginForm.validCode'></el-input>
                      <sms-btn :phone='loginForm.userAccount' type='login' class="send-sms"></sms-btn>
                      <div class="btn"></div>
                  </el-form-item>
              </div>
              <div class="login-select fl-row-xbtw-yctr">
                <div>
                    <el-checkbox v-model="checked">记住账号</el-checkbox>
                </div>
                <div @click='changeLoginMethod' style="cursor:pointer">
                  <span v-if="loginMethod==='username'">手机验证码登录</span>
                  <span v-else>用户名密码登录</span>
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
  import smsBtn from '@/components/smsBtn'
  export default {
    name: 'login',
    components: {
      smsBtn: smsBtn
    },
    data () {
      return {
        loginForm: {
          userAccount: '',
          userPassword: '',
          loginType: 'ACCOUNT',
          validCode: ''
        },
        checked: true,
        loading: false,
        loginMethod: 'username'
      }
    },
    computed: {
      ...mapGetters(['getUserInfo'])
    },
    methods: {
      ...mapActions(['userLoginFetch', 'userInfoFetch']),
      ...mapMutations(['setUserInfo']),
      hasLoginFunc (v) {
        if (v && v !== 'null') {
          this.goUrl('/marketingUtils')
        }
      },
      changeLoginMethod () {
        if (this.loginMethod === 'username') {
          this.loginMethod = 'phoneCaptcha'
          this.loginForm.loginType = 'PHONE_VALID_CODE'
        } else {
          this.loginMethod = 'username'
          this.loginForm.loginType = 'ACCOUNT'
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
        let res = null
        this.loading = true
        try {
          res = await this.userLoginFetch(this.loginForm)
        } catch (e) {
          this.loading = false
        }
        if (res) {
          let userInfo = await this.userInfoFetch()
          if (userInfo) {
            this.loading = false
            this.setUserInfo(userInfo.result)
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
      this.hasLoginFunc(localStorage.getItem('userInfo'))
    },
    watch: {
      // 监听是否登陆,登陆后则跳转
      // getUserInfo (currentV, pastV) {
      //   this.hasLoginFunc(currentV)
      // }
    }
  }
</script>
<style lang="scss">
  @import '@/assets/style/common.scss';
  @import './login.scss'
</style>