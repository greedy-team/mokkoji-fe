import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import CommonLayout from "./layouts/CommonLayout";
import NotFound from "./pages/NotFound";
import Tmp from "./pages/Tmp";
import Home from "./pages/Home";
import { Suspense } from "react";
import { Loading } from "./pages/Loading";
import Login from "./pages/Login";
import ClubList from "./pages/club/ClubList";
import ClubDetail from "./pages/club/ClubDetail";
import Recruitment from "./pages/recruitment/Recruitment";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <NotFound />,
    //loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tmp",
        element: <Tmp />,
      },
      {
        path: "clubs", //UI 확인을 위해서
        element: <ClubList />,
      },
      {
        path: "clubs/:id",
        element: <ClubDetail />,
      },
      {
        path: "recruit",
        element: <Recruitment />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
