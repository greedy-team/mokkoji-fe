import { useEffect } from "react";
import { useModalStore } from "@/stores/useModalStore";
import ModalSection from "@/components/ModalSection";
import styled from "styled-components";

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #ddd;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 10px auto;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 5px;
  text-align: center;
`;

function Loading() {
  const { openModal, closeModal } = useModalStore();

  useEffect(() => {
    openModal("loading");
    setTimeout(() => {
      closeModal();
    }, 3000); 
  }, [openModal, closeModal]);

  return (
    <ModalSection>
      <LoadingSpinner />
      <LoadingText>데이터를 불러오는 중</LoadingText>
      <SubText>잠시만 기다려주세요...</SubText>
    </ModalSection>
  );
}

export default Loading;
