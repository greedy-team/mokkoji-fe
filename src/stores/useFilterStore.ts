import { create } from "zustand";
import { ClubCategory } from "@/types/clubType";

type FilterStore = {
  selectedCategory: ClubCategory | null; //카테고리
  categories: ClubCategory[];
  setSelectedCategory: (category: ClubCategory | null) => void;
  searchText: string; //검색어
  setSearchText: (text: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  selectedCategory: null,
  categories: Object.values(ClubCategory),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  searchText: "",
  setSearchText: (text) => set({ searchText: text })
}));
