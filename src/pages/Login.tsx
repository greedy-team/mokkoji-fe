import { useState } from "react";
import styled from "styled-components";

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
  color: #4B5563;
  letter-spacing: -1px;
`;

const LoginSection = styled.div`
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
  border: 1px solid #9CA3AF;
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

function Login() {
  const [loginData, setLoginData] = useState<{ student_id: string; password: string }>({
     student_id: "", 
     password: "" ,
    });

  // 입력값 해당 필드에 업데이트
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // login api로 요청 전송
  function onClick(){
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData)
    })
      .then((response) => {
        if(response) throw new Error("로그인 실패");
        alert("로그인 성공");
      })
  }

  // TODO: 로그인 상태 유지, 메인 페이지 리디렉션
  return (
    <Wrapper>
      <Container>
        <Logo>LOGO</Logo>
        <Title>모꼬지에 오신 것을 환영합니다</Title>
        <SubTitle>세종대 동아리와 함께하는 즐거운 대학 생활</SubTitle>
        <LoginSection>
          <LoginContainer
            placeholder="학번"
            value={loginData.student_id}
            onChange={onChange}
          ></LoginContainer>
          <LoginContainer
            placeholder="비밀번호"
            value={loginData.password}
            onChange={onChange}
          ></LoginContainer>
          <LoginButton onClick={onClick}>로그인</LoginButton>
        </LoginSection>
      </Container>
    </Wrapper>
  )
}

export default Login;
