import styled from "styled-components";
import FilterLogo from "@/assets/filterLogo.svg?react";
import { useState } from "react";

interface SideBarSearchFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const SearchFilter = styled.button`
  width: 90%;
  height: 30px;
  border: 1px solid #9ca3af;
  border-radius: 5px;
  background-color: white;
  padding: 0.2%;
  text-align: center;
  color: #4b5563;
  margin-bottom: 8px;
  font-size: small;
  cursor: pointer;
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

const categories = ["종교", "학술/교양", "봉사", "체육", "문화/예술", "기타"];

function SideBarSearchFilter({
  selectedCategory,
  setSelectedCategory,
}: SideBarSearchFilterProps) {
  const [filterOpen, setFilterOpen] = useState(false);

  function toggleFilter() {
    setFilterOpen(!filterOpen);
  }

  function selectCategory(category: string) {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
    setFilterOpen(false);
  }

  return (
    <>
      <SearchFilter onClick={toggleFilter}>
        <FilterLogo width={12} height={12} style={{ marginRight: 5 }} />
        {selectedCategory || "상세 필터"}
      </SearchFilter>
      {filterOpen && (
        <Dropdown>
          {categories.map((category) => (
            <DropdownItem
              key={category}
              onClick={() => selectCategory(category)}
            >
              {category}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </>
  );
}

export default SideBarSearchFilter;
