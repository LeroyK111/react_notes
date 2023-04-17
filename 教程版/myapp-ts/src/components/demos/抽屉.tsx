import React, { Component } from "react";

interface rule {
  isShow: boolean;
}

export default class App1 extends Component<any, rule> {
  state = {
    isShow: false,
  };

  render() {
    return (
      <div>
        <Navbar
          title={"首页"}
          cb={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        ></Navbar>
        <div style={{ transition: "all 10s" }}>
          <Sidebar isShow={this.state.isShow}></Sidebar>
        </div>
      </div>
    );
  }
}

interface Iprops {
  title: string;
  cb: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Navbar extends Component<Iprops, any> {
  render(): React.ReactNode {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button
          onClick={() => {
            this.props.cb();
          }}
        >
          点我显示侧边栏
        </button>
      </div>
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Sidebar extends Component<any, any> {
  render(): React.ReactNode {
    return (
      <div
        style={{
          width: "200px",
          height: "400px",
          backgroundColor: "pink",
          display: this.props.isShow ? "block" : "none",
        }}
      >
        Sidebar
      </div>
    );
  }
}
