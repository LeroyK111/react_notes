import React from "react";
import "./App.scss";
// 导入路由
import { RouterProvider, Router } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routes/outeTree.gen";
// 再次包装
const router = new Router({
  routeTree: routeTree,
});
//注册路由器实例为安全类型
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
