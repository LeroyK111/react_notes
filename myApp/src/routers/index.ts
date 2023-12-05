import { Router, Route, RootRoute } from "@tanstack/router";
import home from "../page/home";
import App from "../App";
import test from "../components/test";

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

// 测试条件渲染
const testRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/test",
  component: test,
});

// 创建路由树
const routeTree = rootRoute.addChildren([indexRoute, testRoute]);

// 路由对象
const router = new Router({ routeTree });

// 导出对象
export default router;
