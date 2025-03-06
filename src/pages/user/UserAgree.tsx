import { UserVerifyType } from "@/types/userInfoType";
import { useState } from "react";
import styled from "styled-components";

import PrivacyPolicyPage from "../PrivacyPolicy";
import CheckboxWithLabel from "./CheckboxWithLabel";
import Spacing from "@/components/Spacing";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MainTitle = styled.span`
  margin-top: 20px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
const Title = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const LoginContainer = styled.input`
  box-sizing: border-box;
  width: 40%;
  height: 40px;
  text-indent: 8px;
  border-radius: 5px;
  border: 1px solid #9ca3af;
  margin-top: 10px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  margin-bottom: 100px;
`;

const VerifyButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: gray;
  color: white;
  border-radius: 5px;
  border: none;
`;

function UserAgree() {
  const [isChecked, setIsChecked] = useState(false);
  const [loginData, setLoginData] = useState<UserVerifyType>({
    studentIdVerify: "",
    passwordVerify: "",
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
      if (e.currentTarget.name === "studentIdVerify") {
        document.getElementById("passwordVerify")?.focus();
      } else {
        onSubmit();
      }
    }
  };

  const onSubmit = async () => {
    if (!isChecked) {
      alert("동의하지 않으셨습니다.");
      return;
    }
    if (!loginData.studentIdVerify) {
      alert("아이디를 입력해주세요!");
      return;
    }
    if (!loginData.passwordVerify) {
      alert("비밀번호를 입력해주세요!");
      return;
    }
    //TODO: 추후 추가 예정
    // saveAuthTokens({
    //   studentId: loginData.studentIdVerify,
    //   password: loginData.passwordVerify,
    // });
  };

  return (
    <Wrapper>
      <MainTitle>이용약관 동의</MainTitle>
      <PrivacyPolicyPage />
      <CheckboxWithLabel
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        label="위 개인정보 처리 방침을 확인하였고 개인정보 수집에 동의합니다."
      />
      <Section>
        <MainTitle>학생 인증</MainTitle>
        <Spacing size={2} />
        <Title>아이디</Title>
        <LoginContainer
          placeholder="학번"
          name="studentIdVerify"
          value={loginData.studentIdVerify}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Spacing size={2} />
        <Title>비밀번호</Title>
        <LoginContainer
          placeholder="비밀번호"
          name="passwordVerify"
          type="password"
          id="passwordVerify"
          value={loginData.passwordVerify}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Spacing size={2} />
        <VerifyButton onClick={onSubmit}> 인증하기</VerifyButton>
      </Section>
    </Wrapper>
  );
}
export default UserAgree;
