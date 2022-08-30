import React, { Component } from "react";
import { Observer } from "mobx-react-lite";
import { MyContext } from "../mobx/HookStore";
import { toJS } from "mobx";

class CounterClass extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(store) => {
            /* 使用 Object.is 比较store是否发生变化，store的引用不变，导致不会重渲染，获取最新依赖值需使用 Observer 组件 */

            console.log("store: ", toJS(store));
            return (
              <>
                <p>counter2: {store.count}</p>{" "}
                {/* 这种方式在 class 组件中无效，不会引发重渲染 */}
                <Observer>{() => <p>counter2: {store.count}</p>}</Observer>{" "}
                {/* 必须这样写，Observer 组件是mobx-react-lite提供的唯一可在类组件中使用的组件 */}
                <button onClick={() => store.handleCount()}>Counter Add</button>
              </>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default CounterClass;
