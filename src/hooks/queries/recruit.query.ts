import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecruitItems } from "@/api/recruit.api";
import { ClubResponseType } from "@/types/clubType";

export const useGetRecruits = () => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: ["recruit"],
    queryFn: getRecruitItems,
  });
};
