import styled from "styled-components";
import SearchLogo from "@/assets/searchLogo.svg?react";
import { useState, useRef } from "react";
import { useFilterStore } from "@/stores/useFilterStore";
import SideBarFilter from "@/layouts/sidebar/components/SideBarFilter";
import { useNavigate, useLocation } from "react-router-dom";

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
  margin-right: 2%;
`;

function SideBarSearch() {
  const { searchText, setSearchText } = useFilterStore();
  const [localSearchText, setLocalSearchText] = useState<string>(searchText);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = () => {
    setSearchText(localSearchText);

    if (location.pathname === "/") {
      navigate("/clubs");
    }
  };
  
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
          onKeyDown={handleKeyDown} 
        />
        <SearchButton onClick={handleSearchSubmit}>
          <SearchLogo />
        </SearchButton>
      </SearchSection>
      <SideBarFilter />
    </>
  );
}

export default SideBarSearch;
