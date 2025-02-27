import axios, { AxiosResponse } from "axios";
import { UserLoginType } from "@/types/userInfoType";
import { useAuthStore } from "@/stores/useAuthStore";

interface AuthResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export const saveAuthTokens = async (
  credentials: UserLoginType
): Promise<void> => {
  try {
    const response: AxiosResponse<AuthResponse> = await axios.post(
      `api/users/auth/login`,
      credentials
    );
    const { accessToken, refreshToken } = response.data.data;
    console.log("토큰 받아와요!", accessToken, refreshToken);
    useAuthStore.getState().setToken(accessToken, refreshToken, 30); // ✅ 이렇게 직접 접근
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      alert("로그인 실패!");
      throw new Error("로그인 실패");
    }
    console.error("Unexpected Error:", error);
    alert("unknown Error!");
    throw new Error("알 수 없는 오류 발생");
  }
};

export const expireAuthTokens = async () => {
  try {
    const response: AxiosResponse<AuthResponse> = await axios.post(
      `api/users/auth/logout`
    );
    useAuthStore.getState().clearToken();
    return response;
  } catch {
    alert("로그아웃 실패!");
    throw new Error("로그아웃 에러");
  }
};
