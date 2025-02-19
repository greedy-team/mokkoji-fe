import ClubBox from "@/pages/club/ClubBox";
import styled from "styled-components";
import Pagination from "../recruitment/components/Pagination";
import { ClubType } from "@/types/clubType";
import { useGetClubs } from "@/hooks/queries/clubs.query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 9;

const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(3, 28%);
  justify-content: space-evenly;
  height: auto;

  row-gap: 20px;
  column-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PaginateSection = styled.div`
  position: absolute;
  bottom: 7%;
  width: 100%;
`;

function ClubList() {
  const { data } = useGetClubs();
  const clubs = data.data.clubs;
  const pagination = data.data.pagination;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const sliceClub = clubs.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  function onClick(club: ClubType) {
    navigate(`${club.id}`);
  }

  return (
    <>
      <ClubGrid>
        {sliceClub.map((club) => (
          <ClubBox key={club.id} club={club} onClick={() => onClick(club)} />
        ))}
      </ClubGrid>
      <PaginateSection>
        {pagination && (
          <Pagination
            clubsLength={clubs.length}
            ITEMS_PER_PAGE={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </PaginateSection>
    </>
  );
}

export default ClubList;
