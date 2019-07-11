import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
  render() { 
    return ( 
      <p>
        Clicked: {this.props.count} tiems
      </p>
     );
  }
}
//  1.map 共享状态
//  2.作为参数传给组件
const mapStateToProps = (state) => {
  // 
  // connect 找到这个参数运行  并且把state交给你 
  return {
  const:  state.count
  }
}
export default connect(mapStateToProps)(Counter);    //高阶 成为属性