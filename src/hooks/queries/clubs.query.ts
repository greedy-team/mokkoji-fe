import { useSuspenseQuery } from "@tanstack/react-query";
import { getClubItems, getClubItemsDetail } from "@/api/clubs.api";
import { ClubDetailResponseType, ClubResponseType } from "@/types/clubType";


export const useGetClubs = (page: number, size: number) => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: ["clubs", page, size],
    queryFn: () => getClubItems(page, size),
  });
};

export const useGetClubsDetail = (id: string) => {
  return useSuspenseQuery<ClubDetailResponseType>({
    queryKey: ["clubs", id],
    queryFn: () => getClubItemsDetail(id),
  });
};

