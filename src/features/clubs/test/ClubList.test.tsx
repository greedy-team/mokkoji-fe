import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";
import { http, HttpResponse } from "msw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClubList from "../../../pages/ClubList";

const server = setupServer(
  http.get("/clubs", () => {
    // 클라이언트에서 `/clubs` 경로로 요청하면, 아래의 JSON 데이터를 반환함
    return HttpResponse.json({
      data: {
        clubs: [
          {
            id: 1,
            name: "그리디",
            category: "학술/교양",
            affiliation: "중앙동아리",
            description: "간단 소개",
            recruitStartDate: "2025-10-12",
            recruitEndDate: "2025-10-13",
            imageUrl: "https://example.com/images/greedy.jpg",
            favorite: true,
          },
        ],
        pagination: {
          page: 1,
          size: 9,
          totalPages: 3,
          totalElements: 27,
        },
      },
    });
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

const queryClient = new QueryClient();

describe("ClubList", () => {
  it("api로부터 전달받은 데이터를 ClubBox 컴포넌트를 통해 화면에 랜더링해야한다", async () => {
    // ClubList 컴포넌트 렌더링
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ClubList />
        </QueryClientProvider>
      </MemoryRouter>
    );

    // ClubBox 의 내용 확인
    await waitFor(() => screen.queryByText("그리디"));
    expect(screen.queryByText("그리디"));
    expect(screen.queryByText("간단 소개"));
    expect(screen.queryByText("학술/교양"));
    expect(screen.queryByText("중앙동아리"));
    // 동아리 로고 이미지
    const image = screen.queryByAltText("그리디");
    expect(image);
    // 즐겨찾기 버튼
    expect(screen.getByRole("button", { name: /favoriteButton/i }));
  });

  it("api 호출 실패", async () => {
    server.use(
      http.get("/clubs", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );
  });
});
