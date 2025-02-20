import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post(
    `http://${import.meta.env.VITE_API_URL}/auth/login`,
    async (request) => {
      if (!request) throw new Error("정보 부족!");

      console.log(request);

      return HttpResponse.json({
        accessToken: "accessToken",
        refreshToken: "refreshToken",
      });
    }
  ),

  http.post(`http://${import.meta.env.VITE_API_URL}/auth/logout`, () => {
    return HttpResponse.json(true);
  }),
];
