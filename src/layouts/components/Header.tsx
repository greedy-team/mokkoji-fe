import styled from "styled-components";
import DummyLogo from "@/assets/Mokkoji.svg?react";
import DummyProfile from "@/assets/userInfo.svg?react";
import { useModalStore } from "@/stores/useModalStore";
import { useFilterStore } from "@/stores/useFilterStore";
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

function Header() {
  const openModal = useModalStore((state) => state.openModal);
  const resetFilters = useFilterStore((state) => state.resetFilters);
  const resetMenu = useFilterStore((state) => state.resetMenu);

  function handleLogoClick() {
    resetFilters(); // 필터 초기화
    resetMenu(); // 메뉴 초기화
  }

  return (
    <HeaderContainer>
      <HeaderContents>
        <Link to="/">
        <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <DummyLogo width={100} height={100} />
        </div>
        </Link>
        <DummyProfile width={35} height={35} onClick={openModal} />
      </HeaderContents>
    </HeaderContainer>
  );
}

export default Header;
