import styled from "styled-components";
import { Calendar, FavoriteClubList } from "@/features/favorites";
import SEO from "@/components/SEO";

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

function Favorite() {
  return (
    <>
      <SEO
        title="동아리 즐겨찾기 페이지"
        description="세종대학교 동아리 동아리 즐겨찾기 페이지입니다."
        keywords="세종대학교, 세종대, 동아리, 즐겨찾기"
      />
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
