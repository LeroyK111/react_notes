import React, { Component, PureComponent } from "react";


// 使用PureComponent控制render是否需要更新
export default class App extends PureComponent {
  state = {
    myname: "kerwin",
  };



  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myname: "14",
            });
          }}
        >
          点我
        </button>
        <span id="test"> {this.state.myname}</span>
      </div>
    );
  }

  // 手动比对数据，查看需不需要更新dom
  // shouldComponentUpdate(nextProps, nextState){
  //   // 这里next就是新状态，新传参
  //   // 老状态还在this.state中
  //   return this.state.myname !== nextState.myname; // false阻止更新，true允许更新
  // }
  
}
