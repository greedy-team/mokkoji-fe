import api from ".";
import { ClubResponse, CluParameter } from "../types/Club";

export const getClubs = async ({
  name,
}: CluParameter): Promise<ClubResponse> => {
  console.log(name);
  const { data } = await api.get(`/clubs`);
  return data;
};
