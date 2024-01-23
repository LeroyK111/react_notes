// @ts-nocheck
import React, { useState, useContext } from "react";

const GlobalContext = React.createContext(null);

export default function App() {
  const [info, setinfo] = useState("你好");

  return (
    <GlobalContext.Provider
      value={{
        // 对象传递
        call: "打电话",
        SMS: "短信服务",
        // 塞个方法
        info: info,
        changeInfo: () => {
          setinfo("世界");
        },
      }}
    >
      <h1>{info}</h1>
      <Child GlobalContext={GlobalContext}></Child>
    </GlobalContext.Provider>
  );
}

function Child({GlobalContext}) {
  // 这里必须传入GlobalContext的对象才行
  // console.log(GlobalContext);
  const context = useContext(GlobalContext);
  // 就是传递过来的value
  // console.log(context);

  return <div>
    <h2>{context.info}</h2>

    {/* 去触发父组件的方法 */}
    <button onClick={()=>{
      context.changeInfo()
    }}>click</button>
  </div>;
}
