import styled from "styled-components";
import { generatePageNumbers } from "../utils/paginationUtil";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PageButton = styled.button<{ active: boolean }>`
  width: 25px;
  height: 25px;
  border: 2px solid #e5e7eb;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? "#D1D5DB" : "transparent")};
  color: ${({ active }) => (active ? "black" : "gray")};
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
      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          active={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
