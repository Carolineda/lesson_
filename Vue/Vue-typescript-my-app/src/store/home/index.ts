import {State} from '@/store/interface'
import { Commit} from 'vuex'

import { getMovieList } from '@/api/movie'

const getters = {

}

// 声明变量 后面加的类型  首页的数据流
const state: State = {
  movieList:[
    {
      name:'霸王别姬',
      title:'排名',
      id:'1'
    }
  ]
}
const mutations = {

}
const actions = {
  // 跟API交流 前后端的分离点
  // commit mutations
  // 添加movieList方法 
 async movieList(context:{commit: Commit}, cate: string) {
  const res = await getMovieList(cate)     //获取哪一类的电影内容
    .then((response)=> response)
    return res
  }
}

export default{
  getters,
  state,
  mutations,
  actions
}
