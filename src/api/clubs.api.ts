import api from ".";
import { ClubDetailResponseType, ClubResponseType, ClubCategory } from "@/types/clubType";

export const getClubItems = async (
  keyword: string | null,
  category: ClubCategory  | null,
  page: number, 
  size: number
): Promise<ClubResponseType> => {
  const { data } = await api.get(`/clubs?keyword=${keyword || ""}&category=${category || ""}&page=${page}&size=${size}`);
  return data;
};

export const getClubItemsDetail = async (
  id: string
): Promise<ClubDetailResponseType> => {
  const { data } = await api.get(`/clubs/${id}`);
  return data;
};


