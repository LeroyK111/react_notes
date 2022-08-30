// @ts-nocheck
import React, { useEffect, useState } from "react";
import Router from "./router/indexRouter";
import Tabar from "./components/Tabar";
import "./css/App.css";
import store from "./redux/store";

export default function App() {
  const [first, setfirst] = useState(store.getState().TabbarReducer.show)

  useEffect(() => {
    store.subscribe(() => {
      // 访问最新状态
      // console.log(store.getState());

      // 重新设置状态
      setfirst(store.getState().TabbarReducer.show)
    });
  }, []);

  return (
    <div>
      <Router>
        {/* 麻烦啊，居然要使用插槽 */}
        {
          first && <Tabar></Tabar>
        }
      </Router>
    </div>
  );
}
