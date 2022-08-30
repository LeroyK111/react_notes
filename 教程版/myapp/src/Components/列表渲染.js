
import React, { Component } from "react";
import "./css/changeList.css"
export default class ChangeList extends Component {
  state = {
    list: ["111", "222", "333"],
    list1: ["2","3","4"]
  };

  render() {
    // 一般key值我们都用唯一值设置，避免出现重复值。
    var newList = this.state.list1.map((x, index)=><li key={index}>{x}</li>)


    return <div>
      {/* 列表循环 */}
      <ul className="changeList">
        {/* 不能使用模板字符串，`<li>${item}</li>` 直接写标签就完事，必须写唯一标识属性, 满足虚拟dom比对*/}
        {this.state.list.map((item, index)=><li key={index}>{item}</li>)}

        {/* 外部引用 */}
        {newList}
      </ul>
    </div>;
  }


  // !跟vue不一样，不提供for方法
  // !react推崇原生js方法
}



