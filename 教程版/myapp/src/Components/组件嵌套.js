/*
rcc直接生成骨架
*/

import React, { Component } from "react";

// 推荐使用函数式编程，也可以继承Component类
// 子组件可以再次嵌套
const NavbarTest = () => <div>-----</div>;
const Navbar = (props) => (
  <div>
    首部导航 <NavbarTest></NavbarTest> {props.children}
  </div>
);
const Swiper = () => <div>轮播图导航</div>;
const Tabbar = () => <div>底部导航栏</div>;

export default class App2 extends Component {
  render() {
    return (
      <div>
        <Navbar>
          {/* 子组件，如果想再次使用，还可以使用slot插槽 */}

          <p>1111</p>
        </Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    );
  }
}
