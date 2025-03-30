export interface ApiResponse<T> {
  status: number;
  message: string | undefined;
  data: T;
  error: string | undefined;
}
