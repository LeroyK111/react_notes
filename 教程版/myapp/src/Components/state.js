import React, { Component } from "react";

export default class State extends Component {
  // a = 1;
  // state = {
  //   text: "收藏",
  //   *嵌套一层后，无法深度监视
  //   demo: {
  //     x: "收藏",
  //   },
  // };

  constructor(props) {
    // 组件间传递参数
    super(props);
    // 使用初始化属性
    this.state = {
      text: "收藏",
      // *嵌套一层后，无法深度监视
      demo: {
        x: "收藏",
      },
    };
  }

  render() {
    // var a = "收藏";

    return (
      <div>
        <h1>欢迎来到react开发</h1>
        <button
          onClick={() => {
            this.changeBtn();
          }}
        >
          {this.state.text}
        </button>
      </div>
    );
  }

  changeBtn(e) {
    // *可以直接监听状态， 但是限于表层
    if (this.state.text === "取消收藏") {

      this.setState({ text: "收藏" });
      alert("取消收藏");
    } else {
      this.setState({
        text: "取消收藏",
      });
      alert("收藏成功");
    }
  }
}
