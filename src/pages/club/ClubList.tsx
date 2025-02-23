import ClubBox from "@/pages/club/ClubBox";
import styled from "styled-components";
import Pagination from "../../components/Pagination";
import { ClubType } from "@/types/clubType";
import { useGetClubs } from "@/hooks/queries/clubs.query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 9;

const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(3, 30%);
  width: 100%;
  height: 80%;
  justify-content: space-evenly;
  align-content: space-evenly;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaginateSection = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

function ClubList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();

  const { data } = useGetClubs(currentPage, ITEMS_PER_PAGE);
  const { clubs, pagination } = data.data;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  function onClick(club: ClubType) {
    navigate(`${club.id}`);
  }

  return (
    <>
      <ClubGrid>
        {clubs.map((club) => (
          <ClubBox key={club.id} club={club} onClick={() => onClick(club)} />
        ))}
      </ClubGrid>
      <PaginateSection>
        {pagination && (
          <Pagination
            totalPages={pagination.totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </PaginateSection>
    </>
  );
}

export default ClubList;
