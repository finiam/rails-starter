/* eslint-disable global-require */

module.exports = {
  plugins: [
    require("postcss-import"),
    require("precss"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 3
    }),
    require("postcss-color-function"),
    require("postcss-flexbugs-fixes"),
  ]
};
