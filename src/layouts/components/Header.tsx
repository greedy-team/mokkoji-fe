import styled from "styled-components";
import Logo from "@/assets/Mokkoji.svg?react";
import Profile from "@/assets/userInfo.svg?react";
import { useModalStore } from "@/stores/useModalStore";
import { useFilterStore } from "@/stores/useFilterStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;

  padding: 5px 10px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 770px) {
    position: fixed;
    z-index: 3;
  }
`;

const HeaderContents = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #9ca3af;
  border-radius: 5px;
  background-color: white;
  color: #4b5563;
  cursor: pointer;
  font-size: small;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #e5e7eb;
  }
`;

function Header() {
  const openModal = useModalStore((state) => state.openModal);
  const resetFilters = useFilterStore((state) => state.resetFilters);
  const resetMenu = useFilterStore((state) => state.resetMenu);
  const accessToken = useAuthStore((state) => state.accessToken);

  function handleLogoClick() {
    resetFilters(); // 필터 초기화
    resetMenu(); // 메뉴 초기화
  }

  return (
    <HeaderContainer>
      <HeaderContents>
        <Link to="/">
        <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <Logo width={100} height={100} />
        </div>
        </Link>
        {accessToken ? (
          <Profile width={35} height={35} onClick={openModal} />
        ) : (
          <LoginButton onClick={openModal}>로그인</LoginButton>
        )}
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Header;
