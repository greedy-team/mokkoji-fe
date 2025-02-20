import styled from "styled-components";
import SearchLogo from "@/assets/searchLogo.svg?react";
import FilterLogo from "@/assets/filterLogo.svg?react";
import { useState } from "react";

const SearchSection = styled.div`
  width: 90%;
  height: 30px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 8px;
`;

const SearchContainer = styled.input`
  width: 100%;
  height: 30px;
  position: absolute;
  border: 1px solid #9ca3af;
  border-radius: 5px;
  padding: 1px 3px 1px;
  box-sizing: border-box;
  font-size: small;
  :focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 7px;
  top: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const SearchFilter = styled.button`
  width: 90%;
  height: 30px;
  border: 1px solid #9ca3af;
  border-radius: 5px;
  background-color: white;
  padding: 0.2%;
  text-align: center;
  color: #4b5563;
  margin-bottom: 20px;
  font-size: small;
`;

function SideBarSearch() {
  const [searchText, setSearchText] = useState<string>("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  function onClick() {
    setSearchText("");
  }

  return (
    <>
      <SearchSection>
        <SearchContainer
          placeholder="동아리 검색"
          value={searchText}
          onChange={onChange}
        ></SearchContainer>
        <SearchButton onClick={onClick}>
          <SearchLogo />
        </SearchButton>
      </SearchSection>
      <SearchFilter>
        <FilterLogo width={12} height={12} style={{ marginRight: 5 }} />
        상세 필터
      </SearchFilter>
    </>
  );
}

export default SideBarSearch;
