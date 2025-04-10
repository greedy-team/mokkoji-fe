import {
  useFavoriteDelete,
  useFavoriteUpdate,
} from "@/features/favorites/query/favorites.query";
import { ClubType } from "@/features/clubs/types/clubType";
import styled from "styled-components";
import StarLogo from "@/assets/button/starLogo.svg?react";
import StarEmptyLogo from "@/assets/button/starEmptyLogo.svg?react";
import { isLoginChecking } from "@/features/login/store/useAuthStore";
import { toast } from "react-toastify";

const FavoriteButtonContainer = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  :focus {
    border: none;
  }
`;

interface FavoriteButtonProps {
  club: Pick<ClubType, "isFavorite" | "id">;
}

function FavoriteButton({ club }: FavoriteButtonProps) {
  const { mutate: favoriteUpdate } = useFavoriteUpdate();
  const { mutate: favoriteDelete } = useFavoriteDelete();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLoginChecking()) {
      toast("로그인을 해야 이용할 수 있습니다!");
      return;
    }
    if (club.isFavorite) {
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
      {club.isFavorite ? <StarLogo /> : <StarEmptyLogo />}
    </FavoriteButtonContainer>
  );
}
export default FavoriteButton;
