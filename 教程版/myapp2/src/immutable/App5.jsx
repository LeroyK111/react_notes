// @ts-nocheck
import React, { Component } from "react";
import { Map, List, fromJS } from "immutable";

export default class App4 extends Component {
  state = {
    // 直接使用fromjs，将所有数据全部封装
    info: fromJS({
      name: "Leroy",
      location: {
        province: "心境",
        city: "五路",
      },
      favor: ["读书", "游戏"],
    }),
  };

  componentDidMount() {
    // 转换完毕
    console.log(this.state.info);
  }
  render() {
    return (
      <div>
        <h1>个人信息</h1>
        <button
          onClick={() => {
            this.setState({
              // !setIn进行层级修改
              info: this.state.info
                .set("name", "LeroyK")
                .setIn(["location", "province"], "东京"),
            });
          }}
        >
          修改
        </button>
        <div>{this.state.info.get("name")}</div>
        <div>
          {this.state.info.get("location").get("province")}
          ---
          {this.state.info.get("location").get("city")}
        </div>
        <div>
          {this.state.info.get("favor").map((item, index) => (
            <div key={index}>
              {item}{" "}
              <button
                onClick={() => {
                  // this.setState({
                  // !数组也可以是层级
                  //   info: this.state.info.setIn(["favor", index], null)
                  // })

                  this.setState({
                    // 使用更新功能
                    info: this.state.info.updateIn(["favor"], (oldList)=> oldList.splice(index,1)),
                  });
                }}
              >
                del
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
