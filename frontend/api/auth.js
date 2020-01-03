import axios from "axios";

export async function getSession() {
  const response = await axios.get("/session");

  return response;
}

export async function login(email, password) {
  const response = await axios.post("/session", { email, password });

  return response;
}

export async function logout() {
  const response = await axios.delete("/session");

  return response;
}
