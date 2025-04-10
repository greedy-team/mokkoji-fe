import { ApiResponse } from "@/types/ApiResponse";
import { AxiosError, AxiosRequestConfig } from "axios";
import api from ".";

/**
 *
 * @param url
 * @param config
 * @returns
 */

const getData = async <T>(
  url: string,
  config?: AxiosRequestConfig 
): Promise<ApiResponse<T>> => {
  try {
    const { data } = await api.get<ApiResponse<T>>(url, config);
    return data;
  } catch (error) {
    console.error(error);

    if (error instanceof AxiosError) {
      throw new Error(error.message || "API 요청 실패");
    }

    throw new Error("Unknown error occurred");
  }
};
export default getData;
