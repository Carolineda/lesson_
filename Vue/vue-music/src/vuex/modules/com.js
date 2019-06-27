import api from '../../api'
import * as types from '../types'

const state = {
  showSidebar:false,
  fullScreen:false,
  searchHistory:[123]
}

// 修改数据源的字段 必须通过mutation修改
const mutations = {
  // [types] 指示 type.js的所有方法 
  [types.COM_SHOW_SIDE_BAR] (state,status) {  //key value
    state.showSidebar = status
  },
  // 定义全屏播放方法
  [types.SET_FULL_SCREEN] (state,status)
  {
    state.fullScreen = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state)
  {
    state.searchHistory=state
  }

}

// action 调用方法 commit提交该方法
const actions ={
  // 在action定义setShowSidebar方法 定义参数commit  状态调用
  setShowSidebar({commit},status){
    commit(types.COM_SHOW_SIDE_BAR,status)
  },

  selectPlaySong ({commit},status) {
    // let playlist = state.playlist.slice()
    commit(types.SET_FULL_SCREEN,status)
  },
  saveSearchHistory({commit,state},query){
    let searchHistory =[query,...state.searchHistory.slice()]
    searchHistory = [...new Set(searchHistory)]
    commit(types.COM_SAVE_SEARCH_HISTORY,searchHistory)
  }
}

// 取出state 里面的数据
const getters = {
  showSidebar: state => state.showSidebar,
  fullScreen: state => state.fullScreen,
  searchHistory:state => state.searchHistory
}

export default {
  state,
  mutations,
  actions,
  getters
}