import styled from "styled-components";
import CalendarComponent from "./Calendar";
import FavoriteClubList from "./FavoriteClubList";
import { isLoginChecking } from "@/stores/useAuthStore";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useModalStore } from "@/stores/useModalStore";

const FavoritePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
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
  if (isLoginChecking()) {
    openModal();
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
        <CalendarComponent />
      </SectionWrapper>
    </FavoritePageWrapper>
  );
}

export default Favorite;
