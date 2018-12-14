<template>
    <div>
        <left-bar-nav-mixin :innerNavTitle='innerNavTitle'
                            :showInnerNav='showInnerNav'>
        <router-view></router-view>
        </left-bar-nav-mixin>
    </div>
</template>
<script>
import leftBarNavMixin from '@/components/leftBarNavMixin'
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'parent',
  components: {
    leftBarNavMixin: leftBarNavMixin
  },
  data () {
    return {
      innerNavTitle: [
        {name: '所有货品', url: '/inventoryManagement/allProduct', active: true, open: true}
      ],
      showInnerNav: true
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations(['setModuleTitle'])
  },
  created () {
    this.setModuleTitle('库存管理')
  },
  mounted () {
  },
  watch: {

  }
}
</script>