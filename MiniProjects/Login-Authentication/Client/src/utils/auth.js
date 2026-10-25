// Reads the "exp" claim (in ms) from a JWT without verifying it.
// Verification is the server's job; the client only needs to know when to sign out.
export function getTokenExpiry(token) {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    return payload.exp ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
}
