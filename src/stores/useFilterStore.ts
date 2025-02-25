import { create } from "zustand";

type FilterStore = {
  selectedCategory: string; //카테고리리
  categories: string[];
  setSelectedCategory: (category: string) => void;
  searchText: string; //검색어어
  setSearchText: (text: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  selectedCategory: "",
  categories: ["문화/예술", "학술/교양", "봉사/사회", "체육", "친목", "종교", "기타"],
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  searchText: "",
  setSearchText: (text) => set({ searchText: text })
}));
