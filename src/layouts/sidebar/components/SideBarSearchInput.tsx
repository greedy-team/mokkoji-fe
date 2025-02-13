import styled from "styled-components";

const SearchContainer = styled.input`
  width: 95%;
  height: 2rem;
  border: 1px solid #9ca3af;
  border-radius: 5px;
  padding: 0.2%;
`;

function SideBarSearchInput() {
  return <SearchContainer placeholder="동아리 검색"></SearchContainer>;
}

export default SideBarSearchInput;
