// @ts-nocheck

import React, { Component } from "react";

// 引入子组件
import Film from "./TabControl/Film";
import Cinema from "./TabControl/Cinema";
import Center from "./TabControl/Center";
import Tabbar from "./TabControl/Tabbar";
import Navbar from "./TabControl/Navbar";


export default class TabControl extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],
    checkLiNum: 0
  }

  which() {
    switch (this.state.checkLiNum) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <Center></Center>;
      default:
        return <h1>出现错误</h1>;
    }
  }

  render() {
    return (
      <div className="TabControl">
        <Navbar myevent={()=>{
          this.setState({
            checkLiNum: 2
          })
        }}/>
        {this.which()}
        <Tabbar {...this.state} myevent={(index)=>{
          this.setState({
            checkLiNum: index
          })
        }}></Tabbar>
      </div>
    );
  }
}
