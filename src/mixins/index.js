import Vue from 'vue'

export default Vue.mixin({
  data () {
    return {
    }
  },
  methods: {
    removeArray: function (arr, val) {
      var index = arr.indexOf(val)
      if (index > -1) {
        arr.splice(index, 1)
      }
      return arr
    },
    deepCopyObj: function (obj) {
      return JSON.parse(JSON.stringify(obj))
    },
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
    },
    dateFormat (date, fmt) {
      if (date === null || date === '') {
        return ''
      }
      date = new Date(date)

      var o = {
        'm+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'M+': date.getMinutes(),
        'S+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds()
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
          )
        }
      }
      return fmt
    }

  }
})
