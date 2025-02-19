import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { saveAuthTokens } from "../api/auth.api";
import { userInterface } from "../types/userInfoType";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: fit-content;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  background-color: transparent;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 550;
  letter-spacing: -1px;
`;

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 550;
  color: #4b5563;
  letter-spacing: -1px;
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
`;

const LoginButton = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 40px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
`;

// 로그인 섹션 컴포넌트
function LoginSection({
  loginData,
  onChange,
  onClick,
}: {
  loginData: userInterface;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) {
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
}

function Login() {
  const [loginData, setLoginData] = useState<userInterface>({
    student_id: "",
    password: "",
  });
  const navigate = useNavigate();

  // 입력값 해당 필드에 업데이트
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // login api로 요청 전송
  async function onClick() {
    // 아이디 or 비밀번호 입력값이 존재하지 않을 경우 경고문 반환

    if (!loginData.student_id) {
      alert("아이디를 입력해주세요!");
      return;
    }

    if (!loginData.password) {
      alert("비밀번호를 입력해주세요!");
      return;
    }

    console.log("API URL:", import.meta.env.VITE_API_URL);
    await saveAuthTokens({ ...loginData });

    navigate("/");
  }

  // TODO: 로그인 상태 유지, 메인 페이지 리디렉션
  return (
    <Wrapper>
      <Container>
        <Logo>LOGO</Logo>
        <Title>모꼬지에 오신 것을 환영합니다</Title>
        <SubTitle>세종대 동아리와 함께하는 즐거운 대학 생활</SubTitle>
        <LoginSection
          loginData={loginData}
          onChange={onChange}
          onClick={onClick}
        />
      </Container>
    </Wrapper>
  );
}

export default Login;
