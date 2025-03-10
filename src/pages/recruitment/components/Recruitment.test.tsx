import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Recruitment from "@/pages/recruitment/Recruitment";
import * as clubsQuery from "@/hooks/queries/clubs.query";
import { create } from "zustand";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("@/hooks/queries/clubs.query", () => ({
  useGetClubs: vi.fn(),
  prefetchGetClubs: vi.fn(),
}));

vi.mock("@/stores/useFilterStore", () => {
  return {
    useFilterStore: create(() => ({
      selectedCategory: "전체",
      searchText: "",
      currentPage: 1,
      setCurrentPage: vi.fn(),
    })),
  };
});

const queryClient = new QueryClient();

describe("Recruitment", () => {
  const setCurrentPage = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("모든 데이터를 가진 ClubCard를 렌더링", () => {
    (clubsQuery.useGetClubs as ReturnType<typeof vi.fn>).mockReturnValue({
      data: {
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
              imageURL: "https://example.com/images/greedy.jpg",
              isFavorite: true,
            },
          ],
          pagination: {
            page: 1,
            size: 10,
            totalPages: 5,
            totalElements: 50,
          },
        },
      },
      isLoading: false,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Recruitment />
        </Router>
      </QueryClientProvider>
    );

    expect(screen.getByText("그리디")).toBeInTheDocument();
    expect(screen.getByText("학술/교양 | 중앙동아리")).toBeInTheDocument();
    expect(screen.getByText(/2025-10-13 ~ 2025-10-13/)).toBeInTheDocument();
  });

  it("동아리가 없을 때 NoResults를 표시", () => {
    (clubsQuery.useGetClubs as ReturnType<typeof vi.fn>).mockReturnValue({
      data: {
        data: {
          clubs: [],
          pagination: {
            page: 1,
            size: 10,
            totalPages: 1,
            totalElements: 0,
          },
        },
      },
      isLoading: false,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Recruitment />
        </Router>
      </QueryClientProvider>
    );

    expect(screen.getByText(/검색 결과를 찾을 수 없습니다/i)).toBeInTheDocument();
  });

  it("페이지 이동 제대로 함", async () => {
    (clubsQuery.useGetClubs as ReturnType<typeof vi.fn>).mockReturnValue({
      data: {
        data: {
          clubs: [{ id: 1, name: "그리디", recruitEndDate: "2025-10-13" }],
          pagination: { page: 1, size: 10, totalPages: 5, totalElements: 50 },
        },
      },
      isLoading: false,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Recruitment />
        </Router>
      </QueryClientProvider>
    );

    const nextPageButton = screen.getByText("2");
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      expect(setCurrentPage).toHaveBeenCalledWith(2);
    });
  });

  it("한 동아리 클릭 시 해당 동아리 상세 페이지로 이동", () => {
    (clubsQuery.useGetClubs as ReturnType<typeof vi.fn>).mockReturnValue({
      data: {
        data: {
          clubs: [{ id: 1, name: "그리디", recruitEndDate: "2025-10-13" }],
          pagination: { page: 1, size: 10, totalPages: 1, totalElements: 1 },
        },
      },
      isLoading: false,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Recruitment />
        </Router>
      </QueryClientProvider>
    );

    const clubCard = screen.getByText("그리디");
    fireEvent.click(clubCard);

    expect(mockNavigate).toHaveBeenCalledWith("/clubs/1");
  });

  it("(마감일순) 정렬", () => {
    (clubsQuery.useGetClubs as ReturnType<typeof vi.fn>).mockReturnValue({
      data: {
        data: {
          clubs: [
            { id: 1, name: "그리디", recruitEndDate: "2025-10-13" },
            { id: 2, name: "EN#", recruitEndDate: "2025-10-12" },
          ],
          pagination: { page: 1, size: 10, totalPages: 1, totalElements: 2 },
        },
      },
      isLoading: false,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Recruitment />
        </Router>
      </QueryClientProvider>
    );

    const clubCards = screen.getAllByText(/그리디|EN#/);

    expect(clubCards[0].textContent).toBe("EN#");
    expect(clubCards[1].textContent).toBe("그리디");
  });
});
