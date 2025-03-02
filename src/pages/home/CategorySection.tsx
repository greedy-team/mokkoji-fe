import { useFilterStore } from "@/stores/useFilterStore";
import { ClubCategory } from "@/types/clubType";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { categories } from "./const/categories";

const CategoryTitle = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 5%;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const CategoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 15px;
  padding: 10px;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button`
  flex: 0 0 calc((100% - 30px) / 3);
  height: 150px;
  background-color: rgb(249, 249, 249);
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover {
    background-color: rgb(217, 217, 217);
  }
`;

const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
`;

const ScrollButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  user-select: none;
`;

function CategorySection() {
  const navigate = useNavigate();

  const { setSelectedCategory } = useFilterStore();

  const handleCategoryClick = (category: ClubCategory) => {
    setSelectedCategory(category);
    navigate("/clubs");
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -425 : 425;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <>
      <CategoryTitle>동아리 카테고리</CategoryTitle>
      <CategoryWrapper>
        <ScrollButton onClick={() => scroll("left")}>{"<"}</ScrollButton>
        <CategoryContainer ref={scrollRef}>
          {categories.map((category) => (
            <CategoryButton
              key={category.name}
              onClick={() => handleCategoryClick(category.filter)}
            >
              <CategoryImage src={category.img} alt={category.name} />
              {category.name}
            </CategoryButton>
          ))}
        </CategoryContainer>
        <ScrollButton onClick={() => scroll("right")}>{">"}</ScrollButton>
      </CategoryWrapper>
    </>
  );
}
export default CategorySection;
