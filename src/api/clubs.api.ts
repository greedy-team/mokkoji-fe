import api from ".";
import { ClubResponse } from "../types/clubType";

export const getClubItems = async (): Promise<ClubResponse> => {
  const { data } = await api.get("/clubs");
  return data;
};
