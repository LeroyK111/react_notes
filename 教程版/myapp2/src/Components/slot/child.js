import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        {/* 不像vue中slot方法，直接括号包裹即可 */}
        {this.props.children}
        {/* 会自动形成一个数组 */}
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
        {this.props.children[3]}
      </div>
    )
  }
}
