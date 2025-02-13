import { useEffect, useState } from "react";
import ClubCard from "./components/ClubCard";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const SortOptions = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 8px;
`;

const Button = styled.button<{ active: boolean }>`
    padding: 3px 6px;
    border: 2px solid ${({ active }) => (active ? "gray" : "#E5E7EB")};
    border-radius: 5px;
    background-color: transparent;
    font-weight: ${({ active }) => (active ? "550" : "500")};
    cursor: pointer;
`;

const ClubList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 32%);
    grid-template-rows: repeat(3, 30%);
    width: 100%;
    height: 80%;
    justify-content: space-evenly;
    align-content: space-evenly;
`;

const ClubCardWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(107, 114, 128, 0.1);
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
`;

const Pagination = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const PageButton =styled.button<{active: boolean}>`
    width: 25px;
    height: 25px;
    border: 2px solid #E5E7EB;
    border-radius: 5px;
    background-color: ${({ active }) => (active ? "#D1D5DB" : "transparent")};
    color: ${({ active }) => (active ? "black" : "gray")};
    cursor: pointer;
`;

function Recruitment() {
    const [clubs, setClubs] = useState<Club[]>([]);
    const [buttonState, setButtonState] = useState<string>("최신순");   // 정렬 옵션 상태
    const [currentPage, setCurrentPage] = useState(1);          // 현재 페이지 번호
    const [sliceClub, setSliceClub] = useState<Club[]>([]);     // 현재 페이지 게시물 객체
    const sortOptions = [
        { value: "즐겨찾기순" },
        { value: "최신순" },
        { value: "마감일순" },
    ];
    const itemsPerPage = 9;    // 페이지당 게시물 수
    const totalPages = Math.ceil(clubs.length / itemsPerPage);  // 총 페이지 수 계산

    interface Club {
        id: number;
        name: string;
        category: string;
        affiliation: string;
        recruit_start_date: string;
        recruit_end_date: string;
    }

    // 동아리 데이터 패칭
    useEffect(() => {
        const fetchClubsData = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/clubs");    // 테스트용 서버, 엔드포인트 변경 필요

                if (!response.ok) {
                    throw new Error("Cannot fetch clubs");
                }

                const data: Club[] = await response.json();
                setClubs(data);
                setSliceClub(data.slice(0, itemsPerPage));  // 첫 페이지 초기화
            } catch (error) {
                console.error("Error fetching clubs:", error);
            }
        }

        fetchClubsData();
    }, []);

    // 현재 페이지 동아리 게시물 객체
    useEffect(() => {
        const cur = (currentPage - 1) * itemsPerPage;
        const currentClub = clubs.slice(cur, cur + itemsPerPage);
        setSliceClub(currentClub);
    }, [currentPage, clubs]);

    // 현재 페이지 번호 상태 변경
    function handlePageChange(page: number) {
        setCurrentPage(page);
    }
    // paginate
    function generatePageNumbers() {
        const pageNumbers = [];

        if(totalPages < 6) {
            for(let i = 1; i <= totalPages; i++){
                pageNumbers.push(i);
            }
        }

        else if(currentPage < 4) {
            for(let i = 1; i <= 5; i++){
                pageNumbers.push(i);
            }
        }

        else if(currentPage > ( totalPages - 3)) {
            for(let i = totalPages - 4; i <= totalPages; i++){
                pageNumbers.push(i);
            }
        }

        else {
            for(let i = ( currentPage - 2 ); i <= ( currentPage + 2 ); i++){
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <Container>
            <SortOptions>
                {sortOptions.map(({ value }) => (
                    <Button
                        key={value}
                        active={buttonState === value}
                        onClick={() => setButtonState(value)}
                    >
                        {value}
                    </Button>
                ))}
            </SortOptions>
            <ClubList>
                {sliceClub.map((club) => (
                    <ClubCardWrapper key={club.id}>
                        <ClubCard club={club} />
                    </ClubCardWrapper>
                ))}
            </ClubList>
            <Pagination>
                {pageNumbers.map((page) => (
                    <PageButton
                        key={page}
                        onClick={() => handlePageChange(page)}
                        active={currentPage === page}
                    >
                        {page}
                    </PageButton>
                ))}
            </Pagination>
        </Container>
    );
};

export default Recruitment;