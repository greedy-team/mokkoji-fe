import styled from "styled-components";
import DefaultImage from "@/assets/react.svg?react";
import { ClubType, ClubCategory } from "@/types/clubType";
import { ClubCategoryKorean } from "@/components/utils/clubCategoryMapping";
import FavoriteButton from "@/components/FavoriteButton";

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2%;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s;
  gap: 12px;
  width: 100%;
  min-height: 120px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Image = styled.img`
  width: 40%;
  height: 90%;
  border-radius: 10px;
  object-fit: contain;
  background-color: #f0f0f0;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 60%;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 750;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: #777;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: hidden;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 10%;
`;

const Category = styled.p`
  font-size: 0.7rem;
  color: #555;
`;

const Affiliation = styled.p`
  font-size: 0.7rem;
  color: #777;
  font-weight: 550;
`;

interface ClubBoxProp {
  club: ClubType;
  onClick: () => void;
}

function ClubBox({ club, onClick }: ClubBoxProp) {
  return (
    <Box onClick={onClick}>
      <Image src={club.imageUrl || DefaultImage.toString()} alt={club.name} />
      <Content>
        <TitleSection>
          <Title>{club.name}</Title>
          <FavoriteButton club={club} />
        </TitleSection>
        <Description>{club.description}</Description>
        <InfoWrapper>
          <span style={{ color: "#777", margin: "0 3px" }}>•</span>
          <Category>{ClubCategoryKorean[club.category as ClubCategory] || club.category}</Category>
          <span style={{ color: "#777", margin: "0 3px" }}>•</span>
          <Affiliation>{club.affiliation}</Affiliation>
        </InfoWrapper>
      </Content>
    </Box>
  );
}

export default ClubBox;
