import axios from "axios";
import { useAuthStore, isTokenExpired } from "@/stores/useAuthStore";

// JEST 환경에서 import.meta.env가 제대로 인식되지 않음
const API_URL = process.env.VITE_API_URL;

const api = axios.create({
  baseURL: `http://${API_URL}`,
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
    const { setAccessToken, refreshToken, clearToken } =
      useAuthStore.getState();
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(
          `https://${API_URL}/auth/refresh`,
          { refreshToken }
        );

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
