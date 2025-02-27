import { jwtDecode } from "jwt-decode";

export function getTokenExpiration(token: string) {
  const decoded = jwtDecode(token);
  return decoded.exp
    ? Math.floor((decoded.exp - Date.now() / 1000) / 60)
    : null;
}
