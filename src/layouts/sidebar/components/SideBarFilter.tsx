import styled from "styled-components";
import FilterLogo from "@/assets/button/filterLogo.svg?react";
import { useState } from "react";
import { useFilterStore } from "@/stores/useFilterStore";
import { ClubCategoryKorean } from "@/components/const/clubCategoryMapping";
import { useNavigate, useLocation } from "react-router-dom";
import { ClubCategory } from "@/features/clubs/types/clubType";

const SearchFilter = styled.button<{ selected: boolean }>`
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
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#818896" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#4b5563")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#374151" : "#f3f4f6")};
  }
`;

const Dropdown = styled.div`
  width: 80%;
  background-color: white;
  border: 1px solid #9ca3af;
  border-radius: 5px;
  z-index: 12;
  max-height: 200px;
  overflow-y: auto;
  padding: 5px;
  margin-bottom: 10px;
`;

const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

function SideBarFilter() {
  const { selectedCategory, setSelectedCategory, categories } =
    useFilterStore();
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function toggleFilter() {
    setFilterOpen(!filterOpen);
  }

  const categoryClickEvent = (category: ClubCategory) => {
    if (selectedCategory === category) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(category);
    }
    if (location.pathname === "/") {
      navigate("/clubs");
    }
  };

  return (
    <>
      <SearchFilter onClick={toggleFilter} selected={!!selectedCategory}>
        <FilterLogo width={12} height={12} style={{ marginRight: 5 }} />
        {selectedCategory ? ClubCategoryKorean[selectedCategory] : "상세 필터"}
      </SearchFilter>

      {filterOpen && (
        <Dropdown>
          <DropdownItem onClick={() => setSelectedCategory(undefined)}>
            전체
          </DropdownItem>
          {categories.map((category) => (
            <DropdownItem
              key={category}
              onClick={() => categoryClickEvent(category)}
            >
              {ClubCategoryKorean[category]}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </>
  );
}

export default SideBarFilter;
