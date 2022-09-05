// @ts-nocheck
import React, { useState, Suspense } from "react";
// import Coming from './components/Coming'
// import Nowplay from './components/Nowplay'

// !使用lazy懒惰的方法，临时加载组件
const Nowplay = React.lazy(() => import("./components/Nowplay"));
const Coming = React.lazy(() => import("./components/Coming"));

export default function App() {
  const [first, setfirst] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setfirst(1);
        }}
      >
        真正热映
      </button>
      <button
        onClick={() => {
          setfirst(2);
        }}
      >
        即将上映
      </button>

      <Suspense fallback={<div>正在加载中</div>}>
        {/* 使用Suspense对懒加载组件进行包装， */}
        {first === 1 ? <Nowplay></Nowplay> : <Coming></Coming>}
      </Suspense>
    </div>
  );
}
