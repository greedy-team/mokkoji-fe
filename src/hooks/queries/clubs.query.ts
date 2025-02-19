import { useSuspenseQuery } from "@tanstack/react-query";
import { getClubItems } from "../../api/clubs.api";
import { ClubResponse } from "../../types/clubType";

export const useGetClubs = () => {
  return useSuspenseQuery<ClubResponse>({
    queryKey: ["clubs"],
    queryFn: getClubItems,
  });
};
