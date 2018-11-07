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
      
    },
    mutations: {
      setLoginState(state,ifLogin){
        state.islogin = ifLogin
      }
    }
  }
  