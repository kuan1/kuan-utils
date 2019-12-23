const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const { getHtmlPlugins } = require("./utils");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    publicPath: "/kuan-utils/"
  },
  plugins: [...getHtmlPlugins()]
});
