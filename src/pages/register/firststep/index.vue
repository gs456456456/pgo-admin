<template>
    <div class="register-container-s">
        <el-steps :active="1" simple class="title">
            <el-step title="验证公司邮箱" class="now-step" icon='el-icon-circle-check-outline'></el-step>
            <el-step title="注册账号" ref='stepNumber'></el-step>
        </el-steps>
        <div></div>
        <div class="down-container fl">
            <template>
                <!-- <div class="left"> -->
                    <el-form class="left" ref="form">
                        <el-form-item label="注册手机" class="form-item" prop="phone" :rules="[
                            { required: true, message: '请输入手机号', trigger: 'blur' },
                            { validator: phoneFormat, message: '请输入正确的手机格式', trigger: ['blur', 'change'] }
                        ]">
                            <!-- <span>注册手机</span> -->
                            <el-input class="input" v-model='registerParms.phoneNumber' placeholder="手机号"></el-input>
                            <sms-btn :phone='registerParms.phoneNumber'></sms-btn>
                            <!-- <el-button class="btn" @click='sendPhoneCaptcha'>{{intervalText}}</el-button> -->
                        </el-form-item>
                        <p class="prompt">每个手机只能注册一次。</p>
                        <el-form-item label="验证码" class="form-item">
                            <el-input class="input" placeholder="请输入内容" v-model='registerParms.validCode'></el-input>
                            <div class="btn"></div>
                        </el-form-item>
                        <el-form-item label="密码" class="form-item ">
                            <el-input class="input" placeholder="请输入内容" v-model='registerParms.password'></el-input>
                            <div class="btn"></div>
                        </el-form-item>
                        <el-form-item label="确认密码" class="form-item last-form-item">
                            <el-input class="input" placeholder="请输入内容"></el-input>
                            <div class="btn"></div>
                        </el-form-item >
                        <div class="submit">
                            <el-button type="primary" class="btn" @click='submit'>验证并继续</el-button>
                        </div>
                    </el-form>
                <!-- </div> -->
            </template>
            <div class="right">
                <p>已有账号?<span>立即登录</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapMutations } from 'vuex'
    import smsBtn from '@/components/smsBtn'
    export default {
      name: 'firststep',
      components: {
        smsBtn: smsBtn
      },
      data () {
        return {
          registerParms: {
            token: '',
            phoneNumber: '',
            password: '',
            repassword: '',
            validCode: ''
          }
        }
      },
      computed: {
      },
      methods: {
        ...mapMutations(['setUserInfo']),
        ...mapActions(['userRegisterFetch']),
        phoneFormat () {
          return (rule, value, callback) => {
            const TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
            if (TEL_REGEXP.test(value)) {
              callback()
            } else {
              callback(new Error('请输入正确的手机格式'))
            }
          }
        },
        submit () {
        //   let res = this.userRegisterFetch(
        //     this.registerParms
        //   )
        //   if (res) {
    
          this.setUserInfo({
            phone: this.registerParms.phoneNumber,
            token: this.registerParms.token
          })
          this.goUrl('/loginVerify')
        //   }
        }
      },
      created () {
        if (this.$router.currentRoute.query.token) {
          this.registerParms.token = this.$router.currentRoute.query.token
        }
      },
      mounted () {
      },
      watch: {

      }
    }
</script>
<style lang="scss">
    @import '@/assets/style/common.scss';
    @import './firststep.scss'
</style>