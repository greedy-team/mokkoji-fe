import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { ClubDetailResponseType } from "@/features/clubs/types/clubType";
import { useSuspenseQuery } from "@tanstack/react-query";
import { FavoriteResponseType } from "@/types/favoriteType";
import getData from "@/api/getData";
import  sendData  from "@/api/sendData";
import deleteData from "@/api/deleteData";

export const useFavoriteUpdate = () => {
  return useOptimisticMutation<ClubDetailResponseType, string>(
    ["clubs"],
    ["favorites"],
    (id) => sendData("post", `/favorites/${id}`),
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
    (id) => deleteData(`/favorites/${id}`),
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
