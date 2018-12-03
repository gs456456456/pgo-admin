<template>
  <div class="register-container-s" v-loading='loading'>
    <el-steps :active="1" simple class="title">
      <el-step title="验证公司邮箱" class="now-step" icon='el-icon-circle-check-outline'></el-step>
      <el-step title="注册账号" ref='stepNumber'></el-step>
    </el-steps>
    <div></div>
    <div class="down-container fl">
      <!-- <div class="left"> -->
      <el-form class="left" :model="registerParms" ref="registerForm">
        <el-form-item label="注册手机" class="form-item" prop="phoneNumber" :rules="rules.phone">
          <!-- <span>注册手机</span> -->
          <el-input class="input" v-model='registerParms.phoneNumber' placeholder="手机号"></el-input>
          <sms-btn :phone='registerParms.phoneNumber' type='register'></sms-btn>
          <!-- <el-button class="btn" @click='sendPhoneCaptcha'>{{intervalText}}</el-button> -->
        </el-form-item>
        <p class="prompt">每个手机只能注册一次。</p>
        <el-form-item label="验证码" class="form-item" prop="validCode" :rules="rules.validCode">
          <el-input class="input" placeholder="请输入验证码" v-model='registerParms.validCode'></el-input>
          <div class="btn"></div>
        </el-form-item>
        <el-form-item label="密码" class="form-item" prop="password" :rules="rules.password">
          <el-input class="input" placeholder="请输入密码" type='password' v-model='registerParms.password' @keyup.native='replaceSpace'></el-input>
          <div class="btn"></div>
        </el-form-item>
        <el-form-item label="确认密码" class="form-item last-form-item" prop="repassword" :rules="rules.repassword">
          <el-input class="input" placeholder="请输入密码" type='password' v-model='registerParms.repassword' @keyup.native='replaceSpace'></el-input>
          <div class="btn"></div>
        </el-form-item>
        <div class="submit">
          <el-button type="primary" class="btn" @click='submit'>验证并继续</el-button>
        </div>
      </el-form>
      <!-- </div> -->
      <div class="right">
        <p>已有账号?<span @click="goUrl('/login')" style="cursor:pointer">立即登录</span></p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapMutations } from 'vuex'
  import smsBtn from '@/components/smsBtn'
  import { error } from 'util'
  export default {
    name: 'firststep',
    components: {
      smsBtn: smsBtn
    },
    data () {
      let phoneVerify = (rule, value, callback) => {
        const TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
        if (TEL_REGEXP.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的手机格式'))
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.registerParms.password !== '') {
            this.$refs.registerForm.validateField('repassword')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.registerParms.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      let repasswordVerify = (rule, value, callback) => {
        if (this.registerParms.password != this.registerParms.repassword) {
          callback(new Error('密码不一致'))
        } else {
          callback()
        }
      }
      return {
        registerParms: {
          token: '',
          phoneNumber: '',
          password: '',
          repassword: '',
          validCode: ''
        },
        loading: false,
        rules: {
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            {
              validator: phoneVerify,
              message: '请输入正确的手机格式',
              trigger: ['blur', 'change']
            }
          ],
          validCode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          password: [
            { required: true, validator: validatePass, trigger: ['blur', 'change']}
          ],
          repassword: [
            { required: true, validator: validatePass2, trigger: ['blur', 'change'] }
          ]
        }
      }
    },
    computed: {},
    methods: {
      ...mapMutations(['setUserInfo']),
      ...mapActions(['userRegisterFetch', 'userRegisterValidateTokenFetch']),
      replaceSpace () {
        this.registerParms.password = this.registerParms.password.trim()
        this.registerParms.repassword = this.registerParms.repassword.trim()
        return 0
      },
      submit () {
        let that = this
        this.$refs.registerForm.validate(async function (result) {
          if (result) {
            let res = null
            this.loading = true
            try {
              res = await this.userRegisterFetch(this.registerParms)
            } catch (e) {
              that.loading = false
            }
            if (res) {
              that.loading = false
              // this.setUserInfo({
              //   phone: this.registerParms.phoneNumber,
              //   token: this.registerParms.token
              // })
              this.goUrl('/signup/secondstep')
            }
          } else {
            console.log('表达验证不合法')
          }
        }.bind(this))
      }
    },
    async created () {
      // 验证token是否过期
      await this.userRegisterValidateTokenFetch(this.$router.currentRoute.query.token)
      if (localStorage.getItem('userInfo')) {
        this.goUrl('/login')
      }
      if (this.$router.currentRoute.query.token) {
        this.registerParms.token = this.$router.currentRoute.query.token
      }
    },
    mounted () { }
  }
</script>
<style lang="scss">
  @import "@/assets/style/common.scss";
  @import "./firststep.scss";
</style>