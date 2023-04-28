// @ts-nocheck
import "./App.css";
import React from "react";
// 导入路由组件
import { BrowserRouter, HashRouter } from "react-router-dom";

// 直接引入路由组件
// import Index from "./routers";

// 引入tabbar
import Tabbar from "./component/Tabbar";
import IndexBak from "./routers/indexBak";

/*
! 正常渲染index.html即可避免，不能让后端返回404
*/

function App() {
  return (
    <BrowserRouter>
      {/* Routes高阶组件 */}
      {/* <Index></Index> */}
      {/* useRoutes 高阶钩子组件 */}
      <IndexBak></IndexBak>
      <Tabbar></Tabbar>
    </BrowserRouter>
  );
}

export default App;
