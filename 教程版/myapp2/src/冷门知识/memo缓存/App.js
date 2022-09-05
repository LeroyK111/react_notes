import React, { Component, memo } from "react";

export default class App extends Component {
  state = {
    name: "Leroy",
    title: "除非我改变，否则子组件不更新",
  };
  render() {
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({
              name: "waklsdjfklj",
            });
          }}
        >
          click
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
        <Child {...this.state}></Child>
      </div>
    );
  }
}

const Child = memo((props) => {
  console.log(111);
  return <div>chlid----{props?.title}</div>;
});
