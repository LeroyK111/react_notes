import React, { Component } from "react";

export default class App extends Component {
  state = {
    myname: 22,
  };

  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState((state) => ({
              myname: (state.myname += 1),
            }));
          }}
        >
          点我
        </button>
        <span id="test"> {this.state.myname}</span>
      </div>
    );
  }

  // 手动比对数据，查看需不需要更新dom
  shouldComponentUpdate(nextProps, nextState) {
    // 这里next就是新状态，新传参
    // 老状态还在this.state中
    console.log(this.state.myname, nextState.myname);
    return this.state.myname === nextState.myname; // false阻止更新，true允许更新
  }
}
