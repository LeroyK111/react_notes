// @ts-nocheck
import React, { Component } from "react";

// 调用bus组件
import bus from "./bus"
// 调用两个子组件
import Son1 from "./发布订阅子组件/son1"
import Son2 from "./发布订阅子组件/son2";



export default class App extends Component {
  render() {
    return <div><h1>发布订阅案例</h1>
          <Son1></Son1>
          <Son2></Son2>
    </div>;
  }
}

/*
!核心原理 监听器开发
*/
// var bus = {
//   taskList: [],
//   // 订阅
//   subscribe(callback) {
//     this.taskList.push(callback)
//   },

//   // 发布
//   publish(data) {
//     // 遍历所有列表
//     this.taskList.forEach(callback=>{
//       callback && callback()
//     })
//   },
// };

// 使用方式
// bus.subscribe(() => {
//   console.log("我是1");
// });


// bus.subscribe(() => {
//   console.log("我是2");
// });

// setTimeout(() => {
//   bus.publish()
// }, 0);

