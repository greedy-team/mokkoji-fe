import ClubBox from "@/pages/club/ClubBox";
import styled from "styled-components";
import Pagination from "../../components/Pagination";
import { ClubType } from "@/types/clubType";
import { prefetchGetClubs, useGetClubs } from "@/hooks/queries/clubs.query";
import { useState, useEffect } from "react";
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

interface ClubListProps {
  searchText: string;
  selectedCategory: string;
}

function ClubList({ searchText, selectedCategory }: ClubListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();

  const { data } = useGetClubs(currentPage, ITEMS_PER_PAGE, selectedCategory || undefined);
  const { clubs, pagination } = data.data;

  const filteredClubs = searchText
    ? clubs.filter((club) =>
        club.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : clubs;

  useEffect(() => {
    const nextPage = currentPage + 1;
    if (nextPage <= pagination.totalPages)
      prefetchGetClubs(
        nextPage, 
        ITEMS_PER_PAGE, 
        selectedCategory || undefined
      );
  }, [currentPage, pagination.totalPages, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  function onClick(club: ClubType) {
    navigate(`${club.id}`);
  }

  return (
    <>
      <ClubGrid>
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club) => (
            <ClubBox key={club.id} club={club} onClick={() => onClick(club)} />
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
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
