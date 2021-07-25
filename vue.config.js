const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.join(__dirname, "src/assets"),
      },
    },
  },
};
