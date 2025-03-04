import styled from "styled-components";
import { useGetClubsDetail } from "@/hooks/queries/clubs.query";
import useCustomParams from "@/hooks/useCustomParams";
import ClubDetailInfo from "./ClubDetailInfo";
import { convertLinks } from "../../utils/covertLinks";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0.3%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 770px) {
    margin-top: 60px;
  }
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ddd;

  @media (max-width: 770px) {
    margin: 20px 20px 20px 0;
  }
`;

const RecruitmentText = styled.p`
  font-size: 0.8rem;
  color: black;
  margin-left: 20px;
  width: 95%;
  white-space: pre-wrap;
  margin-bottom: 20px;
  line-height: 1.4;
  a {
    color: blue;
    text-decoration: underline;
  }
  
  @media (max-width: 770px) {
    width: 90%;
  }
`;

function ClubDetail() {
  const id = useCustomParams();

  const { data } = useGetClubsDetail(id);

  const clubDetail = data.data;
  const formattedText = convertLinks(clubDetail.recruitPost);

  return (
    <Container>
      <ClubDetailInfo clubDetail={clubDetail} />
      <Divider />
      <RecruitmentText
        dangerouslySetInnerHTML={{ __html: formattedText }}
      ></RecruitmentText>
    </Container>
  );
}

export default ClubDetail;
