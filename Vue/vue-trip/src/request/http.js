// 封装axios  toast

import axios from 'axios'
import { Toast } from 'mand-mobile'
import { stringify } from 'qs'
import store from '../store/index'


// vuex仓库trip字段
let tmpTrip = store.state.trip

axios.defaults.timeout = 10000    //接口请求数据的时间限制
axios.defaults.withCredentials = false     //设置跨域请求的凭证

// 请求添加拦截器 接口发送后端
axios.interceptors.request.use(
  config => {
    //判断每次发送请求之前，vuex中是否存在token  登陆后拿到token值是不一样的，token获取数据

    // 如果存在，则统一在http请求的header上加上token,这样后台能根据token判断用户当前是否是登录状态
    // 即使本地存在token 也有可能是过期值 第一次登录获取token值会有时间限制,所以在拦截器中响应返回状态进行判断
    // const token = store.state.token
    // token && (config.header.Authorization = token)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'     // 请求头的类型  请求类型数据的方式默认设置为表单
    return config
  },
  error => {
    Toast.failed('请求过程出错')
    return Promise.error('error')
  }
)


// 响应拦截 后端反应给前端操作
axios.interceptors.response.use(function(response) {
  // 对响应数据进行操作
  return response
},function(error) {
  Toast.failed('响应过程出错')
  return Promise.reject(error)
})


// 封装方法，每次调用接口时调用此方法  默认userID   调用方法axios.request(参数)
var request = (options) => {   
  // 每次请求传入当前用户的id
  if(tmpTrip.user) {  //存在user 当前是登录状态
    if( options.body ) {
      options.body.userId = tmpTrip.user.userId
    }
    // 把option作为参数传给后端
    if (options.params) {
      options.params.userId = tmpTrip.user.userId
    }
  }
  //表单传值参数格式化
  return axios.request({
    url:`http://localhost:3000${options.url}`,    //相当于baseurl指定跑项目的端口
    method:options.method,
    data:options.body,    //get请求传给后端的参数
    params:options.params
  }).then(response => {
    return response      //请求拿到的内容
  },err => {
    Toast.failed(err.message)
    throw err 
  }).catch((error) => {
    Toast.failed('请求失败')
    throw error
  })
}


// http put get 请求方式封装
export const http = {}
const methods = ['get','post','put','delete']
methods.forEach(method => {
  http[method] = (url,params = {}) => {  //==http.method
    if(method === 'get'){
      return request({url,params,method})
    }
    return request({url,body: stringify(params),method})
  }             
})

export default function plugin (Vue) {
  if(plugin.installed) {
    return
  }
  plugin.installed = true    //开关变量
  Object.defineProperties(Vue.prototype,{       //defineProperties直接在一个对象上修改属性新增原有属性并返回最新对象
    $http: {      //给原型链挂载http 把axios挂载
      get() {
        const obj = {
          get: http['get'],
          post:http['post'],
          put:http['put'],
          delete:http['delete']
        }
        return obj
      }
    }

  })      
}