import ClubBox from "@/pages/club/ClubBox";
import styled from "styled-components";
import Pagination from "../../components/Pagination";
import { ClubType } from "@/types/clubType";
import { useGetClubs } from "@/hooks/queries/clubs.query";
import { useNavigate, useParams } from "react-router-dom";
import { useFilterStore } from "@/stores/useFilterStore";
import { usePrefetchClubs } from "@/hooks/usePrefetchClubs";

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
  const { affiliation } = useParams<{ affiliation: string }>();
  const navigate = useNavigate();
  const { selectedCategory, searchText, currentPage, setCurrentPage } = useFilterStore();
 
  const { data } = useGetClubs(
    currentPage,
    ITEMS_PER_PAGE,
    searchText,
    selectedCategory,
    affiliation
  );
  const { clubs, pagination } = data.data;

  usePrefetchClubs(
    currentPage,
    pagination,
    ITEMS_PER_PAGE,
    searchText,
    selectedCategory,
    affiliation
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  function onClick(club: ClubType) {
    navigate(`/clubs/${club.id}`);
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
