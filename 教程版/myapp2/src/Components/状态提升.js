import React, { Component } from "react";

class Son1 extends Component {
  render() {
    return (
      <div style={{ background: "skyblue" }}>
        <div>{this.props.value}</div>
        <div>收到来自Son2的消息:{this.props.msg}</div>
        <button
          onClick={() => {
            this.props.myEvent({ b: 2, msg: "你好啊" });
          }}
        >
          点我让粉条加一
        </button>
      </div>
    );
  }
}

class Son2 extends Component {
  render() {
    return (
      <div style={{ background: "pink" }}>
        <div>{this.props.value}</div>
        <div>收到来自Son1的消息:{this.props.msg}</div>
        <button
          onClick={() => {
            this.props.myEvent({ a: 1, msg: "给粉条的消息" });
          }}
        >
          点我让蓝条加一
        </button>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    a: 0,
    b: 0,
    msg: "",
  };

  render() {
    return (
      <div>
        <Son1
          value={this.state.a}
          msg={this.state.msg}
          myEvent={(data) => {
            this.add(data);
          }}
        ></Son1>
        <Son2
          value={this.state.b}
          msg={this.state.msg}
          myEvent={(data) => {
            this.add(data);
          }}
        ></Son2>
      </div>
    );
  }

  add(data) {
    this.setState({
      ...data,
    });
  }
}
