import React, { Component } from "react";
import "./css/todolist.css"


export default class Todolist extends Component {
  // 包装属性
  myref = React.createRef();

  // 普通属性
  state = {
    list: ["1", "2", "3"],
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.myref} placeholder="输入" />
        <button
          onClick={(e) => {
            this.handelClick(e);
          }}
        >
          enter
        </button>

        <ul>
          {
            // 顺便解决索引位置
            this.state.list.map((item, index) => (
              <li key={index}>
                {item}
                {/* 富文本展示，一般需要严格校验，避免xss攻击 
                  真的会渲染图片。
                */}
                <span dangerouslySetInnerHTML={
                  {
                    __html:item
                  }
                }></span>
                <button
                  onClick={(e) => {
                    // 这种方式顺便传参
                    this.deleteClick(index);
                  }}
                >
                  删除
                </button>
              </li>
            ))
          }
        </ul>
        {/* 动态创建节点 */}
        {/* 直接按照条件渲染，三目运算符 */}
        {this.state.list.length <= 0? <div>暂无代办事件</div> :null}
        {/* 短路运算符 */}
        {this.state.list.length <=0 && <div>暂无代办事件</div>}

        {/* 使用样式控制 */}
        <div className={this.state.list.length <= 0? '':"hidden"}>使用样式控制</div>
      </div>
    );
  }

  handelClick(e) {
    // 还是要通过setState

    if (this.myref.current.value.trim() !== "") {
      this.state.list.push(this.myref.current.value);
    }
    this.setState({
      list: this.state.list,
    });

    // 清空输入框
    this.myref.current.value = ""
  }

  deleteClick(index) {
    // 删除，状态更新
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list,
    });
  }
}
