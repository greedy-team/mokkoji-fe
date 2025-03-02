import { ClubCategory } from "@/types/clubType";

export const ClubCategoryKorean: Record<ClubCategory, string> = {
  [ClubCategory.CULTURAL_ART]: "문화/예술",
  [ClubCategory.ACADEMIC_CULTURAL]: "학술/교양",
  [ClubCategory.VOLUNTEER_SOCIAL]: "봉사/사회",
  [ClubCategory.SPORTS]: "체육",
  [ClubCategory.RELIGIOUS]: "종교",
  [ClubCategory.OTHER]: "기타",
  [ClubCategory.ALL]: "전체",
};