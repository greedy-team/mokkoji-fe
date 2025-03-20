import { ClubCategory } from "@/features/clubs/types/clubType";

export const ClubCategoryKorean: Record<ClubCategory, string> = {
  [ClubCategory.CULTURAL_ART]: "공연",
  [ClubCategory.ACADEMIC_CULTURAL]: "학술",
  [ClubCategory.VOLUNTEER_SOCIAL]: "봉사",
  [ClubCategory.SPORTS]: "체육",
  [ClubCategory.RELIGIOUS]: "종교",
  [ClubCategory.SOCIAL]: "문화",
};
