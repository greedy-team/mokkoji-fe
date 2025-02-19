import ClubBox from "../../pages/club/ClubBox";
import styled from "styled-components";
import PaginationComponent from "../recruitment/components/Pagination";
import { Club } from "../../types/clubType";
import { useGetClubs } from "../../hooks/queries/clubs.query";
import { useState } from "react";

const ITEMS_PER_PAGE = 9;

const Container = styled.div`
  height: 90vh;
  width: 80vw;
`;
const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 29%);
  grid-template-rows: repeat(3, 28%);
  justify-content: space-evenly;
  height: auto;

  row-gap: 15px;
  column-gap: 5px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function ClubList() {
  const { data } = useGetClubs();
  const clubs = data?.data.clubs ?? [];
  const pagination = data?.data.pagination;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const sliceClub = clubs.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  function onClick(club: Club) {
    console.log("클럽 클릭:", club);
  }

  return (
    <Container>
      <ClubGrid>
        {sliceClub.map((club) => (
          <ClubBox key={club.id} club={club} onClick={() => onClick(club)} />
        ))}
      </ClubGrid>
      <div style={{ marginTop: "50px" }}></div>
      {pagination && (
        <PaginationComponent
          clubsLength={clubs.length}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </Container>
  );
}

export default ClubList;
