/*
! 全局配置文件夹
*/

export default {
  npmClient: "npm",
  /*
    !现在官方推荐申明式路由，约定式路由则不推荐了
   * 我们使用申明式的路由，不再直接再pages下创建文件.
    * 404文件，则会再bulid中生效
   */
  routes: [
    // 4.0之后，官方只能从这里重定向
    { path: "/", redirect: "/film" },
    { path: "/film", redirect: "/film/nowplaying" },
    // 加入路由校验
    { path: "/center", component: "center", wrappers: ["@/wrappers/auth"] },
    { path: "/cinma", component: "cinma" },
    // 详情页面
    { path: "/detail/:myid", component: "detail" },
    // 登录页面
    { path: "/login", component: "login" },
    // 选择城市
    { path: "/city", component: "city" },

    // 申明嵌套子路由
    {
      path: "/",
      component: "film",
      routes: [
        { path: "film/nowplaying", component: "/film/nowPlaying" },
        { path: "film/comingsoon", component: "/film/comingsoon" },
      ],
    },
  ],

  history: {
    // 默认路由模式
    type: "browser",
  },

  // 使用反向代理
  proxy: {
    "/ajax": {
      target: "https://i.maoyan.com",
      changeOrigin: true,
    },
  },

  // 使用微生成器，启用了dva。需要使用新的模板才行
  plugins: ["@umijs/plugins/dist/dva"],
  dva: {}
};
