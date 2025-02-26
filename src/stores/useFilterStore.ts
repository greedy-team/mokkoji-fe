import { create } from "zustand";
import { ClubCategory } from "@/types/clubType";

type FilterStore = {
  selectedCategory?: ClubCategory; //카테고리
  categories: ClubCategory[];
  setSelectedCategory: (category: ClubCategory) => void;
  searchText: string; //검색어
  setSearchText: (text: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  selectedCategory: undefined,
  categories: Object.values(ClubCategory),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  searchText: "",
  setSearchText: (text) => set({ searchText: text }),
}));
