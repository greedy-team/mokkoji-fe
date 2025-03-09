import styled from "styled-components";
import { generatePageNumbers, getOtherPage } from "./utils/paginationUtil";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PagingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 2px solid #e5e7eb;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`;

const PageButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 2px solid #e5e7eb;
  border-radius: 5px;
  background-color: ${({ $active }) => ($active ? "#D1D5DB" : "transparent")};
  color: ${({ $active }) => ($active ? "black" : "gray")};
  cursor: pointer;
`;

interface PaginationProps {
  totalPages: number; // 총 페이지 수
  currentPage: number; // 현재 페이지
  onPageChange: (page: number) => void;
}

// 페이지네이션 표시
const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  // 페이지 넘버 가져오기
  const pageNumbers = generatePageNumbers(totalPages, currentPage);

  return (
    <PaginationContainer>
      <PagingButton onClick={() => onPageChange(getOtherPage(currentPage, totalPages, "prev"))}>{"<"}</PagingButton>
      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          $active={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
      <PagingButton onClick={() => onPageChange(getOtherPage(currentPage, totalPages, "next"))}>{">"}</PagingButton>
    </PaginationContainer>
  );
};

export default Pagination;
