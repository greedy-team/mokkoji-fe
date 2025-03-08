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
    const params = Object.fromEntries(
      Object.entries({
        keyword,
        category: category !== "ALL" ? category : undefined,
        affiliation,
        page,
        size,
        recruitStatus,
      }).filter(([_, value]) => value !== "")
    );

    const { data } = await api.get(`/clubs`, { params });

    return data;
  };

  export const getClubItemsDetail = async (
    id: string
  ): Promise<ClubDetailResponseType> => {
    const { data } = await api.get(`/clubs/${id}`);


    return data;
  };
