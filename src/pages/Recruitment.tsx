import { useEffect, useState } from "react";
import ClubCard from "./components/ClubCard";
import styled from "styled-components";
import SortOption from "./components/SortOption";
import PaginationComponent from "./components/Pagination";

const ITEMS_PER_PAGE = 9;    // 페이지당 게시물 수

interface Club {
    id: number;
    name: string;
    category: string;
    affiliation: string;
    recruit_start_date: string;
    recruit_end_date: string;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
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

function Recruitment() {
    const [clubs, setClubs] = useState<Club[]>([]);
    const [buttonState, setButtonState] = useState<string>("최신순");   // 정렬 옵션 상태
    const [currentPage, setCurrentPage] = useState(1);          // 현재 페이지 번호
    const [sliceClub, setSliceClub] = useState<Club[]>([]);     // 현재 페이지 게시물 객체

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
                setSliceClub(data.slice(0, ITEMS_PER_PAGE));  // 첫 페이지 초기화
            } catch (error) {
                console.error("Error fetching clubs:", error);
            }
        }

        fetchClubsData();
    }, []);

    // 현재 페이지 동아리 게시물 객체
    useEffect(() => {
        const cur = (currentPage - 1) * ITEMS_PER_PAGE;
        const currentClub = clubs.slice(cur, cur + ITEMS_PER_PAGE);
        setSliceClub(currentClub);
    }, [currentPage, clubs]);

    // 정렬 상태 변경경
    function handleSortChange(value: string) {
        setButtonState(value);
    }

    // 현재 페이지 번호 상태 변경
    function handlePageChange(page: number) {
        setCurrentPage(page);
    }

    return (
        <Container>
            <SortOption buttonState={buttonState} onSortChange={handleSortChange} />
            <ClubList>
                {sliceClub.map((club) => (
                    <ClubCardWrapper key={club.id}>
                        <ClubCard club={club} />
                    </ClubCardWrapper>
                ))}
            </ClubList>
            <PaginationComponent
                clubsLength={clubs.length}
                ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </Container>
    );
};

export default Recruitment;