import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  prefetchGetClubs,
  useGetClubs,
} from "@/features/clubs/query/clubs.query";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "@/stores/useFilterStore";
import NoResults from "@/components/NoResults";
import { ClubCard, ClubType, sortClubs } from "@/features/recruit";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 12; // 페이지당 게시물 수

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 105px);
  position: relative;
  overflow: auto;

  @media (max-width: 770px) {
    margin-top: 60px;
  }
`;

const ClubList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  width: 100%;
  min-height: 90%;
  justify-content: space-evenly;
  align-content: flex-start;
  margin-bottom: 2%;

  @media (max-width: 770px) {
    grid-template-columns: repeat(1, 90%);
  }
`;

const PaginationWrapper = styled.div`
  margin-bottom: 15px;
`;

function Recruitment() {
  const navigate = useNavigate();
  const [sortedClubs, setSortedClubs] = useState<ClubType[]>([]);
  const [buttonState] = useState<string>("마감일순");
  const { selectedCategory, searchText, currentPage, setCurrentPage } =
    useFilterStore();

  const { data } = useGetClubs(
    currentPage,
    ITEMS_PER_PAGE,
    searchText,
    selectedCategory,
    undefined,
    undefined
  );

  const { clubs, pagination } = data.data;

  useEffect(() => {
    if (clubs.length > 0) {
      const sorted = sortClubs(clubs, buttonState);
      setSortedClubs(sorted);
    }
  }, [buttonState, clubs]);

  useEffect(() => {
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;
    if (nextPage <= pagination.totalPages)
      prefetchGetClubs(nextPage, ITEMS_PER_PAGE);
    if (prevPage >= 1) prefetchGetClubs(prevPage, ITEMS_PER_PAGE);
  }, [currentPage, pagination]);

  // 정렬 상태 변경
  // function handleSortChange(value: string) {
  //   setButtonState(value);
  // }

  // 현재 페이지 번호 상태 변경
  function handlePageChange(page: number) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  function onClick(club: ClubType) {
    navigate(`/clubs/${club.id}`);
  }

  return (
    <Container>
      {/* 기능추가 전까지 주석처리 */}
      {/*<SortOption buttonState={buttonState} onSortChange={handleSortChange} />*/}

      {clubs.length === 0 ? (
        <NoResults />
      ) : (
        <>
          <ClubList>
            {sortedClubs.map((club) => (
              <ClubCard
                key={club.id}
                club={club}
                onClick={() => onClick(club)}
              />
            ))}
          </ClubList>
          <PaginationWrapper>
            <Pagination
              totalPages={pagination.totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </PaginationWrapper>
        </>
      )}
    </Container>
  );
}

export default Recruitment;
