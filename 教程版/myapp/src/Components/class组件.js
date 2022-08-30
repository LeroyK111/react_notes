/*
!构建第一个react组件，跟vue的组件创建方式还不太一样。
!类组件，也是推荐的一种方式。
*/

// 继承组件类
import React from "react";


// 类命名，推荐大写首字母
class Demo1 extends React.Component {
  render() {
    // 标签必须互相嵌套，但是最外层只能是一个标签（不存在兄弟节点）
    return <div>hello react component</div>
    // 加个小括号也行
    // return (<div>hello react component</div>)
  }
}


// 这里用的es6的模块暴露语法，但是node--commonjs我们不用
export default Demo1
