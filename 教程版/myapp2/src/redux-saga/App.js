import React from "react";
// import "./1生成器.js"
// import "./2可执行生成器.js"

import store from "./redux/store.js";

export default function App() {
  return (
    <div>
      <button
        onClick={() => {
          if (store.getState().list1.length === 0) {
            // dispatch
            store.dispatch({
              type: "get-list",
            });
            // 取值完毕，获取全局状态
            store.subscribe(() => {
              console.log("没有缓存，去请求新数据", store.getState().list1);
            });
          } else {
            console.log("缓存取值", store.getState().list1);
          }
        }}
      >
        click-ajax-异步缓存
      </button>
      <button
        onClick={() => {
          if (store.getState().list2.length === 0) {
            // dispatch
            store.dispatch({
              type: "get-list2",
            });
            // 取值完毕，获取全局状态
            store.subscribe(() => {
              console.log("没有缓存，去请求新数据", store.getState().list2);
            });
          } else {
            console.log("缓存取值", store.getState().list2);
          }
        }}
      >
        第二按钮
      </button>
    </div>
  );
}
