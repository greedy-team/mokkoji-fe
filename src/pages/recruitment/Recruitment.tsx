import { useEffect, useState } from "react";
import ClubCard from "./components/ClubCard";
import styled from "styled-components";
import SortOption from "./components/SortOption";
import PaginationComponent from "../../components/Pagination";
import { ClubType } from "@/types/clubType";
import { sortClubs } from "./utils/sortClubs";
import {
  prefetchGetRecruits,
  useGetRecruits,
} from "@/hooks/queries/recruit.query";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 9; // 페이지당 게시물 수

const Container = styled.div`
  width: 78vw;
  height: 100%;
`;

const ClubList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  grid-template-rows: repeat(3, 30%);
  width: 100%;
  height: 80%;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const ClubCardWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(107, 114, 128, 0.1);
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`;

function Recruitment() {
  const navigate = useNavigate();
  const [sortedClubs, setSortedClubs] = useState<ClubType[]>([]); // 정렬된 동아리 목록
  const [buttonState, setButtonState] = useState<string>("마감일순"); // 정렬 옵션 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  const { data } = useGetRecruits(currentPage, ITEMS_PER_PAGE);
  const { clubs, pagination } = data.data;

  // 정렬 상태 반영
  useEffect(() => {
    const sorted = sortClubs(clubs, buttonState);
    setSortedClubs(sorted);
  }, [buttonState, clubs]);

  useEffect(() => {
    const nextPage = currentPage + 1;
    if (nextPage <= pagination.totalPages)
      prefetchGetRecruits(nextPage, ITEMS_PER_PAGE);
  }, [currentPage, pagination]);

  // 정렬 상태 변경
  function handleSortChange(value: string) {
    setButtonState(value);
  }

  // 현재 페이지 번호 상태 변경
  function handlePageChange(page: number) {
    setCurrentPage(page);
  }

  function onClick(club: ClubType) {
    navigate(`/clubs/${club.id}`);
  }

  return (
    <Container>
      <SortOption buttonState={buttonState} onSortChange={handleSortChange} />
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
    </Container>
  );
}

export default Recruitment;
