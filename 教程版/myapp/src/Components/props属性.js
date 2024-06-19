import React, { Component } from "react";

import Navbar from "./Navbar";

export default class Prop extends Component {
  render() {

    var obj = {
      msg: "在传递个参数",
      stats: "ok"
    }


    return (
      <div>
        {/* 引入子组件 */}
        <div>
          <h2>首页</h2>
          {/* 通过标签属性props传递参数 */}
          <Navbar leftshow={false}></Navbar>
        </div>

        <div>
          <h2>列表</h2>
          <Navbar title1="列表" leftshow={true}></Navbar>
        </div>

        <div>
          <h2>购物车</h2>
          <Navbar title1="购物车" leftshow={true} {...obj}></Navbar>
        </div>
      </div>
    );
  }
}
