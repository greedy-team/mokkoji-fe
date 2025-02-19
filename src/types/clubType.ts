export interface ClubType {
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
  imageUrl: string;
  isFavorite: boolean;
  instagramLink: string;
  recruitPost: string;
}

export interface ClubDetailResponseType {
  data: {
    club: ClubDetailType;
  };
}


export interface CluParameterType {
  name?: string;
  category?: string;
  affliction?: string;
  status?: string;
  page?: number;
  size?: number;
}
