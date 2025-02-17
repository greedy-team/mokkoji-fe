//동아리 상세 페이지
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface ClubDetailProps {
  id: number;
  name: string;
  category: string;
  affiliation: string;
  description: string; //간단 설명
  recruitment_post: string; //모집 글
  recruit_period: string; // 모집 기간
  recruit_number: string; // 모집 인원
  club_room: string; // 동아리 방 위치
  image?: string;
}

//더미 데이터(API 연결 전 UI 테스트용)
//테스트 URL: http://localhost:5173/clubs/1
const dummyClubDetails: ClubDetailProps[] = [
  {
    id: 1,
    name: "댄스 동아리 STEP",
    category: "체육",
    affiliation: "중앙동아리",
    description: "열정적인 댄스 동아리입니다.",
    recruitment_post: "2025년 신입부원 모집! 열정 가득한 여러분을 기다립니다.",
    recruit_period: "0000-00-00 ~ 0000-00-00",
    recruit_number: "00 명",
    club_room: "000 호",
    image: "/images/dance.jpg",
  },
];

//전체 레이아웃
const Container = styled.div`
  width: 240%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// 동아리 정보와 이미지를 가로 정렬
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

//동아리 대표 이미지 
const ClubImage = styled.div<{ image?: string }>`
  width: 40%;
  height: 200px;
background-color: #ddd;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")}; 
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 15px;
  margin-right: 120px;
`;

//동아리 상세 정보
const ClubInfo = styled.div`
  margin-top: 30px;
  margin-left: 180px;
`;

//동아리명
const ClubTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

//카테고리 및 소속
const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 180px;
`;

const Tag = styled.div`
  font-size: 12px;
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 12px;
  font-weight: 500;
  color: #555;
`;

//간단 설명 텍스트
const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  text-align: center;
`;

// 모집 관련 정보
const RecruitmentInfo = styled.p`
  font-size: 14px;
  color: #444;
  margin-top: 10px;
  text-align: center;
`;

//모집 공고 섹션
const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

const RecruitmentText = styled.p`
  font-size: 14px;
  color: #444;
  margin-top: 10px;
  margin-left: 20px;
  width: 100%;
`;

function ClubDetail() {
  const { id } = useParams<{ id: string }>();
  console.log("useParams 값:", id); 

  const club = dummyClubDetails.find((c) => c.id === Number(id));

  if (!club) {
    return <Container>존재하지 않는 동아리입니다.</Container>;
  }

  return (
    <Container>
      <InfoContainer>

        <ClubInfo>
            <ClubTitle>{club.name}</ClubTitle>
            <TagContainer>
              <Tag>{club.affiliation}</Tag>
              <Tag>{club.category}</Tag>
            </TagContainer>

          <Description>{club.description}</Description>

          <RecruitmentInfo>모집기간: {club.recruit_period}</RecruitmentInfo>
          <RecruitmentInfo>모집인원: {club.recruit_number}</RecruitmentInfo>
          <RecruitmentInfo>동아리방: {club.club_room}</RecruitmentInfo>
        </ClubInfo>

        <ClubImage image={club.image}>{!club.image && "Image"}</ClubImage>
      </InfoContainer>

      <Divider />
      <RecruitmentText>{club.recruitment_post}</RecruitmentText>
    </Container>
  );
}

export default ClubDetail;
