import styled from "styled-components";
import SideBarSearch from "./components/SideBarSearch";
import SideBarContentList from "./components/SideBarContentList";
import { useState, useEffect } from "react";

const SideBarContainer = styled.div`
  padding: 1%;
  width: 22%;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function SideBar() {
  const [searchText, setSearchText] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    console.log("검색어 변경:", searchText);
  }, [searchText]);
  
  useEffect(() => {
    console.log("선택된 카테고리 변경:", selectedCategory);
  }, [selectedCategory]);

  return (
    <SideBarContainer>
      <SideBarSearch 
        setSearchText={setSearchText} 
        setSelectedCategory={setSelectedCategory} 
      />
      <SideBarContentList />
    </SideBarContainer>
  );
}


export default SideBar;
