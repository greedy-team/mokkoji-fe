import { Link } from "react-router-dom";
import styled from "styled-components";
import { clubItems } from "../const/pathLinks";
import Spacing from "@/components/Spacing";
import { useState } from "react";

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
  color: ${({ $active }) => ($active ? "#6161d0" : "black")};
  border-left: 5px solid ${({ $active }) => ($active ? "#6161d0" : "none")};
  &:hover {
    color: #6161d0;
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
  color: ${({ $active }) => ($active ? "#6161d0" : "black")};
  border-left: 3px solid ${({ $active }) => ($active ? "#6161d0" : "none")};
  &:hover {
    color: #6161d0;
  }
`;

function SideBarContentList() {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  function handleMenuClick(menu: string) {
    setSelectedMenu(menu);
  }

  return (
    <>
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
        $active={selectedMenu === "즐겨찾기"}
      >
        즐겨찾기
      </SectionTitle>
    </>
  );
}
export default SideBarContentList;
