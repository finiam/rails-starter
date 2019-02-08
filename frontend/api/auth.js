import axios from "axios";

let token;

if (document.getElementsByName("csrf-token")[0]) {
  token = document.getElementsByName("csrf-token")[0].content;
}

axios.defaults.headers["X-CSRF-Token"] = token;

export async function login(email, password) {
  const response = await axios.post("/session", {
    session: { identifier: email, password }
  });

  window.location.reload();

  return response;
}

export async function logout() {
  const response = await axios.delete("/sign_out");

  window.location.reload();

  return response;
}
