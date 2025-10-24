/**
 * @author Leroy
 * 构建路由详细配置
 */

import { Route } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import aboutInfo from "../page/aboutInfo";
import testCreate from "../page/testCreate.tsx";
import userInfo from "../view/userInfo";



const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: aboutInfo,
});
// 路由嵌套
const userInfos = new Route({
  getParentRoute: () => indexRoute,
  path: "/userInfo",
  component: userInfo,
});
// 测试子页面
const testCreateComponent = new Route({
  getParentRoute: () => rootRoute,
  path: "/testCreate",
  component: testCreate,
});


indexRoute.addChildren([userInfos])

export const routeTree = rootRoute.addChildren([indexRoute, testCreateComponent]);
