import { deleteFavorite, updateFavorite } from "@/api/favorites.api";
import { useOptimisticMutation } from "../useOptimisticMutation";
import { ClubDetailType } from "@/types/clubType";

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

export const useFavoriteDelete = ()=>{
  return useOptimisticMutation<ClubDetailType, string>(
    ["clubs"],
    (id) => deleteFavorite(id),
    (oldData) => ({
      ...oldData,
      favorite: !oldData.isFavorite,
    })
  );

}