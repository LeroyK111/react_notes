import {
  Router,
  Route,
  RootRoute,
} from "@tanstack/router";
import home from "../page/home";
import App from "../App";

const rootRoute = new RootRoute({
  // 导入根组件app
  component: App,
});

const indexRoute = new Route({
  // 他们的父组件
  getParentRoute: () => rootRoute,
  path: "/",
  component: home,
});


// 创建路由树
const routeTree = rootRoute.addChildren([indexRoute])


// 路由对象
const router = new Router({ routeTree })


// 导出对象
export default router




