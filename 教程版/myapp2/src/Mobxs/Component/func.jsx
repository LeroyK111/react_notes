import React, { useState, useEffect, useContext } from "react";
import { Observer, observer } from "mobx-react-lite";
import { MyContext } from "../mobx/HookStore";

const CounterFunction = (props) => {
  const [num, setNum] = useState(10);
  const store = useContext(MyContext); // 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。

  useEffect(() => {
    console.log("num change", MyContext);
  }, [num]);

  return (
    <div>
      <p>num: {num}</p>
      <button onClick={() => setNum(num + 1)}>set num</button>

      {/* 深度监听 store 变化并进行重渲染，导致下面两行结果相同 */}
      <p>HOOK的组件监听: {store.getCount}</p>
      <Observer>{() => <p>包裹一下HOOK也是监听: {store.getCount}</p>}</Observer>
      <button onClick={store.handleCount}>Counter Add</button>
    </div>
  );
};

// !生成HOC高阶组件
export default observer(CounterFunction);
