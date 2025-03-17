import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()(
  persist(
    (set, get) => ({
      isOpen: false,
      openModal: () => {
        if (!get().isOpen) set({ isOpen: true });
      },
      closeModal: () => {
        if (get().isOpen) set({ isOpen: false });
      },
    }),
    { name: "login-modal" }
  )
);
