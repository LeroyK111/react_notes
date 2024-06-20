import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App(props) {
  const [state, setfirst] = useState("kerwin");

  // 不写监听对象，则初始化时执行一次
  useEffect(() => {
    // 首字母大写
    setfirst(state.substring(0, 1).toUpperCase() + state.substring(1));

    // return () => {
    //   second;
    // }

    // 传入监听对象，state or Props，监听到改变则再次调用
  }, [state]);

  

  return (
    <div>
      <div>
        <h2>app---{state}</h2>
        <button
          onClick={() => {
            setfirst("xiaoming");
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}
