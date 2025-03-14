import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import CommonLayout from "./layouts/CommonLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { useAuthStore } from "./stores/useAuthStore";
import { ProtectedRoute } from "./pages/favorite/Favorite";
import QueryErrorBoundary from "./services/QueryErrorBoundary";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import UserAgree from "./pages/user/UserAgree";
import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser";
const Home = React.lazy(() => import("./pages/home/Home"));
const ClubList = React.lazy(() => import("./pages/club/ClubList"));
const ClubDetail = React.lazy(
  () => import("./pages/club/components/detail/ClubDetail")
);
const Recruitment = React.lazy(() => import("./pages/recruitment/Recruitment"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Favorite = React.lazy(() => import("./pages/favorite/Favorite"));
const NoResults = React.lazy(() => import("./pages/NoResults"));
const SystemMaintenance = React.lazy(() => import("./pages/SystemMaintenance"));
const UserInfo = React.lazy(() => import("./pages/user/UserInfo"));
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
