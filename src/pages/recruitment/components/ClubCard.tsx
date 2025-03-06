import styled from "styled-components";
import { ClubType } from "@/types/clubType";
import FavoriteButton from "@/components/FavoriteButton";
import { STATUS } from "../const/STATUS";
import { useLazyImg } from "@/hooks/useLazyImg";
import PeriodSection from "@/components/PeriodSection";

const Card = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 2%;
  margin-bottom: 20px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Image = styled.img`
  width: 33%;
  height: 90%;
  border-radius: 15px;
  object-fit: contain;
  margin-right: 5%;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 60%;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
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
  font-size: 1.2rem;
  font-weight: 600;
`;

const Category = styled.div`
  margin-top: 5%;
  font-size: 0.8rem;
  color: gray;
  font-weight: 550;
`;

const TitleSection = styled.div`
  margin: 5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface ClubProp {
  club: ClubType;
}

function ClubCard({ club }: ClubProp) {
  // 모집 상태 반환 함수
  const getStatus = () => {
    const endDate = new Date(club.recruitEndDate!);
    const today = new Date();
    const due = (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    if (due < -1) return STATUS.CLOSED;
    else if (due <= 3) return STATUS.URGENT; // 현재 임박 기간 = 3일
    else return STATUS.OPEN;
  };

  const { text, backColor, fontColor } = getStatus();

  const { imgSrc, imgRef } = useLazyImg({ src: club.imageURL || undefined });

  return (
    <Card>
      <Image ref={imgRef} src={imgSrc || undefined} alt={club.name} />
      <Content>
        <TopRow>
          <Status $backColor={backColor} $fontColor={fontColor}>
            {text}
          </Status>
          <RecruitPeriod>
            <PeriodSection
              startDate={club.recruitStartDate}
              endDate={club.recruitEndDate}
              size={0.5}
              simple={true}
            />
          </RecruitPeriod>
        </TopRow>
        <TitleSection>
          <ClubName>{club.name}</ClubName>
          <FavoriteButton club={club} />
        </TitleSection>
        <Category>
          {club.category} | {club.affiliation}
        </Category>
      </Content>
    </Card>
  );
}

export default ClubCard;
