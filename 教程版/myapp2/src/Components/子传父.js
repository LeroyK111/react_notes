import React, { Component } from 'react'




// 直接在这里构造两个子组件
class Navbar extends Component{
  render(){
    return <div style={{background:"red"}}>
      <button onClick={()=>{
        // 让父组件的状态isShow取反
        this.props.event("再传递一个数据")
      }}>click</button>
      <span>navbar</span>
    </div>
  }
}


class Sidebar extends Component{
  render(){
    return <div style={{background:"yellow", width:"200px", position: "absolute"}}>
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </div>
  }
}




export default class App extends Component {
  state = {
    isShow: true
  }
  render() {
    return (
      <div>
        {/* - - vue也是靠事件触发方式传递数据的 */}
        <Navbar event={(data)=>{
          console.log(data);
          this.setState({
            isShow: !this.state.isShow,
            // setState也是可以构造新对象的
            a: 1
          })
        }}></Navbar>
        {this.state.isShow && <Sidebar></Sidebar>}
        {this.state.a}
      </div>
    )
  }
}
