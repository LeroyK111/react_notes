import { createRootRoute, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";
import App from "../App";

// 开发中使用
const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <>
      {/* 默认首页 */}
      {/* <Outlet /> */}
      <App></App>
      {/* 直到加载完毕 */}
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
