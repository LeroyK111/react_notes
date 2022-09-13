// @ts-nocheck
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useRoutes } from "react-router-dom";
import Comingson from "../component/Comingson";
import Nowplaying from "../component/Nowplaying";

// 公共跳转组件
import Redirect from "../component/Redirect";

// 导入权限校验组件
import AuthComponent from "./AuthComponent";

// 导入路由懒加载组件
import Lazyload from "./Lazyload";

/*
! 直接开启配置式路由useRoutes，配置全局路由
*/

export default function IndexBak(props) {
  const element = useRoutes([
    {
      path: "/film",
      element: Lazyload("Film"),
      children: [
        { path: "", element: <Redirect to={"/film/nowplaying"} /> },
        { path: "nowplaying", element: <Nowplaying /> },
        { path: "comingson", element: <Comingson /> },
      ],
    },
    {
      path:"/detail/:filmId",
      element: Lazyload("Detail")
    },
    {
      path: "/center",
      element: <AuthComponent>{Lazyload("Center")}</AuthComponent>,
    },
    {
      path: "/login",
      element: Lazyload("Login"),
    },
    {
      path: "/cinema",
      element: Lazyload("Cinema"),
    },
    {
      path: "*",
      element: Lazyload("NotFound"),
    },
    {
      path: "/",
      element: <Redirect to={"/film"} />,
    },
  ]);
  return element;
}
