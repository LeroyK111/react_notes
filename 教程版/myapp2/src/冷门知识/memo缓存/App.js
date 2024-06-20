import React, { Component, memo, useEffect } from "react";

export default class App extends Component {
  state = {
    name: 1,
    title: "除非title改变，否则子组件不更新",
  };
  render() {
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({
              name: this.state.name += 1,
            });
          }}
        >
          改变名字
        </button>
        <button
          onClick={() => {
            this.setState({
              title: "我被改变了",
            });
          }}
        >
          click
        </button>
        {/* 阻止孩子，随着父组件更新 */}
        <Child title={this.state.title}></Child>
      </div>
    );
  }
}

const Child = memo((props) => {
  console.log(111);

  useEffect(() => {
    console.log('子组件会随着更新吗');

    return;
  }, [props]);

  return <div>chlid----{props?.title}</div>;
});
