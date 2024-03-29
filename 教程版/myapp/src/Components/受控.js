import React, { Component } from "react";

export default class App extends Component {
  state={
    username:"admin"
  }

  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input type="text" value={this.state.username} onChange={(e)=>{
          // 自己改变自己的value，单向绑定
          this.setState({
            // 如果没有onchange，则是非受控组件
            username: e.target.value
          })
        }}/>
        <button
          onClick={() => {
            console.log(this.state.username);
          }}
        >
          登录
        </button>
        <button onClick={()=>{
            this.setState({
              username: ""
            })
        }}>重置</button>
      </div>
    );
  }
}
