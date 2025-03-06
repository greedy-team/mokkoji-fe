import styled from "styled-components";
import Calendar from "./components/calendar/Calendar";
import FavoriteClubList from "./components/FavoriteClubList";
import { isLoginChecking } from "@/stores/useAuthStore";
import { Navigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { useModalStore } from "@/stores/useModalStore";

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
    <FavoritePageWrapper>
      <SectionWrapper>
        <FavoriteClubList />
      </SectionWrapper>
      <SectionWrapper>
        <Calendar />
      </SectionWrapper>
    </FavoritePageWrapper>
  );
}

export default Favorite;
