import { http, HttpResponse } from "msw";
import { ClubType } from "../../types/clubType";

export const recruitDummyData: ClubType[] = [
  {
    id: 1,
    name: "그리디",
    category: "학술/교양",
    affiliation: "중앙동아리",
    description: "알고리즘과 문제 해결을 연구하는 동아리",
    recruitStartDate: "2025-10-12",
    recruitEndDate: "2025-10-13",
    imageUrl: "https://example.com/images/greedy.jpg",
    favorite: true,
  },
  {
    id: 2,
    name: "프론티어",
    category: "봉사",
    affiliation: "중앙동아리",
    description: "다양한 봉사 활동을 통해 나눔을 실천하는 동아리",
    imageUrl: "https://example.com/images/frontier.jpg",
  },
  {
    id: 3,
    name: "오케스트라",
    category: "예술/공연",
    affiliation: "중앙동아리",
    description: "클래식 음악을 연주하는 오케스트라 동아리",
    recruitStartDate: "2025-09-01",
    recruitEndDate: "2025-09-10",
    imageUrl: "https://example.com/images/orchestra.jpg",
    favorite: false,
  },
  {
    id: 4,
    name: "런닝맨",
    category: "스포츠",
    affiliation: "과 동아리",
    description: "마라톤 및 러닝을 즐기는 동아리",
    imageUrl: "https://example.com/images/running.jpg",
  },
  {
    id: 5,
    name: "쿠킹클럽",
    category: "취미/자기계발",
    affiliation: "중앙동아리",
    description: "요리를 배우고 함께 즐기는 동아리",
    recruitStartDate: "2025-08-15",
    recruitEndDate: "2025-08-20",
    imageUrl: "https://example.com/images/cooking.jpg",
    favorite: true,
  },
];

export const recruitHandlers = [
  http.get("http://localhost:3000/recruit", () => {
    return HttpResponse.json(recruitDummyData);
  }),
];
