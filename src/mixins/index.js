import Vue from 'vue'

export default Vue.mixin({
  data () {
    return {
    }
  },
  methods: {
    isEmptyObj: function (obj) {
      var t
      for (t in obj) { return false }
      return true
    },
    isObject: function (obj) {
      return obj !== null && typeof obj === 'object'
    },
    goUrl: function (url) {
      this.$router.push(url)
    }
  }
})
