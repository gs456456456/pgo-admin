import http from '@/utils/http.js'
export default {
    state: {
      islogin:false,
      userInfo:{
      }
    },
    getters: {
      getLoginState(state){
        return state.islogin
      }
    },
    actions: {
      userFetch: async (ctx) => {
        console.log(http)
        let res = await http({
          url: '/info',
          method: 'GET',
        })
        return res.data;
      }
    },
    mutations: {
      setLoginState(state,ifLogin){
        state.islogin = ifLogin
      }
    }
  }
  