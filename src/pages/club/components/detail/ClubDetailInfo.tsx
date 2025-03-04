import FavoriteButton from "@/components/FavoriteButton";
import styled from "styled-components";
import DummyLogo from "@/assets/instagram.svg?react";
import { ClubDetailType } from "@/types/clubType";
import useDateUtil from "@/utils/useDateUtil";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const ClubInfo = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  width: 50%;
  
  @media (max-width: 770px) {
    margin: 10px 0 0 20px;
    width: 90%;
    padding: 1%;
    box-sizing: border-box;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3%;
`;

const ClubTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bolder;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Tag = styled.div`
  font-size: 0.7rem;
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 12px;
  font-weight: bold;
  color: black;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: black;
  margin-top: 20px;
  white-space: pre-wrap;
  width: 50%;
  line-height: 1.4;
  width: 100%;
  @media (max-width: 770px) {
      width: 90%;
  }
`;

const RecruitmentInfo = styled.p`
  font-size: 0.75rem;
  color: black;
  margin-top: 20px;
  line-height: 1.2;
`;

const RecruitmentDate = styled.span`
  font-size: 0.75rem;
  color: black;
  text-decoration: underline;
`;

const ClubImage = styled.div<{ $image?: string }>`
  width: 200px;
  height: 200px;
  background-color: #ddd;
  background-image: ${({ $image }) => ($image ? `url(${$image})` : "none")};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  border-radius: 10px;
  margin-top: 15px;
  margin-right: 120px;

  @media (max-width: 770px) {
      margin: 0 3% 0 0;
      width: 80%;
  }
`;

interface ClubDetailProps {
  clubDetail: ClubDetailType;
}

function ClubDetailInfo({ clubDetail }: ClubDetailProps) {
  const isEndOfYear = useDateUtil(clubDetail.recruitEndDate);
  return (
    <InfoContainer>
      <ClubInfo>
        <TitleWrap>
          <ClubTitle>{clubDetail.name}</ClubTitle>
          <DummyLogo
            onClick={() => window.open(clubDetail.instagramLink, "_blank")}
            width={25}
            height={25}
            cursor={"pointer"}
          />
          <FavoriteButton
            club={{ id: clubDetail.id, isFavorite: clubDetail.isFavorite }}
          />
        </TitleWrap>
        <TagContainer>
          <Tag>{clubDetail.affiliation}</Tag>
          <Tag>{clubDetail.category}</Tag>
        </TagContainer>

        <Description>{clubDetail.description}</Description>

        <RecruitmentInfo>
          모집기간:<br />{" "}
          {isEndOfYear ? (
            <RecruitmentDate>상시 모집</RecruitmentDate>
          ) : (
            <RecruitmentDate>
              {clubDetail.recruitStartDate}~{clubDetail.recruitEndDate}
            </RecruitmentDate>
          )}
        </RecruitmentInfo>
      </ClubInfo>

      <ClubImage $image={clubDetail.imageURL}>
        {!clubDetail.imageURL && "Image"}
      </ClubImage>
    </InfoContainer>
  );
}
export default ClubDetailInfo;
