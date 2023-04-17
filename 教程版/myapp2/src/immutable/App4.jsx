// @ts-nocheck
import React, { Component } from "react";
import { Map, List } from "immutable";




export default class App4 extends Component {
  state = {
    info: Map({
      name: "Leroy",
      location: Map({
        province: "心境",
        city: "五路",
      }),
      favor: List(["读书", "游戏"]),
    }),
  };
  render() {
    return (
      <div>
        <h1>个人信息</h1>
        <button onClick={()=>{
          this.setState({

            // !链式调用太长了
            info: this.state.info.set("name", "KKK").set("location", this.state.info.get("location").set("province", "北京"))
          })
        }}>修改</button>
        <div>{this.state.info.get("name")}</div>
        <div>
          {this.state.info.get("location").get("province")}
          ---
          {this.state.info.get("location").get("city")}
        </div>
        <div>
          {this.state.info.get("favor").map((item, index) => (
            <div key={index}>{item} <button onClick={()=>{
              this.setState({
                info: this.state.info.set("favor", this.state.info.get("favor").splice(index, 1))
              })
            }}>del</button></div>
          ))}
        </div>
      </div>
    );
  }
}
