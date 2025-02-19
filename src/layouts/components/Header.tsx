import styled from "styled-components";
import DummyLogo from "@/assets/react.svg?react";

import { useLoginModalStore } from "../../stores/useLoginModalStore";
import { useUserInfoModalStore } from "../../stores/useUserInfoModalStore";

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

//네모 박스 버튼 (사용자 정보 모달용) 
//로그인 모달과 사용자 정보 모달 확인을 같이 하고 싶어서 이렇게 했어용
const UserInfoButton = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const ProfileLoginArea = styled.div``;

function Header() {
  const openLoginModal = useLoginModalStore((state) => state.openModal);
  const openUserInfoModal = useUserInfoModalStore((state) => state.openModal);

  return (
    <HeaderContainer>
      <HeaderContents>
        <DummyLogo width={25} height={25} />

        <ProfileLoginArea >
          <DummyProfile onClick={openLoginModal} />

          <UserInfoButton onClick={openUserInfoModal}>유저 정보</UserInfoButton>
        </ProfileLoginArea>
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Header;
