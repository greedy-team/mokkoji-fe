import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGetFavorite } from "@/hooks/queries/favorites.query";

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28%, 1fr));
  gap: 1rem;
  justify-content: center;
`;

const ClubCard = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: none;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

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

const ClubInfo = styled.div``;

const ClubName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 3%;
`;

const ClubRecruitPeriod = styled.p`
  font-size: 0.7rem;
  color: #6b7280;
`;

function FavoriteClubList() {
  const { data } = useGetFavorite();
  const favoriteClubs = data.data.clubs.filter((club) => club.isFavorite);
  const navigate = useNavigate();

  const onClick = (id: number) => {
    navigate(`/clubs/${id}`);
  };
  return (
    <>
      <Title>즐겨찾기한 동아리</Title>
      <ClubGrid>
        {favoriteClubs.map((club) => (
          <ClubCard key={club.id} onClick={() => onClick(club.id)}>
            <ClubImage
              src={club.imageURL || "/default-image.png"}
              alt={club.name}
            />
            <ClubInfo>
              <ClubName>{club.name}</ClubName>
              <ClubRecruitPeriod>
                모집 기간: {club.recruitStartDate} ~ {club.recruitEndDate}
              </ClubRecruitPeriod>
            </ClubInfo>
          </ClubCard>
        ))}
      </ClubGrid>
    </>
  );
}

export default FavoriteClubList;
