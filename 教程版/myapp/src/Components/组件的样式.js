import React, { Component } from "react";

// 导入css模块
import "./css/index.css";

export default class App extends Component {
  render() {
    var myname = "kerwin";
    var obj = { color: "blue" };
    return (
      // !模板语法。。。实现逻辑运算(vue使用双括号，html标签内使用:冒号绑定)
      // *模板语法。。。实现逻辑运算，这里在标签内使用双括号，标签内容使用单括号
      <div style={{ color: "red" }}>
        {10 + 20}-{myname}
        <p style={obj}>测试一下样式</p>
        {/* 引入css样式文件，早期版本可以使用class属性，但是react后续版本更新中推荐了className */}
        <div className="active">引入样式</div>


        {/* 使用label扩展标签时，需要htmlfor */}
        <label htmlFor="namedInput">Name:</label>
        <input id="namedInput" type="text" name="name" />
      </div>
    );
  }
}
