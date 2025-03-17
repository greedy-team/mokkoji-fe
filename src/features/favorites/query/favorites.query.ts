import {
  deleteFavorite,
  getFavorite,
  updateFavorite,
} from "../api/favorites.api";
import { useOptimisticMutation } from "../../../hooks/useOptimisticMutation";
import { ClubDetailType } from "@/features/clubs/types/clubType";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FavoriteResponseType } from "@/types/favoriteType";

export const useFavoriteUpdate = () => {
  return useOptimisticMutation<ClubDetailType, string>(
    ["clubs"],
    ["favorites"],
    (id) => updateFavorite(id),
    (oldData) => ({
      ...oldData,
      favorite: !oldData.isFavorite,
    })
  );
};

export const useFavoriteDelete = () => {
  return useOptimisticMutation<ClubDetailType, string>(
    ["clubs"],
    ["favorites"],
    (id) => deleteFavorite(id),
    (oldData) => ({
      ...oldData,
      favorite: !oldData.isFavorite,
    })
  );
};

export const useGetFavorite = () => {
  return useSuspenseQuery<FavoriteResponseType>({
    queryKey: ["favorites"],
    queryFn: getFavorite,
  });
};
