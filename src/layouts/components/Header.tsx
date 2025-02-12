import styled from "styled-components";
import DummyLogo from "@/assets/react.svg?react";

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e7eb;
`;

const HeaderContents = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// TODO: dummy 수정 예정
const DummyProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid gray;
`;

function Footer() {
  return (
    <HeaderContainer>
      <HeaderContents>
        <DummyLogo />
        <DummyProfile src="" />
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Footer;
