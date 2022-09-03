import React, { Component } from "react";





export default class Props extends Component {
  render() {
    return <div>
      <Child name={"测试属性"} number={111}></Child>
    </div>;
  }
}


interface rule {
  name: string,
  number: number
}




class Child extends Component<rule, any> {
  render() {
    return <div>
      child-{this.props.number}-{this.props.name}
    </div>;
  }
}
