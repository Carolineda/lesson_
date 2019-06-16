
import Vue from 'vue';
import Vuex from 'vuex';

// this.$store.state.count vue 全局实例

Vue.use(Vuex);    //启用vuex 可拨插的  类似vue-router

const state = {
  count: 0
}

//  状态修改 严谨 
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) 
  {
    state.count--;
  }
}


// 对状态包装
const getters = {
  evenOrOdd: state => state.count %2 ===0 ? 'even':'odd'
}

//  组件跟actions交流  方法  组件不可以跟state直接修改交流  commit mutation
const actions = {
  increment:({commit}) => commit('increment'),
  decrement:({commit}) => commit('decrement'),
  
  incrementIfOdd({commit,state}) { 
    // 将组件逻辑放到action
    // 判断奇数
    // state.count =1
    if((state.count + 1 ) %2 === 0)
    {
      commit('increment')
    }
  },
  // 异步
  incrementAsync ({commit}) {
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        commit('increment');
        resolve();
      },2000)
    })
  }
}


// 模块化输出
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});