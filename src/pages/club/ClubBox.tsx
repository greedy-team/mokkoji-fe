import styled from "styled-components";
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
  margin-bottom: 20px;
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
  border-radius: 15px;
  object-fit: contain;

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
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.7rem;
  color: black;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.3em;
  height: fit-content;
  width: 90%;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 18%;
`;

const Category = styled.p`
  font-size: 0.6rem;
  color: gray;
`;

const Affiliation = styled.p`
  font-size: 0.6rem;
  color: gray;
  font-weight: 550;
`;

interface ClubBoxProp {
  club: ClubType;
  onClick: () => void;
}

function ClubBox({ club, onClick }: ClubBoxProp) {
  return (
    <Box onClick={onClick}>
      <Image src={club.imageURL || ""} alt={club.name} />
      <Content>
        <TitleSection>
          <Title>{club.name}</Title>
          <FavoriteButton club={club} />
        </TitleSection>
        <Description>{club.description}</Description>
        <InfoWrapper>
          <span style={{ color: "#777" }}>•</span>
          <Category>
            {ClubCategoryKorean[club.category as ClubCategory] || club.category}
          </Category>
          <span style={{ color: "#777" }}>•</span>
          <Affiliation>{club.affiliation}</Affiliation>
        </InfoWrapper>
      </Content>
    </Box>
  );
}

export default ClubBox;
