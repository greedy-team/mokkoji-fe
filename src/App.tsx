import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import CommonLayout from "./layouts/CommonLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { useAuthStore } from "./features/login/store/useAuthStore";
import { ProtectedRoute } from "./features/favorites/Favorite";
import QueryErrorBoundary from "./services/QueryErrorBoundary";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import UserAgree from "./features/user/UserAgree";
import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser";
const Home = React.lazy(() => import("./pages/home/Home"));
const ClubList = React.lazy(() => import("./features/clubPages/clubs/ClubList"));
const ClubDetail = React.lazy(
  () => import("./features/clubPages/detail/ClubDetail")
);
const Recruitment = React.lazy(() => import("./features/clubPages/recruit/Recruitment"));
const Login = React.lazy(() => import("./features/login/Login"));
const Favorite = React.lazy(() => import("./features/favorites/Favorite"));
const NoResults = React.lazy(() => import("./pages/NoResults"));
const SystemMaintenance = React.lazy(() => import("./pages/SystemMaintenance"));
const UserInfo = React.lazy(() => import("./features/user/UserInfo"));
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
        path: "agree",
        element: <UserAgree />,
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
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);

amplitude.init("6024afbe3076c1a3880f0d9492ee65e6", { autocapture: true });

const sessionReplayTracking = sessionReplayPlugin({
  sampleRate: 1,
});
amplitude.add(sessionReplayTracking);

function App() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <QueryErrorBoundary>
        {accessToken ? <UserInfo /> : <Login />}
      </QueryErrorBoundary>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
