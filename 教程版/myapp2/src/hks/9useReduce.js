// @ts-nocheck
import React, { useReducer } from "react";

// *处理函数，必须返回一个新状态
const reducer = (prevState, action) => {
  // prevState 老的值
  // action 传递过来的参数

  // !不建议直接操作老状态，重新构建一个中间变量
  let newState = { ...prevState };

  switch (action.type) {
    case "kerwin-minus":
      newState.count--;
      return newState;
    case "kerwin-add":
      newState.count++;
      return newState;
    default:
      return prevState
  }
};

// *外部的对象
const intialState = {
  count: 0,
};

export default function App() {
  // !使用外部状态,useState的替代方法
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "kerwin-minus",
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: "kerwin-add",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
