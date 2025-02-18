import axios, { AxiosResponse } from "axios";
import { userInterface } from "../types/userInfo";

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const saveAuthTokens = async (
  credentials: userInterface
): Promise<void> => {
  try {
    const response: AxiosResponse<AuthResponse> = await axios.post(
      `http://${import.meta.env.VITE_API_URL}/auth/login`,
      credentials
    );
    console.log(response.data);
    const { accessToken, refreshToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    console.log("토큰 저장 완료");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("알 수 없는 오류 발생");
  }
};
