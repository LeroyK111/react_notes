import React, { Component } from 'react'

import Child from "./slot/child"


export default class App extends Component {
  state={
    isShow: true
  }
  render() {
    return (
      <div>
        <Child>
          <button onClick={()=>{
            this.setState({
              isShow: !this.state.isShow
            })
          }}>点我</button>
          {/* 因为Child留了插槽位置，这里内容会被插入进去 */}
          {this.state.isShow && <h1>1111</h1>}
          {this.state.isShow && <h2>2222</h2>}
          {this.state.isShow && <h3>333</h3>}
        </Child>
      </div>
    )
  }
}
