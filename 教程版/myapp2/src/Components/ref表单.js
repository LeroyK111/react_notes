import React, { Component } from "react";

class Filed extends Component {
  state = {
    value: "",
  };


  clear(){
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <div style={{ background: "skyblue" }}>
        <label>
          {this.props.label}:
          <input
            value={this.state.value}
            type={this.props.type}
            onChange={(e) => {
              this.setState({
                value: e.target.value,
              });
            }}
          />
        </label>
      </div>
    );
  }
}

export default class App extends Component {
  /*
  !ref加入到标签身上，拿到标签节点
  !ref加入到组件身上，拿到组件对象(class or function)
  !函数组件不能使用React.createRef()
  
  !忌讳，直接从父组件修改子组件状态，我们直接从ref对象中调用方法
  */
  username = React.createRef();
  password = React.createRef();

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        {/* 将form表单项目，拆分成一个个组件 */}
        <Filed label="用户名" type="text" ref={this.username}></Filed>
        <Filed label="密码" type="password" ref={this.password}></Filed>
        <button
          onClick={() => {
            console.log(this.username.current.state.value);
            console.log(this.password.current.state.value);
          }}
        >
          登录
        </button>

        <button onClick={()=>{
          // !父调用子方法
          this.username.current.clear()
          this.password.current.clear()
        }}>取消</button>
      </div>
    );
  }
}
