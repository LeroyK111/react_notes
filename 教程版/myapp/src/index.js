// @ts-nocheck
// 引入核心包 jsx语法
import React from "react";
// reactDOM包，虚拟dom
// import ReactDOM from "react-dom";

// !渲染
// ReactDOM.render(<div>1 <p>2</p></div>, document.querySelector("#root"));

// !也可以直接这么写
// ReactDOM.render(React.createElement("div", {class:"bbb", id:"ss"}, "1111"), document.querySelector("#root"));

/*
! 这里的组件，其实是一种封装好的class对象
*/
// 使用es6语法引入组件

// import Demo1 from "./Components/class组件";
// import App from "./Components/函数式组件";
// import App2 from "./Components/组件嵌套";
// import App3 from "./Components/组件的样式";

// !直接使用自闭和标签
// ReactDOM.render(<Demo1/>, document.querySelector("#root"));
// ReactDOM.render(<App></App>, document.querySelector("#root1"));

// !嵌套
// ReactDOM.render(<App2></App2>, document.querySelector("#root2"));

// !css样式
// ReactDOM.render(<App3></App3>, document.querySelector("#root2"));

/*
!最新的写法，直接将根节点实例化一个对象，然后链式调用渲染方法。
// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

!由于教程的原因，我们选择react17作为学习。后续我们选择最新的react语法学习
*/

// !事件绑定
// import Event1 from "./Components/事件绑定"

// ReactDOM.render(<Event1></Event1>, document.querySelector("#root2"));

/*
!ref，数据包装
*/
// import App4 from "./Components/ref";
// ReactDOM.render(
// 模板标签还有严格模式：
// <React.StrictMode>
//     <App4></App4>,
// </React.StrictMode>,
//   document.querySelector("#root2")
// );

// !构造响应式数据
// import State from "./Components/state";
// ReactDOM.render(<State></State>, document.querySelector("#root2"));

// !原生循环渲染
// import ChangeList from "./Components/列表渲染"

// ReactDOM.render(<ChangeList></ChangeList>, document.querySelector("#root2"));

// todolist，条件渲染，富文本渲染，事件传参，状态修改
// import Todolist from "./Components/案例todolist"

// ReactDOM.render(<Todolist></Todolist>, document.querySelector("#root2"));

// !选项卡案例
import { createRoot } from "react-dom/client";

// import TabControl from "./Components/选项卡";
// *测试同步和异步
// import AddTest from "./Components/setData同步异步";
// root.render(<AddTest></AddTest>)
// root.render(<TabControl></TabControl>);

// * 测试插件
// import App from "./Components/更好的滚动"
// root.render(<App></App>)

// *props标签传递数据
// import Prop from "./Components/props属性"
// root.render(<Prop></Prop>)

// *类组件和函数式组件
// import App from "./Components/props函数式组件"
// root.render(<App></App>)



// *受控组件和非受控组件
// import App from "./Components/受控"
// root.render(<App></App>)


import Cinema from "./Components/受控案例"



// *我们使用最新react18的写法
const container = document.getElementById("root");
const root = createRoot(container);


root.render(<Cinema></Cinema>)







