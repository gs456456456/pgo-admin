import http from '@/utils/http.js'
export default {
    state: {
      userInfo:null,
      //0-未注册 1-待审核 2-成功
      registerStatus:0
    },
    getters: {
      // getLoginState(state){
      //   let a = state.userInfo?true:false;
      //   return a
      // },
      getUserInfo(state){
        return state.userInfo
      },
      getRegisterStatus(state){
        return state.registerStatus
      },
      getStorageUserInfo(state){
        return JSON.parse(localStorage.getItem('userInfo'))
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
      userRegisterPhoneCaptchaFetch: async (ctx,phone) => {
        let res = await http({
          url: '/market/register/sendValidCode',
          method: 'POST',
          body:{
            phoneNumber:phone
          }
        })
        return res
      },
      userLoginPhoneCaptchaFetch: async (ctx,phone) => {
        let res = await http({
          url: '/market/auth/sendValidCode',
          method: 'POST',
          body:{
            phoneNumber:phone
          }
        })
        return res
      }
    },
    mutations: {
      setUserInfo(state,info){
        state.userInfo = info;
        localStorage.setItem('userInfo',JSON.stringify(info))
      },
      clearUserInfo(state,info){
        state.userInfo = null;
        localStorage.removeItem('userInfo')
      },
      setRegisterStatus(state,status){
        state.registerStatus = status
      }
    }
  }
  