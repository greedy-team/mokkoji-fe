import ClubBox from "@/pages/club/ClubBox";
import styled from "styled-components";
import Pagination from "../../components/Pagination";
import { ClubType } from "@/types/clubType";
import { useGetClubs } from "@/hooks/queries/clubs.query";
import { useNavigate, useParams } from "react-router-dom";
import { useFilterStore } from "@/stores/useFilterStore";
import { usePrefetchClubs } from "@/hooks/usePrefetchClubs";
import NoResults from "@/pages/NoResults";
import { ClubCategory } from "@/types/clubType";

const ITEMS_PER_PAGE = 12;

const ClubWrapper = styled.div`
  @media (max-width: 770px) {
    margin-top: 60px;
  }
`;

const ClubGrid = styled.div`
  margin-top: 1%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  width: 100%;
  height: 80%;
  justify-content: space-evenly;
  align-content: space-evenly;

  @media (max-width: 770px) {
    grid-template-columns: repeat(1, 90%);
  }
`;

const PaginateSection = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

function ClubList() {
  const { affiliation } = useParams<{ affiliation: string }>();
  const navigate = useNavigate();
  const { selectedCategory, searchText, currentPage, setCurrentPage } =
    useFilterStore();

  const { data } = useGetClubs(
    currentPage,
    ITEMS_PER_PAGE,
    searchText,
    selectedCategory === ClubCategory.ALL ? undefined : selectedCategory,
    affiliation
  );

  const { clubs, pagination } = data.data;

  usePrefetchClubs(
    currentPage,
    pagination,
    ITEMS_PER_PAGE,
    searchText,
    selectedCategory === ClubCategory.ALL ? undefined : selectedCategory,
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
      {clubs.length === 0 ? (
        <NoResults />
      ) : (
        <ClubWrapper>
          <ClubGrid>
            {clubs.map((club) => (
              <ClubBox
                key={club.id}
                club={club}
                onClick={() => onClick(club)}
              />
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
        </ClubWrapper>
      )}
    </>
  );
}

export default ClubList;
