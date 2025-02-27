import axios from "axios";
import { useAuthStore, isTokenExpired } from "@/stores/useAuthStore";

const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();

    if (accessToken && !isTokenExpired()) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } 

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { setAccessToken, refreshToken, clearToken } =
      useAuthStore.getState();
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post("/users/auth/refresh", {
          refreshToken,
        });

        console.log("리프레시 토큰 발급!", refreshToken);

        setAccessToken(data.accessToken, 30);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return api(originalRequest);
      } catch {
        console.error("Refresh token expired, logging out...");
        clearToken();
      }
    }
    return Promise.reject(error);
  }
);

export default api;
