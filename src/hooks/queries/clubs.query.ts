import { useSuspenseQuery } from "@tanstack/react-query";
import { getClubItems, getClubItemsDetail } from "@/api/clubs.api";
import { ClubDetailResponseType, ClubResponseType } from "@/types/clubType";
import { queryClient } from "@/services/TanstackQueryStore";


export const useGetClubs = (keyword: string | null, category: string | null, page: number, size: number) => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: ["clubs", keyword || null, category || null, page, size],
    queryFn: () => getClubItems(keyword === "" ? null : keyword, category || null, page, size ),
  });
};

export const prefetchGetClubs = async (keyword: string | null, category: string | null, page: number, size: number) => {
  await queryClient.prefetchQuery<ClubResponseType>({
    queryKey: ["clubs", keyword || null, category || null, page, size],
    queryFn: () => getClubItems(keyword === "" ? null : keyword, category || null, page, size),
  });
};


export const useGetClubsDetail = (id: string) => {
  return useSuspenseQuery<ClubDetailResponseType>({
    queryKey: ["clubs", id],
    queryFn: () => getClubItemsDetail(id),
  });
};

