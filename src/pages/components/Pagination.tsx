import styled from "styled-components";
import { generatePageNumbers } from "../utils/paginationUtil";

const Pagination = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const PageButton = styled.button<{active: boolean}>`
    width: 25px;
    height: 25px;
    border: 2px solid #E5E7EB;
    border-radius: 5px;
    background-color: ${({ active }) => (active ? "#D1D5DB" : "transparent")};
    color: ${({ active }) => (active ? "black" : "gray")};
    cursor: pointer;
`;

interface PaginationProps {
    clubsLength: number;
    ITEMS_PER_PAGE: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

// 페이지네이션 표시
const PaginationComponent  = ({ clubsLength, ITEMS_PER_PAGE, currentPage, onPageChange }: PaginationProps) => {
    // 총 페이지 수 계산
    const totalPages = Math.ceil(clubsLength / ITEMS_PER_PAGE);
    // 페이지 넘버 가져오기
    const pageNumbers = generatePageNumbers(totalPages, currentPage);

    return (
        <Pagination>
            {pageNumbers.map((page) => (
                <PageButton
                    key={page}
                    onClick={() => onPageChange(page)}
                    active={currentPage === page}
                >
                    {page}
                </PageButton>
            ))}
        </Pagination>
    );
};

export default PaginationComponent ;