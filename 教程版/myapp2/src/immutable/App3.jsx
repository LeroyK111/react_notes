import React, { Component } from 'react'
// 使用
import {List} from "immutable"


// 对数组的一种处理方式
var arr = List([1,2,3])

// api和array的原生方法基本一致
var arr2 = List([1,2,3]).push(4)

console.log(arr, arr2, arr2.toJS());




export default class App3 extends Component {
  state = {
    favor: List([1,2,3,4,5])
  }
  render() {
    return (
      <div>
        {this.state.favor.map(item=>
          <p key={item}>{item}</p>
        )}
      </div>
    )
  }
}
