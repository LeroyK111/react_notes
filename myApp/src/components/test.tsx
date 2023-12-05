import React, { useState } from "react";

export default function test() {
  // 函数组件，使用if else语句
  const [first, setFirst] = useState(false);
  let content;
  // if (first) {
  //   content = <h1>1</h1>;
  // } else {
  //   content = <h1>2</h1>;
  // }

  // switch case
  switch (first) {
    case true:
      content = <h1>1</h1>;
      break;
    default:
      content = <h1>2</h1>;
      break;
  }

  return (
    <div>
      {content}

      {/* 三元表达式 */}
      {/* {first ? <h1>1</h1> : <h1>2</h1>} */}

      {/* 逻辑与 */}
      {/* { first && <h1>1</h1> } */}
      {/* { !first && <h1>2</h1> } */}

      {/* 空值合并运算符 */}
      {/* { undefined ?? <h1>2</h1>} */}

      {/* 渲染 Prop */}

      {/* 高阶组件 (HOC)： */}

      {/* 误差组件 */}
      <button onClick={() => setFirst(!first)}>click</button>
    </div>
  );
}
