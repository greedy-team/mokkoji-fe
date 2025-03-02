import styled from "styled-components";
import FilterLogo from "@/assets/filterLogo.svg?react";
import { useState } from "react";
import { useFilterStore } from "@/stores/useFilterStore"; 
import { ClubCategoryKorean } from "@/components/utils/clubCategoryMapping";
import { useNavigate, useLocation } from "react-router-dom";

interface SearchFilterProps {
  selected: boolean;
}

const SearchFilter = styled.button<SearchFilterProps>`
  width: 90%;
  height: 30px;
  border: 1px solid ${({ selected }) => (selected ? "#D3D3D3" : "#9ca3af")};
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? "#D3D3D3" : "white")};
  padding: 0.2%;
  text-align: center;
  color: ${({ selected }) => (selected ? "4b5563" : "#4b5563")};
  margin-bottom: 20px;
  font-size: small;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
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
  const { selectedCategory, setSelectedCategory, categories } = useFilterStore();
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function toggleFilter() {
    setFilterOpen(!filterOpen);
  }

  return (
    <>
      <SearchFilter
        onClick={toggleFilter}
        selected={!!selectedCategory}
      >
        <FilterLogo width={12} height={12} style={{ marginRight: 5 }} />
        {selectedCategory ? ClubCategoryKorean[selectedCategory] : "상세 필터"}
      </SearchFilter>

      {filterOpen && (
        <Dropdown>
          {categories.map((category) => (
            <DropdownItem
              key={category}
              onClick={() => {
                setSelectedCategory(category);

                if (selectedCategory === category) {
                  setSelectedCategory(undefined);
                } else {
                  setSelectedCategory(category);
                }

                if (location.pathname === "/") {
                  navigate("/clubs");
                }
              }}
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
