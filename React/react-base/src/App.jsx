import React from 'react';
import logo from './logo.svg';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './App.css';
function renderStr(){
  return 'string'
}
function App() {
  const age = 18
  const styObj = {color:'blue'}
  const foo =()=> {console.log('blue')}
  const bar = () => {
    return function() {
      console.log('bar')
    }
  }
  const lis = [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>
  ]

  const names = ['name1','name2','name3']
  const namesNodes =names.map((name,index) => {
    return (<div style = {styObj}>{name}</div>)    //结点用()包起
  })
  return (
    <div>
      <Demo1 names={names} from="App" onClick ={(a) => {
        console.log(a)
      }}/>
      <Demo2 names={names} from="App"/>
      <p style={{color:'pink'}} onClick={() =>{console.log('pink')
      }}>{ age }</p>

      <p style={styObj} onClick={foo}>{ age }</p>

      <p onClick={bar()}>{age}</p>

      {lis}
      {
        names.map((name,index) => {
          return (<div>{name}</div>)    //结点用()包起
        })
      }
      {namesNodes}

      { renderStr() }
      {  true ? <div>登录</div>:<a href="#">去登录</a> }
    </div>
  )
}

export default App;