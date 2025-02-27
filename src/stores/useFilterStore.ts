import { create } from "zustand";
import { ClubCategory } from "@/types/clubType";
import { persist, createJSONStorage } from "zustand/middleware"; 

type FilterStore = {
  selectedCategory?: ClubCategory; //카테고리
  categories: ClubCategory[];
  setSelectedCategory: (category?: ClubCategory) => void;
  searchText: string; //검색어
  setSearchText: (text: string) => void;
};

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      selectedCategory: undefined,
      categories: Object.values(ClubCategory),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      searchText: "",
      setSearchText: (text) => set({ searchText: text }),
    }),
    {
      name: "filter-storage",  //새로고침해도 카테고리 필터링 유지지
      storage: createJSONStorage(() => localStorage),
    }
  )
);