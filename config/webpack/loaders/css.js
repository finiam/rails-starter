const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.css$/,
  use: [
    process.env.NODE_ENV === "development" ||
    process.env.EXTRACT_CSS === "false"
      ? "style-loader"
      : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: true,
        localIdentName: "[hash:8]_[folder]_[name]_[local]"
      }
    },
    "postcss-loader"
  ]
};
