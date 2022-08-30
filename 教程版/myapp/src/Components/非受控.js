import React, { Component } from "react";

export default class App extends Component {
  myusername = React.createRef();

  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input type="text" ref={this.myusername}defaultValue="默认值"/>
        <button
          onClick={() => {
            console.log(this.myusername.current.value);
          }}
        >
          登录
        </button>
        <button onClick={()=>{
          this.myusername.current.value = ""
        }}>重置</button>
      </div>
    );
  }
}
