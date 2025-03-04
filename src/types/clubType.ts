export enum ClubCategory {
  CULTURAL_ART = "CULTURAL_ART",
  ACADEMIC_CULTURAL = "ACADEMIC_CULTURAL",
  VOLUNTEER_SOCIAL = "VOLUNTEER_SOCIAL",
  SPORTS = "SPORTS",
  RELIGIOUS = "RELIGIOUS",
  SOCIAL = "SOCIAL",
  ALL = "ALL"
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
  recruitStartDate?: string;
  recruitEndDate?: string;
  imageURL: string;
  isFavorite?: boolean;
}

export interface PaginationType {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

export interface ClubResponseType {
  data: {
    clubs: ClubType[];
    pagination: PaginationType;
  };
}

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

export interface ClubDetailResponseType {
  data: ClubDetailType;
}

export interface CluParameterType {
  name?: string;
  category?: ClubCategory;
  affliction?: ClubAffiliation;
  status?: string;
  page?: number;
  size?: number;
}
