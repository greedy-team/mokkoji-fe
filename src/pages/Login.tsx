import { useModalStore } from "@/stores/useModalStore";
import { useState } from "react";
import styled from "styled-components";
import { saveAuthTokens } from "@/api/auth.api";
import { UserLoginType } from "@/types/userInfoType";
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
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: #333333; /* 더 밝은 회색톤 */
    transform: scale(1.02); /* 살짝 확대 */
  }

  &:active {
    transform: scale(0.98); /* 클릭 시 살짝 축소 */
  }
`;

const Description = styled.div`
  font-size: 10px;
  color: #6b7280; /* 연한 회색 */
  margin-top: 15px;
  line-height: 1.2;
`;

const LoginSection = ({
  loginData,
  onChange,
  onClick,
}: {
  loginData: UserLoginType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) => {
  return (
    <Section>
      <LoginContainer
        placeholder="학번"
        name="studentId"
        value={loginData.studentId}
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

  const onClick = async () => {
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
    <ModalSection>
      <Title> 모꼬지에 오신 것을 환영합니다! 🎉</Title>
      <SubTitle>모꼬지와 함께 세종대 동아리에서 학우들과 멋진 경험을 만나보세요.</SubTitle>
      <LoginSection
        loginData={loginData}
        onChange={onChange}
        onClick={onClick}
      />
      <Description>
        학번과 비밀번호는 학사정보시스템의 학생 정보와 동일합니다.
      </Description>
    </ModalSection>
  );
};

export default Login;
