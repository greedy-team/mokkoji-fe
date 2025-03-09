import { create } from "zustand";
import { ClubCategory } from "@/types/clubType";
import { persist, createJSONStorage } from "zustand/middleware";

type FilterStore = {
  selectedCategory?: ClubCategory; //카테고리
  categories: ClubCategory[];
  setSelectedCategory: (category?: ClubCategory) => void;
  searchText: string; //검색어
  setSearchText: (text: string) => void;
  currentPage: number; //현재 페이지
  setCurrentPage: (page: number) => void;
  resetFilters: () => void; // 모든 필터 초기화
  resetAll: () => void; // 페이지 이동 시 모든 상태 초기화
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      currentPage: 1,
      selectedCategory: undefined,
      categories: Object.values(ClubCategory),

      setSelectedCategory: (category) =>
        set(() => ({ selectedCategory: category, currentPage: 1 })),

      searchText: "",
      setSearchText: (text) =>
        set(() => ({ searchText: text, currentPage: 1 })),

      setCurrentPage: (page) => set(() => ({ currentPage: page })),

      selectedMenu: "HOME",


      resetFilters: () =>
        set(() => ({
          selectedCategory: undefined,
          searchText: "",
          currentPage: 1,
        })),


      resetAll: () =>
        set(() => ({
          selectedCategory: undefined,
          searchText: "",
          currentPage: 1,
        })),
    }),
    {
      name: "filter-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
