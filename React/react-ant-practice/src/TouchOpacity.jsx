import React, { Component } from 'react';
import './btn.css';
class TouchOpacity extends Component {
  state = {  }
  handleStart =()=>{
    // 组件内部状态
    this.setState({
      active:true
    })
  }
  handleEnd = ()=> {
    this.setState({
      active:false
    })
  }
  render() { 
    const {active} = this.state
    const styleObj = {
      opacity:active ? 0.3 : 1
    }
    return (
      // handle 处理透明度
      <div className="btn" style={styleObj} onTouchStart={this.handleStart}
      onTouchEnd = {this.handleEnd}>
        {this.props.children}
      </div>
      );
  }
}
 
export default TouchOpacity;