import axios from "axios";

export async function login(email, password) {
  const response = await axios.post("/session", {
    session: { identifier: email, password }
  });

  return response;
}

export async function logout() {
  const response = await axios.delete("/sign_out");

  return response;
}
