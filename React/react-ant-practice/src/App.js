import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import TouchOpacity from './TouchOpacity';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

const size = 'large';
class App extends Component {
  constructor(props){
    super(props);
    this.functionRef = null;
    this.objectRef=React.createRef()
  }
  state = {
    value:''
  }

  componentDidMount() {   //生命周期  通过原生Js 挂载Dom
    // 组件 挂载在页面.
    this.refs.strRef.innerHTML = 'String ref' ;   //获取真实 的节点
    this.functionRef.innerHTML = 'Function ref';
    this.objectRef.current.innerHTML = 'Object ref';
    // this.inputRef
  }
  handlePrint1 =() => {
    console.log(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <br />
          <Button type="primary" size={size}>
            Primary
        </Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>
            Dashed
        </Button>
          <Button type="danger" size={size}>
            Danger
        </Button>
          <Button type="link" size={size}>
            Link
        </Button>
          <br />
          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" shape="round" icon="download" size={size}>
            Download
        </Button>
          <Button type="primary" icon="download" size={size}>
            Download
        </Button>
          <br />
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" />
              Backward
          </Button>
            <Button type="primary">
              Forward
            <Icon type="right" />
            </Button>
          </Button.Group>
          <TouchOpacity>确定</TouchOpacity>

          <TouchOpacity>取消</TouchOpacity>
      </div>

      <h1 ref="strRef"></h1>
      <h1 ref={(node) => {
        this.functionRef = node;
      }}></h1>

      <h1 ref={this.objectRef}></h1>
      <input type="text" ref={this.inputRef} />
      <button onClick={this.handlePrint1}>btn1</button>

      <input type="text" onChange={this.handleInputChange} />
      <button onClick={this.handlePrint2}>btn2</button>

    </div>
    );
  }
}

export default App;
