import { useSuspenseQuery } from "@tanstack/react-query";
import { getClubItems, getClubItemsDetail } from "@/api/clubs.api";
import {
  ClubDetailResponseType,
  ClubResponseType,
  ClubCategory,
} from "@/types/clubType";
import { queryClient } from "@/services/TanstackQueryStore";

export const useGetClubs = (
  page: number,
  size: number,
  keyword?: string,
  category?: ClubCategory
) => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: ["clubs", keyword || "", category || "", page, size],
    queryFn: () => getClubItems(keyword || null, category || null, page, size),
  });
};

export const prefetchGetClubs = async (
  page: number,
  size: number,
  keyword?: string,
  category?: ClubCategory
) => {
  await queryClient.prefetchQuery<ClubResponseType>({
    queryKey: ["clubs", keyword || "", category || "", page, size],
    queryFn: () => getClubItems(keyword || null, category || null, page, size),
  });
};

export const useGetClubsDetail = (id: string) => {
  return useSuspenseQuery<ClubDetailResponseType>({
    queryKey: ["clubs", id],
    queryFn: () => getClubItemsDetail(id),
  });
};
