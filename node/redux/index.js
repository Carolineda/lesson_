//  计数器
 
 const {createStore, combineReducers}  =  require('redux')     //createStore创建应用的数据

//  action.type 常量 决定了这次dispatch要做的事情 type不能重复 唯一的标识
// reducer 可以收到action的信息 
 const add = {
   type:'INCREMENT'
 }
 const reduce = {
  type:'DECREMENT'
}
// 设计默认值 state=[],涉及状态 +
// type + payload
function filmReducer(state = [],action) {
  switch (action.type){
    case 'ADD_FILM': 
      return [...state,action.film]; //返回新的数据放在后面
    default : 
      return state;

  }
}

 function reducer(state,action) {
   console.log('reducer ----',action)
   if(action.type === 'INCREMENT')
   {
    return state + 1
   }
   else if(action.type === 'DECREMENT')
   {
     return state - 1
   } else {
      return 0;
   }
  //  console.log('reducer触发')
 }

 const index = combineReducers({
   count:reducer,
   films:filmReducer
 })

 const store = createStore(index);   

//  createStore 只接受reducer
//  const store = createStore(reducer);   
//  console.log(store.getState())      //查看store里面的数据 getState
store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(add)
store.dispatch(add)
// console.log(store.getState()) 

store.dispatch(reduce)
// console.log(store.getState()) 

store.dispatch({
  type:'ADD_FILM',
  a:1,
  b:2,
  id:0,
  film:{name:'狮子王'}
})