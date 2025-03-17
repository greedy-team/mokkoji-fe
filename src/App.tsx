import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import CommonLayout from "./layouts/CommonLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy } from "react";
import { useAuthStore } from "./features/login/store/useAuthStore";
import { ProtectedRoute } from "./pages/Favorite";
import QueryErrorBoundary from "./services/QueryErrorBoundary";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import UserAgree from "./pages/UserAgree";
import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser";
const Home = lazy(() => import("./pages/Home"));
const ClubList = lazy(() => import("./pages/ClubList"));
const ClubDetail = lazy(() => import("./pages/ClubDetail"));
const Recruitment = lazy(() => import("./pages/Recruitment"));
const Login = lazy(() => import("./features/login/Login"));
const Favorite = lazy(() => import("./pages/Favorite"));
const NoResults = lazy(() => import("./components/NoResults"));
const SystemMaintenance = lazy(() => import("./pages/SystemMaintenance"));
const UserInfo = lazy(() => import("./features/user/UserInfo"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
