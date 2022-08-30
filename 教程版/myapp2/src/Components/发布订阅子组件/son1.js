import React, { Component } from "react";
import bus from "../bus";

export default class Son1 extends Component {
  state = {
    value: "",
    msg:""
  };
  render() {
    return (
      <div>
         <div style={{background:"pink"}}>{this.state.msg}</div>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => {
            this.setState({
              value: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            this.sendMessage();
          }}
        >
          点我给son2发消息
        </button>
        <button
         onClick={() => {
          this.setState({
            msg: bus.publish()
          })
        }}
        >
          接收son2消息
        </button>
      </div>
    );
  }

  sendMessage() {
    bus.subscribe(() => this.state.value);
  }
}
