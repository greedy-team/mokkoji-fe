import { saveAuthTokens } from "@/api/auth.api";
import { useModalStore } from "@/stores/useModalStore";
import { UserLoginType } from "@/types/userInfoType";
import { useState } from "react";
import styled from "styled-components";

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
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: #333333;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

function LoginContent() {
  const { closeModal } = useModalStore();
  const [loginData, setLoginData] = useState<UserLoginType>({
    studentId: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.currentTarget.name === "studentId") {
        document.getElementById("password")?.focus();
      } else {
        onSubmit();
      }
    }
  };

  const onSubmit = async () => {
    if (!loginData.studentId) {
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
    <Section>
      <LoginContainer
        placeholder="학번"
        name="studentId"
        value={loginData.studentId}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <LoginContainer
        placeholder="비밀번호"
        name="password"
        type="password"
        id="password"
        value={loginData.password}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <LoginButton onClick={onSubmit}>로그인</LoginButton>
    </Section>
  );
}

export default LoginContent;
