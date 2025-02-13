import styled from "styled-components";
import SideBarSearch from "./components/SideBarSearch";
import SideBarContentList from "./components/SideBarContentList";

const SideBarContainer = styled.div`
  padding: 1%;
  width: 22%;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarSearch />
      <SideBarContentList />
    </SideBarContainer>
  );
}

export default SideBar;
