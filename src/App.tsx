import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import CommonLayout from "./layout/CommonLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAuthStore } from "./features/login/store/useAuthStore";
import Favorite from "./pages/Favorite";
import QueryErrorBoundary from "./services/QueryErrorBoundary";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import CheckAuthLoader from "./utils/CheckAuthLoader";
import clubRoutes from "./routes/clubRoutes";
import {
  Home,
  Login,
  NoResults,
  NotFound,
  Recruitment,
  SystemMaintenance,
  UserInfo,
} from "./routes/lazyLoad";
import amplitudeSetting from "./utils/amplitudeSetting";
import { ToastContainer } from "react-toastify";

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
      clubRoutes,
      {
        path: "recruit",
        element: <Recruitment />,
      },
      {
        path: "favorites",
        loader: CheckAuthLoader,
        element: <Favorite />,
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

amplitudeSetting();

function App() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <QueryErrorBoundary>
        {accessToken ? <UserInfo /> : <Login />}
      </QueryErrorBoundary>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
