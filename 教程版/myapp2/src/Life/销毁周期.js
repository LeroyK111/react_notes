import React, { Component } from 'react'


class Child extends Component{

  componentDidMount(){
    console.log("我被创建了");
    let n = 0
    let timer = setInterval(() => {
      console.log(n++);
    }, 1000);
    // 也可以挂载到this.timer上
    this.setState({
      timer: timer
    })
  }
  

  render(){
    return <div style={{width: '200px', height: '200px', background:"red"}}></div>
  }


  // 销毁组件
  componentWillUnmount() {
    console.log("我被销毁了");
    /*
    ! 还需要手动停止事件，计时器等
    */
    // 
    clearInterval(this.state.timer)
  }
}




export default class App extends Component {
  state = {
    isCreated: true
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            isCreated: !this.state.isCreated
          })
        }}>显示隐藏</button>
        {this.state.isCreated?<Child/>:""}
      </div>
    )
  }
}
