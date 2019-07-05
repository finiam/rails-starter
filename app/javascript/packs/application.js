import "babel-polyfill";
import "react-hot-loader";

const componentRequireContext = require.context(
  "../../../frontend/ssr",
  true
);
const ReactRailsUJS = require("react_ujs");

ReactRailsUJS.useContext(componentRequireContext);
