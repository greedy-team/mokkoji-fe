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
  category?: ClubCategory,
  affiliation?: string,
  recruitStatus?: string
) => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: [
      "clubs",
      page,
      size,
      keyword || "",
      category || "",
      affiliation || "",
      recruitStatus || "",
    ],
    queryFn: () =>
      getClubItems(page, size, keyword, category, affiliation, recruitStatus),
  });
};

export const prefetchGetClubs = async (
  page: number,
  size: number,
  keyword?: string,
  category?: ClubCategory,
  affiliation?: string,
  recruitStatus?: string
) => {
  await queryClient.prefetchQuery<ClubResponseType>({
    queryKey: [
      "clubs",
      page,
      size,
      keyword || "",
      category || "",
      affiliation || "",
      recruitStatus || "",
    ],
    queryFn: () =>
      getClubItems(page, size, keyword, category, affiliation, recruitStatus),
  });
};

export const useGetClubsDetail = (id: string) => {
  console.log(id);
  return useSuspenseQuery<ClubDetailResponseType>({
    queryKey: ["clubs", id],
    queryFn: () => getClubItemsDetail(id),
  });
};
