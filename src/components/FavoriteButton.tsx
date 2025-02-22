import { useFavoriteUpdate } from "@/hooks/queries/favorites.query";
import { ClubType } from "@/types/clubType";
import styled from "styled-components";
import StarLogo from "@/assets/starLogo.svg?react";
import StarEmptyLogo from "@/assets/starEmptyLogo.svg?react";

const FavoriteButtonContainer = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  :focus {
    border: none;
  }
`;

interface FavoriteButtonProps {
  club: ClubType;
}

function FavoriteButton({ club }: FavoriteButtonProps) {
  const { mutate } = useFavoriteUpdate();

  const handleFavoriteClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    mutate(String(id));
  };

  return (
    <FavoriteButtonContainer
      onClick={(e: React.MouseEvent) => handleFavoriteClick(e, club.id)}
    >
      {club.favorite ? <StarLogo /> : <StarEmptyLogo />}
    </FavoriteButtonContainer>
  );
}
export default FavoriteButton;
