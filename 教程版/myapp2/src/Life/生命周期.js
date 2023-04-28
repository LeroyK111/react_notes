import React, { Component } from 'react'

export default class App extends Component {

  state = {
    a: "测试中"
  }

  UNSAFE_componentWillMount(){
    // ! 组件初始化，挂载state，只执行一次，拿不到dom
    console.log(document.querySelector("#test"));
    // ! 这个API已经弃用componentWillMount，已经不够安全了
  }

  componentDidMount(){
    // !render渲染完毕之后执行，render可以多次渲染
    console.log(document.querySelector("#test"));
    /*
    ! 这里一般用来请求初始的数据，赋值给state or props
    ! 订阅函数
    ! 定时器
    ! 基于创建完的dom进行初始化。很多插件需要获取dom对象。
    */
  }

  render() {
    console.log("正在渲染...");
    return (
      <div id='test'>生命周期</div>
    )
  }

}
