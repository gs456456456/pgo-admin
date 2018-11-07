<template>
    <div class="register-container-s">
        <el-steps :active="1" simple class="title">
            <el-step title="验证公司邮箱" class="now-step" icon='el-icon-circle-check-outline'></el-step>
            <el-step title="注册账号" ref='stepNumber'></el-step>
        </el-steps>
        <div></div>
        <div class="down-container fl">
            <template>
                <div class="left">
                    <div class="form-item fl-row-xbtw-yctr">
                        <span>注册邮箱</span>
                        <el-input class="input" placeholder="Email"></el-input>
                        <el-button class="btn">发送验证码</el-button>
                    </div>
                    <p class="prompt">每个邮箱只能注册一次。</p>
                    <div class="form-item fl-row-xbtw-yctr clearfix">
                        <span>邮箱验证码</span>
                        <el-input class="input" placeholder="请输入内容"></el-input>
                        <div class="btn"></div>
                    </div>
                    <div class="form-item fl-row-xbtw-yctr">
                        <span>密码</span>
                        <el-input class="input" placeholder="请输入内容"></el-input>
                        <div class="btn"></div>
                    </div>
                    <div class="form-item fl-row-xbtw-yctr last-form-item">
                        <span>确认密码</span>
                        <el-input class="input" placeholder="请输入内容"></el-input>
                        <div class="btn"></div>
                    </div>
                    <div class="submit">
                        <el-button type="primary" class="btn">验证并继续</el-button>
                    </div>
                </div>
            </template>
            <div class="right">
                <p>已有账号?<span>立即登录</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
      name: 'firststep',
      data () {
        return {
        }
      },
      computed: {
      },
      methods: {
        ...mapActions(['userFetch']),
        async test () {
          await this.userFetch()
        }
      },
      created () {
        this.test()
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