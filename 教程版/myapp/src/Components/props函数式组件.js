import React, { Component } from 'react'


import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

/*
!快捷键 RFC
*/

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件 */}
        <Navbar title1={"世界"}></Navbar>

        {/* 函数式组件 */}
        <Sidebar bg="yellow"></Sidebar>
      </div>
    )
  }
}
