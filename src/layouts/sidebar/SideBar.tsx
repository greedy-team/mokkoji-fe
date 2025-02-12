import styled from "styled-components";
import SideBarSearchInput from "./components/SideBarSearchInput";


const SideBarContainer = styled.div`
  padding: 1%;
  width: 20%;
  background-color: #f9fafb;
`;

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarSearchInput />
    </SideBarContainer>
  );
}

export default SideBar;
