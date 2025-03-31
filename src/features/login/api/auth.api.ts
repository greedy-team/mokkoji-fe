import axios from "axios";
import { UserLoginType } from "@/types/userInfoType";
import { useAuthStore } from "@/features/login/store/useAuthStore";
import { getTokenExpiration } from "@/utils/getTokenExpiration";
import { queryClient } from "@/services/TanstackQueryStore";
import  sendData  from "@/api/sendData";
import { ApiResponse } from "@/types/ApiResponse";

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const saveAuthTokens = async (
  credentials: UserLoginType
): Promise<void> => {
  try {
    const response: ApiResponse<AuthResponse> = await sendData(
      "post",
      "/users/auth/login",
      credentials
    );

    if (!response?.data) {
      throw new Error("인증 데이터가 없습니다.");
    }

    const { accessToken, refreshToken } = response.data;
    const expiredTime = getTokenExpiration(accessToken);

    useAuthStore
      .getState()
      .setToken(accessToken, refreshToken, expiredTime || 59);

    queryClient.invalidateQueries({ queryKey: ["clubs"] });
  } catch (error) {
    console.error("로그인 오류:", error);

    if (axios.isAxiosError(error)) {
      alert(`로그인 실패! (${error.response?.data?.message || error.message})`);
      throw new Error(error.response?.data?.message || "로그인 실패");
    }

    alert("알 수 없는 오류 발생!");
    throw new Error(
      error instanceof Error ? error.message : "알 수 없는 오류 발생"
    );
  }
};

const LogOutAction = () => {
  useAuthStore.getState().clearToken();
  queryClient.invalidateQueries({ queryKey: ["clubs"] });
};

export const expireAuthTokens = async (): Promise<void> => {
  const accessToken = useAuthStore.getState().accessToken;
  if (!accessToken) {
    throw new Error("토큰 미존재!");
  }
  try {
    await sendData(
      "post",
      "/users/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    LogOutAction();
  } catch (error) {
    console.error("로그아웃 실패:", error);
    throw new Error("로그아웃 에러");
  }
};
