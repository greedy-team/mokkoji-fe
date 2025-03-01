import { http, HttpResponse } from "msw";
import { ClubType } from "@/types/clubType";
import { ClubCategory } from "@/types/clubType";
import { ClubAffiliation } from "@/types/clubType";
export const recruitDummyData: ClubType[] = [
  {
    id: 1,
    name: "그리디",
    category: ClubCategory.CULTURAL_ART,
    affiliation: ClubAffiliation.CENTRAL_CLUB,
    description: "알고리즘과 문제 해결을 연구하는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-12",
    imageURL: "https://example.com/images/greedy.jpg",
    isFavorite: true,
  },
  {
    id: 2,
    name: "그리디",
    category: ClubCategory.CULTURAL_ART,
    affiliation: ClubAffiliation.CENTRAL_CLUB,
    description: "알고리즘과 문제 해결을 연구하는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-12",
    imageURL: "https://example.com/images/greedy.jpg",
    isFavorite: true,
  },
  {
    id: 3,
    name: "그리디",
    category: ClubCategory.CULTURAL_ART,
    affiliation: ClubAffiliation.CENTRAL_CLUB,
    description: "알고리즘과 문제 해결을 연구하는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-12",
    imageURL: "https://example.com/images/greedy.jpg",
    isFavorite: true,
  },
  {
    id: 4,
    name: "그리디",
    category: ClubCategory.CULTURAL_ART,
    affiliation: ClubAffiliation.CENTRAL_CLUB,
    description: "알고리즘과 문제 해결을 연구하는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-12",
    imageURL: "https://example.com/images/greedy.jpg",
    isFavorite: true,
  },
];

export const recruitHandlers = [
  http.get(`http://${import.meta.env.VITE_API_URL}/recruit`, ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const size = Number(url.searchParams.get("size")) || 9;

    const totalElements = recruitDummyData.length;
    const totalPages = Math.ceil(totalElements / size);
    const startIdx = (page - 1) * size;
    const paginatedClubs = recruitDummyData.slice(startIdx, startIdx + size);

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
];
