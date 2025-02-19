import { Link } from "react-router-dom";
import styled from "styled-components";
import { clubItems } from "../const/pathLinks";
import Spacing from "../../../components/Spacing";

const SectionTitle = styled(Link)`
  width: 90%;
  height: 30px;
  background-color: transparent;
  color: black;
  font-size: larger;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  padding-top: 7px;
  box-sizing: border-box;
  padding-left: 5px;
  margin-bottom: 20px;
  text-align: left;
  text-decoration: none;
`;

const SectionLink = styled(Link)`
  font-size: small;
  color: black;
  font-weight: 500;
  margin-left: 30px;
  background-color: transparent;
  width: 90%;
  text-decoration: none;
  margin-bottom: 10px;
`;

function SideBarContentList() {
  return (
    <>
      <SectionTitle to="/clubs">동아리</SectionTitle>
      {clubItems.map((item) => (
        <SectionLink key={item.name} to={item.path}>
          {item.name}
        </SectionLink>
      ))}
      <Spacing direction="vertical" size={1.2} />
      <SectionTitle to="/recruit">모집 공고</SectionTitle>

      <SectionTitle to="/favorite">즐겨찾기</SectionTitle>
    </>
  );
}
export default SideBarContentList;
