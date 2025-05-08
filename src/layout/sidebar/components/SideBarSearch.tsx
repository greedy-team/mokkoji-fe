import styled from "styled-components";
import SearchLogo from "@/assets/button/searchLogo.svg?react";
import { useRef } from "react";
import { useFilterStore } from "@/store/useFilterStore";
import SideBarFilter from "@/layout/sidebar/components/SideBarFilter";
import { useNavigate, useLocation } from "react-router-dom";
import useDebounce from "@/hooks/useDebounce";

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
  const setSearchText = useFilterStore((state) => state.setSearchText);
  const { debouncedValue, setDebouncedValue } = useDebounce({ setSearchText });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = () => {
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
          value={debouncedValue}
          onChange={(e) => setDebouncedValue(e.target.value)}
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
