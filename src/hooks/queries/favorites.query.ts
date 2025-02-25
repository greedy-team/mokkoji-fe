import {
  deleteFavorite,
  getFavorite,
  updateFavorite,
} from "@/api/favorites.api";
import { useOptimisticMutation } from "../useOptimisticMutation";
import { ClubDetailType, ClubResponseType } from "@/types/clubType";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFavoriteUpdate = () => {
  return useOptimisticMutation<ClubDetailType, string>(
    ["clubs"],
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
    (id) => deleteFavorite(id),
    (oldData) => ({
      ...oldData,
      favorite: !oldData.isFavorite,
    })
  );
};

export const useGetFavorite = () => {
  return useSuspenseQuery<ClubResponseType>({
    queryKey: ["favorites"],
    queryFn: getFavorite,
  });
};
