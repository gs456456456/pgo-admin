<template>
    <div class="main">
      <ul class="nav">
        <li v-for='(item,index) in navTitle' class="nav-item">{{item}}</li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'innerNavTop',
  data () {
    return {}
  },
  props: {
    navTitle: Array
  },
  created () {
  },
  mounted () {}
}
</script>
<style scoped lang="scss">
@import "@/assets/style/common.scss";
.main {
  max-width: 800px;
  min-width: 700px;
}
.nav {
  float: left;
  padding-bottom: 8px;
  // min-width: 600px;
  .nav-item {
    font-size: 18px;
    // border-bottom: 2px solid $common-blue;
    padding-bottom: 8px;
    margin-right: 46px;
    padding-left: 0;
    float: left;
  }
}
</style>