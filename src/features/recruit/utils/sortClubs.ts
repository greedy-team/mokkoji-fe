import { ClubType } from "@/features/clubs/types/clubType";

// 모집 공고 정렬 함수
export function sortClubs(clubs: ClubType[], sortBy: string): ClubType[] {
  const sortedClubs = [...clubs];

  const today = new Date().getTime(); // 마감일은 마지막으로 미루기 위한 기준

  if (sortBy === "마감일순") {
    sortedClubs.sort((a, b) => {
      const dateA = a.recruitEndDate ? new Date(a.recruitEndDate).getTime() : 0;
      const dateB = b.recruitEndDate ? new Date(b.recruitEndDate).getTime() : 0;

      // 마감일이 지난 경우 마지막으로 밀기
      if (dateA < today) {
        return 1;
      } else if (dateB < today) {
        return -1;
      } else return dateA - dateB; // 마감일이 지나지 않은 경우 빠른 마감일 우선 정렬
    });
  } else if (sortBy === "최신순") {
    sortedClubs.sort((a, b) => {
      const dateA = a.recruitStartDate
        ? new Date(a.recruitStartDate).getTime()
        : 0;
      const dateB = b.recruitStartDate
        ? new Date(b.recruitStartDate).getTime()
        : 0;
      return dateB - dateA;
    });
  } // 즐겨찾기 정렬 필요

  return sortedClubs;
}
