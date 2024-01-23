import React, { Component } from "react";

export default class AddTest extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    );
  }

  handleAdd1 = () => {
    /*
    !this.setState 属于异步更新状态，异步更新dom,多次调用setstate会不断覆盖事件方法，三个 this.setState最后都会覆盖成一个
    */
    this.setState({
      count: this.state.count + 1,
    });

    console.log(this.state.count);

    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);

    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };

  handleAdd2 = () => {
    // 使用定时器嵌套异步
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      }, ()=>{
        // 回调中无传参
        console.log(
          `这里就可以再次回调${this.state.count}`
        );
      });

      console.log(this.state.count);

      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);

      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 2);
  };

  /*
  *同步状态下，setState是异步合并。
  *异步状态下，setState反而是同步处理了。
  *可以加入回调，确认setState更新状态

  !react18下，已经全部异步了，无法强制同步。
  */
}
