<template>
    <div class="register-container-outer">
        <div class="register-container">
            <el-steps :active="1" simple class="title">
                <el-step title="验证公司邮箱" class="now-step" icon='el-icon-circle-check-outline'></el-step>
                <el-step title="注册账号" ref='stepNumber'></el-step>
            </el-steps>
            <div></div>
            <div class="down-container fl">
                <router-view></router-view>
                <div class="right">
                    <p>已有账号?<span>立即登录</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'parent',
      computed: {
      },
      methods: {
        createdStepNumber () {
          console.log(this.$refs)
        }
      },
      created () {

      },
      mounted () {
        this.createdStepNumber()
      },
      watch: {
        // el-step__icon is-text
      }
    }
</script>
<style lang="scss">
    @import '@/assets/style/common.scss';
    @import './register.scss'
</style>