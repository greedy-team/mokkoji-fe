import styled from "styled-components";
import DummyLogo from "@/assets/react.svg?react";
import { useLoginModalStore } from "@/stores/useLoginModalStore";

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;

  padding: 5px 10px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e7eb;
`;

const HeaderContents = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// TODO: dummy 수정 예정
const DummyProfile = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid gray;
`;

const ProfileLoginArea = styled.div``;

function Header() {
  const openModal = useLoginModalStore((state) => state.openModal);
  return (
    <HeaderContainer>
      <HeaderContents>
        <DummyLogo width={25} height={25} />
        <ProfileLoginArea onClick={openModal}>
          <DummyProfile src="" />
        </ProfileLoginArea>
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Header;
