import { ApiResponse } from "@/services";

export enum ClubCategory {
  CULTURAL_ART = "CULTURAL_ART",
  ACADEMIC_CULTURAL = "ACADEMIC_CULTURAL",
  VOLUNTEER_SOCIAL = "VOLUNTEER_SOCIAL",
  SPORTS = "SPORTS",
  RELIGIOUS = "RELIGIOUS",
  SOCIAL = "SOCIAL",
}

export enum ClubAffiliation {
  CENTRAL_CLUB = "CENTRAL_CLUB", // 중앙동아리
  DEPARTMENT_CLUB = "DEPARTMENT_CLUB", // 가인준동아리
}

export interface ClubType {
  id: number;
  name: string;
  category: ClubCategory;
  affiliation: ClubAffiliation;
  description: string;
  recruitStartDate: string | undefined;
  recruitEndDate: string | undefined;
  imageURL: string;
  isFavorite: boolean | undefined;
}

export interface PaginationType {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

export type ClubResponseType = ApiResponse<{
  clubs: ClubType[];
  pagination: PaginationType;
}>;

export interface ClubDetailType {
  id: number;
  name: string;
  category: string;
  affiliation: string;
  description: string;
  recruitStartDate: string;
  recruitEndDate: string;
  imageURL: string;
  isFavorite: boolean;
  instagramLink: string;
  recruitPost: string;
}

export type ClubDetailResponseType = ApiResponse<ClubDetailType>;

export interface CluParameterType {
  name: string | undefined;
  category: ClubCategory | undefined;
  affliction: ClubAffiliation | undefined;
  status: string | undefined;
  page: number | undefined;
  size: number | undefined;
}
