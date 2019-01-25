import axios from "axios";

let token;

if (document.getElementsByName("csrf-token")[0]) {
  token = document.getElementsByName("csrf-token")[0].content;
}

axios.defaults.headers["X-CSRF-Token"] = token;

export function login(email, password) {
  return axios.post("/session", { session: { identifier: email, password } });
}

export async function logout() {
  const response = await axios.delete("/sign_out");

  window.location.reload();

  return response;
}
