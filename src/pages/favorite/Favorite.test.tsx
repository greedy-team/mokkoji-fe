// import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Favorite from "@/pages/favorite/Favorite";
// import * as favoriteQuery from "@/hooks/queries/favorites.query";

// const mockNavigate = vi.fn();
// vi.mock("react-router-dom", async () => {
//   const actual = await vi.importActual("react-router-dom");
//   return {
//     ...actual,
//     useNavigate: () => mockNavigate,
//   };
// });

// vi.mock("@/hooks/queries/favorites.query", () => ({
//   useGetFavorite: vi.fn(),
// }));

// const queryClient = new QueryClient();

// describe("Favorite Component", () => {

//   beforeEach(() => {
//     vi.clearAllMocks();

//     (favoriteQuery.useGetFavorite as vi.Mock).mockReturnValue({
//       data: {
//         data: [
//           {
//             id: 1,
//             name: "그리디",
//             recruitStartDate: "2025-10-12",
//             recruitEndDate: "2025-10-13",
//             imageURL: "https://example.com/image.jpg",
//           },
//         ],
//       },
//       isLoading: false,
//       isError: false,
//     });
//   });

//   afterEach(() => {
//     vi.clearAllMocks();
//   });

//   it("즐겨찾기 박스 속 동아리 누르면 해당 동아리 상세 페이지로 이동", () => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <Router>
//           <Favorite />
//         </Router>
//       </QueryClientProvider>
//     );

//     const clubCard = screen.getByText("그리디");
//     fireEvent.click(clubCard);

//     expect(mockNavigate).toHaveBeenCalledWith("/clubs/1");
//   });

//   it("이미지 없을 때는 일반 이미지로 대체", () => {
//     (favoriteQuery.useGetFavorite as vi.Mock).mockReturnValue({
//       data: {
//         data: [
//           {
//             id: 2,
//             name: "EN#",
//             recruitStartDate: "2025-11-01",
//             recruitEndDate: "2025-11-10",
//             imageURL: "",
//           },
//         ],
//       },
//       isLoading: false,
//       isError: false,
//     });

//     render(
//       <QueryClientProvider client={queryClient}>
//         <Router>
//           <Favorite />
//         </Router>
//       </QueryClientProvider>
//     );

//     const img = screen.getByAltText("EN#") as HTMLImageElement;
//     expect(img.src).toContain("/default-image.png");
//   });

//   it("모집 기간 제대로 표시 ", () => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <Router>
//           <Favorite />
//         </Router>
//       </QueryClientProvider>
//     );

//     expect(screen.getByText(/2025-10-12 ~ 2025-10-13/)).toBeInTheDocument();
//   });
// });
