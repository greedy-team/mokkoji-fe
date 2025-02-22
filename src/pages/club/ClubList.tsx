import ClubBox from "@/pages/club/ClubBox";
import styled from "styled-components";
import Pagination from "../recruitment/components/Pagination";
import { ClubType } from "@/types/clubType";
import { useGetClubs } from "@/hooks/queries/clubs.query";
import { useState } from "react";
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
  const { data } = useGetClubs();
  const clubs = data.data.clubs;
  const pagination = data.data.pagination;
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;

  const filteredClubs = clubs.filter(
    (club) =>
      club.name.includes(searchText) &&
      (selectedCategory ? club.category === selectedCategory : true)
  );

  const sliceClub = filteredClubs.slice(startIdx, startIdx + ITEMS_PER_PAGE);

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
            clubsLength={filteredClubs.length}
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
