import ClubBox from "@/pages/club/ClubBox";
import styled from "styled-components";
import Pagination from "../../components/Pagination";
import { ClubType } from "@/types/clubType";
import { prefetchGetClubs, useGetClubs } from "@/hooks/queries/clubs.query";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBarSearch from "@/layouts/sidebar/components/SideBarSearch";

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
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const { data } = useGetClubs(currentPage, ITEMS_PER_PAGE);
  const { clubs, pagination } = data.data;

  const filteredClubs =
    searchText || selectedCategory
      ? clubs.filter(
          (club) =>
            club.name.includes(searchText) &&
            (selectedCategory ? club.category === selectedCategory : true)
        )
      : clubs;

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedClubs = filteredClubs.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  useEffect(() => {
    const nextPage = currentPage + 1;
    if (nextPage <= pagination.totalPages)
      prefetchGetClubs(nextPage, ITEMS_PER_PAGE);
  }, [currentPage, pagination]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, selectedCategory]);

  //현재 페이지 존재 안할 때
  useEffect(() => {
    if (currentPage > Math.ceil(filteredClubs.length / ITEMS_PER_PAGE)) {
      setCurrentPage(1);
    }
  }, [filteredClubs.length, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  function onClick(club: ClubType) {
    navigate(`${club.id}`);
  }

  return (
    <>
      <ClubGrid>
        {paginatedClubs.map((club) => (
          <ClubBox key={club.id} club={club} onClick={() => onClick(club)} />
        ))}
      </ClubGrid>

      <PaginateSection>
        {pagination && (
          <Pagination
            totalPages={Math.ceil(filteredClubs.length / ITEMS_PER_PAGE)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </PaginateSection>
    </>
  );
}

export default ClubList;
