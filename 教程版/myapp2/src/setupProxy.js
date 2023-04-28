const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/ajax",
    createProxyMiddleware({
      // 反向代理
      target: "https://i.maoyan.com/",
      changeOrigin: true,
    })
  );
};
