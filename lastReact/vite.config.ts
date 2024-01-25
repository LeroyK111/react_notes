import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// 自动路由配置插件, 基于文件, 我们就不要用了
// import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
});
