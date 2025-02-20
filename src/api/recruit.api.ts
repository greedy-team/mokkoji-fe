import api from ".";
import { ClubResponseType } from "@/types/clubType";

export const getRecruitItems = async (): Promise<ClubResponseType> => {
  const { data } = await api.get("/recruit");
  return data;
};