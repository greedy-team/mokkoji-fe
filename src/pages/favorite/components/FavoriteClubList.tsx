import styled from "styled-components";
import { useGetFavorite } from "@/hooks/queries/favorites.query";
import FavoriteItem from "./FavoriteItem";

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

  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(47%, 1fr));
  }
`;

function FavoriteClubList() {
  const { data } = useGetFavorite();

  return (
    <>
      <Title>즐겨찾기한 동아리</Title>
      <ClubGrid>
        {data.data.map((club) => (
          <FavoriteItem key={club.id} club={club} />
        ))}
      </ClubGrid>
    </>
  );
}

export default FavoriteClubList;
