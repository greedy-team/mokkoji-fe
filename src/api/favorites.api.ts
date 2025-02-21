import api from ".";

export const updateFavorite = async (id: string) => {
  const { data } = await api.post(`/favorites/${id}`);
  return data;
};
