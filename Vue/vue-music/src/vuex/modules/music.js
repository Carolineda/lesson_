import api from '../../api'
import * as types from '../types'
import {findIndex} from '@/common/util'
import { stat } from 'fs';

const state = {
  playList:[],
  currentIndex:-1,
  favoriteList:[],
  playHistory:[],
  playing:false

}

const mutations = {

  [types.SET_PLAY_LIST](state,playlist){   //播放列表
    state.playList =playlist
  },
  [types.SET_CURRENT_INDEX](state,index){
    state.currentIndex =index
  },
  [types.SET_PLAYING](state,status){
    state.playing =status
  },
  [types.SAVE_PLAY_HISTORY](state,playload){
    state.playHistory =playload
  },
  [types.SAVE_FAVORITE_LIST](state,payload){
    state.favoriteList =payload
  }
}

const actions = {
  // 当前选中歌曲播放
  selectPlaySong({commit,state},song){
    let playlist = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表中是否有带插入的歌曲 并返回其索引
    let fpIndex = findIndex(playlist,song)
    // 如果已经包含这首歌
    if(fpIndex > -1){
      currentIndex = fpIndex

    }else
    {
      playlist = [...playlist,song]
      currentIndex = playlist.length -1
    }
    // 提交方法
    commit(types.SET_PLAY_LIST,playlist)  //播放列表
    commit(types.SET_CURRENT_INDEX,currentIndex)    //当前播放
    commit(types.SET_PLAYING,true)
  },
  // 点击播放的那首歌添加到播放列表中
  addPlayList ({commit,state},song) {
    let playlist = [...state.playList.slice(),song]
    // 添加数据
    if(playlist.length === 1){
      let currentIndex = state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX,currentIndex)
      commit(types.SET_CURRENT_INDEX.true)
    }
    commit(types.SET_PLAY_LIST,playlist)
  },

  // 保存播放历史
  savePlayHistory ({commit,state},song) {
    let playHistory = state.playHistory.slice()
    playHistory = [...playHistory,song]
    commit(types.SAVE_PLAY_HISTORY,playHistory)
  }
}

const getters = {
  playing:state => state.playing,
  playList:state => state.playList,
  currentIndex :state => state.currentIndex,
  currentSong:state => {
    return state.playList[state.currentIndex] || {}
  },
  favoriteList:state => state.favoriteList,
  playHistory:state =>state.playHistory
}

export default{
  state,
  mutations,
  actions,
  getters
}