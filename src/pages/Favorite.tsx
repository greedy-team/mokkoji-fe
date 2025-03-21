import styled from "styled-components";
import { isLoginChecking } from "@/features/login/store/useAuthStore";
import { Navigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { useModalStore } from "@/stores/useModalStore";
import { Calendar, FavoriteClubList } from "@/features/favorites";

const FavoritePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  margin-top: 1%;
  margin-bottom: 1%;
  @media (max-width: 770px) {
    margin-top: 60px;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
`;

interface ProtectedProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedProps) => {
  const { openModal } = useModalStore();
  const loginChecking = isLoginChecking();

  useEffect(() => {
    if (loginChecking) {
      openModal();
    }
  }, [loginChecking, openModal]);

  if (loginChecking) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function Favorite() {
  return (
    <>
      <title>동아리 즐겨찾기 페이지</title>
      <meta name="title" content="세종대학교 동아리 즐겨찾기 페이지" />
      <meta
        name="description"
        content="세종대학교 동아리 동아리 즐겨찾기 페이지입니다."
      />
      <meta name="keywords" content="세종대학교, 세종대, 동아리, 즐겨찾기" />
      <meta name="robots" content="index, follow" />
      <FavoritePageWrapper>
        <SectionWrapper>
          <FavoriteClubList />
        </SectionWrapper>
        <SectionWrapper>
          <Calendar />
        </SectionWrapper>
      </FavoritePageWrapper>
    </>
  );
}

export default Favorite;
