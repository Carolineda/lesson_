import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import index from './reducer/index';
import Counter from './App';     //获取store上面东西
const store = createStore(index);



ReactDOM.render(
  // 提供store
<Provider store = {store}>   
<Counter />
</Provider>, document.getElementById('root'));

// store.subscribe(()=> {
// ReactDOM.render(<Counter />, document.getElementById('root'));
// })