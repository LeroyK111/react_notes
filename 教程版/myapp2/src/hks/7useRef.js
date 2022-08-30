// @ts-nocheck
import React, { useRef, useState } from "react";

export default function App() {
  // 等价于class中的createRef()，标记dom的语法。
  const first = useRef();
  // 如果拿出去直接用
  let mycount = useRef(0);

  const [value, setvalue] = useState("");

  return (
    <div>
      <input type="text" ref={first} />
      <p>{mycount.current}</p>
      <button
        onClick={() => {
          console.log(first.current.value);
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          // 如果不重新渲染dom ，mycount.current虽然会发生变化。
          // setvalue(1);

          // 临时变量。。。
          mycount = mycount.current + 1;
          console.log(mycount.current);
        }}
      >
        add
      </button>
    </div>
  );
}
