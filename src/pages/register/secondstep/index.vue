<template>
        <div class="register-container-s">
            <el-steps :active="1" simple class="title">
                <el-step title="验证公司邮箱" class="now-step" icon='el-icon-circle-check-outline'></el-step>
                <el-step title="注册账号" ref='stepNumber' icon='el-icon-circle-check-outline'></el-step>
            </el-steps>
            <div></div>
            <div class="down-container">
                <p>已完成注册，请管理员至 wisenable.com后台通过验证。</p>
            </div>
            <div class="submit">
                <el-button type="primary" class="btn">进入后台</el-button>
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
        @import './secondstep.scss'
    </style>