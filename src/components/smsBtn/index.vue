<template>
    <el-button @click="sendPhoneCaptcha" :disabled="isDisabled">{{buttonName}}</el-button>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'smsBtn',
  data () {
    return {
      buttonName: '发送验证码',
      isDisabled: false,
      time: 60
    }
  },
  props: ['phone', 'type'],
  methods: {
    ...mapActions(['userRegisterPhoneCaptchaFetch', 'userLoginPhoneCaptchaFetch']),
    async sendPhoneCaptcha () {
      let res = null
      if (this.type === 'register') {
        res = await this.userRegisterPhoneCaptchaFetch(this.phone)
      } else {
        res = await this.userLoginPhoneCaptchaFetch(this.phone)
      }
      if (res) {
        this.sendMsg()
      }
    },
    sendMsg () {
      let me = this
      me.isDisabled = true
      let interval = window.setInterval(() => {
        me.buttonName = '（' + me.time + '秒）重发'
        --me.time
        if (me.time < 0) {
          me.buttonName = '重新发送'
          me.time = 10
          me.isDisabled = false
          window.clearInterval(interval)
        }
      }, 1000)
    }
  }
}
</script>






