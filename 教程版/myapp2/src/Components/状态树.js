// @ts-nocheck
import React, { Component } from "react";
import Test from "./状态树/Test";

// 给个默认值null，这个值是当生产者value为空时，默认传递的值
const GlobalContext = React.createContext(null);



// class Test extends Component {
//   render() {
//     return (
//       // 测试消费者
//       <GlobalContext.Consumer>
//         {(value) => {
//           console.log(value);
//           return <div>测试一下</div>;
//         }}
//       </GlobalContext.Consumer>
//     );
//   }
// }

export default class App extends Component {
  state = {
    info: "",
  };

  render() {
    return (
      // 直接包裹，生产者
      <GlobalContext.Provider
        value={{
          // 对象传递
          call: "打电话",
          SMS: "短信服务",
          // 塞个方法
          info: this.state.info,
          changeInfo: (value)=>{
            this.setState({
              info: value
            })
          }
        }}
      >
        <div>
          <h1>状态树</h1>
          {/* 这样就可以将GlobalContext传递给子组件了 */}
          <Test GlobalContext={GlobalContext}></Test>
          {/* 测试一下，功能 */}
          <div style={{background:"red"}}>{this.state.info}</div>
        </div>
      </GlobalContext.Provider>
    );
  }
}
