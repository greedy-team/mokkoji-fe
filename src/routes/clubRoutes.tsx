import { RouteObject } from "react-router-dom";
import { ClubDetail, ClubList } from "./lazyLoad";

const clubRoutes: RouteObject = {
  path: "clubs",
  children: [
    {
      path: "",
      element: <ClubList />,
    },
    {
      path: "group/:affiliation",
      element: <ClubList />,
    },
    {
      path: ":id",
      element: <ClubDetail />,
    },
  ],
};

export default clubRoutes;
