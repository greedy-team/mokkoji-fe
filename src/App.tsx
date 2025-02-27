import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import CommonLayout from "./layouts/CommonLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFound from "./pages/NotFound";
import Home from "./pages/home/Home";
import { Suspense } from "react";
import Loading from "./pages/Loading";
import ClubList from "./pages/club/ClubList";
import ClubDetail from "./pages/club/ClubDetail";
import Recruitment from "./pages/recruitment/Recruitment";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";
import Favorite from "./pages/favorite/Favorite";
import { useAuthStore } from "./stores/useAuthStore";
import SystemMaintenance from "./pages/SystemMaintenance";
import { ProtectedRoute } from "./pages/favorite/Favorite";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "clubs",
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
        path: "favorites",
        element: (
          <ProtectedRoute>
            <Favorite />
          </ProtectedRoute>
        ),
      },
      {
        path: "maintenance",
        element: <SystemMaintenance />,
      },
    ],
  },
]);

function App() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <ReactQueryDevtools initialIsOpen={false} />
        {accessToken ? <UserInfo /> : <Login />}
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
