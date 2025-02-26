import sejong from "@/assets/sejong.png";
import Academic from "@/assets/category/Academic.svg";
import Cultural from "@/assets/category/Cultural.svg";
import Group from "@/assets/category/Group.svg";
import Other from "@/assets/category/Other.svg";
import Religious from "@/assets/category/Religious.svg";
import Sports from "@/assets/category/Sports.svg";
import Volunteer from "@/assets/category/Volunteer.svg";
import styled from "styled-components";
import { useRef } from "react";

const HomeContainer = styled.div`
  justify-content: center;
  display: flex;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;
  filter: brightness(85%); 
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(70, 69, 69, 0.4); 
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
  color: white;
`;

const HomeDescription = styled.p`
  font-size: 1.5rem;
  color: white;
`;

const CategoryTitle = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  margin-top: 60px;
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
  background-color:rgb(244, 243, 238);
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover {
    background-color:rgb(237, 244, 235);
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

function Home() {
  const categories = [
    { name: "학술/교양", img: Academic },
    { name: "문화/예술", img: Cultural },
    { name: "봉사/사회", img: Volunteer },
    { name: "체육", img: Sports },
    { name: "종교", img: Religious },
    { name: "친목", img: Group },
    { name: "기타", img: Other }
  ];
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
        <BackgroundImage src={sejong} alt="세종 이미지" />
        <Overlay /> {/* 어두운 오버레이 추가 */}
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
            <CategoryButton key={category.name}>
              <CategoryImage src={category.img} alt={category.name} />
              {category.name}
            </CategoryButton>
          ))}
        </CategorySection>
        <ScrollButton onClick={() => scroll("right")}>{">"}</ScrollButton>
      </CategoryWrapper>
    </>
  );
}

export default Home;
