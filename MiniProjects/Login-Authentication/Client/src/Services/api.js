const API_URL = "http://localhost:5001/api/auth";

async function request(path, body, fallbackMessage) {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    // fetch only throws when the request never reached the server
    throw new Error(
      "Cannot reach the server. Check that it is running on port 5001.",
    );
  }

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.message || fallbackMessage);
  }
  return result;
}

export const registerUser = (userData) =>
  request("/register", userData, "Registration failed");

export const loginUser = (credentials) =>
  request("/login", credentials, "Login failed");
