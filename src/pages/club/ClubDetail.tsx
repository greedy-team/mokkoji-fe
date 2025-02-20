import styled from "styled-components";
import { useGetClubsDetail } from "@/hooks/queries/clubs.query";
import useCustomParams from "@/hooks/useCustomParams";


const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;


const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;


const ClubImage = styled.div<{ image?: string }>`
  width: 200px;
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


const ClubInfo = styled.div`
  margin-top: 30px;
  margin-left: 180px;
`;


const ClubTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;


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


const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  text-align: center;
`;


const RecruitmentInfo = styled.p`
  font-size: 14px;
  color: #444;
  margin-top: 10px;
  text-align: center;
`;


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
  const id = useCustomParams();

  const { data } = useGetClubsDetail(id);

  const clubDetail = data.data.club;

  return (
    <Container>
      <InfoContainer>
        <ClubInfo>
          <ClubTitle>{clubDetail.name}</ClubTitle>
          <TagContainer>
            <Tag>{clubDetail.affiliation}</Tag>
            <Tag>{clubDetail.category}</Tag>
          </TagContainer>

          <Description>{clubDetail.description}</Description>

          <RecruitmentInfo>
            모집기간: {clubDetail.recruitStartDate}~{clubDetail.recruitEndDate}
          </RecruitmentInfo>
        </ClubInfo>

        <ClubImage image={clubDetail.imageUrl}>
          {!clubDetail.imageUrl && "Image"}
        </ClubImage>
      </InfoContainer>

      <Divider />
      <RecruitmentText>{clubDetail.recruitPost}</RecruitmentText>
    </Container>
  );
}

export default ClubDetail;
