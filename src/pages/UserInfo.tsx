import { useState } from "react";
import styled from "styled-components";
import ModalSection from "@/components/ModalSection";
import { useModalStore } from "@/stores/useModalStore";
import { expireAuthTokens } from "@/api/auth.api";
import { useGetUser, useUserInfoEdit } from "@/hooks/queries/users.query";

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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #9ca3af;
  padding-left: 8px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const SaveButton = styled.button`
  flex: 1;
  height: 40px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color:rgb(138, 137, 137); 
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const CancelButton = styled.button`
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
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
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
    background-color:rgb(138, 137, 137); 
    border-color: rgb(138, 137, 137);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

function UserInfo() {
  const { closeModal } = useModalStore();
  const { data, error, isError } = useGetUser();

  const userInfo = data.data.user;

  const [email, setEmail] = useState(userInfo.email);
  const { mutate } = useUserInfoEdit(email);

  if (isError) {
    console.log(error?.message);
    throw new Error(error?.message);
  }

  const logOutClick = () => {
    expireAuthTokens();
    closeModal();
  };

  const handleSave = async () => {
    if (!email) {
      alert("이메일을 입력하세요.");
      return;
    }
    mutate();
  };

  return (
    <ModalSection>
      <CloseButton onClick={closeModal}>×</CloseButton>
      <Title>학생 정보</Title>
      <LogoutButton onClick={logOutClick}>로그아웃</LogoutButton>
      <Section>
        <Label>학번</Label>
        <Input value={userInfo.studentId || ""} disabled />
      </Section>

      <Section>
        <Label>이름</Label>
        <Input value={userInfo.name || ""} disabled />
      </Section>

      <Section>
        <Label>학과</Label>
        <Input value={userInfo.department || ""} disabled />
      </Section>

      <Section>
        <Label>학년</Label>
        <Input value={userInfo.grade || ""} disabled />
      </Section>

      <Section>
        <Label>이메일</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Section>

      <ButtonContainer>
        <CancelButton onClick={closeModal}>취소</CancelButton>
        <SaveButton onClick={handleSave}>저장</SaveButton>
      </ButtonContainer>
    </ModalSection>
  );
}

export default UserInfo;
