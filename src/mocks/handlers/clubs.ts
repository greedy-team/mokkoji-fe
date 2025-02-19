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

const clubDummyData = {
  data: {
    clubs,
    pagination: {
      page: 1,
      size: 10,
      totalPages: 5,
      totalElements: 50,
    },
  },
};
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
  http.get(`http://${import.meta.env.VITE_API_URL}/clubs`, () => {
    return HttpResponse.json(clubDummyData);
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
];
