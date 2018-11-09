import http from '@/utils/http.js'
export default {
    state: {
      islogin:false,
      userInfo:{
        token:'',
        phone:''
      }
    },
    getters: {
      getLoginState(state){
        return state.islogin
      },
      getUserInfo(state){
        return state.userInfo
      }
    },
    actions: {
      userRegisterFetch: async (ctx,vueObj,parms,type) => {
        let res = await http(vueObj,{
          url: '/market/register/confirmRegister',
          method: 'POST',
          body:parms
        },'formData')
        return res
      },
      userLoginFetch: async (ctx,vueObj,parms,type) => {
        debugger
        let res = await http(vueObj,{
          url: '/market/auth/login',
          method: 'POST',
          body:parms
        },'formData')
        return res
      },
      userInfoFetch: async (ctx,vueObj) => {
        let res = await http(vueObj,{
          url: '/market/user/info',
        })
        return res
      },
      userPhoneCaptchaFetch: async (ctx,vueObj,phone) => {
        let res = await http(vueObj,{
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
        state.islogin = ifLogin
      },
      setUserInfo(state,info){
        state.userInfo = info
      }
    }
  }
  