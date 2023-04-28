import React, { Component } from "react";

export default class App extends Component {
  state = {
    myname: "kerwin",
  };

  UNSAFE_componentWillUpdate() {
    console.log("这里拿到将要跟更新的DOM");
    console.log(document.querySelector("#test")?.innerHTML);
    /*
    ! API已经淘汰，
    */
  }

  componentDidUpdate(prevProps, prevState) {
    // !这里可以获取旧属性的值
    // !拿到组件传参
    console.log(prevProps)
    // !拿到组件装填
    console.log(prevState)



    console.log("拿到已经更新完毕的dom");
    console.log(document.querySelector("#test")?.innerHTML);

    /*
    ! 获取更新后的dom节点
    */
  }

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

}
