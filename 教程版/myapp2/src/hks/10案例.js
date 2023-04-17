// @ts-nocheck
import React, { useReducer } from "react";
import Son from "./son/Child.js";
import Son2 from "./son/2Child.js";
import Son3 from "./son/3Child.js";

const initailState = {
  a: "2222",
  b: "1111",
};

const reducer = (prevState, action) => {
  let newState = { ...prevState };

  switch (action.type) {
    case "change-a":
      newState.a = action.value;
      return newState;
    case "change-b":
      newState.b = action.value;
      return newState;
    default:
      break;
  }

  return prevState;
};

// 直接传递对象可以，也可以直接exports 导出对象，然后子组件es6语法引用。
const GlobalContext = React.createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initailState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        {/* 这里是通过子组件标签传递GlobalContext，但是我们也可以通过es6接口暴露，创建一个独立js文件也可以使用 */}
        <Son GlobalContext={GlobalContext}></Son>
        <Son2 GlobalContext={GlobalContext}></Son2>
        <Son3 GlobalContext={GlobalContext}></Son3>
      </div>
    </GlobalContext.Provider>
  );
}
