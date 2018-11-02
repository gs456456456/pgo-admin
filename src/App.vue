<template>
  <div id="app">
    <nav-top></nav-top>
    <router-view/>
  </div>
</template>

<script>
import navTop from '@/components/navTop'
export default {
  name: 'App',
  components: {
    navTop: navTop
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/style/common.scss';
  #app{
    width: 100%
  }
</style>
