import { Link } from "react-router-dom";
import styled from "styled-components";
import { clubItems, recruitItems } from "../const/pathLinks";
import Spacing from "../../../components/Spacing";

const SectionTitle = styled.div`
  width: 90%;
  height: 30px;
  background-color: black;
  color: white;
  font-size: small;
  border-radius: 5px;
  border: none;
  padding-top: 7px;
  box-sizing: border-box;
  padding-left: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

const SectionLink = styled(Link)`
  font-size: small;
  color: black;
  margin-left: 30px;
  background-color: transparent;
  width: 90%;
  text-decoration: none;
  margin-bottom: 10px;
`;

function SideBarContentList() {
  return (
    <>
      <SectionTitle>동아리</SectionTitle>
      {clubItems.map((item) => (
        <SectionLink key={item.name} to={item.path}>
          {item.name}
        </SectionLink>
      ))}
      <Spacing direction="vertical" size={1.2} />
      <SectionTitle>모집 공고</SectionTitle>
      {recruitItems.map((item) => (
        <SectionLink key={item.name} to={item.path}>
          {item.name}
        </SectionLink>
      ))}
    </>
  );
}
export default SideBarContentList;
