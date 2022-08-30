import React, { useCallback, useMemo, useState } from "react";

export default function App() {
  // useState本身就有记忆状态
  const [first, setfirst] = useState(0);
  const [value, setvalue] = useState(100);

  // 计算属性
  const newvalue = useMemo(() => first + value, [first, value]);

  return (
    <div>

      <p>first: {first}</p>
      <p>value: {value}</p>

      计算出来的结果:{newvalue}
      <button onClick={()=>{
        setfirst(first+1)
      }}>点我加一</button>
      <button onClick={()=>{
        setvalue(value-1)
      }}>点我减一</button>
    </div>
  );
}
