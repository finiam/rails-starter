import easyFetch from "root/shared/easyFetch";

export async function getSession() {
  const response = await easyFetch("/session");

  return response;
}

export async function login(email, password) {
  const response = await easyFetch("/session", {
    method: "POST",
    body: { email, password }
  });

  return response;
}

export async function logout() {
  const response = await easyFetch("/session", { method: "DELETE" });

  return response;
}
