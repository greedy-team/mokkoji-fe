import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useLoginModalStore = create<LoginModalState>()(
  persist(
    (set) => ({
      isOpen: true,
      openModal: () => set({ isOpen: true }),
      closeModal: () => set({ isOpen: false }),
    }),
    { name: "login-modal" }
  )
);
