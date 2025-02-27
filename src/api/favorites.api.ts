import api from ".";

export const updateFavorite = async (id: string) => {
  const { data } = await api.post(`/favorites/${id}`);
  return data;
};

export const deleteFavorite = async (id: string) => {
  const { data } = await api.delete(`/favorites/${id}`);
  return data;
};

export const getFavorite = async () => {
  const { data } = await api.get("/favorites");

  console.log("favoriteData:", data);
  return data;
};
