import * as types from './mutation-methods'

export default {
  addTotalTime({commit},time){
    commit(types.ADD_TOTAL_TIME)
  },
  decTotalTime({commit},time){
    commit(types.DEC_TOTAL_TIME,time)
  },
  savePlan({commit},plan){
    commit(types.SAVE_PLAN,plan)
  },
  deletePlan({commit},plan){
    commit(types.DELETE_PLAN,plan)
  },
}