import { http, HttpResponse } from "msw";
import { ClubType } from "@/types/clubType";

export const recruitDummyData: ClubType[] = [
  {
    id: 1,
    name: "그리디",
    category: "학술/교양",
    affiliation: "중앙동아리",
    description: "알고리즘과 문제 해결을 연구하는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-12",
    imageUrl: "https://example.com/images/greedy.jpg",
    favorite: true,
  },
  {
    id: 2,
    name: "프론티어",
    category: "봉사",
    affiliation: "중앙동아리",
    description: "다양한 봉사 활동을 통해 나눔을 실천하는 동아리",
    recruitStartDate: "2025-02-15",
    recruitEndDate: "2025-02-18",
    imageUrl: "https://example.com/images/frontier.jpg",
  },
  {
    id: 3,
    name: "오케스트라",
    category: "예술/공연",
    affiliation: "중앙동아리",
    description: "클래식 음악을 연주하는 오케스트라 동아리",
    recruitStartDate: "2025-02-12",
    recruitEndDate: "2025-02-15",
    imageUrl: "https://example.com/images/orchestra.jpg",
    favorite: false,
  },
  {
    id: 4,
    name: "런닝맨",
    category: "스포츠",
    affiliation: "과 동아리",
    description: "마라톤 및 러닝을 즐기는 동아리",
    recruitStartDate: "2025-02-16",
    recruitEndDate: "2025-02-20",
    imageUrl: "https://example.com/images/running.jpg",
  },
  {
    id: 5,
    name: "쿠킹클럽",
    category: "취미/자기계발",
    affiliation: "중앙동아리",
    description: "요리를 배우고 함께 즐기는 동아리",
    recruitStartDate: "2025-02-18",
    recruitEndDate: "2025-02-22",
    imageUrl: "https://example.com/images/cooking.jpg",
    favorite: true,
  },
  {
    id: 6,
    name: "모험가들",
    category: "스포츠",
    affiliation: "과 동아리",
    description: "모험과 탐험을 즐기는 동아리",
    recruitStartDate: "2025-02-14",
    recruitEndDate: "2025-02-17",
    imageUrl: "https://example.com/images/adventurers.jpg",
  },
  {
    id: 7,
    name: "아이디어팩토리",
    category: "창업/비즈니스",
    affiliation: "중앙동아리",
    description: "창업 아이디어를 현실로 만드는 동아리",
    recruitStartDate: "2025-02-20",
    recruitEndDate: "2025-02-25",
    imageUrl: "https://example.com/images/ideafactory.jpg",
    favorite: false,
  },
  {
    id: 8,
    name: "그린피스",
    category: "환경/사회",
    affiliation: "중앙동아리",
    description: "환경 보호와 지속 가능한 발전을 위한 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-14",
    imageUrl: "https://example.com/images/greenpeace.jpg",
    favorite: true,
  },
  {
    id: 9,
    name: "하이테크",
    category: "기술",
    affiliation: "중앙동아리",
    description: "최첨단 기술을 연구하고 실습하는 동아리",
    recruitStartDate: "2025-02-20",
    recruitEndDate: "2025-02-25",
    imageUrl: "https://example.com/images/hi-tech.jpg",
  },
  {
    id: 10,
    name: "네이처클럽",
    category: "환경/사회",
    affiliation: "중앙동아리",
    description: "자연과 함께하는 활동을 지향하는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-14",
    imageUrl: "https://example.com/images/natureclub.jpg",
  },
  {
    id: 11,
    name: "푸드테크",
    category: "기술/창업",
    affiliation: "중앙동아리",
    description: "음식과 기술을 결합한 새로운 비즈니스 모델을 탐구하는 동아리",
    recruitStartDate: "2025-02-11",
    recruitEndDate: "2025-02-13",
    imageUrl: "https://example.com/images/foodtech.jpg",
  },
  {
    id: 12,
    name: "토론회",
    category: "학술/교양",
    affiliation: "중앙동아리",
    description: "다양한 사회적 이슈에 대해 토론하는 동아리",
    recruitStartDate: "2025-02-14",
    recruitEndDate: "2025-02-17",
    imageUrl: "https://example.com/images/debate.jpg",
  },
  {
    id: 13,
    name: "푸드마스터",
    category: "취미/자기계발",
    affiliation: "과 동아리",
    description: "요리를 잘하는 사람들을 위한 동아리",
    recruitStartDate: "2025-02-15",
    recruitEndDate: "2025-02-18",
    imageUrl: "https://example.com/images/foodmaster.jpg",
    favorite: true,
  },
  {
    id: 14,
    name: "스타트업아이디어",
    category: "창업/비즈니스",
    affiliation: "중앙동아리",
    description: "스타트업 아이디어를 발전시키는 동아리",
    recruitStartDate: "2025-02-19",
    recruitEndDate: "2025-02-22",
    imageUrl: "https://example.com/images/startupidea.jpg",
  },
  {
    id: 15,
    name: "웹개발팀",
    category: "기술",
    affiliation: "중앙동아리",
    description: "웹 애플리케이션을 개발하는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-13",
    imageUrl: "https://example.com/images/webdev.jpg",
  },
  {
    id: 16,
    name: "디지털노마드",
    category: "창업/비즈니스",
    affiliation: "과 동아리",
    description: "디지털 기술을 활용해 자유로운 삶을 추구하는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-14",
    imageUrl: "https://example.com/images/digitalnomad.jpg",
  },
  {
    id: 17,
    name: "문학동아리",
    category: "예술/문학",
    affiliation: "중앙동아리",
    description: "문학을 사랑하는 사람들의 모임",
    recruitStartDate: "2025-02-12",
    recruitEndDate: "2025-02-14",
    imageUrl: "https://example.com/images/literatureclub.jpg",
    favorite: false,
  },
  {
    id: 18,
    name: "디지털아트",
    category: "예술/디자인",
    affiliation: "중앙동아리",
    description: "디지털 기술을 이용한 예술을 탐구하는 동아리",
    recruitStartDate: "2025-02-15",
    recruitEndDate: "2025-02-17",
    imageUrl: "https://example.com/images/digitalart.jpg",
  },
  {
    id: 19,
    name: "헬스클럽",
    category: "스포츠",
    affiliation: "과 동아리",
    description: "건강한 삶을 위한 운동을 즐기는 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-12",
    imageUrl: "https://example.com/images/healthclub.jpg",
    favorite: true,
  },
  {
    id: 20,
    name: "패션디자인",
    category: "예술/디자인",
    affiliation: "중앙동아리",
    description: "패션 디자인을 배우고 실습하는 동아리",
    recruitStartDate: "2025-02-13",
    recruitEndDate: "2025-02-15",
    imageUrl: "https://example.com/images/fashiondesign.jpg",
  },
  {
    id: 21,
    name: "건축학회",
    category: "학술/교양",
    affiliation: "중앙동아리",
    description: "건축을 배우고 토론하는 동아리",
    recruitStartDate: "2025-02-18",
    recruitEndDate: "2025-02-20",
    imageUrl: "https://example.com/images/architecture.jpg",
  },
  {
    id: 22,
    name: "프로덕트디자인",
    category: "기술/디자인",
    affiliation: "중앙동아리",
    description: "제품 디자인을 학습하고 실습하는 동아리",
    recruitStartDate: "2025-02-14",
    recruitEndDate: "2025-02-16",
    imageUrl: "https://example.com/images/productdesign.jpg",
  },
  {
    id: 23,
    name: "전자기기제작",
    category: "기술",
    affiliation: "과 동아리",
    description: "전자 기기를 설계하고 제작하는 동아리",
    recruitStartDate: "2025-02-19",
    recruitEndDate: "2025-02-22",
    imageUrl: "https://example.com/images/electronics.jpg",
  },
  {
    id: 24,
    name: "자기계발",
    category: "자기계발",
    affiliation: "과 동아리",
    description: "개인 성장을 위한 자기계발 동아리",
    recruitStartDate: "2025-02-10",
    recruitEndDate: "2025-02-14",
    imageUrl: "https://example.com/images/selfdevelopment.jpg",
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
