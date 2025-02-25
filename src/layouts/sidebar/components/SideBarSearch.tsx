import styled from "styled-components";
import SearchLogo from "@/assets/searchLogo.svg?react";
import { useState, useEffect } from "react";
import { useFilterStore } from "@/stores/useFilterStore";
import SideBarFilter from "@/layouts/sidebar/components/SideBarFilter";

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

function SideBarSearch() {
  const { searchText, setSearchText } = useFilterStore(); //검색어 상태 가져오기
  const [localSearchText, setLocalSearchText] = useState(searchText); //로컬 상태 관리

  //디바운싱 적용하여 검색어 변경 시 불필요한 요청 방지
  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchText(localSearchText);
    }, 300);

    return () => clearTimeout(debounce);
  }, [localSearchText, setSearchText]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocalSearchText(e.target.value);
  }

  function handleSearchClear() {
    setLocalSearchText("");
    setSearchText(""); //검색어 초기화
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
    <SideBarFilter/>
    </>
  );
}

export default SideBarSearch;
