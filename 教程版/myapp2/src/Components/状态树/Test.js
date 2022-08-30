import React, { Component } from 'react'



export default class Test extends Component {

  render() {
    const {GlobalContext} = this.props
    return (
      // 测试消费者
      <GlobalContext.Consumer>
        {(value) => {
          console.log(value);
          return <div>
            <h1>测试一下</h1>
            <input type="text" onChange={(e)=>{
              value.changeInfo(e.target.value)
            }}/>
          </div>
        }}
      </GlobalContext.Consumer>
    );
  }
}
