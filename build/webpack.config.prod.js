const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const { getHtmlPlugins } = require("./utils");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "[name].js",
    library: "kuan-[name]",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
    umdNamedDefine: true
  },
  plugins: [...getHtmlPlugins()]
});
