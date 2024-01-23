
import React, { Component } from "react";



export default class Event1 extends Component {
  a = "测试this";
  
  


  render() {
    return (
      <div>
        {/* 单标签也得写成双标签闭合or自闭和标签 */}
        <input type="text" id="input"></input>
        
        <button
        
          onClick={(e) => {
            alert("我被点击了");
            console.log(e.target);
          }}
          
        >
          add1
        </button>
        {/* vue是@事件="" */}
        {/* bind绑定this的指向，不调用 */}
        <button onClick={this.handClickEvent.bind(this)}>不推荐这种写法</button>

        {/* 第三种写法*/}
        <button onClick={this.handClickEvent2}>add2</button>

        {/* 第四种写法*/}
        <button
          onClick={() => {
            // 这是一种逻辑多的情况下，使用方式
            this.handClickEvent3();
            this.handClickEvent();
          }}
        >
          add3
        </button>
      </div>
    );
  }

  // 第二种事件写法
  handClickEvent() {
    console.log("第二种绑定事件的方法", this.a);
  }
  // 第三种事件写法
  handClickEvent2 = (e) => {
    // 利用冒泡原理，实现事件代理
    console.log("第三种绑定事件的方法");
    console.log(e);
  };
  // 第四种写法
  handClickEvent3(e) {
    console.log(1111);
  }
}

/*
!事件代理的方式，进行事件的触发。（事件层层冒泡进行）并没有直接绑定在元素身上。
!事件对象Event，并不是原生事件对象，而是构造了一个全新event。
*/
