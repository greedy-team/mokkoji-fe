import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()(
  persist(
    (set) => ({
      isOpen: true,
      openModal: () => {
        set({ isOpen: true });
        console.log("open!");
      },
      closeModal: () => set({ isOpen: false }),
    }),
    { name: "login-modal" }
  )
);
