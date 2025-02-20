import { useModalStore } from "@/stores/useModalStore";
import { useState } from "react";
import styled from "styled-components";
import { saveAuthTokens } from "@/api/auth.api";
import { userInterface } from "@/types/userInfoType";
import ModalSection from "@/components/ModalSection";

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
  const { closeModal } = useModalStore();
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

  return (
    <ModalSection>
      <Title>모꼬지에 오신 것을 환영합니다</Title>
      <SubTitle>세종대 동아리와 함께하는 즐거운 대학 생활</SubTitle>
      <LoginSection
        loginData={loginData}
        onChange={onChange}
        onClick={onClick}
      />
    </ModalSection>
  );
};

export default Login;
