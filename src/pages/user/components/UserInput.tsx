import { useGetUser, useUserInfoEdit } from "@/hooks/queries/users.query";
import { useModalStore } from "@/stores/useModalStore";
import { useState } from "react";
import styled from "styled-components";
import { emailValidate } from "../utils/emailValidate";

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
  align-items: center;
  width: 100%;
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
    background-color: rgb(138, 137, 137);
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

function UserInput() {
  const { data } = useGetUser();
  const userInfo = data.data.user;
  const [email, setEmail] = useState(userInfo.email);
  const { closeModal } = useModalStore();
  const { mutate } = useUserInfoEdit();

  const handleSave = async () => {
    if (!emailValidate(email)) {
      setEmail(userInfo.email);
      return;
    }
    mutate(email);
  };
  return (
    <>
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
        <ButtonContainer>
          <CancelButton onClick={closeModal}>취소</CancelButton>
          <SaveButton onClick={handleSave}>저장</SaveButton>
        </ButtonContainer>
      </Section>
    </>
  );
}

export default UserInput;
