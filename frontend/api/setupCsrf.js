import axios from "axios";

export default function setupCsrf() {
  if (document.getElementsByName("csrf-token")[0]) {
    axios.defaults.headers["X-CSRF-Token"] = document.getElementsByName(
      "csrf-token"
    )[0].content;
  }
}
