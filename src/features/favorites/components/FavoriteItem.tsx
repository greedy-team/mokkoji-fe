import PeriodSection from "@/components/PeriodSection";
import { ClubType } from "@/features/clubs/types/clubType";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ClubCard = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: none;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

const ClubImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e5e7eb;
  object-fit: cover;
  margin-right: 1rem;
`;

const ClubInfo = styled.div`
  width: 80%;
`;

const ClubName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 3%;
`;

const ClubRecruitPeriod = styled.p`
  font-size: 0.7rem;
  color: #6b7280;
`;

interface FavoriteItemProps {
  club: ClubType;
}
function FavoriteItem({ club }: FavoriteItemProps) {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/clubs/${id}`);
  };
  return (
    <ClubCard key={club.id} onClick={() => onClick(club.id)}>
      <ClubImage src={club.imageURL || "/default-image.png"} alt={club.name} />
      <ClubInfo>
        <ClubName>{club.name}</ClubName>
        <ClubRecruitPeriod>
          <PeriodSection
            startDate={club.recruitStartDate}
            endDate={club.recruitEndDate}
            simple={true}
          />
        </ClubRecruitPeriod>
      </ClubInfo>
    </ClubCard>
  );
}
export default FavoriteItem;
