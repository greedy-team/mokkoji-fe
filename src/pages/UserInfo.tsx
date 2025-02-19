import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useUserInfoModalStore } from "../stores/useUserInfoModalStore";
import { getUserInfo, updateUserEmail } from "../api/user.api";
import { EditableUserInfoType } from "../types/userInfoType";

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
  z-index: 2000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  position: relative;
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
`;

const CancelButton = styled.button`
  flex: 1;
  height: 40px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
`;

const UserInfoModal = () => {
  const { isOpen, closeModal } = useUserInfoModalStore();
  const [userInfo, setUserInfo] = useState<EditableUserInfoType | null>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUserInfo();
      setUserInfo(response.data.user);
      setEmail(response.data.user.email);
    };
    fetchUserInfo();
  }, []);

  const handleSave = async () => {
    if (!email) {
      alert("이메일을 입력하세요.");
      return;
    }

    try {
      const updatedUser = await updateUserEmail(email);
      setUserInfo(updatedUser.userInfo);
      alert("이메일이 성공적으로 업데이트되었습니다.");
      closeModal();
    } catch (error) {
      alert("이메일 업데이트 중 오류가 발생했습니다.");
    }
  };

  return createPortal(
    <ModalWrapper open={isOpen}>
      <ModalContainer>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <Title>학생 정보</Title>

        <Section>
          <Label>학번</Label>
          <Input value={userInfo?.studentId || ""} disabled />
        </Section>

        <Section>
          <Label>이름</Label>
          <Input value={userInfo?.name || ""} disabled />
        </Section>

        <Section>
          <Label>학과</Label>
          <Input value={userInfo?.department || ""} disabled />
        </Section>

        <Section>
          <Label>학년</Label>
          <Input value={userInfo?.grade || ""} disabled />
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
      </ModalContainer>
    </ModalWrapper>,
    document.getElementById("modal")!
  );
};

export default UserInfoModal;
