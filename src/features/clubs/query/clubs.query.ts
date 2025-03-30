import { useSuspenseQuery } from "@tanstack/react-query";
import {
  ClubDetailResponseType,
  ClubResponseType,
  ClubCategory,
} from "@/features/clubs/types/clubType";
import { queryClient } from "@/services/TanstackQueryStore";
import  getData  from "@/api/getData";

export const useGetClubs = (
  page: number,
  size: number,
  keyword: string | undefined,
  category: ClubCategory | undefined,
  affiliation: string | undefined,
  recruitStatus: string | undefined
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
    queryFn: () => {
      const params = Object.fromEntries(
        Object.entries({
          keyword,
          category,
          affiliation,
          page,
          size,
          recruitStatus,
        })
      );
      return getData("/clubs", { params });
    },
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
    queryFn: () => {
      const params = Object.fromEntries(
        Object.entries({
          keyword,
          category,
          affiliation,
          page,
          size,
          recruitStatus,
        })
      );
      return getData("/clubs", { params });
    },
  });
};

export const useGetClubsDetail = (id: string) => {
  return useSuspenseQuery<ClubDetailResponseType>({
    queryKey: ["clubs", id],
    queryFn: () => getData(`/clubs/${id}`),
  });
};
