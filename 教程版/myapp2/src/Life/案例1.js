import React, { Component } from "react";
// 引入滚动插件
import BScroll from "@better-scroll/core";


export default class App extends Component {
  state = {
    list: ["111", "222", "333", "444", "555", "777", "888", "999", "100021", "902183", "129048"],
  };

  componentDidMount(){
    // 使用插件
    new BScroll("#wrapper")
  }

  render() {
    return (
      <div>
        <div id="wrapper" style={{height: "200px", background: "yellow", overflow: 'hidden'}}>
          <ul>
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
