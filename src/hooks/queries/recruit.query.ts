import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecruitItems } from "@/api/recruit.api";
import { ClubResponseType } from "@/types/clubType";
import { queryClient } from "@/services/TanstackQueryStore";

export const useGetRecruits = (page: number, size: number) => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: ["recruit", page, size],
    queryFn: () => getRecruitItems(page, size),
  });
};

export const prefetchGetRecruits = async (page: number, size: number) => {
  await queryClient.prefetchQuery<ClubResponseType>({
    queryKey: ["recruit", page, size],
    queryFn: () => getRecruitItems(page, size),
  });
};
