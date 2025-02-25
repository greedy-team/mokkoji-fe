import { http, HttpResponse } from "msw";
import { ClubCategory } from "@/types/clubType";

const clubs = Array.from({ length: 20 }, (_, index) => {
  const id = index + 1;
  return {
    id,
    name: `동아리 ${id}`,
    category: [
      ClubCategory.ACADEMIC_CULTURAL,
      ClubCategory.CULTURAL_ART,
      ClubCategory.SPORTS,
      ClubCategory.RELIGIOUS,
      ClubCategory.SOCIAL,
      ClubCategory.VOLUNTEER_SOCIAL,
      ClubCategory.OTHER,
    ][id % 7],
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
          ClubCategory.ACADEMIC_CULTURAL,
          ClubCategory.CULTURAL_ART,
          ClubCategory.SPORTS,
          ClubCategory.RELIGIOUS,
          ClubCategory.SOCIAL,
          ClubCategory.VOLUNTEER_SOCIAL,
          ClubCategory.OTHER,
        ][id % 7],
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
    const selectedCategory = url.searchParams.get("category") ?? "";
    const keyword = url.searchParams.get("keyword")?.trim().toLowerCase() ?? "";

  //빈 값일 경우 전체 데이터를 유지하도록 설정
    const categoryFilteredClubs = selectedCategory !== ""
    ? clubs.filter((club) => club.category === selectedCategory)
    : clubs;

  //검색어가 없을 경우 전체 데이터를 유지
    const finalFilteredClubs = keyword !== ""
    ? categoryFilteredClubs.filter((club) =>
      club.name.toLowerCase().includes(keyword)
      )
    : categoryFilteredClubs;

    const totalElements = finalFilteredClubs.length;
    const totalPages = Math.ceil(totalElements / size);
    const startIdx = (page - 1) * size;
    const paginatedClubs = finalFilteredClubs.slice(startIdx, startIdx + size);

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
