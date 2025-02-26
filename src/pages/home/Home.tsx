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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "@/stores/useFilterStore";
import { ClubCategory } from "@/types/clubType";

const HomeContainer = styled.div`
  justify-content: center;
  display: flex;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 55vh;
  max-height: 500px;
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
  margin-top: 15px;
`;

const ExploreButton = styled(Link)`
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: regular;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none; 
  margin-top: 20px;
  &:hover {
    background-color: #333;
  }
`;

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

const CategorySection = styled.div`
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
  const navigate = useNavigate();
  const { setSelectedCategory } = useFilterStore();

  const categories = [
    { name: "학술/교양", img: Academic, filter: ClubCategory.ACADEMIC_CULTURAL },
    { name: "문화/예술", img: Cultural, filter: ClubCategory.CULTURAL_ART },
    { name: "봉사/사회", img: Volunteer, filter: ClubCategory.VOLUNTEER_SOCIAL },
    { name: "체육", img: Sports, filter: ClubCategory.SPORTS },
    { name: "종교", img: Religious, filter: ClubCategory.RELIGIOUS },
    { name: "친목", img: Group, filter: ClubCategory.SOCIAL },
    { name: "기타", img: Other, filter: ClubCategory.OTHER },
  ];
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -425 : 425; // 한 버튼 크기만큼 스크롤
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCategoryClick = (category: ClubCategory) => {
    console.log("카테고리 선택됨:", category); // 디버깅용 콘솔 로그 추가
    setSelectedCategory(category);
    navigate("/clubs");
  };

  return (
    <>
      <HomeContainer>
        <BackgroundImage src={sejong} alt="세종 이미지" />
        <Overlay />
        <HomeLogoSection>
          <HomeTitle>세종 대학교 동아리</HomeTitle>
          <HomeDescription>당신의 열정을 펼칠 수 있는 곳</HomeDescription>
          <ExploreButton to="/clubs"> 동아리 찾아보기</ExploreButton>
        </HomeLogoSection>
      </HomeContainer>

      <CategoryTitle>동아리 카테고리</CategoryTitle>
      <CategoryWrapper>
        <ScrollButton onClick={() => scroll("left")}>{"<"}</ScrollButton>
        <CategorySection ref={scrollRef}>
        {categories.map((category) => (
          <CategoryButton
            key={category.name}
            onClick={() => handleCategoryClick(category.filter)}
          >
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
