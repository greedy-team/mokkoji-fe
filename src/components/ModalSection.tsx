import { useModalStore } from "@/stores/useModalStore";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 200000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 35%;
  padding: 20px;
  min-height: 50%;
  background: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 770px) {
    width: 70%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalSection = ({ children }: { children: ReactNode }) => {
  const { isOpen, closeModal } = useModalStore();
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <ModalWrapper open={isOpen} onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>×</CloseButton>
        {children}
      </ModalContainer>
    </ModalWrapper>,
    modalRoot
  );
};

export default ModalSection;
