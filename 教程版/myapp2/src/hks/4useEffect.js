import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

export default function App(props) {
  const [state, setfirst] = useState("kerwin");

  // 不写监听对象，则初始化时执行一次，可以使用多次
  useEffect(() => {
    setfirst(state.substring(0, 1).toUpperCase() + state.substring(1));

    window.onresize = () => {
      console.log('resize');
    };

    const timer = setInterval(() => {
      console.log("111");
    }, 1000);

    return () => {
      // 这里可以放入销毁函数
      console.log("我被销毁了");
      window.onresize = null
      clearInterval(timer)
    }

    // 传入监听对象，state or Props，监听到改变则再次调用
  }, [state]);

  useLayoutEffect(() => {
    console.log("避免页面抖动");
  
    return () => {
      console.log("测试");
    };
  }, [])



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
