<template>
    <div class="register-container-outer">
        <div class="register-container">
            <router-view></router-view>
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