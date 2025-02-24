import { useSuspenseQuery } from "@tanstack/react-query";
import { getClubItems, getClubItemsDetail } from "@/api/clubs.api";
import { ClubDetailResponseType, ClubResponseType } from "@/types/clubType";
import { queryClient } from "@/services/TanstackQueryStore";


export const useGetClubs = (page: number, size: number, category?: string) => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: ["clubs", page, size, category],
    queryFn: () => getClubItems(page, size, category),
  });
};

export const prefetchGetClubs = async (page: number, size: number, category?: string) => {
  await queryClient.prefetchQuery<ClubResponseType>({
    queryKey: ["clubs", page, size, category],
    queryFn: () => getClubItems(page, size, category),
  });
};


export const useGetClubsDetail = (id: string) => {
  return useSuspenseQuery<ClubDetailResponseType>({
    queryKey: ["clubs", id],
    queryFn: () => getClubItemsDetail(id),
  });
};

