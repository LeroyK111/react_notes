// @ts-nocheck
import React from "react";
// 导入路由件
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Films from "../views/Films";
import Cinemas from "../views/Cinemas";
import Center from "../views/Center";
import NotFound from "../views/NotFound.js";
import Cinemasapi from "../views/Cinemasapi.js";
import Detail from "../views/Detail";
import Login from "../views/Login";

/*
!单独封装一个路由组件
*/

function isAuth(params) {
  console.log();
  return localStorage.getItem("token");
}
/*
!BrowserRouter 需要后端配置，忽略前端路由。
!当后端接收到不存在url请求时，不能加载404，直接渲染首页即可。
! 存在这样的后端插件。直接引用，就可以避免前端路由发送请求
*/

export default function Router(props) {
  return (
    // <HashRouter></HashRouter>不使用hash路由，这也是官方推荐的
    <BrowserRouter>
      {/* 把导航插入到这里 */}
      {props.children}

      {/* Switch标签和可以筛选路由，避免刷新后，频繁重定向 */}
      <Switch>
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>

        {/* 这种是多级路由，其实还是一个组件，父亲不加exact，还匹配不到 */}
        <Route path="/cinemas/api" component={Cinemasapi}></Route>

        {/* 这里嵌套一个子路由 */}
        {/* <Route path="/center" component={Center}></Route> */}
        {/* 使用路由拦截 */}
        <Route
          path={"/center"}
          render={(props) => {
            // 需要手动传参props
            return isAuth() ? (
              <Center {...props} />
            ) : (
              <Redirect to={"/login"}></Redirect>
            );
          }}
        ></Route>

        <Route path={"/login"} component={Login}></Route>

        {/* 路由传参,动态传参，这种推荐 */}
        <Route path={"/detail/:myid"} component={Detail}></Route>
        {/* 第二种方式，不推荐，会丢失数据 */}
        {/* <Route path={"/detail"} component={Detail}></Route> */}

        {/* 重定向，给个默认路由地址，这就是模糊匹配 */}
        {/* <Redirect from="/" to="/films"></Redirect> */}

        {/* 加入exact，即可精准匹配 */}
        <Redirect from="/" to="/films" exact></Redirect>

        {/* 构建404路由 */}
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
