import styled from "styled-components";
import Logo from "@/assets/logo/Mokkoji.svg?react";
import Profile from "@/assets/button/userInfo.svg?react";
import { useModalStore } from "@/store/useModalStore";
import { useFilterStore } from "@/store/useFilterStore";
import { useAuthStore } from "@/features/login/store/useAuthStore";
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

const RightSide = styled.div`
  display: flex;
  gap: 20px;
  width: fit-content;
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

const RegisterButton = styled.button`
  text-decoration: none;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid gray;
  background-color: black;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

function Header() {
  const openModal = useModalStore((state) => state.openModal);
  const resetFilters = useFilterStore((state) => state.resetFilters);
  const accessToken = useAuthStore((state) => state.accessToken);

  function handleLogoClick() {
    resetFilters();
  }

  return (
    <HeaderContainer>
      <HeaderContents>
        <Link to="/">
          <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <Logo width={100} height={100} />
          </div>
        </Link>
        <RightSide>
          <RegisterButton as={Link} to="/management/registration">
            동아리 등록
          </RegisterButton>
          {accessToken ? (
            <Profile width={35} height={35} onClick={openModal} />
          ) : (
            <LoginButton onClick={openModal}>로그인</LoginButton>
          )}
        </RightSide>
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Header;
