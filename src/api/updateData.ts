import { ApiResponse } from "@/types/ApiResponse";
import { AxiosError, AxiosRequestConfig } from "axios";
import api from ".";

export const updateData = async <T>(
  method: "post" | "put" | "patch" | "delete",
  url: string,
  data?: unknown, 
  config?: AxiosRequestConfig 
): Promise<ApiResponse<T>> => {
  try {
    let response;
    switch (method) {
      case "post":
        response = await api.post<ApiResponse<T>>(url, data, config);
        break;
      case "put":
        response = await api.put<ApiResponse<T>>(url, data, config);
        break;
      case "patch":
        response = await api.patch<ApiResponse<T>>(url, data, config);
        break;
      case "delete":
        response = await api.delete<ApiResponse<T>>(url, { ...config, data });
        break;
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
    return response.data;
  } catch (error) {
    console.error(error);

    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || "API 요청 실패");
    }

    throw new Error("Unknown error occurred");
  }
};
