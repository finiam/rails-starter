const dependenciesToTranspile = ["wouter"];
const nodeModules = new RegExp(
  `node_modules/(?!(${dependenciesToTranspile.join("|")})/).*`
);

module.exports = {
  test: /\.js|.jsx(\.erb)?$/,
  exclude: [nodeModules, /.+\.stories\.js$/, /.+\.test\.js/],
  loader: "babel-loader"
};
