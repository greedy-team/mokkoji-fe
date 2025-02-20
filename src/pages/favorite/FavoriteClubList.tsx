import styled from "styled-components";
import { useEffect, useState } from "react";
import { ClubType } from "@/types/clubType";
import { useGetClubs } from "@/hooks/queries/clubs.query";

const FavoriteSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;

const ClubCard = styled.div`
  display: flex;
  align-items: center; 
  padding: 1rem;
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

const ClubInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClubName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ClubRecruitPeriod = styled.div`
  font-size: 1rem;
  color: #6b7280;
`;

const FavoriteClubList = () => {
  const { data } = useGetClubs();
  const [favoriteClubs, setFavoriteClubs] = useState<ClubType[]>([]);

  useEffect(() => {
    if (data) {
      const filtered = data.data.clubs.filter((club) => club.favorite);
      setFavoriteClubs(filtered);
    }
  }, [data]);

  return (
    <FavoriteSection>
      <Title>즐겨찾기한 동아리</Title>
      <ClubGrid>
        {favoriteClubs.map((club) => (
          <ClubCard key={club.id}>
            <ClubImage src={club.imageUrl || "/default-image.png"} alt={club.name} />
            <ClubInfo>
              <ClubName>{club.name}</ClubName>
              <ClubRecruitPeriod>모집 기간: {club.recruitStartDate} ~ {club.recruitEndDate}</ClubRecruitPeriod>
            </ClubInfo>
          </ClubCard>
        ))}
      </ClubGrid>
    </FavoriteSection>
  );
};

export default FavoriteClubList;
