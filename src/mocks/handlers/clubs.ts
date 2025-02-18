import { http, HttpResponse } from "msw";
import { ClubResponse } from "../../types/Club";

const clubsDummyData: ClubResponse = {
  data: {
    clubs: [
      {
        id: 1,
        name: "그리디",
        category: "학술/교양",
        affiliation: "중앙동아리",
        description: "간단 소개",
        recruitStartDate: "2025-10-12",
        recruitEndDate: "2025-10-13",
        imageUrl: "https://example.com/images/greedy.jpg",
        favorite: true,
      },
      {
        id: 2,
        name: "EN#",
        category: "학술/교양",
        affiliation: "중앙동아리",
        description: "간단 소개",
        recruitStartDate: "2025-10-12",
        recruitEndDate: "2025-10-13",
        imageUrl: "https://example.com/images/rush.jpg",
        favorite: true,
      },
      {
        id: 3,
        name: "CODELAB",
        category: "프로그래밍",
        affiliation: "중앙동아리",
        description: "코딩과 알고리즘 연구",
        recruitStartDate: "2025-11-01",
        recruitEndDate: "2025-11-15",
        imageUrl: "https://example.com/images/codelab.jpg",
        favorite: false,
      },
      {
        id: 4,
        name: "비상",
        category: "봉사",
        affiliation: "중앙동아리",
        description: "사회봉사 활동",
        recruitStartDate: "2025-09-20",
        recruitEndDate: "2025-09-30",
        imageUrl: "https://example.com/images/volunteer.jpg",
        favorite: false,
      },
      {
        id: 5,
        name: "FC Unis",
        category: "스포츠",
        affiliation: "중앙동아리",
        description: "축구 동아리",
        recruitStartDate: "2025-08-01",
        recruitEndDate: "2025-08-10",
        imageUrl: "https://example.com/images/soccer.jpg",
        favorite: true,
      },
    ],
    pagination: {
      page: 1,
      size: 5,
      totalPages: 1,
      totalElements: 5,
    },
  },
};


export const clubHandlers = [
    http.get("http://localhost:3000/clubs", () => {
      return HttpResponse.json(clubsDummyData);
    }),
  ];
  