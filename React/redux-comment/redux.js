// 以node介绍  
const { createStore } = require('redux');
/***
 * [{tabName:'推荐',selected:true},
 * {tabName:'关注',selected:false}]
 */
function reducer(state = [], action) {  //上一次的state,
  console.log(action)
  switch (action.type) {
    case 'ADD_TABNAME':
      const { tabName, selected } = action;
      // 在此不能直接用state.push()  在此前用浅拷贝 返回新的数据
      return [...state, { tabName, selected }]   //返回新的数据
    case 'TOGGLE_SELECTED':
      const { index } = action;
      return state.map((tab, i) => {
        if (index === i) {
          return { ...tab, selected: true }
        }
        return { ...tab, selected: false }
      })
    default:
      return state;
  }
}
const store = createStore(reducer)
//  store.dispatch({type:'@@INIT'})  redux内部初始化字段 
// 当要改变数据时候就要设计type字段 在reducer里面作判断
store.subscribe(() => {
  console.log('store', store.getState())
})
store.dispatch({
  type: 'ADD_TABNAME',
  tabName: '推荐',
  selected: false
})
store.dispatch({
  type: 'ADD_TABNAME',
  tabName: '关注',
  selected: false
})

// 用户点了第0项
store.dispatch({
  type: 'TOGGLE_SELECTED',
  index: 0
})
store.dispatch({
  type: 'TOGGLE_SELECTED',
  index: 1
})