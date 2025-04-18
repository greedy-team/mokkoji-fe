import { useGetFavorite } from "../query/favorites.query";
import { generateColor } from "./generateColor";

function useHighlightedDates() {
  const { data } = useGetFavorite();
  if (!data) return {};

  const dateMap: Record<string, { name: string; color: string }[]> = {};

  data.data.forEach((club) => {
    if (!club.recruitStartDate || !club.recruitEndDate) return;

    const start = new Date(club.recruitStartDate);
    const end = new Date(club.recruitEndDate);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    const currentDate = new Date(start);

    while (currentDate.getTime() <= end.getTime()) {
      const key = currentDate.toISOString().split("T")[0];
      if (!dateMap[key]) dateMap[key] = [];
      dateMap[key].push({
        name: club.name,
        color: generateColor(club.name),
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }
  });

  return dateMap;
}
export default useHighlightedDates;
