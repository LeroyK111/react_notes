import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: [...Array(10).keys()],
  };
  // 使用标签ref获取标签
  myref = React.createRef();

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [
                ...[...Array(20).keys()].splice(10, 10),
                ...this.state.list,
              ],
            });
          }}
        >
          来邮件
        </button>
        <h1>邮箱应用</h1>
        <div
          id="box"
          style={{ height: "200px", overflow: "auto" }}
          ref={this.myref}
        >
          <ul>
            {this.state.list.map((item) => (
              <li
                style={{ height: "40px", backgroundColor: "pink" }}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // 记录
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 获取变化之前的容器高度
    return this.myref.current.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, oldHeight) {
    // 容器dom渲染完毕后的距离
    let newHeight = this.myref.current.scrollHeight
   this.myref.current.scrollTop += newHeight - oldHeight
  }
}
