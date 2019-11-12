import axios from "axios";

function loadCSRF() {
  if (document.getElementsByName("csrf-token")[0]) {
    axios.defaults.headers["X-CSRF-Token"] = document.getElementsByName(
      "csrf-token"
    )[0].content;
  }
}

export async function login(email, password) {
  loadCSRF();
  const response = await axios.post("/session", {
    session: { identifier: email, password }
  });

  window.location.reload();

  return response;
}

export async function logout() {
  loadCSRF();
  const response = await axios.delete("/sign_out");

  window.location.reload();

  return response;
}
