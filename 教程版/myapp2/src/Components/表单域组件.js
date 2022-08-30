import React, { Component } from "react";

function Filed(props) {
  return (
    <div style={{ background: "skyblue" }}>
      <label>
        {props.label}:
        <input
          value={props.value}
          type={props.value === "密码" ? "text" : props.type}
          onChange={(e) => {
            props.onChangeEvent(e.target.value);
          }}
        />
      </label>
    </div>
  );
}

export default class App extends Component {
  state = {
    username: localStorage.getItem("username") || "用户名",
    password: "密码",
  };

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        {/* 将form表单项目，拆分成一个个组件 */}
        <Filed
          value={this.state.username}
          label="用户名"
          type="text"
          onChangeEvent={(data) => {
            this.setState({
              username: data,
            });
          }}
        ></Filed>
        <Filed
          value={this.state.password}
          label="密码"
          type="password"
          onChangeEvent={(data) => {
            this.setState({
              password: data,
            });
          }}
        ></Filed>
        <button
          onClick={() => {
            this.checkSaveUser()
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.setState({
              username: "用户名",
              password: "密码",
            });
          }}
        >
          取消
        </button>
      </div>
    );
  }


  checkSaveUser(){
    // 当然这里也要进行表单检查
    localStorage.setItem("username", this.state.username)
  }

  
}
