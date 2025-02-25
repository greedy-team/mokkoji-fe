import api from ".";
import { ClubResponseType, ClubDetailResponseType } from "@/types/clubType";
import { getClubItems, getClubItemsDetail } from "./clubs.api";

jest.mock(".");

// clubsItems 테스트 데이터 예시
const clubsItemResponse: ClubResponseType = {
    data: {
        clubs: [
            {
                id: 1,
                name: '동아리 1',
                category: '학술/교양',
                affiliation: '중앙동아리',
                description: '간단 소개',
                recruitStartDate: '2025-10-12',
                recruitEndDate: '2025-10-13',
                imageUrl: 'https://example.com/images/club1.jpg',
                favorite: true,
            },
            {
                id: 2,
                name: '동아리 2',
                category: '학술/교양',
                affiliation: '중앙동아리',
                description: '간단 소개',
                recruitStartDate: '2025-11-01',
                recruitEndDate: '2025-11-30',
                imageUrl: 'https://example.com/images/club2.jpg',
                favorite: false,
            }
        ],
        pagination: {
            page: 1,
            size: 9,
            totalPages: 5,
            totalElements: 50,
        }
    }
};

// clubsItemsDetail 테스트 데이터 예시
const clubsItemDetailResponse: ClubDetailResponseType = {
    data: {
        club: {
            id: 1,
            name: '동아리 1',
            category: '학술/교양',
            affiliation: '중앙동아리',
            description: '간단 소개',
            recruitStartDate: '2025-10-12',
            recruitEndDate: '2025-10-13',
            imageUrl: 'https://example.com/images/club1.jpg',
            isFavorite: true,
            instagramLink: 'insta.com',
            recruitPost: '~~~',
        },
    },
};


// getClubItems의 단위 함수 테스트
describe("getClubItems", () => {
    it("정상적인 클럽 데이터를 반환해야 한다", async () => {
        (api.get as jest.Mock).mockResolvedValueOnce(clubsItemResponse);

        const result = await getClubItems(1, 9);

        // 반환값이 Response와 일치하는지 확인
        expect(result).toEqual(clubsItemResponse.data);
    });

    it("API 호출이 실패하면 에러를 던져야 한다", async () => {
        await expect(getClubItems(1, 9)).rejects.toThrow("API 요청 실패");
    });
});

// getClubItemsDetail 단위 함수 테스트
describe("getClubItemsDetail", () => {
    it("정상적인 클럽 상세 데이터를 반환해야 한다", async () => {
        (api.get as jest.Mock).mockResolvedValueOnce(clubsItemDetailResponse);

        const result = await getClubItemsDetail("1");

        // 반환값이 Response와 일치하는지 확인
        expect(result).toEqual(clubsItemDetailResponse.data);
    });

    it("API 호출이 실패하면 에러를 던져야 한다", async () => {
        await expect(getClubItemsDetail("1")).rejects.toThrow("API 요청 실패");
    });
});