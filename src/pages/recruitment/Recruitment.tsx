import { useEffect, useState } from "react";
import ClubCard from "./components/ClubCard";
import styled from "styled-components";
import PaginationComponent from "../../components/Pagination";
import { ClubType } from "@/types/clubType";
import { sortClubs } from "./utils/sortClubs";
import { prefetchGetClubs, useGetClubs } from "@/hooks/queries/clubs.query";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "@/stores/useFilterStore";
import NoResults from "@/pages/NoResults";

const ITEMS_PER_PAGE = 12; // 페이지당 게시물 수

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;

  @media (max-width: 770px) {
    margin-top: 60px;
  }
`;

const ClubList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  width: 100%;
  height: fit-content;
  justify-content: space-evenly;
  align-content: space-evenly;
  margin-bottom: 2%;

  @media (max-width: 770px) {
    grid-template-columns: repeat(2, 48%);
  }
`;

const ClubCardWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(107, 114, 128, 0.1);
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  margin: 5px 0;
`;

function Recruitment() {
  const navigate = useNavigate();
  const [sortedClubs, setSortedClubs] = useState<ClubType[]>([]); // 정렬된 동아리 목록
  const [buttonState] = useState<string>("마감일순"); // 정렬 옵션 상태
  const { selectedCategory, searchText, currentPage, setCurrentPage } =
    useFilterStore();

  const { data } = useGetClubs(
    currentPage,
    ITEMS_PER_PAGE,
    searchText,
    selectedCategory
  );
  const { clubs, pagination } = data.data;

  // 정렬 상태 반영
  useEffect(() => {
    const sorted = sortClubs(clubs, buttonState);
    setSortedClubs(sorted);
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
  }

  function onClick(club: ClubType) {
    navigate(`/clubs/${club.id}`);
  }

  return (
    <Container>
      {/* 기능추가 전까지 주석처리 */}
      {/*<SortOption buttonState={buttonState} onSortChange={handleSortChange} />*/}

      {sortedClubs.length === 0 ? (
        <NoResults />
      ) : (
        <>
          <ClubList>
            {sortedClubs.map((club) => (
              <ClubCardWrapper key={club.id} onClick={() => onClick(club)}>
                <ClubCard club={club} />
              </ClubCardWrapper>
            ))}
          </ClubList>
          <PaginationComponent
            totalPages={pagination.totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Container>
  );
}

export default Recruitment;
