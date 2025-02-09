import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./services/TanstackQueryStore";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Tmp from "./pages/Tmp";
import Home from "./pages/Home";
import { Suspense } from "react";
import { Loading } from "./pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
    ],
  },
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
