import styled from "styled-components";
import ModalSection from "@/components/ModalSection";
import { useModalStore } from "@/stores/useModalStore";
import { expireAuthTokens } from "@/api/auth.api";
import UserInput from "./components/UserInput";


const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LogoutButton = styled.button`
  flex: 1;
  height: 40px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: rgb(138, 137, 137);
    border-color: rgb(138, 137, 137);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

function UserInfo() {
  const { closeModal } = useModalStore();
  const logOutClick = () => {
    expireAuthTokens();
    closeModal();
  };

  return (
    <ModalSection>
      <CloseButton onClick={closeModal}>×</CloseButton>
      <Title>학생 정보</Title>
      <LogoutButton onClick={logOutClick}>로그아웃</LogoutButton>
      <UserInput />
    </ModalSection>
  );
}

export default UserInfo;
