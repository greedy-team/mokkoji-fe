import styled from "styled-components";
import { ClubType } from "@/types/clubType";
import FavoriteButton from "@/components/FavoriteButton";

const Card = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4%;
  margin-bottom: 20px;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Status = styled.div<{ $backColor: string; $fontColor: string }>`
  width: fit-content;
  border-radius: 20px;
  padding: 3px 7px;
  background-color: ${({ $backColor }) => $backColor};
  color: ${({ $fontColor }) => $fontColor};
  font-size: 13px;
  font-weight: 550;
`;

const RecruitPeriod = styled.div`
  font-size: 0.7rem;
  color: gray;
`;

const ClubName = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const Category = styled.div`
  margin-top: 5%;
  font-size: 0.8rem;
  color: gray;
  font-weight: 550;
`;

const TitleSection = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface ClubProp {
  club: ClubType;
}

// 상태값을 상수로 정의
const STATUS = {
  CLOSED: { text: "모집마감", backColor: "#D1D5DB", fontColor: "#9CA3AF" },
  URGENT: { text: "마감임박", backColor: "#FEE2E2", fontColor: "#DC2626" },
  OPEN: { text: "모집중", backColor: "#DCFCE7", fontColor: "#16A34A" },
};

function ClubCard({ club }: ClubProp) {
  // 모집 상태 반환 함수
  const getStatus = () => {
    const endDate = new Date(club.recruitEndDate!);
    const today = new Date();
    const due = (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    if (due <= 0) return STATUS.CLOSED;
    else if (due <= 3) return STATUS.URGENT; // 현재 임박 기간 = 3일
    else return STATUS.OPEN;
  };

  const { text, backColor, fontColor } = getStatus();

  return (
    <Card>
      <TopRow>
        <Status $backColor={backColor} $fontColor={fontColor}>
          {text}
        </Status>
        <RecruitPeriod>마감일: {club.recruitEndDate}</RecruitPeriod>
      </TopRow>
      <TitleSection>
        <ClubName>{club.name}</ClubName>
        <FavoriteButton club={club} />
      </TitleSection>
      <Category>
        {club.category} | {club.affiliation}
      </Category>
    </Card>
  );
}

export default ClubCard;
