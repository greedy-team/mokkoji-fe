import styled from "styled-components";
import SearchLogo from "@/assets/searchLogo.svg?react";
import { useState, useRef  } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null); //검색창 포커스 유지

  //검색 실행 함수 (버튼 클릭 또는 엔터 입력 시 실행)
  const handleSearchSubmit = () => {
    setSearchText(localSearchText);
  };

  //엔터 키 입력 시 검색 실행
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <>
    <SearchSection>
      <SearchContainer
        ref={inputRef}
        placeholder="동아리 검색"
        value={localSearchText}
        onChange={(e) => setLocalSearchText(e.target.value)}
        onKeyDown={handleKeyDown} //엔터 키 이벤트 등록
      />
      <SearchButton onClick={handleSearchSubmit}>
        <SearchLogo />
      </SearchButton>
    </SearchSection>
    <SideBarFilter/>
    </>
  );
}

export default SideBarSearch;
