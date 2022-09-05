import React, { forwardRef, useRef } from "react";

export default function App2() {
  // !父组件创建Ref标记
  const myChild = useRef();

  return (
    <div>
      <button
        onClick={() => {
          // !透传完毕
          console.log(myChild.current);
          myChild.current.focus();
        }}
      >
        获取子组件的dom
      </button>
      <Child ref={myChild}></Child>
    </div>
  );
}

// !使用ref传递
const Child = forwardRef((props, ref) => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <input ref={ref} type="text" />
    </div>
  );
});
