import { Link } from "react-router-dom";
import styled from "styled-components";
import { clubItems } from "../const/pathLinks";
import Spacing from "@/components/Spacing";
import { useFilterStore } from "@/stores/useFilterStore";
import { isLoginChecking } from "@/stores/useAuthStore";

const SectionTitle = styled(Link)<{ $active: boolean }>`
  width: 90%;
  height: 30px;
  background-color: transparent;
  color: black;
  font-size: larger;
  font-weight: 600;
  border: none;
  padding-top: 7px;
  box-sizing: border-box;
  padding-left: 5px;
  margin-bottom: 20px;
  text-align: left;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#93939A" : "black")};
  border-left: 5px solid
    ${({ $active }) => ($active ? "#93939A" : "transparent")} !important;
  &:hover {
    color: rgb(147, 147, 154);
  }
`;

const SectionLink = styled(Link)<{ $active: boolean }>`
  font-size: 0.8rem;
  color: black;
  font-weight: 600;
  margin-left: 25px;
  padding-left: 5px;
  background-color: transparent;
  width: 90%;
  text-decoration: none;
  margin-bottom: 10px;
  color: ${({ $active }) => ($active ? "#93939A" : "black")};
  border-left: 3px solid
    ${({ $active }) => ($active ? "#93939A" : "transparent")} !important;
  &:hover {
    color: rgb(147, 147, 154);
  }
`;

function SideBarContentList({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const { resetAll, selectedMenu, setSelectedMenu } = useFilterStore();

  function handleMenuClick(menu: string) {
    setSelectedMenu(menu);
    resetAll();

    if (window.innerWidth <= 770) {
      setIsOpen(false);
    }
  }

  return (
    <>
      <SectionTitle
        to="/"
        onClick={() => handleMenuClick("HOME")}
        $active={selectedMenu === "HOME"}
      >
        HOME
      </SectionTitle>
      <SectionTitle
        to="/clubs"
        onClick={() => handleMenuClick("전체 동아리")}
        $active={selectedMenu === "전체 동아리"}
      >
        전체 동아리
      </SectionTitle>
      {clubItems.map((item) => (
        <SectionLink
          key={item.name}
          to={item.path}
          onClick={() => handleMenuClick(item.name)}
          $active={selectedMenu === item.name}
        >
          {item.name}
        </SectionLink>
      ))}
      <Spacing direction="vertical" size={1.2} />
      <SectionTitle
        to="/recruit"
        onClick={() => handleMenuClick("모집 공고")}
        $active={selectedMenu === "모집 공고"}
      >
        모집 공고
      </SectionTitle>

      <SectionTitle
        to="/favorites"
        onClick={() => handleMenuClick("즐겨찾기")}
        $active={selectedMenu === "즐겨찾기" && !isLoginChecking()}
      >
        즐겨찾기
      </SectionTitle>
    </>
  );
}
export default SideBarContentList;
