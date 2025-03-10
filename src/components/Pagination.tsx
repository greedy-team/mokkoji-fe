import styled from "styled-components";
import { generatePageNumbers, getOtherPage } from "./utils/paginationUtil";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PagingButton = styled.button<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 2px solid ${({ $disabled }) => ($disabled ? "#f6f6f6" : "#e5e7eb")};
  border-radius: 5px;
  background-color: transparent;
  color: ${({ $disabled }) => ($disabled ? "#dddddd" : "black")};
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
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
  const isPrevDisabled = currentPage < 6;
  const isNextDisabled = Math.floor((currentPage - 1) / 5) >= Math.floor((totalPages - 1) / 5);

  return (
    <PaginationContainer>
      <PagingButton
        onClick={() => !isPrevDisabled && onPageChange(getOtherPage(currentPage, totalPages, "prev"))}
        $disabled={isPrevDisabled}  
      >
        {"<"}
      </PagingButton>
      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          $active={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
      <PagingButton 
        onClick={() => !isNextDisabled && onPageChange(getOtherPage(currentPage, totalPages, "next"))}
        $disabled={isNextDisabled}
      >
        {">"}
      </PagingButton>
    </PaginationContainer>
  );
};

export default Pagination;
