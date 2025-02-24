import { http, HttpResponse } from "msw";

const favoriteDummyClubs = Array.from({ length: 20 }, (_, index) => {
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

export const favoriteHandlers = [
  http.get(`http://${import.meta.env.VITE_API_URL}/favorites`, () => {
    return HttpResponse.json(favoriteDummyClubs);
  }),
];
