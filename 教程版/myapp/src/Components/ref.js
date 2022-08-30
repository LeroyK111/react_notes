import React, { Component } from "react";

export default class App4 extends Component {


  // !直接包装属性
  myRef = React.createRef();




  render() {
    return (
      <div>
        <input ref="mytext1" />
        <input ref="mytext2" />
        {/* 新方法绑定数据 */}
        <input type="text" ref={this.myRef} placeholder="新方法绑定数据" />

        <button
          onClick={() => {
            // 拿到的就是标签,自身这个api不要再用了
            console.log("click", this.refs.mytext1);
          }}
        >
          点我获取数据1
        </button>

        <button
          onClick={() => {
            // 拿到的就是标签,自身这个api不要再用了
            // 当前current状态，可以看里面的方法和属性
            console.log("click", this.myRef.current.value);
          }}
        >
          点我获取数据2
        </button>
      </div>
    );
  }
}
