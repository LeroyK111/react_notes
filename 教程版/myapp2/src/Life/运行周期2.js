import React, { Component } from 'react'


class Child extends Component{
  render(){
    return <div>child</div>
  }


  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  UNSAFE_componentWillReceiveProps(nextProps) {
    /*
    ! 该API已经废弃，父组件触发render更新，该函数才会响应
    */
    
    console.log("wqekj");
    let {text} = nextProps
    console.log(text);
    
  }
}

export default class App extends Component {
  state = {
    text: 111
  }
  render() {
    return (
      <div>
        {
          this.state.text
        }
        <button onClick={()=>{
          this.setState({
            text: 222
          })
        }}>点我</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) { 
    // 只要我关闭了，dom渲染，子组件就无法监听到le
    return !false
   }
}
