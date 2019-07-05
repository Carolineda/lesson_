import React,{Component} from 'react';

// 定义组件
  class Demo1 extends Component {
    render(){
      console.log(this.props)
       //render() 用户看到
       return(
         <div style={{backgroundColor:'red'}}>
           onClick={() => {
             const {onClick} = this.props
             onClick('内容子组件')
           }}
           Demo1
         </div>
       )

    }
  }

  export default Demo1;