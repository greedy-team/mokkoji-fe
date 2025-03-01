import axios, { AxiosResponse } from "axios";
import { UserLoginType } from "@/types/userInfoType";
import { useAuthStore } from "@/stores/useAuthStore";
import { getTokenExpiration } from "@/utils/getTokenExpiration";

interface AuthResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

const apiUsers = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/users`,
});

export const saveAuthTokens = async (
  credentials: UserLoginType
): Promise<void> => {
  try {
    const response: AxiosResponse<AuthResponse> = await apiUsers.post(
      `/auth/login`,
      credentials
    );
    const { accessToken, refreshToken } = response.data.data;

    const expiredTime = getTokenExpiration(accessToken);

    useAuthStore
      .getState()
      .setToken(accessToken, refreshToken, expiredTime || 59); // ✅ 이렇게 직접 접근
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert("로그인 실패!");
      throw new Error("로그인 실패");
    }

    alert("unknown Error!");
    throw new Error("알 수 없는 오류 발생");
  }
};

export const expireAuthTokens = async (): Promise<void> => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) {
    alert("토큰 미존재!");
    return;
  }
  try {
    await apiUsers.post(
      `/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    useAuthStore.getState().clearToken();
  } catch (error) {
    console.error("로그아웃 실패:", error);
    alert("로그아웃 실패!");
    throw new Error("로그아웃 에러");
  }
};
