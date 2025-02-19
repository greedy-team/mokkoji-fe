export interface Club {
  id: number;
  name: string;
  category: string;
  affiliation: string;
  description: string;
  recruitStartDate?: string;
  recruitEndDate?: string;
  imageUrl: string;
  favorite?: boolean;
}

export interface Pagination {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

export interface ClubResponse {
  data: {
    clubs: Club[];
    pagination: Pagination;
  };
}

export interface CluParameter {
  name?: string;
  category?: string;
  affliction?: string;
  status?: string;
  page?: number;
  size?: number;
}
