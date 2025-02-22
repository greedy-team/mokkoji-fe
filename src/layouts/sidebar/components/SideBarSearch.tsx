import styled from "styled-components";
import SearchLogo from "@/assets/searchLogo.svg?react";
import SideBarSearchFilter from "./SideBarSearchFilter";
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

//setSearchText -> 검색어를 Clublist에 전달
//setSelectedCategory -> 선택된 카테고리를 Clublist에 전달
//localSearchText -> 사이드바 내부에서만 검색어
//localSelectedCategory -> 사이드바 내부에서만 카테고리

interface SideBarSearchProps {
  setSearchText: (text: string) => void; 
  setSelectedCategory: (category: string) => void; 
}

function SideBarSearch({ setSearchText, setSelectedCategory }: SideBarSearchProps) {
  const [localSearchText, setLocalSearchText] = useState("");
  const [localSelectedCategory, setLocalSelectedCategory] = useState("");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value;
    setLocalSearchText(searchValue);
    setSearchText(searchValue);
  }

  function handleSearchClear() {
    setLocalSearchText("");
    setSearchText?.("");
  }

  function handleCategoryChange(category: string) {
    setLocalSelectedCategory(category);
    setSelectedCategory(category);
  }

  return (
    <>
      <SearchSection>
        <SearchContainer
          placeholder="동아리 검색"
          value={localSearchText}
          onChange={handleSearchChange}
        />
        <SearchButton onClick={handleSearchClear}>
          <SearchLogo />
        </SearchButton>
      </SearchSection>

      <SideBarSearchFilter
        selectedCategory={localSelectedCategory}
        setSelectedCategory={handleCategoryChange}
      />
    </>
  );
}

export default SideBarSearch;
