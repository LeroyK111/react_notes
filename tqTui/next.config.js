const million = require("million/compiler");
const { i18n } = require("./next-i18next.config");


module.exports = million.next(
  {
    i18n,
    transpilePackages: ["@refinedev/nextjs-router"],
  },
  { auto: true }
);


