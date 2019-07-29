
import * as types from '../mutations-types'

export default {
  state:{
    user:null,
    userDistance:null
  },

  getters:{
    user:state => state.user,          //获取数据源里面的user
    userDistance: state => state.userDistance
  },

  mutations: {
    [types.SET_USER] (state,data) {
      state.user = data         //数据源的user字段 = 传进来参数的data
    }
  }, 

  actions:{
    setUser(store,data) {
      store.commit(types.SET_USER,data)
    }
  }
}

