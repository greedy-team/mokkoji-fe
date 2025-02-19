import {
  QueryClientProvider,
  QueryErrorResetBoundary,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import CommonLayout from "./layouts/CommonLayout";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./pages/NotFound";
import Tmp from "./pages/Tmp";
import Home from "./pages/Home";
import { Suspense } from "react";
import { Loading } from "./pages/Loading";
import Login from "./pages/Login";
import ClubList from "./pages/club/ClubList";
import ClubDetail from "./pages/club/ClubDetail";
import Recruitment from "./pages/recruitment/Recruitment";

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
    ],
  },
  { path: "/login", element: <Login /> },
]);

function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              There was an error!
              <button onClick={() => resetErrorBoundary()}>Try again</button>
            </div>
          )}
        >
          <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}

export default App;
