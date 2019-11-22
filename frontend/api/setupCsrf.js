import axios from "axios";

export default function setupCsrf() {
  const element = document.getElementsByName("csrf-token");

  if (!element || !element[0]) {
    // eslint-disable-next-line no-console
    console.warn("Can't find the csrf-token on the page!");

    return;
  }

  axios.defaults.headers["X-CSRF-Token"] = document.getElementsByName(
    "csrf-token"
  )[0].content;
}
