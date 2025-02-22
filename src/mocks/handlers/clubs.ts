import { http, HttpResponse } from "msw";

const clubs = Array.from({ length: 20 }, (_, index) => {
  const id = index + 1;
  return {
    id,
    name: `동아리 ${id}`,
    category: [
      "학술/교양",
      "프로그래밍",
      "댄스",
      "음악",
      "합창",
      "예술",
      "운동",
      "독서",
      "여행",
    ][id % 9],
    affiliation: "중앙동아리",
    description: `동아리 ${id}에 대한 간단 소개`,
    recruitStartDate: "2025-10-01",
    recruitEndDate: "2025-10-15",
    imageUrl: `example.com/images/club${id}.jpg`,
    favorite: id % 2 === 0,
  };
});

const clubDetailDummyDataList = Array.from({ length: 20 }, (_, index) => {
  const id = index + 1;
  return {
    data: {
      club: {
        id,
        name: `동아리 ${id}`,
        category: [
          "학술/교양",
          "프로그래밍",
          "댄스",
          "음악",
          "합창",
          "예술",
          "운동",
          "독서",
          "여행",
        ][id % 9],
        affiliation: "중앙동아리",
        description: `동아리 ${id}에 대한 간단 소개`,
        recruitStartDate: "2025-10-12",
        recruitEndDate: "2025-10-13",
        imageUrl: `example.com/images/club${id}.jpg`,
        isFavorite: id % 2 === 0,
        instagramLink: `insta.com/club${id}`,
        recruitPost: `동아리 ${id} 모집 공고 내용`,
      },
    },
  };
});

export const clubsHandlers = [
  http.get(`http://${import.meta.env.VITE_API_URL}/clubs`, ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const size = Number(url.searchParams.get("size")) || 9;

    const totalElements = clubs.length;
    const totalPages = Math.ceil(totalElements / size);
    const startIdx = (page - 1) * size;
    const paginatedClubs = clubs.slice(startIdx, startIdx + size);

    return HttpResponse.json({
      data: {
        clubs: paginatedClubs,
        pagination: {
          page,
          size,
          totalPages,
          totalElements,
        },
      },
    });
  }),

  http.get(`http://${import.meta.env.VITE_API_URL}/clubs/1`, () => {
    return HttpResponse.json(clubDetailDummyDataList[0]);
  }),
  http.get(`http://${import.meta.env.VITE_API_URL}/clubs/2`, () => {
    return HttpResponse.json(clubDetailDummyDataList[1]);
  }),
  http.get(`http://${import.meta.env.VITE_API_URL}/clubs/3`, () => {
    return HttpResponse.json(clubDetailDummyDataList[2]);
  }),
  http.get(`http://${import.meta.env.VITE_API_URL}/clubs/4`, () => {
    return HttpResponse.json(clubDetailDummyDataList[3]);
  }),

  http.post(`http://${import.meta.env.VITE_API_URL}/favorites/1`, (req) => {
    const requestBody = req;
    return HttpResponse.json({
      ...requestBody,
      message: "User favorite submitted successfully",
    });
  }),
  http.post(`http://${import.meta.env.VITE_API_URL}/favorites/2`, (req) => {
    const requestBody = req;
    return HttpResponse.json({
      ...requestBody,
      message: "User favorite submitted successfully",
    });
  }),
  http.post(`http://${import.meta.env.VITE_API_URL}/favorites/3`, (req) => {
    const requestBody = req;
    return HttpResponse.json({
      ...requestBody,
      message: "User favorite submitted successfully",
    });
  }),
  http.delete(`http://${import.meta.env.VITE_API_URL}/favorites/1`, (req) => {
    const requestBody = req;
    return HttpResponse.json({
      ...requestBody,
      message: "User favorite submitted successfully",
    });
  }),
  http.delete(`http://${import.meta.env.VITE_API_URL}/favorites/2`, (req) => {
    const requestBody = req;
    return HttpResponse.json({
      ...requestBody,
      message: "User favorite submitted successfully",
    });
  }),
];
