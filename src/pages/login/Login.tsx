import styled from "styled-components";
import ModalSection from "@/components/ModalSection";
import LoginContent from "./components/LoginContent";

const Title = styled.div`
  font-size: 25px;
  font-weight: 550;
  margin-bottom: 10px;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 550;
  color: #4b5563;
  text-align: center;
`;

const Description = styled.a`
  font-size: 0.8rem;
  color: #6b7280;
  margin-top: 15px;
  line-height: 1.2;
  text-align: center;
  text-decoration: underline;
`;

function Login() {
  return (
    <ModalSection>
      <Title> 모꼬지에 오신 것을 환영합니다! 🎉</Title>
      <SubTitle>
        모꼬지와 함께 세종대 동아리에서 학우들과 멋진 경험을 만나보세요.
      </SubTitle>
      <LoginContent />
      <Description href="/agree">아직 계정이 없으신가요?</Description>
    </ModalSection>
  );
}

export default Login;
