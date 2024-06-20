import React, { useCallback, useState } from "react";

export default function App() {
  // useState本身就有记忆状态
  const [first, setfirst] = useState(0);
  const [value, setvalue] = useState("我不存在");
  const handleAdd = useCallback(
    // !防止因为组件重新渲染，导致方法被重新创建，起到缓存作用。
    // *主要是用来存放不经常改变的值
    // useCallback：用于记忆化回调函数，避免每次渲染时都重新创建该函数。
    // useMemo：用于记忆化计算结果，避免每次渲染时都重新计算。
    (evt) => {
      console.log(1);
      setvalue("");
    },
    [value]
  );

  return (
    <div>
      <div>
        {value}
        <button onClick={handleAdd}>click</button>
      </div>
      <button
        onClick={() => {
          setfirst(first + 1);
        }}
      >
        click
      </button>
      {first}
    </div>
  );
}
