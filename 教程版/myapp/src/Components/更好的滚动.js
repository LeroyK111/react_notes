/*
!使用个插件，让列表滚动起来更好看
*/

import React, { Component } from "react";
// 直接导入核心包
import BScroll from "@better-scroll/core";

export default class App extends Component {
  state = {
    list: [],
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.getData();
          }}
        >
          click
        </button>
        <div className="wrapper" style={{height: '200px', background:"yellow", overflow:"hidden"}}>
          <ul className="content">
            {this.state.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  getData() {
    var list = [2, 123, 4, 52, 151, 25, 3, 26, 346, 75, 68, 58, 4, 85];
    this.setState({
      list: list,
    }, ()=>{
      // 等dom渲染完毕，我们直接包装一下即可
      new BScroll(".wrapper")
    });


    // !这里获取不到数据，因为这里是同步了
    console.log(this.state.list);
    setTimeout(() => {
      // !通过setTimeout 则可以获取到数据，这里又异步了
      console.log(this.state.list);
    }, 0);
  }
}
