// @ts-nocheck
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
// 导入组件
// import Film from "../views/Film";
import Nowplaying from "../component/Nowplaying";
import Comingson from "../component/Comingson";

// import Cinema from "../views/Cinema";
import Center from "../views/Center";
import NotFound from "../views/NotFound";
import Detail from "../views/Detail";
// import Login from "../views/Login";

// 公共跳转组件
import Redirect from "../component/Redirect";

// 导入权限校验组件
import AuthComponent from "./AuthComponent"

// 导入路由懒加载组件
import Lazyload from "./Lazyload"

export default function Index(props) {
  return (
    <Routes>
      <Route path="/film" element={Lazyload("Film")}>
        {/* 这里使用idnex，让/film的默认子路由重定向到/film/nowplaying上 */}
        <Route index element={<Redirect to={"/film/nowplaying"} />}></Route>
        {/* 直接嵌套子路由 */}
        <Route path="nowplaying" element={<Nowplaying></Nowplaying>}></Route>
        <Route path="comingson" element={<Comingson></Comingson>}></Route>
      </Route>
      {/* 开启懒加载 */}
      <Route path="/cinema" element={Lazyload("Cinema")}></Route>
      <Route path="/login" element={Lazyload("Login")}></Route>
      {/* 这里设置路由拦截 */}
      <Route
        path="/center"
        // 跟render不一样我，推荐使用插槽包装组件，直接写逻辑也行
        element={
          <AuthComponent>
            <Center></Center>
          </AuthComponent>
        }
      ></Route>

      {/* 使用动态路由 */}
      <Route path="/detail/:filmId" element={<Detail></Detail>}></Route>

      {/* 不启用静态路由 */}
      {/* <Route path="/detail/" element={<Detail></Detail>}></Route> */}

      {/* index用于默认路由，相当于 path='/' */}
      {/* <Route index element={<Film></Film>}></Route> */}

      {/* 使用路由重定向，直接使用通配符* */}
      {/* <Route path="*" element={<Navigate to="/film" />}></Route> */}

      {/* 自建hook重定向组件 */}
      <Route
        path="/"
        element={<Redirect to={"/film/nowplaying"}></Redirect>}
      ></Route>

      {/* 404组件 */}
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}
