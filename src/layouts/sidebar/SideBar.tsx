import styled from "styled-components";
import SideBarSearch from "./components/SideBarSearch";
import SideBarContentList from "./components/SideBarContentList";
import { useState } from "react";

const SideBarContainer = styled.div<{ $isOpen: boolean }>`
  padding: 1%;
  width: 22%;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 770px) {
    position: fixed;
    z-index: 9999;
    min-width: fit-content;
    width: 40%;
    height: calc(100% - 60px);
    margin-top: 60px;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: ${({ $isOpen }) => ($isOpen ? "40%" : "0%")};
  z-index: 9999;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transform: translateY(-50%);
  padding: 10px 5px 10px 10px;
  box-sizing: border-box;
  background-color: #f9fafb;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (min-width: 771px) {
    display: none;
  }
`;

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        {isOpen ? "<" : ">"}
      </ToggleButton>
      <SideBarContainer $isOpen={isOpen}>
        <SideBarSearch />
        <SideBarContentList setIsOpen={setIsOpen} />
      </SideBarContainer>
    </>
  );
}

export default SideBar;
