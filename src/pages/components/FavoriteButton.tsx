import { useState } from "react";
import StartLogo from "@/assets/starLogo.svg?react";
import StartEmptyLogo from "@/assets/starEmptyLogo.svg?react";
import axios from "axios";

interface FavoriteButtonProps {
    clubId: number;
    clubFavorite: boolean;
}

function FavoriteButton({ clubId, clubFavorite }: FavoriteButtonProps) {
    // 현 즐겨찾기 상태
    const [isFavorite, setIsFavorite] = useState(clubFavorite);
  
    const onClick = () => {
      if (isFavorite) {
        // 즐겨찾기 해제
        axios
          .delete(`/favorites/${clubId}`)
          .then(() => {
            setIsFavorite(false);
          })
          .catch((error) => {
            console.error("즐겨찾기 해제 실패:", error);
          });
      } else {
        // 즐겨찾기 등록
        axios
          .post(`/favorites/${clubId}`)
          .then(() => {
            setIsFavorite(true);
          })
          .catch((error) => {
            console.error("즐겨찾기 등록 실패:", error);
          });
      }
    };
  
    return (
      <div onClick={() => onClick()} style={{ cursor: "pointer" }}>
        {isFavorite ? <StartLogo /> : <StartEmptyLogo />}
      </div>
    );
  }
  
  export default FavoriteButton;