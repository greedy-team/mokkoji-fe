import styled from "styled-components";
import Mokkoji from "@/assets/logo/MokkojiW.svg?react";
import { Link } from "react-router-dom";
import sejong from "@/assets/home/sejong.webp";
import sejong1 from "@/assets/home/sejong1.webp";
import sejong2 from "@/assets/home/sejong2.webp";
import { useLazyImg } from "@/hooks/useLazyImg";
import { useEffect, useState } from "react";

const HomeContainer = styled.div`
  justify-content: center;
  display: flex;
  position: relative;
  min-height: 66vh;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 66vh;
  object-fit: fill;
  filter: brightness(70%);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(70, 69, 69, 0.4);
`;

const HomeLogoSection = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  top: 15%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const HomeTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const HomeDescription = styled.p`
  font-size: 1.3rem;
  color: white;
  margin-top: -40px;
  text-align: center;
  line-height: 1.6;
  @media (max-width: 770px) {
    font-size: 0.9rem;
  }
`;

const ExploreButton = styled(Link)`
  color: white;
  font-size: 1rem;
  font-weight: regular;
  padding: 10px 20px;
  text-align: center;
  background-color: #1a1a1a;
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

function HomeSection() {
  const backgroundImages = [sejong1, sejong, sejong2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { imgSrc, imgRef } = useLazyImg({
    src: backgroundImages[currentImageIndex],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <HomeContainer>
      <BackgroundImage ref={imgRef} src={imgSrc} alt={`배경 이미지`} />
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
