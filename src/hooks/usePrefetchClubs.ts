import { ClubCategory, PaginationType } from "@/types/clubType";
import { useEffect } from "react";
import { prefetchGetClubs } from "./queries/clubs.query";

const categoryPreFetchingArr = Object.values(ClubCategory);

export const usePrefetchClubs = (
  currentPage: number,
  pagination: PaginationType,
  ITEMS_PER_PAGE: number,
  searchText?: string,
  selectedCategory?: ClubCategory
) => {
  useEffect(() => {
    const nextPage = currentPage + 1;
    if (nextPage <= pagination.totalPages) {
      prefetchGetClubs(nextPage, ITEMS_PER_PAGE, searchText, selectedCategory);
    }

    if (selectedCategory) {
      const idx = categoryPreFetchingArr.findIndex(
        (category) => category === selectedCategory
      );
      const nextIdx = idx + 1;
      if (nextIdx <= categoryPreFetchingArr.length - 1) {
        prefetchGetClubs(
          currentPage,
          ITEMS_PER_PAGE,
          searchText,
          categoryPreFetchingArr[nextIdx]
        );
      }
    }
  }, [ITEMS_PER_PAGE, currentPage, pagination, searchText, selectedCategory]);
};
