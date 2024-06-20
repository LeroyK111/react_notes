import React, { Component } from "react";

class Box extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // !这个优化dom，好用!让满足条件的子组件跟新状态，不满足的不更新，节约资源
    return !!(this.props.current === this.props.index || nextProps.current===nextProps.index);
  }

  render() {
    console.log("render");
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid #ccc",
          float: "left",
          margin: "20px 20px",
          background: this.props.current === this.props.index ? "red" : "gray",
        }}
      ></div>
    );
  }
}

export default class App extends Component {
  state = {
    list: ["00", "01", "02", "03", "04", "05", "06", "07"],
    current: 0,
  };

  render() {
    return (
      <div>
        <input
          type="number"
          onChange={(e) => {
            this.setState({
              current: parseInt(e.target.value),
            });
          }}
          value={this.state.current}
        />
        <div style={{ overflow: "hidden" }}>
          {this.state.list.map((item, index) => (
            <Box key={item} current={this.state.current} index={index}></Box>
          ))}
        </div>
      </div>
    );
  }
}