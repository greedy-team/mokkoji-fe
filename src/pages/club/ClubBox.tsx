//동아리 개별 박스스
import styled from "styled-components";
import DefaultImage from "@/assets/react.svg?react";

interface ClubBox {
  id: number;
  name: string;
  category: string;
  description: string;
  affiliation: string;
  image?: string;
  onClick?: () => void;
}

interface ClubBoxProp {
  club: ClubBox;
}

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
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
  width: 140px;
  height: 120px;
  border-radius: 10px;
  object-fit: contain; 
  background-color: #f0f0f0; 
  flex-shrink: 0; 
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 750;
`;

const Description = styled.p`
  font-size: 13px;
  color: #777;
    margin-top: 2.5%;
`;

const InfoWrapper = styled.div`
  display: flex; 
  align-items: center;
  gap: 10px; 
  margin-top: 1.5%;
`;

const Category = styled.p`
  font-size: 13px;
  color: #555;
`;

const Affiliation = styled.p`
  font-size: 13px;
  color: #777;
  font-weight: 550;
`;

//아직은 기본 이미지로..
function ClubBoxComponent({ club }: ClubBoxProp) {
  return (
    <Box onClick={club.onClick}>
      <Image src={club.image || DefaultImage.toString()} alt={club.name} /> 
      <Content>
        <Title>{club.name}</Title>
        <Description>{club.description}</Description>
            <InfoWrapper>
                <span style={{ color: "#777", margin: "0 3px" }}>•</span>
                <Category>{club.category}</Category>
                <span style={{ color: "#777", margin: "0 3px" }}>•</span>
                <Affiliation>{club.affiliation}</Affiliation>
            </InfoWrapper>
      </Content>
    </Box>
  );
}

export default ClubBoxComponent;
