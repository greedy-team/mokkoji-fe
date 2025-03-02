import sejong from "@/assets/sejong.png";
import sejong1 from "@/assets/sejong1.jpg";
import sejong2 from "@/assets/sejong2.jpg";
import styled from "styled-components";
import { useState, useEffect } from "react";

import HomeSection from "./HomeSection";

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

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [sejong1, sejong, sejong2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, [backgroundImages.length]);

  return (
    <>
      <HomeSection currentImageIndex={currentImageIndex} />
      <CategorySection />
    </>
  );
}

export default Home;
