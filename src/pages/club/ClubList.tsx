//동아리 목록 페이지
import { useEffect, useState } from "react";
import ClubBoxComponent from "../../pages/club/ClubBox";
import styled from "styled-components";
import SortOption from "../../pages/club/ClubSortOption";
import PaginationComponent from "../recruitment/components/Pagination";
import { Club } from "../../types/Club";

interface ClubBox {
  id: number;
  name: string;
  category: string;
  description: string;
  affiliation: string;
  imageUrl?: string;
  onClick?: () => void;
}

const ITEMS_PER_PAGE = 8;

//더미 데이터 (UI 테스트용)
const dummyClubs: Club[] = [
  {
    id: 1,
    name: "댄스 동아리 STEP",
    category: "댄스 / 방송댄스",
    description: "K-pop, 방송댄스를 배우는 동아리입니다.",
    affiliation: "예술대학",
    imageUrl: "/images/dance.jpg",
  },
  {
    id: 2,
    name: "밴드 동아리 SOUND",
    category: "밴드 / 대중음악",
    description: "밴드 공연을 준비하고 연습하는 동아리입니다.",
    affiliation: "음악대학",
    imageUrl: "/images/band.jpg",
  },
  {
    id: 3,
    name: "축구 동아리 GOAL",
    category: "스포츠 / 축구",
    description: "축구를 즐기며 실력을 키우는 동아리입니다.",
    affiliation: "체육대학",
    imageUrl: "/images/soccer.jpg",
  },
  {
    id: 4,
    name: "독서 동아리 BOOK",
    category: "독서 / 토론",
    description: "다양한 책을 읽고 토론하는 동아리입니다.",
    affiliation: "인문대학",
    imageUrl: "/images/book.jpg",
  },
  {
    id: 5,
    name: "사진 동아리 SNAP",
    category: "사진 / 영상",
    description: "사진 촬영 및 편집을 배우는 동아리입니다.",
    affiliation: "디자인대학",
    imageUrl: "/images/photo.jpg",
  },
  {
    id: 6,
    name: "사진 동아리 SNAP",
    category: "사진 / 영상",
    description: "사진 촬영 및 편집을 배우는 동아리입니다.",
    affiliation: "디자인대학",
    imageUrl: "/images/photo.jpg",
  },
  {
    id: 7,
    name: "사진 동아리 SNAP",
    category: "사진 / 영상",
    description: "사진 촬영 및 편집을 배우는 동아리입니다.",
    affiliation: "디자인대학",
    imageUrl: "/images/photo.jpg",
  },
  {
    id: 8,
    name: "사진 동아리 SNAP",
    category: "사진 / 영상",
    description: "사진 촬영 및 편집을 배우는 동아리입니다.",
    affiliation: "디자인대학",
    imageUrl: "/images/photo.jpg",
  },
];

const SortContainer = styled.div`
  width: 78vw;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 70px;
`;

const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 28%);
  grid-template-rows: repeat(3, 28%);
  justify-content: space-evenly;
  align-content: space-evenly;
  row-gap: 15px;
  column-gap: 5px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function ClubList() {
  const [clubs] = useState<ClubBox[]>(dummyClubs);
  const [buttonState, setButtonState] = useState<string>("최신순");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sliceClub, setSliceClub] = useState<ClubBox[]>([]);

  useEffect(() => {
    const cur = (currentPage - 1) * ITEMS_PER_PAGE;
    setSliceClub(clubs.slice(cur, cur + ITEMS_PER_PAGE));
  }, [currentPage, clubs]);

  //정렬 상태 변경
  function handleSortChange(value: string) {
    setButtonState(value);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SortContainer>
        <SortOption buttonState={buttonState} onSortChange={handleSortChange} />
      </SortContainer>

      <ClubGrid>
        {sliceClub.map((club) => (
          <ClubBoxComponent key={club.id} club={club} />
        ))}
      </ClubGrid>
      <div style={{ marginTop: "50px" }}> </div>
      <PaginationComponent
        clubsLength={clubs.length}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default ClubList;
