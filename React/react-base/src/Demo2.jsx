import React,{Component} from 'react';

function Demo2 (props){
  const {names,from} = props
  return (
    // <div style={(backgroundColor:'#eee')}>
  <div>
      Demo2
      {names}
      {from}
    </div>
  )
}

export default Demo2