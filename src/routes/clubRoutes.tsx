import { ClubDetail, ClubList } from "./lazyLoad";



const clubRoutes = [
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
];

export default clubRoutes;
