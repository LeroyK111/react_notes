import React, { Component } from "react";
// 导入监听者
import { Observer } from "mobx-react-lite";
// 状态树
import { MyContext } from "../mobx/HookStore";
// 转换成js对象
import { toJS } from "mobx";

class CounterClass extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        {/* 导入状态树的消费者 */}
        <MyContext.Consumer>
          {(store) => {
            /* 使用 Object.is 比较store是否发生变化，store的引用不变，导致不会重渲染，获取最新依赖值需使用 Observer 组件 */

            console.log("类组件接收的value: ", toJS(store));
            return (
              <div>
                {/* 这种方式在 class 组件中无效，无法引发渲染*/}
                <p> 不加载观察者: {store.count}</p>
                <Observer>{() => <p>加载观察者: {store.count}</p>}</Observer>
                {/* 必须这样写，Observer 组件是mobx-react-lite提供的唯一可在类组件中使用的组件 */}
                <button onClick={store.handleCount}>点我+2</button>
              </div>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default CounterClass;
