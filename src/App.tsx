import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import CommonLayout from "./layouts/CommonLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense } from "react";
import { useAuthStore } from "./stores/useAuthStore";
import { ProtectedRoute } from "./pages/favorite/Favorite";
import QueryErrorBoundary from "./services/QueryErrorBoundary";

import Loading from "./pages/Loading";
const Home = React.lazy(() => import("./pages/home/Home"));
const ClubList = React.lazy(() => import("./pages/club/ClubList"));
const ClubDetail = React.lazy(() => import("./pages/club/detail/ClubDetail"));
const Recruitment = React.lazy(() => import("./pages/recruitment/Recruitment"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Favorite = React.lazy(() => import("./pages/favorite/Favorite"));
const NoResults = React.lazy(() => import("./pages/NoResults"));
const SystemMaintenance = React.lazy(() => import("./pages/SystemMaintenance"));
const UserInfo = React.lazy(() => import("./pages/UserInfo"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

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
        path: "clubs/group/:affiliation",
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
      {
        path: "NoResults",
        element: <NoResults />,
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
        <QueryErrorBoundary>
          {accessToken ? <UserInfo /> : <Login />}
        </QueryErrorBoundary>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
