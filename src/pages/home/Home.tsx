import sejongImg from "@/assets/sejongImg.jpeg";
import styled from "styled-components";
import { useRef } from "react";

const HomeContainer = styled.div`
  justify-content: center;
  display: flex;

  position: relative;
`;

const HomeLogoSection = styled.div`
  position: absolute;
  top: 40%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const HomeTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

const HomeDescription = styled.p`
  font-size: 1.5rem;
  color: black;
`;

const CategoryTitle = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 15%;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const CategorySection = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 15px;
  padding: 10px;
  width: 70%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button`
  flex: 0 0 calc((100% - 30px) / 3); /* 3개씩 보이도록 설정 (gap 포함) */
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const ScrollButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  user-select: none;
`;

function Home() {
  const categories = ["종교", "학술/교양", "봉사", "체육", "문화", "공연"];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // 한 버튼 크기만큼 스크롤
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <HomeContainer>
        <img src={sejongImg} alt="세종 이미지" style={{ zIndex: 1 }} />
        <HomeLogoSection>
          <HomeTitle>세종 대학교 동아리</HomeTitle>
          <HomeDescription>당신의 열정을 펼칠 수 있는 곳</HomeDescription>
        </HomeLogoSection>
      </HomeContainer>

      <CategoryTitle>동아리 카테고리</CategoryTitle>
      <CategoryWrapper>
        <ScrollButton onClick={() => scroll("left")}>{"<"}</ScrollButton>
        <CategorySection ref={scrollRef}>
          {categories.map((category) => (
            <CategoryButton key={category}>{category}</CategoryButton>
          ))}
        </CategorySection>
        <ScrollButton onClick={() => scroll("right")}>{">"}</ScrollButton>
      </CategoryWrapper>
    </>
  );
}

export default Home;
