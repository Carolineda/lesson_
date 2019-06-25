import Vue from 'vue'
import axios from 'axios'
import {resolve} from 'path'

// this的作用域不在vue
const vue = new Vue()


// axios配置
  // 默认请求接口数据的时间   访问接口路径
 axios.defaults.timeout = 10000
 axios.defaults.baseURL = 'http://localhost:3000'



 //返回状态判断  封装axios
 axios.interceptors.response.use((res) =>{   //  axios 返回的数据  两个方法出错情况
  if(res.data.code !== 200) {
    // $toast方法自定义  挂载于vue原型链上以直接使用
    vue.$toast('网络异常')
    vue.$hideLoding()
    return Promise.reject(res)
  }
  return res
 }, (error) => {
  vue.$toast('网络异常')
  vue.$hideLoding()
  return Promise.reject(error)
 })

// 封装 get 请求  直接调用fetchGet函数实现axios.get
 export function fetchGet(url, param)
 {
   return new Promise((resolve,reject) => {
     axios.get(url, {
       params:param
     })
     .then(response => {
       resolve(response.data)
     }, err => {
       reject(err)
     })
     .catch((error) =>{
      reject(error)
     })
   })
 }



export default {
  //登录用例
  Login(params) 
  {
    return fetchGet('/login',params)
  },
  // banners 封装 -(swiper)
  BannerList() {
    return fetchGet('/banner')
  },
  // 歌单
  DiscLists (params) {
    return fetchGet('/top/playlist',params)
  },

  // 封装歌单详情
  SongList (params)
  {
    return fetchGet('/playlist/detail',params)
  },

  // 歌曲搜索
  MusicSearch(params)
  {
    return fetchGet('/search',params)
  }

}