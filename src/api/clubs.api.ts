import api from ".";
import {
  ClubDetailResponseType,
  ClubResponseType,
  ClubCategory,
} from "@/types/clubType";

export const getClubItems = async (
  page: number,
  size: number,
  keyword?: string,
  category?: ClubCategory,
  affiliation?: string,
  recruitStatus?: string
): Promise<ClubResponseType> => {
  const { data } = await api.get(`/clubs`, {
    params: {
      keyword,
      category,
      affiliation,
      page,
      size,
      recruitStatus,
    },
  });

  return data;
};

export const getClubItemsDetail = async (
  id: string
): Promise<ClubDetailResponseType> => {
  const { data } = await api.get(`/clubs/${id}`);


  return data;
};
