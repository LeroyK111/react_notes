import React, { Component } from "react";

// !把属性放外边
interface Istate {
  name: string
}

// <props, state> 约束属性和状态，这是react专用ts写法。
export default class ClassTs extends Component<any, Istate> {
  
  
  state = {
    name: "kerwin"
  }


  render() {
    return <div>
      app-{this.state.name.substring(0,1).toUpperCase()}-{this.state.name.substring(1)}
      <button onClick={()=>{
        this.setState({
          name: "leroy"
        })
      }}>click</button>
    </div>;
  }
}

