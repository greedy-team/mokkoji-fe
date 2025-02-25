import api from ".";
import { ClubResponseType } from "@/types/clubType";

export const getRecruitItems = async (page: number, size: number): Promise<ClubResponseType> => {
  const { data } = await api.get(`/recruit?page=${page}&size=${size}`);
  return data;
};