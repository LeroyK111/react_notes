import { defineConfig } from "umi";
// 声明式路由
export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
});
