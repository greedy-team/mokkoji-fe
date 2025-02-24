import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecruitItems } from "@/api/recruit.api";
import { ClubResponseType } from "@/types/clubType";

export const useGetRecruits = (page: number, size: number) => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: ["recruit", page, size],
    queryFn: () => getRecruitItems(page, size),
  });
};

