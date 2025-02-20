import { create } from "zustand";

interface UserInfoModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useUserInfoModalStore = create<UserInfoModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));