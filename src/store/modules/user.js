import http from '@/utils/http.js'
export default {
    state: {
      userInfo:{
        token:'',
        phone:''
      },
      //0-未注册 1-待审核 2-成功
      registerStatus:0
    },
    getters: {
      getLoginState(state){
        return localStorage.getItem('islogin')==='true'?true:false
      },
      getUserInfo(state){
        return state.userInfo
      },
      getRegisterStatus(state){
        return state.registerStatus
      }
    },
    actions: {
      userRegisterFetch: async (ctx,parms) => {
        let res = await http({
          url: '/market/register/confirmRegister',
          method: 'POST',
          body:parms
        },'formData')
        return res
      },
      userLoginFetch: async (ctx,parms) => {
        let res = await http({
          url: '/market/auth/login',
          method: 'POST',
          body:parms
        },'formData')
        return res
      },
      userExitLoginFetch:async (ctx) => {
        let res = await http({
          url: '/market/auth/logout'
        })
        return res
      },
      userInfoFetch: async (ctx) => {
        let res = await http({
          url: '/market/user/info',
        })
        return res
      },
      userPhoneCaptchaFetch: async (ctx,phone) => {
        let res = await http({
          url: '/market/register/sendValidCode',
          method: 'POST',
          body:{
            phoneNumber:phone
          }
        })
        return res
      }
    },
    mutations: {
      setLoginState(state,ifLogin){
        localStorage.setItem('islogin',ifLogin)
      },
      setUserInfo(state,info){
        state.userInfo = info
      },
      setRegisterStatus(state,status){
        state.registerStatus = status
      }
    }
  }
  