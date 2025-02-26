import {
  useFavoriteDelete,
  useFavoriteUpdate,
} from "@/hooks/queries/favorites.query";
import { ClubType } from "@/types/clubType";
import styled from "styled-components";
import StarLogo from "@/assets/starLogo.svg?react";
import StarEmptyLogo from "@/assets/starEmptyLogo.svg?react";
import {
  isLoginChecking,
} from "@/stores/useAuthStore";

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
  const { mutate: favoriteUpdate } = useFavoriteUpdate();
  const { mutate: favoriteDelete } = useFavoriteDelete();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLoginChecking()) {
      alert("로그인을 해야 이용할 수 있습니다!");
      return;
    }
    if (club.favorite) {
      favoriteDelete(String(club.id));
    } else {
      favoriteUpdate(String(club.id));
    }
  };

  return (
    <FavoriteButtonContainer
      aria-label="favoriteButton"
      onClick={(e: React.MouseEvent) => handleFavoriteClick(e)}
    >
      {club.favorite ? <StarLogo /> : <StarEmptyLogo />}
    </FavoriteButtonContainer>
  );
}
export default FavoriteButton;
