const API_URL = "http://localhost:5001/api/auth";

export async function registerUser(userData) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }

  return result;
}
export async function loginUser(credentials) {
  const response = await fetch(`${API_URL / login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Login failed.");
  }
  return results;
}
