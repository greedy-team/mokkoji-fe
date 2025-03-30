import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { ClubDetailResponseType } from "@/features/clubs/types/clubType";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FavoriteResponseType } from "@/types/favoriteType";
import getData from "@/api/getData";
import { updateData } from "@/api/updateData";

export const useFavoriteUpdate = () => {
  return useOptimisticMutation<ClubDetailResponseType, string>(
    ["clubs"],
    ["favorites"],
    (id) => updateData("post", `/favorites/${id}`),
    (oldData) => ({
      ...oldData,
      favorite: !oldData.data.isFavorite,
    })
  );
};

export const useFavoriteDelete = () => {
  return useOptimisticMutation<ClubDetailResponseType, string>(
    ["clubs"],
    ["favorites"],
    (id) => updateData("delete", `/favorites/${id}`),
    (oldData) => ({
      ...oldData,
      favorite: !oldData.data.isFavorite,
    })
  );
};

export const useGetFavorite = () => {
  return useSuspenseQuery<FavoriteResponseType>({
    queryKey: ["favorites"],
    queryFn: () => getData("/favorites"),
  });
};
