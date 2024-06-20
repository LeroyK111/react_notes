// @ts-nocheck
import React, { Component } from "react";
// !导入节点包，在任意位置创建dom
import { createPortal } from "react-dom";


const styled = {
  width: "100%",
  height: "100%",
  position: "fixed",
  left: 0,
  top: 0,
  background: "rgba(0,0,0,.7)",
  zIndex: 9999,
};


export default class Dialog extends Component {
  render() {
    // !将jsx语法，传送到某个节点里面
    return createPortal(
    <div style={styled}>
      <h1>加载中。。。。</h1>
      {this.props.children}
      <button onClick={(e)=>{
        e.stopPropagation()
        this.props.close(false);
      }}>close</button>
    </div>,
    document.body);
  }
}
