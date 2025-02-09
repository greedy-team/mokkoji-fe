import { http, HttpResponse } from 'msw';

export const postHandlers = [
  http.post('http://localhost:5173/posts', ({ request }) => {
    const requestBody = request.body;
    console.log('게시물 요청 모킹', requestBody);

    return HttpResponse.json({
      ...requestBody,
      message: 'User info submitted successfully',
    });
  }),
];