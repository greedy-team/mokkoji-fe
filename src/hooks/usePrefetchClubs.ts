import { ClubCategory, PaginationType } from "@/types/clubType";
import { useEffect } from "react";
import { prefetchGetClubs } from "./queries/clubs.query";

const categoryPreFetchingArr = Object.values(ClubCategory);

export const usePrefetchClubs = (
  currentPage: number,
  pagination: PaginationType,
  ITEMS_PER_PAGE: number,
  searchText?: string,
  selectedCategory?: ClubCategory,
  affiliation?: string
) => {
  useEffect(() => {
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;
    if (nextPage <= pagination.totalPages) {
      prefetchGetClubs(nextPage, ITEMS_PER_PAGE, searchText, selectedCategory, affiliation);
    }
    if (prevPage >= 1) {
      prefetchGetClubs(prevPage, ITEMS_PER_PAGE, searchText, selectedCategory, affiliation);
    }

    if (selectedCategory) {
      const idx = categoryPreFetchingArr.findIndex(
        (category) => category === selectedCategory
      );
      const nextIdx = idx + 1;
      const prevIdx = idx - 1;
      if (nextIdx <= categoryPreFetchingArr.length - 1) {
        prefetchGetClubs(
          currentPage,
          ITEMS_PER_PAGE,
          searchText,
          categoryPreFetchingArr[nextIdx],
          affiliation
        );
      }
      if (prevIdx >= 0) {
        prefetchGetClubs(
          currentPage,
          ITEMS_PER_PAGE,
          searchText,
          categoryPreFetchingArr[prevIdx],
          affiliation
        );
      }
    }
  }, [
    ITEMS_PER_PAGE,
    currentPage,
    pagination.totalPages,
    searchText,
    selectedCategory,
  ]);
};
