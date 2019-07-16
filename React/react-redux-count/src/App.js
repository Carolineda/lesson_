import React from 'react';
import {connect} from 'react-redux';   //负责把组件里面和 数据连接
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  state = {  }

  handleIn =() =>{
    // store.dispatch({type:'INCREMENT'})
    this.props.increment();  //mapdispatch 获取下来
  }
  handleDe =() => {
    // store.dispatch({type:'DECREMENT'})
    this.props.decrement();
  }
  handleAddfilm = () => {
    // store.dispatch({type:'ADD_FILM',film:{name:'逆战'}})
  }

  render() { 
    console.log(this.props)
    const {count,films} = this.props;    //解构count films
    return ( 
      <div>
        count:{count}
        <button onClick={this.handleIn}>+</button>
        <button onClick={this.handleDe}>-</button>
        <button onClick={this.handleAddfilm}>添加电影</button>
        {
          films.map((film,i) => {    //取的对应的值combineReducers
            return(
              <li key={i}> {film.name}
              </li>
            )
          })
        }
      </div>
     );
  }
}
 
// mapStateToProps获取数据
const  mapStateToProps =(state) => {   //过滤state要传递的数据
  return{
    count:state.count,
    films:state.films
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    foo: () => {
      console.log('foo')
    },
    increment: ()=> {
      dispatch({type:'INCREMENT'})},
    
    decrement : () => {
      dispatch({type:'DECREMENT'})},

    addFilm: () => {
      dispatch({
        type: 'ADD_FILM',
        film:{name:'小黄人'}
      })
    }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
