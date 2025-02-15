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
    image: "/images/dance.jpg",
  },
];

//전체 레이아웃
const Container = styled.div`
  width: 350%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

//동아리 대표 이미지 
const ClubImage = styled.div<{ image?: string }>`
  width: 100%;
  height: 250px;
background-color: #ddd;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")}; 
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 20px;
`;

//동아리 상세 정보
const ClubInfo = styled.div`
  padding: 20px 30px;
`;

//동아리명과 태그를 나란히 넣기 위해
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; 
`;

//동아리명
const ClubTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

//카테고리 및 소속
const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
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
  margin-top: 15px;
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
      <ClubImage image={club.image}>{!club.image && "Image"}</ClubImage>

      <ClubInfo>

        <TitleContainer> 
            <ClubTitle>{club.name}</ClubTitle>

            <TagContainer>
                <Tag>{club.affiliation}</Tag>
                <Tag>{club.category}</Tag>
            </TagContainer>
        </TitleContainer> 

        <Description>{club.description}</Description>

        <Divider />
        <RecruitmentText>{club.recruitment_post}</RecruitmentText>

      </ClubInfo>

    </Container>
  );
}

export default ClubDetail;
