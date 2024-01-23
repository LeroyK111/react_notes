// @ts-nocheck
import React, { Component } from "react";

// 引入子组件
import Film from "./TabControl/Film";
import Cinema from "./TabControl/Cinema";
import Center from "./TabControl/Center";

import "./css/tabControl.css";

export default class TabControl extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],

    checkLiNum: 0,
  };

  which() {
    switch (this.state.checkLiNum) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;
      default:
        return <h1>出现错误</h1>;
    }
  }

  render() {
    return (
      <div className="TabControl">
        {/* 放入组件 */}
        {/* {this.state.checkLiNum === 0 && <Film></Film>}
        {this.state.checkLiNum === 1 && <Cinema></Cinema>}
        {this.state.checkLiNum === 2 && <Center></Center>} */}
        {this.which()}

        <div className="todobar">
          <ul>
            {this.state.list.map((item, index) => (
              <li
                className={this.state.checkLiNum === index ? "active" : ""}
                key={item.id}
                onClick={() => {
                  this.checkLi(index);
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  checkLi(index) {
    // console.log(index);
    this.setState({
      checkLiNum: index,
    });
  }
}
