import styled from "styled-components";
import ModalSection from "@/components/ModalSection";
import LoginContent from "./LoginContent";

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

const Description = styled.div`
  font-size: 10px;
  color: #6b7280;
  margin-top: 15px;
  line-height: 1.2;
`;

function Login() {
  return (
    <ModalSection>
      <Title> 모꼬지에 오신 것을 환영합니다! 🎉</Title>
      <SubTitle>
        모꼬지와 함께 세종대 동아리에서 학우들과 멋진 경험을 만나보세요.
      </SubTitle>
      <LoginContent />
      <Description>
        학번과 비밀번호는 세종대 학사정보시스템의 학생 로그인 정보와 동일합니다.
      </Description>
    </ModalSection>
  );
}

export default Login;
