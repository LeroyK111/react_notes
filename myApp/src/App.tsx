import { useState } from "react";
// 导入css
import "./App.less";

// 导入bulma框架
import "bulma";

// 路由窗口
import { Outlet } from "@tanstack/router";

// 组件
import UserProfile from "./components/demo";

// 导入商店
import useBearStore from "./stores/state";

function App() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);

  return (
    <div>
      <div>{bears}</div>
      <button className="button" onClick={()=>{increasePopulation(), increasePopulation()}}>
        Button test{" "}
      </button>
      <UserProfile></UserProfile>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
