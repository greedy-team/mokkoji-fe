import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 4%;
`;

const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const Status = styled.div<{ backColor: string, fontColor: string }>`
    width: fit-content;
    border-radius: 20px;
    padding: 3px 7px;
    background-color: ${({ backColor }) => backColor};
    color: ${({ fontColor }) => fontColor};
    font-size: 13px;
    font-weight: 550;
`;

const RecruitPeriod = styled.div`
    font-size: 13px;
    color: gray;
`;

const ClubName = styled.div`
    font-size: 17px;
    font-weight: 600;
`;

const Category = styled.div`
    margin-top: 3%;
    font-size: 13px;
    color: gray;
    font-weight: 550;
`;

interface Club {
    id: number;
    name: string;
    category: string;
    affiliation: string;
    recruit_start_date: string;
    recruit_end_date: string;
}

interface ClubProp {
    club: Club;
}

function ClubCard({ club }: ClubProp) {
    // 모집 상태 반환 함수
    const getStatus = (): { text: string; backColor: string; fontColor: string} => {
      const endDate = new Date(club.recruit_end_date);
      const today = new Date();
      const due = (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
  
      if (due <= 0) return { text: "모집마감", backColor: "#D1D5DB", fontColor: "#9CA3AF" };
      else if (due <= 3) return { text: "마감임박", backColor: "#FEE2E2", fontColor: "#DC2626" };     // 현재 임박 기간 = 3일
      else return { text: "모집중", backColor: "#DCFCE7", fontColor: "#16A34A" };
    };
  
    const { text, backColor, fontColor } = getStatus();

    return (
        <Card>
            <TopRow>
                <Status backColor={backColor} fontColor={fontColor}>{text}</Status>
                <RecruitPeriod>마감일: {club.recruit_end_date}</RecruitPeriod>
            </TopRow>
            <ClubName>{club.name}</ClubName>
            <Category>{club.category} | {club.affiliation}</Category>
        </Card>
    )
}

export default ClubCard;