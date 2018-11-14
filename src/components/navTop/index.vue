<template>
  <div class="main">
    <nav>
      <div class="inner-box fl-row-xbtw-yctr">
        <div class="img"></div>
        <div class="select">
          <el-dropdown @command="handleCommand" v-if='!hideDrop'>
            <span class="el-dropdown-link">
              {{getUserInfo.companyName||''}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command='exitLogin'>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'navTop',
    data () {
      return {
        elNotList: ['/login', '/register'],
        hideDrop: true
      }
    },
    created () {
      // console.log(this.$router)
      this.judgeShowDrop(this.$router.currentRoute)
    },
    mounted () {
    },
    methods: {
      ...mapMutations(['clearUserInfo']),
      ...mapActions(['userExitLoginFetch']),
      handleCommand (command) {
        switch (command) {
          case 'exitLogin':
            this.exitLogin()
            break
        }
      },
      judgeShowDrop (val) {
        let arr = this.elNotList.filter((v, i, a) => {
          return v === val.path
        })
        this.hideDrop = arr.length > 0
      },
      exitLogin () {
        let res = this.userExitLoginFetch()
        if (res) {
          this.clearUserInfo()
          this.goUrl('/login')
        }
      }
    },
    computed: {
      ...mapGetters([
        'getUserInfo'
      ])
    },
    watch: {
      '$route' (currentV, pastV) {
        this.judgeShowDrop(currentV)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/style/common.scss';

  .main {
    height: 60px;
    background: white;

    .inner-box {
      @include paddingLR(56px);
      height: 60px;

      .img {
        width: 36px;
        height: 36px;
        background: black
      }
    }

    .el-dropdown {
      color: rgb(96, 98, 102)
    }
  }
</style>