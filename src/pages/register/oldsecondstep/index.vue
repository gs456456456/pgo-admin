<template>
    <div class="register-container-s">
        <el-steps :active="1" simple class="title">
            <el-step title="验证公司邮箱" class="now-step" icon='el-icon-circle-check-outline'></el-step>
            <el-step title="注册账号" ref='stepNumber'></el-step>
        </el-steps>
        <div></div>
        <div class="down-container fl">
            <div class="left">
                <div class="form-item fl-row-xbtw-yctr">
                    <span>原公司邮箱</span>
                    <el-input v-model="input" class="input" placeholder="请输入内容"></el-input>
                    <el-button class="btn">发送验证码</el-button>
                </div>
                <p class="prompt">需向公司管理员邮箱发送验证码，验证后关联公司，可继续营销后台帐号册。</p>
                <div class="form-item fl-row-xbtw-yctr clearfix last-form-item">
                    <span>邮箱验证码</span>
                    <el-input v-model="input" class="input" placeholder="请输入内容"></el-input>
                    <div class="btn"></div>
                </div>
                <div class="submit">
                    <el-button type="primary" class="btn">验证并继续</el-button>
                </div>
            </div>
            <div class="right">
                <p>已有账号?<span>立即登录</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'firststep',
      data () {
        return {
        }
      },
      computed: {
      },
      methods: {
      },
      created () {
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