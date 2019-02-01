const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const localIdentName = () => {
  switch (process.env.NODE_ENV) {
    case "production":
      return "[hash]";
    default:
      return "[folder]__[local]__[hash]";
  }
};

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
        localIdentName: localIdentName()
      }
    },
    "postcss-loader"
  ]
};
