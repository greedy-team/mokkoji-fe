import styled from "styled-components";
import Mokkoji from "@/assets/MokkojiW.svg?react";
import { Link } from "react-router-dom";
import sejong from "@/assets/sejong.png";
import sejong1 from "@/assets/sejong1.jpg";
import sejong2 from "@/assets/sejong2.jpg";
import { useLazyImg } from "@/hooks/useLazyImg";

const HomeContainer = styled.div`
  justify-content: center;
  display: flex;
  position: relative;
  min-height: 55vh;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 55vh;
  max-height: 500px;
  object-fit: fill;
  filter: brightness(85%);
  transition: opacity 1s ease-in-out;
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
  top: 15%;
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
  text-align: center;
`;

const HomeDescription = styled.p`
  line-height: 1.3;
  font-size: 1.3rem;
  color: white;
  margin-top: -40px;
  text-align: center;

  @media (max-width: 770px) {
    font-size: 0.9rem;
  }
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

interface HomeSectionProps {
  currentImageIndex: number;
}

function HomeSection({ currentImageIndex }: HomeSectionProps) {
  const backgroundImages = [sejong1, sejong, sejong2];

  const lazyImages = backgroundImages.map((image) => useLazyImg({ src: image }));

  return (
    <HomeContainer>
      {lazyImages.map(({ imgSrc, imgRef }, index) => (
        <BackgroundImage
          key={index}
          ref={imgRef}
          src={imgSrc || ""}
          alt={`배경 이미지 ${index + 1}`}
          style={{ opacity: index === currentImageIndex ? 1 : 0 }}
        />
      ))}
      <Overlay />
      <HomeLogoSection>
        <HomeTitle>
          <Mokkoji width={180} height={150} />{" "}
        </HomeTitle>
        <HomeDescription>
          세종대의 다양한 동아리를 한곳에서 만나보세요. <br />
          관심 있는 동아리를 찾고, 새로운 사람들과 함께하세요! <br />
          지금 동아리 리스트를 확인해보세요 🔍
        </HomeDescription>
        <ExploreButton to="/clubs"> 동아리 찾아보기</ExploreButton>
      </HomeLogoSection>
    </HomeContainer>
  );
}
export default HomeSection;
