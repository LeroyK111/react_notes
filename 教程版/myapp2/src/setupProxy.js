const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/ajax",
    createProxyMiddleware({
      // ๅๅไปฃ็
      target: "https://i.maoyan.com/",
      changeOrigin: true,
    })
  );
};
