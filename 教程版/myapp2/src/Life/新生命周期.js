import React, { Component } from "react";

class Child extends Component {
  state = {};
  render() {
    return <div>测试</div>;
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("子组件被触发了");
  //   console.log(props);
  //   console.log(state);

  //   return {};
  // }
}

export default class App extends Component {
  state = {
    a: 1,
  };

  // static getDerivedStateFromProps(props, state) {
  //   /*
  //   !等价的功能
  //   !UNSAFE_componentWillMount() 组件被初始化
  //   !componentDidMount() 组件被渲染
  //   !UNSAFE_componentWillReceiveProps(*nextProps*) 被父组件触发
  //   */
  //   console.log("111");

  //   console.log(document.querySelector("#box"));

  //   console.log(state);

  //   return {
  //     // 这里return 改变的是state
  //     a: state.a,
  //   };
  // }

  render() {
    return (
      <div id="box">
        <button
          onClick={() => {
            this.setState({
              a: this.state.a + 1,
            });
          }}
        >
          click
        </button>
        state -- {this.state.a}
        <div>
          <Child></Child>
        </div>
      </div>
    );
  }


  /*
  !取代componentWillUpdate，触发时间改在render之后，dom插入之前。

  !componentDidUpdate(*prevProps*, *prevState*, next) 拿到已更新的dom
  */

  // !
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 拿到旧的属性和状态
    console.log(prevProps, prevState);

    return "这个值会返回给componentDidUpdate的next"
  }

  componentDidUpdate(prevProps, prevState, next) {
    console.log(next);
  }
}
