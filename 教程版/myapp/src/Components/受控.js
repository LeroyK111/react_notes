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
          this.setState({
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
