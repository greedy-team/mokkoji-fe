import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosRequestConfig } from "axios";
import api from ".";

/**
 *
 * @param method
 * @param url
 * @param data
 * @param config
 * @returns
 */
async function sendData<T>(
  method: "post" | "put" | "patch",
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
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
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
    return response.data;
  } catch (error) {
    console.error(method, error);

    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error(`${method}: Unknown error occurred`);
  }
}

export default sendData;
