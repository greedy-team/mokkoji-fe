import api from ".";
import { ClubDetailResponseType, ClubResponseType } from "@/types/clubType";

export const getClubItems = async (
  page: number, 
  size: number, 
  category?: string
): Promise<ClubResponseType> => {
  const { data } = await api.get(`/clubs?page=${page}&size=${size}&category=${category}`);
  return data;
};

export const getClubItemsDetail = async (
  id: string
): Promise<ClubDetailResponseType> => {
  const { data } = await api.get(`/clubs/${id}`);
  return data;
};


