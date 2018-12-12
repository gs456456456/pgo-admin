import axios from 'axios'
import main from '@/main.js'

let config = {
  'BASEURL': 'http://wistoredev.wisenable.com/api'
  // 'BASEURL': 'http://192.168.1.10:8023/api'
}

const http = async (param, type) => {
  if (main) {
    main.$store.commit('closeError')
  }
  return new Promise(async (resolve, reject) => {
    let res = null
    let requestUrl = (param.BASEURL || config.BASEURL) + param.url
    let paramFormat = {}
    let requestMethod = param.method || 'GET'
    let requestHeaders = {
    // "Content-type": "text/plain;charset=UTF-8",
    // "Content-type": "application/x-www-form-urlencoded",
    // "Accept": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "authorization": sessionStorage.getItem("jwt"),
      ...param.headers
    }

  // param.body = utils.clearNullParams(param.body)
    axios.defaults.withCredentials = true // 设置是否使用cookie，
    if (param.withCredentials === false) {
      axios.defaults.withCredentials = param.withCredentials
    }
    //
    paramFormat = {
      method: requestMethod,
      url: requestUrl,
      headers: requestHeaders
    }
    // JSON or FormData
    if (type) {
      paramFormat['data'] = param.body
    } else {
      paramFormat['params'] = param.body
    }
    // 异常处理
    try {
      res = await axios(paramFormat)
      if (res.data.retCode === 1) {
        main.$store.commit('setError', res.data.retMsg)
        // 注册token过期逻辑
        // if (main.$router.currentRoute.path === '/signup/firststep') {
        //   main.$router.push('/login')
        // }
        reject(res.data.retMsg)
      } else if (res.data.retCode === 0) {
        resolve(res.data, res)
      } else if (res.data.retCode === 2) {
        main.$store.commit('clearUserInfo')
        main.$router.push('/login')
      } else {
        main.$store.commit('setError', res.data.retMsg)
        reject(res.data.retMsg)
      }
    } catch (e) {
      main.$store.commit('setError', '网络连接错误')
      reject(e)
    }
  })
}

export default http
