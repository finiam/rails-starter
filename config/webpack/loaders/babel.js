// In case we use some dependency that needs transpiling
// to work in older browsers for example, add it here!
const dependenciesToTranspile = [];
const nodeModules = new RegExp(
  `node_modules/(?!(${dependenciesToTranspile.join("|")})/).*`
);

module.exports = {
  test: /\.js|.jsx(\.erb)?$/,
  exclude: [nodeModules, /.+\.stories\.js$/, /.+\.test\.js/],
  loader: "babel-loader",
};
