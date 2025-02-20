import axios from "axios";
import { useAuthStore, isTokenExpired } from "@/stores/useAuthStore";

const api = axios.create({
  baseURL: `http://${import.meta.env.VITE_API_URL}`,
});

api.interceptors.request.use(
  (config) => {
    const { accessToken, clearToken } = useAuthStore.getState();

    if (accessToken && !isTokenExpired()) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      console.log("토큰 만료!");
      clearToken(); // 만료 시 토큰 제거
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { refreshToken } = useAuthStore.getState();

        const { data } = await axios.post(
          `https://${import.meta.env.VITE_API_URL}/auth/refresh`,
          { refreshToken }
        );

        localStorage.setItem("accessToken", data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return api(originalRequest); // 요청 재시도
      } catch {
        console.error("Refresh token expired, logging out...");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
