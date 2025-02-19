import { useLoginModalStore } from "../stores/useLoginModalStore";
import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { saveAuthTokens } from "../api/auth.api";
import { userInterface } from "../types/userInfoType";

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
  height: 50%;
  background: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
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
  font-size: 25px;
  font-weight: 550;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 550;
  color: #4b5563;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

const LoginContainer = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  text-indent: 8px;
  border-radius: 5px;
  border: 1px solid #9ca3af;
  margin-top: 10px;
`;

const LoginButton = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 40px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
`;

const LoginSection = ({
  loginData,
  onChange,
  onClick,
}: {
  loginData: userInterface;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) => {
  return (
    <Section>
      <LoginContainer
        placeholder="학번"
        name="student_id"
        value={loginData.student_id}
        onChange={onChange}
      />
      <LoginContainer
        placeholder="비밀번호"
        name="password"
        type="password"
        value={loginData.password}
        onChange={onChange}
      />
      <LoginButton onClick={onClick}>로그인</LoginButton>
    </Section>
  );
};

const Login = () => {
  const { isOpen, closeModal } = useLoginModalStore();
  const [loginData, setLoginData] = useState<userInterface>({
    student_id: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onClick = async () => {
    if (!loginData.student_id) {
      alert("아이디를 입력해주세요!");
      return;
    }
    if (!loginData.password) {
      alert("비밀번호를 입력해주세요!");
      return;
    }

    await saveAuthTokens({ ...loginData });
    closeModal();
  };

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <ModalWrapper open={isOpen} onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <Title>모꼬지에 오신 것을 환영합니다</Title>
        <SubTitle>세종대 동아리와 함께하는 즐거운 대학 생활</SubTitle>
        <LoginSection
          loginData={loginData}
          onChange={onChange}
          onClick={onClick}
        />
      </ModalContainer>
    </ModalWrapper>,
    modalRoot
  );
};

export default Login;
